// import CommonForm from "@/components/common/form";
// import { useToast } from "@/components/ui/use-toast";
// import { registerFormControls } from "@/config";
// import { registerUser } from "@/store/auth-slice";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";

// const initialState = {
//   userName: "",
//   email: "",
//   password: "",
// };

// function AuthRegister() {
//   const [formData, setFormData] = useState(initialState);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { toast } = useToast();

//   function onSubmit(event) {
//     event.preventDefault();
//     dispatch(registerUser(formData)).then((data) => {
//       if (data?.payload?.success) {
//         toast({
//           title: data?.payload?.message,
//         });
//         navigate("/auth/login");
//       } else {
//         toast({
//           title: data?.payload?.message,
//           variant: "destructive",
//         });
//       }
//     });
//   }

//   console.log(formData);

//   return (
//     <div className="mx-auto w-full max-w-md space-y-6">
//       <div className="text-center">
//         <h1 className="text-3xl font-bold tracking-tight text-foreground">
//           Create new account
//         </h1>
//         <p className="mt-2">
//           Already have an account
//           <Link
//             className="font-medium ml-2 text-primary hover:underline"
//             to="/auth/login"
//           >
//             Login
//           </Link>
//         </p>
//       </div>
//       <CommonForm
//         formControls={registerFormControls}
//         buttonText={"Sign Up"}
//         formData={formData}
//         setFormData={setFormData}
//         onSubmit={onSubmit}
//       />
//     </div>
//   );
// }

// export default AuthRegister;
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { registerUser } from "@/store/auth-slice"; // Assume this is defined to handle register actions
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CommonForm from "@/components/common/form";
import { registerFormControls } from "@/config";  // Form controls defined in config

function AuthRegister() {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Dynamically setting the form data state based on registerFormControls keys
  const initializeFormData = () => {
    const initialData = {};
    registerFormControls.forEach(control => {
      initialData[control.name] = "";  // Set initial empty value for each control
    });
    setFormData(initialData);
  };

  // Call initialize on mount to set initial form data state
  useState(() => {
    initializeFormData();
  }, []);

  function onSubmit(event) {
    event.preventDefault();
    dispatch(registerUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
        });
        navigate("/auth/login");
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive",
        });
      }
    });
  }

  return (
    <div className="relative mx-auto w-full max-w-md space-y-6 bg-black">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[430px] h-[520px]">
        <div className="absolute w-[200px] h-[200px] bg-gradient-to-r from-[#1845ad] to-[#23a2f6] rounded-full animate-float left-[-80px] top-[-80px]"></div>
        <div className="absolute w-[200px] h-[200px] bg-gradient-to-r from-[#ff512f] to-[#f09819] rounded-full animate-float right-[-30px] bottom-[-80px]"></div>
      </div>

      <form
        onSubmit={onSubmit}
        className="relative bg-white/20 backdrop-blur-sm border-2 border-white/20 shadow-lg rounded-lg py-12 px-8"
      >
        <h3 className="text-3xl font-semibold text-center text-white">Sign Up Here</h3>

        <div className="mt-8 space-y-6">
          {registerFormControls.map((control) => (
            <div key={control.name}>
              <label htmlFor={control.name} className="block text-white text-sm font-medium">
                {control.label}
              </label>
              <input
                type={control.type}
                id={control.name}
                name={control.name}
                placeholder={control.placeholder}
                value={formData[control.name] || ""}
                onChange={(e) => setFormData({ ...formData, [control.name]: e.target.value })}
                className="mt-2 w-full px-4 py-3 bg-white/10 border border-transparent rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="mt-8 w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
        >
          Sign Up
        </button>

        <p className="mt-6 text-sm text-center text-white">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-blue-500 hover:underline font-medium"
          >
            Log In
          </Link>
        </p>

        <div className="mt-8 flex justify-between">
          <div className="flex items-center space-x-2 bg-white/30 rounded-md px-4 py-2 cursor-pointer hover:bg-white/40">
           
          </div>
          <div className="flex items-center space-x-2 bg-white/30 rounded-md px-4 py-2 cursor-pointer hover:bg-white/40">
          
          </div>
        </div>
      </form>
    </div>
  );
}

export default AuthRegister;
