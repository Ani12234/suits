import React from "react";
import styled from "styled-components";

const FeaturesContainer = styled.section`
  padding: 100px 50px;
  text-align: center;
  background: #111;
  border-top: 1px solid #444;
  border-bottom: 1px solid #444;

  h2 {
    font-size: 2.5em;
    margin-bottom: 10px;
    color: #f39c12;
  }

  p {
    font-size: 1.2em;
    margin-bottom: 40px;
    color: #ccc;
  }
`;

const FeatureGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const FeatureBox = styled.div`
  width: 300px;
  padding: 20px;
  border: 1px solid #444;
  border-radius: 10px;
  background: #222;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
  }

  h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
    color: #deb887;
  }

  p {
    font-size: 1em;
    line-height: 1.6;
    color: #ccc;
  }
`;

const Features = () => {
  return (
    <FeaturesContainer id="features">
      <h2>Why Choose SuitSpot?</h2>
      <p>Discover what makes us the ultimate destination for suits that suit every occasion and personality.</p>
      <FeatureGrid>
        <FeatureBox>
          <h3>Luxury Redefined</h3>
          <p>Experience the finest craftsmanship and premium fabrics that deliver elegance and comfort in every stitch.</p>
        </FeatureBox>
        <FeatureBox>
          <h3>Perfect Fit, <br /> Every Time</h3>
          <p>Our AI-powered size recommendations ensure you look your best, with a suit tailored just for you.</p>
        </FeatureBox>
        <FeatureBox>
          <h3>Affordable Sophistication</h3>
          <p>Get high-end designs without the high-end price tag. Looking great doesn’t have to break the bank.</p>
        </FeatureBox>
        <FeatureBox>
          <h3>Unmatched <br /> Customer Care</h3>
          <p>Our dedicated support team is here to assist you at every step, making your shopping experience seamless and enjoyable.</p>
        </FeatureBox>
      </FeatureGrid>
    </FeaturesContainer>
  );
};

export default Features;
