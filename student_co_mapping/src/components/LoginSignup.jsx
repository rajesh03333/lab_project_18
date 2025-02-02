// // import React, { useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";

// // const LoginSignup = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [isSignup, setIsSignup] = useState(true); // Toggle between login/signup
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const url = isSignup
// //       ? "http://localhost:5000/api/auth/signup"
// //       : "http://localhost:5000/api/auth/login";

// //     try {
// //       const response = await axios.post(url, { email, password });
// //       if (response.data.token) {
// //         // Store the JWT token in local storage
// //         localStorage.setItem("token", response.data.token);
// //         navigate("/home");
// //       }
// //     } catch (error) {
// //       console.error("Error during login/signup:", error.response?.data || error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>{isSignup ? "Sign Up" : "Login"}</h1>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label>Email</label>
// //           <input
// //             type="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label>Password</label>
// //           <input
// //             type="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
// //       </form>
// //       <button onClick={() => setIsSignup((prev) => !prev)}>
// //         Switch to {isSignup ? "Login" : "Sign Up"}
// //       </button>
// //     </div>
// //   );
// // };

// // export default LoginSignup;



// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const LoginSignup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isSignup, setIsSignup] = useState(true); // Toggle between login/signup
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const url = isSignup
//       ? "http://localhost:5000/api/auth/signup"
//       : "http://localhost:5000/api/auth/login";

//     try {
//       const response = await axios.post(url, { email, password });
//       if (response.data.token) {
//         // Store the JWT token in local storage
//         localStorage.setItem("token", response.data.token);

//         // If the user is signing up, redirect them to SetEntry page
//         if (isSignup && response.data.isFirstTime) {
//           navigate("/setentry"); // Redirect to SetEntry page
//         } else {
//           navigate("/home"); // Redirect to Home page after login
//         }
//       }
//     } catch (error) {
//       console.error("Error during login/signup:", error.response?.data || error);
//     }
//   };

//   return (
//     <div>
//       <h1>{isSignup ? "Sign Up" : "Login"}</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
//       </form>
//       <button onClick={() => setIsSignup((prev) => !prev)}>
//         Switch to {isSignup ? "Login" : "Sign Up"}
//       </button>
//     </div>
//   );
// };

// export default LoginSignup;


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(true); // Toggle between login/signup
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isSignup
      ? "http://localhost:5000/api/auth/signup"
      : "http://localhost:5000/api/auth/login";

    try {
      const response = await axios.post(url, { email, password });
      if (response.data.token) {
        // Store the JWT token in local storage
        localStorage.setItem("token", response.data.token);

        // If the user is signing up, redirect them to SetEntry page
        if (isSignup && response.data.isFirstTime) {
          navigate("/setentry"); // Redirect to SetEntry page
        } else {
          navigate("/home"); // Redirect to Home page after login
        }
      }
    } catch (error) {
      console.error("Error during login/signup:", error.response?.data || error);
    }
  };

  return (
    <div>
      <h1>{isSignup ? "Sign Up" : "Login"}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
      </form>
      <button onClick={() => setIsSignup((prev) => !prev)}>
        Switch to {isSignup ? "Login" : "Sign Up"}
      </button>
    </div>
  );
};

export default LoginSignup;
