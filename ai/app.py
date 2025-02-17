import numpy as np
import pandas as pd
from flask import Flask, request, jsonify, render_template
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
import pickle
from flask_cors import CORS  # For enabling CORS

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all domains (or specify allowed domains)

# Load the trained model and scaler from the pickle file
with open('best_model.pkl', 'rb') as model_file:
    model_data = pickle.load(model_file)
    model = model_data['model']
    scaler = model_data['scaler']  # This is the StandardScaler used during training

# Size mapping from clothing size (string) to numerical values
size_mapping = {
    "XXS": 1,
    "S": 2,
    "M": 3,
    "L": 4,
    "XL": 5,
    "XXL": 6,
    "XXXL": 7
}

# Home route to render the HTML form (for testing with browser)
@app.route('/')
def home():
    return render_template('index.html')

# Route for making predictions
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Extract data from POST request (from form submission or API)
        data = request.get_json()
        age = float(data['age'])
        height = float(data['height'])
        weight = float(data['weight'])

        # Convert height from cm to meters (if needed)
        height_m = height / 100  # Convert height from cm to meters

        # Calculate BMI (corrected formula)
        bmi = height_m / weight 

        # Calculate weight squared
        weight_squared = weight * weight

        # Prepare the feature array for prediction (ensure it's a 2D array)
        features = np.array([[age, height, weight, bmi, weight_squared]])

        # Apply scaling to the features using the same scaler as in training
        features_scaled = scaler.transform(features)  # Use scaler.transform() to scale the features

        # Make prediction using the loaded model
        prediction = model.predict(features_scaled)

        # Convert numeric prediction back to size label (for example: 1 -> "XXS", 2 -> "S", etc.)
        predicted_size = [key for key, value in size_mapping.items() if value == prediction[0]][0]

        # Return the result as a JSON response
        return jsonify({'prediction': predicted_size})

    except Exception as e:
        return jsonify({'error': str(e)}), 400

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True, port=4000)
