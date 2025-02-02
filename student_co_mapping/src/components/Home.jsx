// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Home() {
//   const [selectBranch, setSelectBranch] = useState("Select Branch");
//   const [selectSection, setSelectSection] = useState("Select Section");
//   const [academicYear, setAcademicYear] = useState("");
//   const navigate = useNavigate();

//   const getSections = (branch) => {
//     switch (branch) {
//       case "CSE":
//         return ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
//       case "CSM":
//       case "CSD":
//       case "IT":
//         return ["A", "B", "C", "D"];
//       case "EEE":
//       case "ECE":
//         return ["A", "B"];
//       default:
//         return [];
//     }
//   };

//   const handleBranchChange = (e) => {
//     setSelectBranch(e.target.value);
//     setSelectSection("Select Section");
//   };

//   const handleSubmit = () => {
//     if (academicYear && selectBranch !== "Select Branch" && selectSection !== "Select Section") {
//       navigate("/name", { 
//         state: { academicYear, Branch: selectBranch, Section: selectSection } 
//       });
//     }   
//   };

//   return (
//     <div className="bg-gray-300 flex justify-center items-center min-h-screen px-4">
//       <div className="max-w-2xl w-full bg-purple-400 flex flex-col rounded-xl p-6 m-5 items-center shadow-lg">
//         <div className="m-4 flex flex-col items-center w-full">
//           <h1 className="text-white text-3xl mb-4 text-center">Please Select Academic Year</h1>
//           <input 
//             type="text" 
//             placeholder="Enter Academic Year" 
//             value={academicYear}
//             onChange={(e) => setAcademicYear(e.target.value)}
//             className="w-[250px] bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
//           />
//         </div>

//         <div className="m-4 flex flex-col items-center w-full">
//           <h1 className="text-white text-3xl mb-4 text-center">Please Select Branch</h1>
//           <select 
//             value={selectBranch} 
//             onChange={handleBranchChange}
//             className="w-[250px] bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
//           >
//             <option value="Select Branch" disabled>Select Branch</option>
//             <option value="CSE">CSE</option>
//             <option value="IT">IT</option>
//             <option value="ECE">ECE</option>
//             <option value="EEE">EEE</option>
//             <option value="CSM">CSM</option>
//             <option value="CSD">CSD</option>
//           </select>
//         </div>

//         <div className="m-4 flex flex-col items-center w-full">
//           <h1 className="text-white text-3xl mb-4 text-center">Please Select Section</h1>
//           <select 
//             value={selectSection} 
//             onChange={(e) => setSelectSection(e.target.value)}
//             className="w-[250px] bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
//             disabled={selectBranch === "Select Branch"}
//           >
//             <option value="Select Section" disabled>Select Section</option>
//             {getSections(selectBranch).map((section) => (
//               <option key={section} value={section}>{section}</option>
//             ))}
//           </select>
//         </div>

//         <div className="m-4 flex justify-center w-full">
//           <button 
//             onClick={handleSubmit} 
//             className="bg-green-500 text-white text-lg font-semibold px-8 py-3 rounded-lg hover:bg-green-600 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
//             disabled={selectBranch === "Select Branch" || selectSection === "Select Section"}
//           >
//             Submit
//           </button>
//         </div>
        

//       </div>
//     </div>
//   );
// }

// export default Home;

















import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [selectBranch, setSelectBranch] = useState("Select Branch");
  const [selectSection, setSelectSection] = useState("Select Section");
  const [academicYear, setAcademicYear] = useState("");
  const navigate = useNavigate();

  const getSections = (branch) => {
    switch (branch) {
      case "CSE":
        return ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
      case "CSM":
      case "CSD":
      case "IT":
        return ["A", "B", "C", "D"];
      case "EEE":
      case "ECE":
        return ["A", "B"];  
      case "AIDS" :
        return ["A"];
      case "AIML" :
        return ["A"];
      default:
        return [];
    }
  };

  const handleBranchChange = (e) => {
    setSelectBranch(e.target.value);
    setSelectSection("Select Section");
  };

  const handleSubmit = () => {
    if (academicYear && selectBranch !== "Select Branch" && selectSection !== "Select Section") {
      navigate("/name", { 
        state: { academicYear, Branch: selectBranch, Section: selectSection } 
      });
    }   
  };

  return (
    <div className="bg-gray-300 flex justify-center items-center min-h-screen px-4">
      <div className="max-w-2xl w-full bg-purple-400 flex flex-col rounded-xl p-6 m-5 items-center shadow-lg">
        <div className="m-4 flex flex-col items-center w-full">
          <h1 className="text-white text-3xl mb-4 text-center">Please Select Academic Year</h1>
          <input 
            type="text" 
            placeholder="Enter Academic Year" 
            value={academicYear}
            onChange={(e) => setAcademicYear(e.target.value)}
            className="w-[250px] bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
          />
        </div>

        <div className="m-4 flex flex-col items-center w-full">
          <h1 className="text-white text-3xl mb-4 text-center">Please Select Branch</h1>
          <select 
            value={selectBranch} 
            onChange={handleBranchChange}
            className="w-[250px] bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
          >
            <option value="Select Branch" disabled>Select Branch</option>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="CSM">CSM</option>
            <option value="CSD">CSD</option>
            <option value="AIML">AIML</option>
            <option value="AIDS">AIDS</option>
          </select>
        </div>

        <div className="m-4 flex flex-col items-center w-full">
          <h1 className="text-white text-3xl mb-4 text-center">Please Select Section</h1>
          <select 
            value={selectSection} 
            onChange={(e) => setSelectSection(e.target.value)}
            className="w-[250px] bg-white rounded-xl h-12 text-center border border-gray-400 p-2"
            disabled={selectBranch === "Select Branch"}
          >
            <option value="Select Section" disabled>Select Section</option>
            {getSections(selectBranch).map((section) => (
              <option key={section} value={section}>{section}</option>
            ))}
          </select>
        </div>

        <div className="m-4 flex justify-center w-full">
          <button 
            onClick={handleSubmit} 
            className="bg-green-500 text-white text-lg font-semibold px-8 py-3 rounded-lg hover:bg-green-600 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={selectBranch === "Select Branch" || selectSection === "Select Section"}
          >
            Submit
          </button>
        </div>
        

      </div>
    </div>
  );
}

export default Home;