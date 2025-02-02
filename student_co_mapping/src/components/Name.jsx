// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Name = () => {
//   const [section, setSection] = useState("");
//   const [rollNumbers, setRollNumbers] = useState([]);
//   const [setNumbers, setSetNumbers] = useState({});
//   const [setQuestions, setSetQuestions] = useState({});
//   const [marks, setMarks] = useState({}); // To track marks

//   // Fetch roll numbers based on section
//   const fetchRollNumbers = async () => {
//     if (section) {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/students/${section}`);
//         setRollNumbers(response.data);
//       } catch (error) {
//         console.error("Error fetching roll numbers:", error.response ? error.response.data : error.message);
//       }
//     }
//   };

//   // Fetch set questions based on set number
//   const fetchSetQuestions = async (rollNumber, setNumber) => {
//     if (setNumber) {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/sets/${setNumber}`);
//         setSetQuestions((prev) => ({ ...prev, [rollNumber]: response.data }));
//       } catch (error) {
//         console.error("Error fetching set questions:", error);
//       }
//     }
//   };

//   const handleMarksChange = (rollNumber, field, value) => {
//     setMarks((prev) => ({
//       ...prev,
//       [rollNumber]: {
//         ...prev[rollNumber],
//         [field]: value,
//       },
//     }));
//   };

//   const calculateTotalMarks = (rollNumber) => {
//     const studentMarks = marks[rollNumber] || {};
//     const writeUp = parseInt(studentMarks.writeUp || 0, 10);
//     const compileErrors = parseInt(studentMarks.compileErrors || 0, 10);
//     const execution = parseInt(studentMarks.execution || 0, 10);
//     const programSyntax = parseInt(studentMarks.programSyntax || 0, 10);
//     const vivaVoice = parseInt(studentMarks.vivaVoice || 0, 10);

//     // Return the sum of all marks
//     return writeUp + compileErrors + execution + programSyntax + vivaVoice;
//   };

//   useEffect(() => {
//     fetchRollNumbers();
//   }, [section]);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow-md border">
//         <div className="flex justify-center items-center border w-full h-23">
//           <div className="text-center border-r w-[820px] h-full">
//             <h1 className="text-2xl font-bold font-serif ">CVR COLLEGE OF ENGINEERING</h1>
//             <p className="text-lg font-semibold font-serif">An UGC Autonomous Institution Affiliated to JNTUH</p>
//             <p className="text-sm font-semibold font-serif">Vastunagar, Mangalpally (V), Ibrahimpatnam (M), Ranga Reddy District - 501510</p>
//           </div>
//           <div className="flex flex-col justify-center items-center w-[180px] h-full">
//             <h1 className="text-center text-xl font-bold font-serif ">College Code</h1>
//             <h1 className="text-2xl font-bold font-serif ">B8</h1>
//           </div>
//         </div>

//         {/* Other form inputs */}
//         <div className="flex flex-col gap-2 mt-4">
//           <h2 className="text-lg font-bold mt-2 mb-3 text-center underline ">AWARD LIST (LABORATORY)</h2>
//           <div className="flex gap-3 w-full">
//             <div className="w-[60%]">
//               <label className=" inline text-sm font-semibold font-serif ">Name of Exam:</label>
//               <input
//                 type="text"
//                 className="text-sm w-[80%] border-b focus:outline-none border-black inline-block"
//               />
//             </div>
//             <div className="flex w-[40%]  ">
//               <label className=" inline text-sm font-semibold font-serif ">(Reg./Supp)Month:</label>
//               <input
//                 type="text"
//                 className="  pl-2 text-sm w-[60%] border-b focus:outline-none border-black inline-block"
//               />
//               <label className=" inline text-sm font-semibold ">20</label>
//               <input
//                 type="text"
//                 className="  pl-2 text-sm w-[10%] border-b focus:outline-none border-black inline-block"
//               />
//             </div>
//           </div>
//           <div className="mt-3 w-full">
//             <label className=" inline text-sm font-semibold font-serif ">Branch & Section:</label>
//             <input
//               type="text"
//               className="pl-2 text-sm w-[60%] border-b focus:outline-none border-black inline-block"
//               value={section}
//               onChange={(e) => setSection(e.target.value)}
//             />
//             <label className=" pl-2 inline text-sm font-semibold font-serif  ">Regulation:</label>
//             <input
//               type="text"
//               className="pl-2 text-sm w-[17.2%] border-b focus:outline-none border-black inline-block"
//             />
//           </div>
//           <div className="flex mt-3  w-full">
//             <div className="w-[50%]">
//               <label className="text-sm font-semibold font-serif ">Name of Lab:</label>
//               <input
//                 type="text"
//                 className="pl-2 text-sm w-[80%] border-b focus:outline-none border-black inline-block"
//               />
//             </div>
//             <div className="w-[30%]">
//               <label className="text-sm font-semibold font-serif ">Date of Examination:</label>
//               <input
//                 type="text"
//                 className="pl-2 text-sm w-[47%] border-b focus:outline-none border-black inline-block"
//               />
//             </div>
//             <div className="w-[20%]">
//               <label className="text-sm font-semibold font-serif ">Max.Marks:</label>
//               <input
//                 type="text"
//                 className="pl-2 text-sm w-[55%] border-b focus:outline-none border-black inline-block"
//               />
//             </div>
//           </div>
//           <div className=" w-full flex mt-3 ">
//             <label className="text-sm font-semibold font-serif ">Name & College of External Examiner:</label>
//             <input
//               type="text"
//               className="pl-2 text-sm w-[71.5%] border-b focus:outline-none border-black inline-block"
//             />
//           </div>
//           <div className="flex w-full mt-3">
//             <label className="text-sm font-semibold font-serif ">Name of Internal Examiner:</label>
//             <input
//               type="text"
//               className="pl-2 text-sm w-[79%] border-b focus:outline-none border-black inline-block"
//             />
//           </div>
//         </div>

//         <table className="w-full text-sm border-collapse border border-gray-300 mt-6">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 p-1 w-12">S. No.</th>
//               <th className="border border-gray-300 p-1 w-20">Set. No.</th>
//               <th className="border border-gray-300 p-1 w-40">Hall Ticket Number of Student</th>
//               <th className="border border-gray-300 p-1 w-42">Program 1 Executed</th>
//               <th className="border border-gray-300 p-1 w-10">Mapping CO</th>
//               <th className="border border-gray-300 p-1 w-24">Write Up (10M)</th>
//               <th className="border border-gray-300 p-1 w-24">Compile Errors (15M)</th>
//               <th className="border border-gray-300 p-1 w-24">Execution (15M)</th>
//               <th className="border border-gray-300 p-1 w-42">Program 2</th>
//               <th className="border border-gray-300 p-1 w-10">Mapping CO</th>
//               <th className="border border-gray-300 p-1 w-14">Program & Syntax (10M)</th>
//               <th className="border border-gray-300 p-1 w-10">Viva-Voice (10M)</th>
//               <th className="border border-gray-300 p-1 w-24">Total Marks (60M)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rollNumbers.map((rollNumber, index) => (
//               <tr key={index}>
//                 <td className="border border-gray-300 p-1 text-center">{index + 1}</td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={setNumbers[rollNumber] || ""}
//                     onChange={(e) => {
//                       const setNo = e.target.value;
//                       setSetNumbers((prev) => ({ ...prev, [rollNumber]: setNo }));
//                       fetchSetQuestions(rollNumber, setNo);
//                     }}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1 text-center">{rollNumber}</td>
//                 <td className="border border-gray-300 p-1 text-center">{setQuestions[rollNumber]?.[0]?.question || "N/A"}</td>
//                 <td className="border border-gray-300 p-1 text-center">{setQuestions[rollNumber]?.[0]?.coNumber || "N/A"}</td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     onChange={(e) => handleMarksChange(rollNumber, "writeUp", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     onChange={(e) => handleMarksChange(rollNumber, "compileErrors", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     onChange={(e) => handleMarksChange(rollNumber, "execution", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1 text-center">{setQuestions[rollNumber]?.[1]?.question || "N/A"}</td>
//                 <td className="border border-gray-300 p-1 text-center">{setQuestions[rollNumber]?.[1]?.coNumber || "N/A"}</td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     onChange={(e) => handleMarksChange(rollNumber, "programSyntax", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     onChange={(e) => handleMarksChange(rollNumber, "vivaVoice", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1 text-center">
//                   {calculateTotalMarks(rollNumber)}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 items-center ml-110">
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };


































































// import React, { useState, useEffect } from "react";
// // import React, { useState, useEffect, useRef } from "react"; // useRef is here
// import axios from "axios";
// import * as XLSX from 'xlsx';

// const Name = () => {
//   const [section, setSection] = useState("");
//   const [rollNumbers, setRollNumbers] = useState([]);
//   const [setNumbers, setSetNumbers] = useState({});
//   const [setQuestions, setSetQuestions] = useState({});
//   const [marks, setMarks] = useState({});

//   // Fetch roll numbers based on section
//   const fetchRollNumbers = async () => {
//     if (section) {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/students/${section}`);
//         setRollNumbers(response.data);
//       } catch (error) {
//         console.error("Error fetching roll numbers:", error.response ? error.response.data : error.message);
//       }
//     }
//   };

//   // Fetch set questions based on set number
//   const fetchSetQuestions = async (setNumber) => {
//     if (setNumber) {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/sets/${setNumber}`);
//         return response.data; // return the fetched questions
//       } catch (error) {
//         console.error("Error fetching set questions:", error);
//         return []; // return empty array if error occurs
//       }
//     }
//     return []; // return empty array if no setNumber
//   };

//   // Handle marks change
//   const handleMarksChange = (rollNumber, field, value) => {
//     setMarks((prev) => ({
//       ...prev,
//       [rollNumber]: {
//         ...prev[rollNumber],
//         [field]: value,
//       },
//     }));
//   };

//   // Reset all data to initial state
//   const resetData = () => {
//     setMarks({});
//     setSetNumbers({});
//     setSetQuestions({});
//   };

//   // Calculate total marks for each student
//   const calculateTotalMarks = (rollNumber) => {
//     const studentMarks = marks[rollNumber] || {};
//     const writeUp = parseInt(studentMarks.writeUp || 0, 10);
//     const compileErrors = parseInt(studentMarks.compileErrors || 0, 10);
//     const execution = parseInt(studentMarks.execution || 0, 10);
//     const programSyntax = parseInt(studentMarks.programSyntax || 0, 10);
//     const vivaVoice = parseInt(studentMarks.vivaVoice || 0, 10);

//     return writeUp + compileErrors + execution + programSyntax + vivaVoice;
//   };

//   // Reset values when section changes
//   useEffect(() => {
//     resetData();  // Reset all fields when section changes
//     fetchRollNumbers(); // Fetch roll numbers based on section
//   }, [section]);

//   // Fetch questions when set number changes for any student
//   useEffect(() => {
//     // Loop over roll numbers to fetch questions when set number is updated
//     Object.keys(setNumbers).forEach((rollNumber) => {
//       const setNumber = setNumbers[rollNumber];
//       if (setNumber) {
//         fetchSetQuestions(setNumber).then((questions) => {
//           setSetQuestions((prev) => ({
//             ...prev,
//             [rollNumber]: questions,
//           }));
//         });
//       }
//     });
//   }, [setNumbers]);



//   const handlePrint = () => {
//     window.print();
//   };

//   const handleDownloadExcel = () => {
//     const data = rollNumbers.map((rollNumber, index) => ({
//       "S. No.": index + 1,
//       "Set No.": setNumbers[rollNumber] || "",
//       "Hall Ticket Number": rollNumber,
//       "Program 1": setQuestions[rollNumber]?.[0]?.question || "ABSENT",
//       "CO 1": setQuestions[rollNumber]?.[0]?.coNumber || "--",
//       "Write Up (10M)": marks[rollNumber]?.writeUp || 0,
//       "Compile Errors (15M)": marks[rollNumber]?.compileErrors || 0,
//       "Execution (15M)": marks[rollNumber]?.execution || 0,
//       "Program 2": setQuestions[rollNumber]?.[1]?.question || "ABSENT",
//       "CO 2": setQuestions[rollNumber]?.[1]?.coNumber || "--",
//       "Program & Syntax (10M)": marks[rollNumber]?.programSyntax || 0,
//       "Viva-Voice (10M)": marks[rollNumber]?.vivaVoice || 0,
//       "Total Marks (60M)": calculateTotalMarks(rollNumber),
//     }));

//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Student Data");
//     XLSX.writeFile(workbook, "StudentData.xlsx");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow-md border">
//         <div className="flex justify-center items-center border w-full h-23">
//           <div className="text-center border-r w-[820px] h-full">
//             <h1 className="text-2xl font-bold font-serif ">CVR COLLEGE OF ENGINEERING</h1>
//             <p className="text-lg font-semibold font-serif">An UGC Autonomous Institution Affiliated to JNTUH</p>
//             <p className="text-sm font-semibold font-serif">Vastunagar, Mangalpally (V), Ibrahimpatnam (M), Ranga Reddy District - 501510</p>
//           </div>
//           <div className="flex flex-col justify-center items-center w-[180px] h-full">
//             <h1 className="text-center text-xl font-bold font-serif ">College Code</h1>
//             <h1 className="text-2xl font-bold font-serif ">B8</h1>
//           </div>
//         </div>

//         <div className="flex flex-col gap-2 mt-4">
//           <h2 className="text-lg font-bold mt-2 mb-3 text-center underline ">AWARD LIST (LABORATORY)</h2>
//           <div className="flex gap-3 w-full">
//             <div className="w-[60%]">
//               <label className=" inline text-sm font-semibold font-serif ">Name of Exam:</label>
//               <input
//                 type="text"
//                 className="text-sm w-[80%] border-b focus:outline-none border-black inline-block"
//               />
//             </div>
//             <div className="flex w-[40%]  ">
//               <label className=" inline text-sm font-semibold font-serif ">(Reg./Supp)Month:</label>
//               <input
//                 type="text"
//                 className="  pl-2 text-sm w-[60%] border-b focus:outline-none border-black inline-block"
//               />
//               <label className=" inline text-sm font-semibold ">20</label>
//               <input
//                 type="text"
//                 className="  pl-2 text-sm w-[10%] border-b focus:outline-none border-black inline-block"
//               />
//             </div>
//           </div>
//           <div className="mt-3 w-full">
//             <label className=" inline text-sm font-semibold font-serif ">Branch & Section:</label>
//             <input
//               type="text"
//               className="pl-2 text-sm w-[60%] border-b focus:outline-none border-black inline-block"
//               value={section}
//               onChange={(e) => setSection(e.target.value)}
//             />
//             <label className=" pl-2 inline text-sm font-semibold font-serif  ">Regulation:</label>
//             <input
//               type="text"
//               className="pl-2 text-sm w-[17.2%] border-b focus:outline-none border-black inline-block"
//             />
//           </div>
//           <div className="flex mt-3  w-full">
//             <div className="w-[50%]">
//               <label className="text-sm font-semibold font-serif ">Name of Lab:</label>
//               <input
//                 type="text"
//                 className="pl-2 text-sm w-[80%] border-b focus:outline-none border-black inline-block"
//               />
//             </div>
//             <div className="w-[30%]">
//               <label className="text-sm font-semibold font-serif ">Date of Examination:</label>
//               <input
//                 type="text"
//                 className="pl-2 text-sm w-[47%] border-b focus:outline-none border-black inline-block"
//               />
//             </div>
//             <div className="w-[20%]">
//               <label className="text-sm font-semibold font-serif ">Max.Marks:</label>
//               <input
//                 type="text"
//                 className="pl-2 text-sm w-[55%] border-b focus:outline-none border-black inline-block"
//               />
//             </div>
//           </div>
//           <div className=" w-full flex mt-3 ">
//             <label className="text-sm font-semibold font-serif ">Name & College of External Examiner:</label>
//             <input
//               type="text"
//               className="pl-2 text-sm w-[71.5%] border-b focus:outline-none border-black inline-block"
//             />
//           </div>
//           <div className="flex w-full mt-3">
//             <label className="text-sm font-semibold font-serif ">Name of Internal Examiner:</label>
//             <input
//               type="text"
//               className="pl-2 text-sm w-[79%] border-b focus:outline-none border-black inline-block"
//             />
//           </div>
//         </div>

//         <table className="w-full text-sm border-collapse border border-gray-300 mt-6">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 p-1 w-12">S. No.</th>
//               <th className="border border-gray-300 p-1 w-20">Set. No.</th>
//               <th className="border border-gray-300 p-1 w-40">Hall Ticket Number of Student</th>
//               <th className="border border-gray-300 p-1 w-42">Program 1 Executed</th>
//               <th className="border border-gray-300 p-1 w-10">Mapping CO</th>
//               <th className="border border-gray-300 p-1 w-24">Write Up (10M)</th>
//               <th className="border border-gray-300 p-1 w-24">Compile Errors (15M)</th>
//               <th className="border border-gray-300 p-1 w-24">Execution (15M)</th>
//               <th className="border border-gray-300 p-1 w-42">Program 2</th>
//               <th className="border border-gray-300 p-1 w-10">Mapping CO</th>
//               <th className="border border-gray-300 p-1 w-14">Program & Syntax (10M)</th>
//               <th className="border border-gray-300 p-1 w-10">Viva-Voice (10M)</th>
//               <th className="border border-gray-300 p-1 w-24">Total Marks (60M)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rollNumbers.map((rollNumber, index) => (
//               <tr key={index}>
//                 <td className="border border-gray-300 p-1 text-center">{index + 1}</td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={setNumbers[rollNumber] || ""}
//                     onChange={(e) => {
//                       const setNo = e.target.value;
//                       setSetNumbers((prev) => ({ ...prev, [rollNumber]: setNo }));
//                     }}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1 text-center">{rollNumber}</td>
//                 <td className="border border-gray-300 p-1 text-center">{setQuestions[rollNumber]?.[0]?.question || "ABSENT"}</td>
//                 <td className="border border-gray-300 p-1 text-center">{setQuestions[rollNumber]?.[0]?.coNumber || "--"}</td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     onChange={(e) => handleMarksChange(rollNumber, "writeUp", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     onChange={(e) => handleMarksChange(rollNumber, "compileErrors", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     onChange={(e) => handleMarksChange(rollNumber, "execution", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1 text-center">{setQuestions[rollNumber]?.[1]?.question || "ABSENT"}</td>
//                 <td className="border border-gray-300 p-1 text-center">{setQuestions[rollNumber]?.[1]?.coNumber || "--"}</td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     onChange={(e) => handleMarksChange(rollNumber, "programSyntax", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     onChange={(e) => handleMarksChange(rollNumber, "vivaVoice", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1 text-center">
//                   {calculateTotalMarks(rollNumber)} {/* Show calculated total marks */}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         <div className="flex justify-center mt-6 gap-12">
//           <button onClick={handlePrint} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
//             Print
//           </button>
//           <button onClick={handleDownloadExcel} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
//             Download Excel
//           </button>
//         </div>


//       </div>
//     </div>
//   );
// };

// export default Name;




































































// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import * as XLSX from "xlsx";

// const Name = () => {
//   //const [academicYear, setAcademicYear] = useState("");
//  // const [selectBranch, setSelectBranch] = useState("");
//   const [section, setSection] = useState("");
//   const [rollNumbers, setRollNumbers] = useState([]);
//   const [setNumbers, setSetNumbers] = useState({});
//   const [setQuestions, setSetQuestions] = useState({});
//   const [marks, setMarks] = useState({});

//   const { academicYear, selectBranch, selectSection } = location.state || {};
//   // Fetch roll numbers based on section
//   const fetchRollNumbers = async () => {
//     if (section) {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/students/${section}`);
//         setRollNumbers(response.data);
//       } catch (error) {
//         console.error("Error fetching roll numbers:", error.response ? error.response.data : error.message);
//       }
//     }
//   };

//   // Fetch set questions based on set number
//   const fetchSetQuestions = async (setNumber) => {
//     if (setNumber) {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/sets/${setNumber}`);
//         return response.data;
//       } catch (error) {
//         console.error("Error fetching set questions:", error);
//         return [];
//       }
//     }
//     return [];
//   };

//   // Handle marks change
//   const handleMarksChange = (rollNumber, field, value) => {
//     setMarks((prev) => ({
//       ...prev,
//       [rollNumber]: {
//         ...prev[rollNumber],
//         [field]: value,
//       },
//     }));
//   };

//   // Reset all data
//   const resetData = () => {
//     setMarks({});
//     setSetNumbers({});
//     setSetQuestions({});
//   };

//   // Calculate total marks for each student
//   const calculateTotalMarks = (rollNumber) => {
//     const studentMarks = marks[rollNumber] || {};
//     return (
//       (parseInt(studentMarks.writeUp) || 0) +
//       (parseInt(studentMarks.compileErrors) || 0) +
//       (parseInt(studentMarks.execution) || 0) +
//       (parseInt(studentMarks.programSyntax) || 0) +
//       (parseInt(studentMarks.vivaVoice) || 0)
//     );
//   };

//   useEffect(() => {
//     resetData();
//     fetchRollNumbers();
//   }, [section]);

//   useEffect(() => {
//     Object.keys(setNumbers).forEach((rollNumber) => {
//       const setNumber = setNumbers[rollNumber];
//       if (setNumber) {
//         fetchSetQuestions(setNumber).then((questions) => {
//           setSetQuestions((prev) => ({
//             ...prev,
//             [rollNumber]: questions,
//           }));
//         });
//       }
//     });
//   }, [setNumbers]);

//   const handlePrint = () => {
//     window.print();
//   };

//   const handleDownloadExcel = () => {
//     const data = rollNumbers.map((rollNumber, index) => ({
//       "S. No.": index + 1,
//       "Set No.": setNumbers[rollNumber] || "",
//       "Hall Ticket Number": rollNumber,
//       "Program 1": setQuestions[rollNumber]?.[0]?.question || "ABSENT",
//       "CO 1": setQuestions[rollNumber]?.[0]?.coNumber || "--",
//       "Write Up (10M)": marks[rollNumber]?.writeUp || 0,
//       "Compile Errors (15M)": marks[rollNumber]?.compileErrors || 0,
//       "Execution (15M)": marks[rollNumber]?.execution || 0,
//       "Program 2": setQuestions[rollNumber]?.[1]?.question || "ABSENT",
//       "CO 2": setQuestions[rollNumber]?.[1]?.coNumber || "--",
//       "Program & Syntax (10M)": marks[rollNumber]?.programSyntax || 0,
//       "Viva-Voice (10M)": marks[rollNumber]?.vivaVoice || 0,
//       "Total Marks (60M)": calculateTotalMarks(rollNumber),
//     }));

//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Student Data");
//     XLSX.writeFile(workbook, "StudentData.xlsx");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow-md border">
//         {/* <h1 className="text-2xl font-bold text-center mb-4">Student Roll Number Management</h1>

        
//         <div className="flex gap-4 mb-6">
//           <div>
//             <label className="block font-semibold">Academic Year:</label>
//             <select
//               value={academicYear}
//               onChange={(e) => setAcademicYear(e.target.value)}
//               className="border rounded-md p-2 w-48"
//             >
//               <option value="">Select Year</option>
//               <option value="2021-22">2021-22</option>
//               <option value="2022-23">2022-23</option>
//               <option value="2023-24">2023-24</option>
//             </select>
//           </div>

//           <div>
//             <label className="block font-semibold">Branch:</label>
//             <select
//               value={selectBranch}
//               onChange={(e) => setSelectBranch(e.target.value)}
//               className="border rounded-md p-2 w-48"
//             >
//               <option value="">Select Branch</option>
//               <option value="CSE">CSE</option>
//               <option value="ECE">ECE</option>
//               <option value="EEE">EEE</option>
//               <option value="MECH">MECH</option>
//             </select>
//           </div>

//           <div>
//             <label className="block font-semibold">Section:</label>
//             <input
//               type="text"
//               value={section}
//               onChange={(e) => setSection(e.target.value)}
//               className="border rounded-md p-2 w-48"
//             />
//           </div>
//         </div> */}


//         <h1 className="text-2xl font-bold text-center mb-4">Student Roll Number Management</h1>

//         {/* Display Selected Values */}
//         <div className="mb-6 p-4 bg-gray-200 rounded-lg">
//           <p className="font-semibold">Academic Year: {academicYear || "Not selected"}</p>
//           <p className="font-semibold">Branch: {selectBranch || "Not selected"}</p>
//           <p className="font-semibold">Section: {selectSection || "Not selected"}</p>
//         </div>

//         {/* Table */}
//         {/* <table className="w-full text-sm border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border p-2">S. No.</th>
//               <th className="border p-2">Set. No.</th>
//               <th className="border p-2">Hall Ticket Number</th>
//               <th className="border p-2">Program 1</th>
//               <th className="border p-2">CO 1</th>
//               <th className="border p-2">Write Up (10M)</th>
//               <th className="border p-2">Compile Errors (15M)</th>
//               <th className="border p-2">Execution (15M)</th>
//               <th className="border p-2">Program 2</th>
//               <th className="border p-2">CO 2</th>
//               <th className="border p-2">Program & Syntax (10M)</th>
//               <th className="border p-2">Viva-Voice (10M)</th>
//               <th className="border p-2">Total Marks (60M)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rollNumbers.map((rollNumber, index) => (
//               <tr key={index}>
//                 <td className="border p-2 text-center">{index + 1}</td>
//                 <td className="border p-2">{setNumbers[rollNumber] || ""}</td>
//                 <td className="border p-2">{rollNumber}</td>
//                 <td className="border p-2">{setQuestions[rollNumber]?.[0]?.question || "ABSENT"}</td>
//                 <td className="border p-2">{setQuestions[rollNumber]?.[0]?.coNumber || "--"}</td>
//                 <td className="border p-2">{calculateTotalMarks(rollNumber)}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table> */}



//         <table className="w-full text-sm border-collapse border border-gray-300 mt-6">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 p-1 w-12">S. No.</th>
//               <th className="border border-gray-300 p-1 w-20">Set. No.</th>
//               <th className="border border-gray-300 p-1 w-40">Hall Ticket Number of Student</th>
//               <th className="border border-gray-300 p-1 w-42">Program 1 Executed</th>
//               <th className="border border-gray-300 p-1 w-10">Mapping CO</th>
//               <th className="border border-gray-300 p-1 w-24">Write Up (10M)</th>
//               <th className="border border-gray-300 p-1 w-24">Compile Errors (15M)</th>
//               <th className="border border-gray-300 p-1 w-24">Execution (15M)</th>
//               <th className="border border-gray-300 p-1 w-42">Program 2</th>
//               <th className="border border-gray-300 p-1 w-10">Mapping CO</th>
//               <th className="border border-gray-300 p-1 w-14">Program & Syntax (10M)</th>
//               <th className="border border-gray-300 p-1 w-10">Viva-Voice (10M)</th>
//               <th className="border border-gray-300 p-1 w-24">Total Marks (60M)</th>
//             </tr>
//           </thead>
//           <tbody>             {rollNumbers.map((rollNumber, index) => (
//             <tr key={index}>
//               <td className="border border-gray-300 p-1 text-center">{index + 1}</td>
//               <td className="border border-gray-300 p-1">
//                 <input
//                   type="number"
//                   className="w-full border-none outline-none text-sm"
//                   value={setNumbers[rollNumber] || ""}
//                   onChange={(e) => {
//                     const setNo = e.target.value;
//                     setSetNumbers((prev) => ({ ...prev, [rollNumber]: setNo }));
//                   }}
//                 />
//               </td>
//               <td className="border border-gray-300 p-1 text-center">{rollNumber}</td>
//               <td className="border border-gray-300 p-1 text-center">{setQuestions[rollNumber]?.[0]?.question || "ABSENT"}</td>
//               <td className="border border-gray-300 p-1 text-center">{setQuestions[rollNumber]?.[0]?.coNumber || "--"}</td>
//               <td className="border border-gray-300 p-1">
//                 <input
//                   type="number"
//                   className="w-full border-none outline-none text-sm"
//                   onChange={(e) => handleMarksChange(rollNumber, "writeUp", e.target.value)}
//                 />
//               </td>
//               <td className="border border-gray-300 p-1">
//                 <input
//                   type="number"
//                   className="w-full border-none outline-none text-sm"
//                   onChange={(e) => handleMarksChange(rollNumber, "compileErrors", e.target.value)}
//                 />
//               </td>
//               <td className="border border-gray-300 p-1">
//                 <input
//                   type="number"
//                   className="w-full border-none outline-none text-sm"
//                   onChange={(e) => handleMarksChange(rollNumber, "execution", e.target.value)}
//                 />
//               </td>
//               <td className="border border-gray-300 p-1 text-center">{setQuestions[rollNumber]?.[1]?.question || "ABSENT"}</td>
//               <td className="border border-gray-300 p-1 text-center">{setQuestions[rollNumber]?.[1]?.coNumber || "--"}</td>
//               <td className="border border-gray-300 p-1">
//                 <input
//                   type="number"
//                   className="w-full border-none outline-none text-sm"
//                   onChange={(e) => handleMarksChange(rollNumber, "programSyntax", e.target.value)}
//                 />
//               </td>
//               <td className="border border-gray-300 p-1">
//                 <input
//                   type="number"
//                   className="w-full border-none outline-none text-sm"
//                   onChange={(e) => handleMarksChange(rollNumber, "vivaVoice", e.target.value)}
//                 />
//               </td>
//               <td className="border border-gray-300 p-1 text-center">
//                 {calculateTotalMarks(rollNumber)} {/* Show calculated total marks */}
//               </td>
//             </tr>
//           ))}
//           </tbody>
//         </table>

//         {/* Buttons */}
//         <div className="flex justify-center mt-6 gap-6">
//           <button onClick={handlePrint} className="bg-blue-500 text-white py-2 px-4 rounded">Print</button>
//           <button onClick={handleDownloadExcel} className="bg-green-500 text-white py-2 px-4 rounded">Download Excel</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Name;























// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import * as XLSX from "xlsx";
// import { useLocation } from "react-router-dom";

// const Name = () => {  // No need to accept `location` prop anymore
//   const location = useLocation();  // Using useLocation to access location state

//   const { academicYear, Branch, Section } = location.state || {}; // Default to empty object

//   const [rollNumbers, setRollNumbers] = useState([]);
//   const [setNumbers, setSetNumbers] = useState({});
//   const [setQuestions, setSetQuestions] = useState({});
//   const [marks, setMarks] = useState({});

//   useEffect(() => {
//     console.log("Location State:", location.state); // Debugging location state
//   }, [location]);

//   const fetchRollNumbers = async () => {
//     if (Section) {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/students/${Section}`);
//         setRollNumbers(response.data);
//       } catch (error) {
//         console.error("Error fetching roll numbers:", error.response ? error.response.data : error.message);
//       }
//     }
//   };

//   const fetchSetQuestions = async (setNumber) => {
//     if (setNumber) {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/sets/${setNumber}`);
//         return response.data;
//       } catch (error) {
//         console.error("Error fetching set questions:", error);
//         return [];
//       }
//     }
//     return [];
//   };

//   const handleMarksChange = (rollNumber, field, value) => {
//     setMarks((prev) => ({
//       ...prev,
//       [rollNumber]: {
//         ...prev[rollNumber],
//         [field]: value,
//       },
//     }));
//   };

//   const resetData = () => {
//     setMarks({});
//     setSetNumbers({});
//     setSetQuestions({});
//   };

//   const calculateTotalMarks = (rollNumber) => {
//     const studentMarks = marks[rollNumber] || {};
//     return (
//       (parseInt(studentMarks.writeUp) || 0) +
//       (parseInt(studentMarks.compileErrors) || 0) +
//       (parseInt(studentMarks.execution) || 0) +
//       (parseInt(studentMarks.programSyntax) || 0) +
//       (parseInt(studentMarks.vivaVoice) || 0)
//     );
//   };

//   useEffect(() => {
//     resetData();
//     fetchRollNumbers();
//   }, [Section]);

//   useEffect(() => {
//     Object.keys(setNumbers).forEach((rollNumber) => {
//       const setNumber = setNumbers[rollNumber];
//       if (setNumber) {
//         fetchSetQuestions(setNumber).then((questions) => {
//           setSetQuestions((prev) => ({
//             ...prev,
//             [rollNumber]: questions,
//           }));
//         });
//       }
//     });
//   }, [setNumbers]);

//   const handlePrint = () => {
//     window.print();
//   };

//   const handleDownloadExcel = () => {
//     const data = rollNumbers.map((rollNumber, index) => ({
//       "S. No.": index + 1,
//       "Set No.": setNumbers[rollNumber] || "",
//       "Hall Ticket Number": rollNumber,
//       "Program 1": setQuestions[rollNumber]?.[0]?.question || "ABSENT",
//       "CO 1": setQuestions[rollNumber]?.[0]?.coNumber || "--",
//       "Write Up (10M)": marks[rollNumber]?.writeUp || 0,
//       "Compile Errors (15M)": marks[rollNumber]?.compileErrors || 0,
//       "Execution (15M)": marks[rollNumber]?.execution || 0,
//       "Program 2": setQuestions[rollNumber]?.[1]?.question || "ABSENT",
//       "CO 2": setQuestions[rollNumber]?.[1]?.coNumber || "--",
//       "Program & Syntax (10M)": marks[rollNumber]?.programSyntax || 0,
//       "Viva-Voice (10M)": marks[rollNumber]?.vivaVoice || 0,
//       "Total Marks (60M)": calculateTotalMarks(rollNumber),
//     }));

//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Student Data");
//     XLSX.writeFile(workbook, "StudentData.xlsx");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow-md border">
//         <h1 className="text-2xl font-bold text-center mb-4">Student Roll Number Management</h1>

//         {/* Display Selected Values */}
//         <div className="mb-6 p-4 bg-gray-200 rounded-lg">
//           <p className="font-semibold">Academic Year: {academicYear || "Not selected"}</p>
//           <p className="font-semibold">Branch: {Branch || "Not selected"}</p>
//           <p className="font-semibold">Section: {Section || "Not selected"}</p>
//         </div>

//         {/* Table to Display Roll Numbers */}
//         <div className="overflow-x-auto">
//           <table className="w-full text-sm border-collapse border border-gray-300 mt-6">
//            <thead>
//              <tr className="bg-gray-200">
//                <th className="border border-gray-300 p-1 w-12">S. No.</th>
//                <th className="border border-gray-300 p-1 w-20">Set. No.</th>
//               <th className="border border-gray-300 p-1 w-40">Hall Ticket Number of Student</th>
//               <th className="border border-gray-300 p-1 w-42">Program 1 Executed</th>
//               <th className="border border-gray-300 p-1 w-10">Mapping CO</th>
//               <th className="border border-gray-300 p-1 w-24">Write Up (10M)</th>
//                <th className="border border-gray-300 p-1 w-24">Compile Errors (15M)</th>
//              <th className="border border-gray-300 p-1 w-24">Execution (15M)</th>
//                <th className="border border-gray-300 p-1 w-42">Program 2</th>
//                <th className="border border-gray-300 p-1 w-10">Mapping CO</th>
//                <th className="border border-gray-300 p-1 w-14">Program & Syntax (10M)</th>
//                <th className="border border-gray-300 p-1 w-10">Viva-Voice (10M)</th>
//                <th className="border border-gray-300 p-1 w-24">Total Marks (60M)</th>
//              </tr>
//            </thead>
//            <tbody>             {rollNumbers.map((rollNumber, index) => (
//             <tr key={index}>
//               <td className="border border-gray-300 p-1 text-center">{index + 1}</td>
//               <td className="border border-gray-300 p-1">
//                 <input
//                   type="number"
//                   className="w-full border-none outline-none text-sm"
//                   value={setNumbers[rollNumber] || ""}
//                   onChange={(e) => {
//                     const setNo = e.target.value;
//                     setSetNumbers((prev) => ({ ...prev, [rollNumber]: setNo }));
//                   }}
//                 />
//               </td>
//               <td className="border border-gray-300 p-1 text-center">{rollNumber}</td>
//               <td className="border border-gray-300 p-1 text-center">{setQuestions[rollNumber]?.[0]?.question || "ABSENT"}</td>
//               <td className="border border-gray-300 p-1 text-center">{setQuestions[rollNumber]?.[0]?.coNumber || "--"}</td>
//               <td className="border border-gray-300 p-1">
//                 <input
//                   type="number"
//                   className="w-full border-none outline-none text-sm"
//                   onChange={(e) => handleMarksChange(rollNumber, "writeUp", e.target.value)}
//                 />
//               </td>
//               <td className="border border-gray-300 p-1">
//                 <input
//                   type="number"
//                   className="w-full border-none outline-none text-sm"
//                   onChange={(e) => handleMarksChange(rollNumber, "compileErrors", e.target.value)}
//                 />
//               </td>
//               <td className="border border-gray-300 p-1">
//                 <input
//                   type="number"
//                   className="w-full border-none outline-none text-sm"
//                   onChange={(e) => handleMarksChange(rollNumber, "execution", e.target.value)}
//                 />
//               </td>
//               <td className="border border-gray-300 p-1 text-center">{setQuestions[rollNumber]?.[1]?.question || "ABSENT"}</td>
//               <td className="border border-gray-300 p-1 text-center">{setQuestions[rollNumber]?.[1]?.coNumber || "--"}</td>
//               <td className="border border-gray-300 p-1">
//                 <input
//                   type="number"
//                   className="w-full border-none outline-none text-sm"
//                   onChange={(e) => handleMarksChange(rollNumber, "programSyntax", e.target.value)}
//                 />
//               </td>
//               <td className="border border-gray-300 p-1">
//                 <input
//                   type="number"
//                   className="w-full border-none outline-none text-sm"
//                   onChange={(e) => handleMarksChange(rollNumber, "vivaVoice", e.target.value)}
//                 />
//               </td>
//               <td className="border border-gray-300 p-1 text-center">
//                 {calculateTotalMarks(rollNumber)} {/* Show calculated total marks */}
//               </td>
//             </tr>
//           ))}
//           </tbody>
//         </table>
//         </div>

//         {/* Buttons for actions */}
//         <div className="mt-6 flex justify-between">
//           <button
//             onClick={handlePrint}
//             className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-600"
//           >
//             Print
//           </button>
//           <button
//             onClick={handleDownloadExcel}
//             className="bg-green-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-green-600"
//           >
//             Download Excel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Name;




































//all success except set number questions


// import React, { useState, useRef } from "react";
// import { useLocation } from "react-router-dom";
// import { generateRollNumbers } from "./rollNumberHelper";
// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";

// function Name() {
//   const location = useLocation();
//   const { academicYear = "", Branch = "", Section = "" } = location.state || {};

//   if (!academicYear || !Branch || !Section) {
//     return <h1 className="text-center text-xl mt-10">Invalid Data</h1>;
//   }

//   const rollNumbers = generateRollNumbers(academicYear, Branch, Section);
//   const [setNumbers, setSetNumbers] = useState({});
//   const [marks, setMarks] = useState({});

//   const handleMarksChange = (rollNumber, field, value) => {
//     setMarks((prev) => ({
//       ...prev,
//       [rollNumber]: {
//         ...prev[rollNumber],
//         [field]: value,
//       },
//     }));
//   };

//   const calculateTotalMarks = (rollNumber) => {
//     const studentMarks = marks[rollNumber] || {};
//     return (
//       (parseInt(studentMarks.writeUp) || 0) +
//       (parseInt(studentMarks.compileErrors) || 0) +
//       (parseInt(studentMarks.execution) || 0) +
//       (parseInt(studentMarks.programSyntax) || 0) +
//       (parseInt(studentMarks.vivaVoice) || 0)
//     );
//   };

//   const handlePrint = () => {
//     window.print();
//   };

//   const handleExportExcel = () => {
//     const data = rollNumbers.map((rollNumber, index) => ({
//       "S. No.": index + 1,
//       "Set No.": setNumbers[rollNumber] || "",
//       "Roll Number": rollNumber,
//       "Write Up (10M)": marks[rollNumber]?.writeUp || "",
//       "Compile Errors (15M)": marks[rollNumber]?.compileErrors || "",
//       "Execution (15M)": marks[rollNumber]?.execution || "",
//       "Program & Syntax (10M)": marks[rollNumber]?.programSyntax || "",
//       "Viva-Voice (10M)": marks[rollNumber]?.vivaVoice || "",
//       "Total Marks (60M)": calculateTotalMarks(rollNumber),
//     }));

//     const ws = XLSX.utils.json_to_sheet(data);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Students Data");
    
//     const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
//     const fileData = new Blob([excelBuffer], { type: "application/octet-stream" });

//     saveAs(fileData, `Student_Marks_${academicYear}_${Branch}_${Section}.xlsx`);
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold text-center mb-4">Generated Roll Numbers</h1>
//       <p className="text-center mb-4">
//         <strong>Academic Year:</strong> {academicYear} | 
//         <strong> Branch:</strong> {Branch} | 
//         <strong> Section:</strong> {Section}
//       </p>

//       <div className="overflow-x-auto">
//         <table className="w-full text-sm border-collapse border border-gray-300 mt-6">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 p-1">S. No.</th>
//               <th className="border border-gray-300 p-1">Set No.</th>
//               <th className="border border-gray-300 p-1">Roll Number</th>
//               <th className="border border-gray-300 p-1">Write Up (10M)</th>
//               <th className="border border-gray-300 p-1">Compile Errors (15M)</th>
//               <th className="border border-gray-300 p-1">Execution (15M)</th>
//               <th className="border border-gray-300 p-1">Program & Syntax (10M)</th>
//               <th className="border border-gray-300 p-1">Viva-Voice (10M)</th>
//               <th className="border border-gray-300 p-1">Total Marks (60M)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rollNumbers.map((rollNumber, index) => (
//               <tr key={index}>
//                 <td className="border border-gray-300 p-1 text-center">{index + 1}</td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={setNumbers[rollNumber] || ""}
//                     onChange={(e) => {
//                       setSetNumbers({
//                         ...setNumbers,
//                         [rollNumber]: e.target.value,
//                       });
//                     }}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1 text-center">{rollNumber}</td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.writeUp || ""}
//                     onChange={(e) =>
//                       handleMarksChange(rollNumber, "writeUp", e.target.value)
//                     }
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.compileErrors || ""}
//                     onChange={(e) =>
//                       handleMarksChange(rollNumber, "compileErrors", e.target.value)
//                     }
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.execution || ""}
//                     onChange={(e) =>
//                       handleMarksChange(rollNumber, "execution", e.target.value)
//                     }
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.programSyntax || ""}
//                     onChange={(e) =>
//                       handleMarksChange(rollNumber, "programSyntax", e.target.value)
//                     }
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.vivaVoice || ""}
//                     onChange={(e) =>
//                       handleMarksChange(rollNumber, "vivaVoice", e.target.value)
//                     }
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1 text-center">
//                   {calculateTotalMarks(rollNumber)}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className="flex justify-between mt-6">
//         <button
//           onClick={handlePrint}
//           className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//         >
//           Print
//         </button>
//         <button
//           onClick={handleExportExcel}
//           className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
//         >
//           Export to Excel
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Name;
























///->>>>>getting accurate results



// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { generateRollNumbers } from "./rollNumberHelper";
// import { debounce } from "lodash";

// function Name() {
//   const location = useLocation();
//   const { academicYear = "", Branch = "", Section = "" } = location.state || {};

//   if (!academicYear || !Branch || !Section) {
//     return <h1 className="text-center text-xl mt-10">Invalid Data</h1>;
//   }

//   const rollNumbers = generateRollNumbers(academicYear, Branch, Section);
//   const [setNumbers, setSetNumbers] = useState({});
//   const [marks, setMarks] = useState({});
//   const [setDetails, setSetDetails] = useState({});

//   const handleMarksChange = (rollNumber, field, value) => {
//     setMarks((prev) => ({
//       ...prev,
//       [rollNumber]: {
//         ...prev[rollNumber],
//         [field]: value,
//       },
//     }));
//   };

//   const calculateTotalMarks = (rollNumber) => {
//     const studentMarks = marks[rollNumber] || {};
//     return (
//       (parseInt(studentMarks.writeUp) || 0) +
//       (parseInt(studentMarks.compileErrors) || 0) +
//       (parseInt(studentMarks.execution) || 0) +
//       (parseInt(studentMarks.programSyntax) || 0) +
//       (parseInt(studentMarks.vivaVoice) || 0)
//     );
//   };

//   const fetchSetDetailsDebounced = debounce(async (setNum, rollNumber) => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("You are not authenticated. Please login.");
//       return;
//     }

//     try {
//       const response = await fetch(
//         `http://localhost:5000/api/sets/fetchSetDetails?setNumber=${setNum}`,
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         const setData = data.sets.find((set) => set.setNumber === setNum);
//         if (setData) {
//           setSetDetails((prev) => ({ ...prev, [rollNumber]: setData }));
//         } else {
//           alert("Set number not found.");
//         }
//       } else {
//         alert("No set details found for the given set number.");
//       }
//     } catch (error) {
//       console.error("Error fetching set details:", error);
//     }
//   }, 500);

//   useEffect(() => {
//     if (Object.keys(setNumbers).length) {
//       Object.entries(setNumbers).forEach(([rollNumber, setNum]) => {
//         fetchSetDetailsDebounced(setNum, rollNumber);
//       });
//     }
//   }, [setNumbers]);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold text-center mb-4">Generated Roll Numbers</h1>
//       <p className="text-center mb-4">
//         <strong>Academic Year:</strong> {academicYear} | <strong>Branch:</strong> {Branch} | <strong>Section:</strong> {Section}
//       </p>

//       <div className="overflow-x-auto">
//         <table className="w-full text-sm border-collapse border border-gray-300 mt-6">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 p-1">S. No.</th>
//               <th className="border border-gray-300 p-1">Set No.</th>
//               <th className="border border-gray-300 p-1">Roll Number</th>
//               <th className="border border-gray-300 p-1">Questions</th>
//               <th className="border border-gray-300 p-1">CO Number</th>
//               <th className="border border-gray-300 p-1">Write Up (10M)</th>
//               <th className="border border-gray-300 p-1">Compile Errors (15M)</th>
//               <th className="border border-gray-300 p-1">Execution (15M)</th>
//               <th className="border border-gray-300 p-1">Program & Syntax (10M)</th>
//               <th className="border border-gray-300 p-1">Viva-Voice (10M)</th>
//               <th className="border border-gray-300 p-1">Total Marks (60M)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rollNumbers.map((rollNumber, index) => (
//               <tr key={index}>
//                 <td className="border border-gray-300 p-1 text-center">{index + 1}</td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={setNumbers[rollNumber] || ""}
//                     onChange={(e) => {
//                       const setNum = e.target.value;
//                       setSetNumbers({ ...setNumbers, [rollNumber]: setNum });
//                     }}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1 text-center">{rollNumber}</td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.questions?.join(", ") || "-"}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.coNumbers?.join(", ") || "-"}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.writeUp || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "writeUp", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.compileErrors || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "compileErrors", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.execution || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "execution", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.programSyntax || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "programSyntax", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1 text-center">
//                   {calculateTotalMarks(rollNumber)}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Name;























// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { generateRollNumbers } from "./rollNumberHelper";
// import { debounce } from "lodash";

// function Name() {
//   const location = useLocation();
//   const { academicYear = "", Branch = "", Section = "" } = location.state || {};

//   if (!academicYear || !Branch || !Section) {
//     return <h1 className="text-center text-xl mt-10">Invalid Data</h1>;
//   }

//   const rollNumbers = generateRollNumbers(academicYear, Branch, Section);
//   const [setNumbers, setSetNumbers] = useState({});
//   const [marks, setMarks] = useState({});
//   const [setDetails, setSetDetails] = useState({});

//   const handleMarksChange = (rollNumber, field, value) => {
//     setMarks((prev) => ({
//       ...prev,
//       [rollNumber]: {
//         ...prev[rollNumber],
//         [field]: value,
//       },
//     }));
//   };

//   const calculateTotalMarks = (rollNumber) => {
//     const studentMarks = marks[rollNumber] || {};
    
//     // Parse marks or set to 0 if empty or invalid
//     const writeUp = parseInt(studentMarks.writeUp) || 0;
//     const compileErrors = parseInt(studentMarks.compileErrors) || 0;
//     const execution = parseInt(studentMarks.execution) || 0;
//     const programSyntax = parseInt(studentMarks.programSyntax) || 0;
//     const vivaVoice = parseInt(studentMarks.vivaVoice) || 0;

//     // Calculate total marks by adding all fields
//     return writeUp + compileErrors + execution + programSyntax + vivaVoice;
//   };

//   const fetchSetDetailsDebounced = debounce(async (setNum, rollNumber) => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("You are not authenticated. Please login.");
//       return;
//     }

//     try {
//       const response = await fetch(
//         `http://localhost:5000/api/sets/fetchSetDetails?setNumber=${setNum}`,
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         const setData = data.sets.find((set) => set.setNumber === setNum);
//         if (setData) {
//           // Divide questions into Program 1 (CO1) and Program 2 (CO2)
//           const dividedQuestions = {
//             program1: setData.questions?.slice(0, setData.questions?.length / 2),
//             program2: setData.questions?.slice(setData.questions?.length / 2),
//             co1: setData.coNumbers?.slice(0, setData.coNumbers?.length / 2),
//             co2: setData.coNumbers?.slice(setData.coNumbers?.length / 2),
//           };
//           setSetDetails((prev) => ({ ...prev, [rollNumber]: dividedQuestions }));
//         } else {
//           alert("Set number not found.");
//         }
//       } else {
//         alert("No set details found for the given set number.");
//       }
//     } catch (error) {
//       console.error("Error fetching set details:", error);
//     }
//   }, 500);

//   useEffect(() => {
//     if (Object.keys(setNumbers).length) {
//       Object.entries(setNumbers).forEach(([rollNumber, setNum]) => {
//         fetchSetDetailsDebounced(setNum, rollNumber);
//       });
//     }
//   }, [setNumbers]);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold text-center mb-4">Generated Roll Numbers</h1>
//       <p className="text-center mb-4">
//         <strong>Academic Year:</strong> {academicYear} | <strong>Branch:</strong> {Branch} | <strong>Section:</strong> {Section}
//       </p>

//       <div className="overflow-x-auto">
//         <table className="w-full text-sm border-collapse border border-gray-300 mt-6">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 p-1">S. No.</th>
//               <th className="border border-gray-300 p-1">Set No.</th>
//               <th className="border border-gray-300 p-1">Roll Number</th>
//               <th className="border border-gray-300 p-1">Program 1 Questions</th>
//               <th className="border border-gray-300 p-1">Program 1 CO Number</th>
//               <th className="border border-gray-300 p-1">Program 2 Questions</th>
//               <th className="border border-gray-300 p-1">Program 2 CO Number</th>
//               <th className="border border-gray-300 p-1">Write Up (10M)</th>
//               <th className="border border-gray-300 p-1">Compile Errors (15M)</th>
//               <th className="border border-gray-300 p-1">Execution (15M)</th>
//               <th className="border border-gray-300 p-1">Program & Syntax (10M)</th>
//               <th className="border border-gray-300 p-1">Viva-Voice (10M)</th>
//               <th className="border border-gray-300 p-1">Total Marks (60M)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rollNumbers.map((rollNumber, index) => (
//               <tr key={index}>
//                 <td className="border border-gray-300 p-1 text-center">{index + 1}</td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={setNumbers[rollNumber] || ""}
//                     onChange={(e) => {
//                       const setNum = e.target.value;
//                       setSetNumbers({ ...setNumbers, [rollNumber]: setNum });
//                     }}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1 text-center">{rollNumber}</td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.program1?.join(", ") || "-"}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.co1?.join(", ") || "-"}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.program2?.join(", ") || "-"}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.co2?.join(", ") || "-"}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.writeUp || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "writeUp", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.compileErrors || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "compileErrors", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.execution || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "execution", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.programSyntax || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "programSyntax", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.vivaVoice || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "vivaVoice", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1 text-center">
//                   {calculateTotalMarks(rollNumber)}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Name;



















//-->executed successfully


// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { generateRollNumbers } from "./rollNumberHelper";
// import { debounce } from "lodash";

// function Name() {
//   const location = useLocation();
//   const { academicYear = "", Branch = "", Section = "" } = location.state || {};

//   if (!academicYear || !Branch || !Section) {
//     return <h1 className="text-center text-xl mt-10">Invalid Data</h1>;
//   }

//   const rollNumbers = generateRollNumbers(academicYear, Branch, Section);
//   const [setNumbers, setSetNumbers] = useState({});
//   const [marks, setMarks] = useState({});
//   const [setDetails, setSetDetails] = useState({});

//   // Update the marks when the input changes
//   const handleMarksChange = (rollNumber, field, value) => {
//     setMarks((prev) => ({
//       ...prev,
//       [rollNumber]: {
//         ...prev[rollNumber],
//         [field]: value,
//       },
//     }));
//   };

//   // Fetch the set details from the server when setNumber or rollNumber changes
//   const fetchSetDetailsDebounced = debounce(async (setNum, rollNumber) => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("You are not authenticated. Please login.");
//       return;
//     }

//     try {
//       const response = await fetch(
//         `http://localhost:5000/api/sets/fetchSetDetails?setNumber=${setNum}`,
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         const setData = data.sets.find((set) => set.setNumber === setNum);
//         if (setData) {
//           // Divide questions into Program 1 (CO1) and Program 2 (CO2)
//           const dividedQuestions = {
//             program1: setData.questions?.slice(0, setData.questions?.length / 2),
//             program2: setData.questions?.slice(setData.questions?.length / 2),
//             co1: setData.coNumbers?.slice(0, setData.coNumbers?.length / 2),
//             co2: setData.coNumbers?.slice(setData.coNumbers?.length / 2),
//           };
//           setSetDetails((prev) => ({ ...prev, [rollNumber]: dividedQuestions }));
//         } else {
//           alert("Set number not found.");
//         }
//       } else {
//         alert("No set details found for the given set number.");
//       }
//     } catch (error) {
//       console.error("Error fetching set details:", error);
//     }
//   }, 500);

//   // Effect hook to fetch set details whenever setNumbers change
//   useEffect(() => {
//     if (Object.keys(setNumbers).length) {
//       Object.entries(setNumbers).forEach(([rollNumber, setNum]) => {
//         fetchSetDetailsDebounced(setNum, rollNumber);
//       });
//     }
//   }, [setNumbers]);

//   // Handle changes in the set number for each roll number
//   const handleSetNumberChange = (rollNumber, value) => {
//     setSetNumbers((prev) => ({ ...prev, [rollNumber]: value }));
//   };

//   // Calculate total marks for each student
//   const calculateTotalMarks = (rollNumber) => {
//     const studentMarks = marks[rollNumber] || {};

//     // Parse marks or set to 0 if empty or invalid
//     const writeUp = parseInt(studentMarks.writeUp) || 0;
//     const compileErrors = parseInt(studentMarks.compileErrors) || 0;
//     const execution = parseInt(studentMarks.execution) || 0;
//     const programSyntax = parseInt(studentMarks.programSyntax) || 0;
//     const vivaVoice = parseInt(studentMarks.vivaVoice) || 0;

//     // Calculate total marks by adding all fields
//     return writeUp + compileErrors + execution + programSyntax + vivaVoice;
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold text-center mb-4">Generated Roll Numbers</h1>
//       <p className="text-center mb-4">
//         <strong>Academic Year:</strong> {academicYear} | <strong>Branch:</strong> {Branch} | <strong>Section:</strong> {Section}
//       </p>

//       <div className="overflow-x-auto">
//         <table className="w-full text-sm border-collapse border border-gray-300 mt-6">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 p-1">S. No.</th>
//               <th className="border border-gray-300 p-1">Set No.</th>
//               <th className="border border-gray-300 p-1">Hall Ticket</th>
//               <th className="border border-gray-300 p-1">Number of Student</th>
//               <th className="border border-gray-300 p-1">Program 1 Executed</th>
//               <th className="border border-gray-300 p-1">Mapping CO 1</th>
//               <th className="border border-gray-300 p-1">Write Up (10M)</th>
//               <th className="border border-gray-300 p-1">Compile Errors (15M)</th>
//               <th className="border border-gray-300 p-1">Execution (15M)</th>
//               <th className="border border-gray-300 p-1">Program 2 Executed</th>
//               <th className="border border-gray-300 p-1">Mapping CO 2</th>
//               <th className="border border-gray-300 p-1">Program & Syntax (10M)</th>
//               <th className="border border-gray-300 p-1">Viva-Voice (10M)</th>
//               <th className="border border-gray-300 p-1">Total Marks (60M)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rollNumbers.map((rollNumber, index) => (
//               <tr key={index}>
//                 <td className="border border-gray-300 p-1 text-center">{index + 1}</td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={setNumbers[rollNumber] || ""}
//                     onChange={(e) => handleSetNumberChange(rollNumber, e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1 text-center">{rollNumber}</td>
//                 <td className="border border-gray-300 p-1 text-center">{rollNumber}</td> {/* Student number or ID */}
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.program1?.join(", ") || "-"}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.co1?.join(", ") || "-"}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.writeUp || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "writeUp", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.compileErrors || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "compileErrors", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.execution || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "execution", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.program2?.join(", ") || "-"} {/* Program 2 Executed */}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.co2?.join(", ") || "-"} {/* CO Mapping 2 */}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.programSyntax || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "programSyntax", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.vivaVoice || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "vivaVoice", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1 text-center">
//                   {calculateTotalMarks(rollNumber)}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Name;













//-->excetued succesfully


// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { generateRollNumbers } from "./rollNumberHelper";
// import { debounce } from "lodash";
// //import { jsPDF } from "jspdf"; // For PDF download
// import * as XLSX from "xlsx"; // For Excel download
// import jsPDF from "jspdf";
// import "jspdf-autotable";

// function Name() {
//   const location = useLocation();
//   const { academicYear = "", Branch = "", Section = "" } = location.state || {};

//   if (!academicYear || !Branch || !Section) {
//     return <h1 className="text-center text-xl mt-10">Invalid Data</h1>;
//   }

//   const rollNumbers = generateRollNumbers(academicYear, Branch, Section);
//   const [setNumbers, setSetNumbers] = useState({});
//   const [marks, setMarks] = useState({});
//   const [setDetails, setSetDetails] = useState({});

//   const handleMarksChange = (rollNumber, field, value) => {
//     setMarks((prev) => ({
//       ...prev,
//       [rollNumber]: {
//         ...prev[rollNumber],
//         [field]: value,
//       },
//     }));
//   };

//   const fetchSetDetailsDebounced = debounce(async (setNum, rollNumber) => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("You are not authenticated. Please login.");
//       return;
//     }

//     try {
//       const response = await fetch(
//         `http://localhost:5000/api/sets/fetchSetDetails?setNumber=${setNum}`,
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         const setData = data.sets.find((set) => set.setNumber === setNum);
//         if (setData) {
//           const dividedQuestions = {
//             program1: setData.questions?.slice(0, setData.questions?.length / 2),
//             program2: setData.questions?.slice(setData.questions?.length / 2),
//             co1: setData.coNumbers?.slice(0, setData.coNumbers?.length / 2),
//             co2: setData.coNumbers?.slice(setData.coNumbers?.length / 2),
//           };
//           setSetDetails((prev) => ({ ...prev, [rollNumber]: dividedQuestions }));
//         } else {
//           alert("Set number not found.");
//         }
//       } else {
//         alert("No set details found for the given set number.");
//       }
//     } catch (error) {
//       console.error("Error fetching set details:", error);
//     }
//   }, 500);

//   useEffect(() => {
//     if (Object.keys(setNumbers).length) {
//       Object.entries(setNumbers).forEach(([rollNumber, setNum]) => {
//         fetchSetDetailsDebounced(setNum, rollNumber);
//       });
//     }
//   }, [setNumbers]);

//   const handleSetNumberChange = (rollNumber, value) => {
//     setSetNumbers((prev) => ({ ...prev, [rollNumber]: value }));
//   };

//   const calculateTotalMarks = (rollNumber) => {
//     const studentMarks = marks[rollNumber] || {};

//     const writeUp = parseInt(studentMarks.writeUp) || 0;
//     const compileErrors = parseInt(studentMarks.compileErrors) || 0;
//     const execution = parseInt(studentMarks.execution) || 0;
//     const programSyntax = parseInt(studentMarks.programSyntax) || 0;
//     const vivaVoice = parseInt(studentMarks.vivaVoice) || 0;

//     return writeUp + compileErrors + execution + programSyntax + vivaVoice;
//   };

//   // Function to download the table as PDF
//   const downloadPDF = () => {
//     const doc = new jsPDF();
  
//     // Set table headers
//     const headers = [
//       ["S. No.", "Set No.", "Hall Ticket", "Number of Student", "Program 1 Executed", "Mapping CO 1", "Write Up (10M)", "Compile Errors (15M)", "Execution (15M)", "Program 2 Executed", "Mapping CO 2", "Program & Syntax (10M)", "Viva-Voice (10M)", "Total Marks (60M)"],
//     ];
  
//     // Format data for the table
//     const data = rollNumbers.map((rollNumber, index) => {
//       return [
//         index + 1,
//         setNumbers[rollNumber] || "",
//         rollNumber,
//         rollNumber, // You may replace this with actual student number or ID
//         setDetails[rollNumber]?.program1?.join(", ") || "-",
//         setDetails[rollNumber]?.co1?.join(", ") || "-",
//         marks[rollNumber]?.writeUp || "",
//         marks[rollNumber]?.compileErrors || "",
//         marks[rollNumber]?.execution || "",
//         setDetails[rollNumber]?.program2?.join(", ") || "-",
//         setDetails[rollNumber]?.co2?.join(", ") || "-",
//         marks[rollNumber]?.programSyntax || "",
//         marks[rollNumber]?.vivaVoice || "",
//         calculateTotalMarks(rollNumber),
//       ];
//     });
  
//     // Add the table to the PDF
//     doc.autoTable({
//       head: headers,
//       body: data,
//     });
  
//     // Save the PDF
//     doc.save("marksheet.pdf");
//   };

//   // Function to download the table as Excel
//   const downloadExcel = () => {
//     const tableData = rollNumbers.map((rollNumber, index) => ({
//       S_No: index + 1,
//       Set_No: setNumbers[rollNumber] || "-",
//       Hall_Ticket: rollNumber,
//       Number_of_Student: rollNumber, // Student ID
//       Program_1_Executed: setDetails[rollNumber]?.program1?.join(", ") || "-",
//       Mapping_CO_1: setDetails[rollNumber]?.co1?.join(", ") || "-",
//       Write_Up_10M: marks[rollNumber]?.writeUp || "-",
//       Compile_Errors_15M: marks[rollNumber]?.compileErrors || "-",
//       Execution_15M: marks[rollNumber]?.execution || "-",
//       Program_2_Executed: setDetails[rollNumber]?.program2?.join(", ") || "-",
//       Mapping_CO_2: setDetails[rollNumber]?.co2?.join(", ") || "-",
//       Program_Syntex_10M: marks[rollNumber]?.programSyntax || "-",
//       Viva_Voice_10M: marks[rollNumber]?.vivaVoice || "-",
//       Total_Marks_60M: calculateTotalMarks(rollNumber),
//     }));

//     const ws = XLSX.utils.json_to_sheet(tableData);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Roll Numbers");
//     XLSX.writeFile(wb, "roll_numbers.xlsx");
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold text-center mb-4">Generated Roll Numbers</h1>
//       <p className="text-center mb-4">
//         <strong>Academic Year:</strong> {academicYear} | <strong>Branch:</strong> {Branch} | <strong>Section:</strong> {Section}
//       </p>

//       <div className="overflow-x-auto">
//         <table className="w-full text-sm border-collapse border border-gray-300 mt-6">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 p-1">S. No.</th>
//               <th className="border border-gray-300 p-1">Set No.</th>
//               <th className="border border-gray-300 p-1">Hall Ticket</th>
//               <th className="border border-gray-300 p-1">Number of Student</th>
//               <th className="border border-gray-300 p-1">Program 1 Executed</th>
//               <th className="border border-gray-300 p-1">Mapping CO 1</th>
//               <th className="border border-gray-300 p-1">Write Up (10M)</th>
//               <th className="border border-gray-300 p-1">Compile Errors (15M)</th>
//               <th className="border border-gray-300 p-1">Execution (15M)</th>
//               <th className="border border-gray-300 p-1">Program 2 Executed</th>
//               <th className="border border-gray-300 p-1">Mapping CO 2</th>
//               <th className="border border-gray-300 p-1">Program & Syntax (10M)</th>
//               <th className="border border-gray-300 p-1">Viva-Voice (10M)</th>
//               <th className="border border-gray-300 p-1">Total Marks (60M)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rollNumbers.map((rollNumber, index) => (
//               <tr key={index}>
//                 <td className="border border-gray-300 p-1 text-center">{index + 1}</td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={setNumbers[rollNumber] || ""}
//                     onChange={(e) => handleSetNumberChange(rollNumber, e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1 text-center">{rollNumber}</td>
//                 <td className="border border-gray-300 p-1 text-center">{rollNumber}</td> {/* Student number or ID */}
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.program1?.join(", ") || "-"}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.co1?.join(", ") || "-"}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.writeUp || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "writeUp", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.compileErrors || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "compileErrors", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.execution || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "execution", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.program2?.join(", ") || "-"} {/* Program 2 Executed */}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.co2?.join(", ") || "-"} {/* CO Mapping 2 */}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.programSyntax || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "programSyntax", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.vivaVoice || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "vivaVoice", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1 text-center">
//                   {calculateTotalMarks(rollNumber)}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {/* Buttons for Downloading PDF and Excel */}
//       <div className="mt-4 text-center">
//         <button className="btn btn-primary mr-4" onClick={downloadPDF}>Download PDF</button>
//         <button className="btn btn-primary" onClick={downloadExcel}>Download Excel</button>
//       </div>
//     </div>
//   );
// }

// export default Name;

























import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { generateRollNumbers } from "./rollNumberHelper";
import { debounce } from "lodash";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";

function Name() {
  const location = useLocation();
  const { academicYear = "", Branch = "", Section = "" } = location.state || {};

  if (!academicYear || !Branch || !Section) {
    return <h1 className="text-center text-xl mt-10">Invalid Data</h1>;
  }

  const rollNumbers = generateRollNumbers(academicYear, Branch, Section);
  const [setNumbers, setSetNumbers] = useState({});
  const [marks, setMarks] = useState({});
  const [setDetails, setSetDetails] = useState({});

  // Update the marks when the input changes
  const handleMarksChange = (rollNumber, field, value) => {
    setMarks((prev) => ({
      ...prev,
      [rollNumber]: {
        ...prev[rollNumber],
        [field]: value,
      },
    }));
  };

  // Fetch the set details from the server when setNumber or rollNumber changes
  const fetchSetDetailsDebounced = debounce(async (setNum, rollNumber) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You are not authenticated. Please login.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/sets/fetchSetDetails?setNumber=${setNum}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        const setData = data.sets.find((set) => set.setNumber === setNum);
        if (setData) {
          // Divide questions into Program 1 (CO1) and Program 2 (CO2)
          const dividedQuestions = {
            program1: setData.questions?.slice(0, setData.questions?.length / 2),
            program2: setData.questions?.slice(setData.questions?.length / 2),
            co1: setData.coNumbers?.slice(0, setData.coNumbers?.length / 2),
            co2: setData.coNumbers?.slice(setData.coNumbers?.length / 2),
          };
          setSetDetails((prev) => ({ ...prev, [rollNumber]: dividedQuestions }));
        } else {
          alert("Set number not found.");
        }
      } else {
        alert("No set details found for the given set number.");
      }
    } catch (error) {
      console.error("Error fetching set details:", error);
    }
  }, 500);

  // Effect hook to fetch set details whenever setNumbers change
  useEffect(() => {
    if (Object.keys(setNumbers).length) {
      Object.entries(setNumbers).forEach(([rollNumber, setNum]) => {
        fetchSetDetailsDebounced(setNum, rollNumber);
      });
    }
  }, [setNumbers]);

  // Handle changes in the set number for each roll number
  const handleSetNumberChange = (rollNumber, value) => {
    setSetNumbers((prev) => ({ ...prev, [rollNumber]: value }));
  };

  // Calculate total marks for each student
  const calculateTotalMarks = (rollNumber) => {
    const studentMarks = marks[rollNumber] || {};

    // Parse marks or set to 0 if empty or invalid
    const writeUp = parseInt(studentMarks.writeUp) || 0;
    const compileErrors = parseInt(studentMarks.compileErrors) || 0;
    const execution = parseInt(studentMarks.execution) || 0;
    const programSyntax = parseInt(studentMarks.programSyntax) || 0;
    const vivaVoice = parseInt(studentMarks.vivaVoice) || 0;

    // Calculate total marks by adding all fields
    return writeUp + compileErrors + execution + programSyntax + vivaVoice;
  };

  // Download PDF function
  const downloadPDF = () => {
    const doc = new jsPDF();

    // Set table headers
    const headers = [
      ["S. No.", "Set No.", "Hall Ticket", "Program 1 Executed", "Mapping CO 1", "Write Up (10M)", "Compile Errors (15M)", "Execution (15M)", "Program 2 Executed", "Mapping CO 2", "Program & Syntax (10M)", "Viva-Voice (10M)", "Total Marks (60M)"],
    ];

    // Format data for the table
    const data = rollNumbers.map((rollNumber, index) => {
      return [
        index + 1,
        setNumbers[rollNumber] || "",
        rollNumber,
        setDetails[rollNumber]?.program1?.join(", ") || "-",
        setDetails[rollNumber]?.co1?.join(", ") || "-",
        marks[rollNumber]?.writeUp || "",
        marks[rollNumber]?.compileErrors || "",
        marks[rollNumber]?.execution || "",
        setDetails[rollNumber]?.program2?.join(", ") || "-",
        setDetails[rollNumber]?.co2?.join(", ") || "-",
        marks[rollNumber]?.programSyntax || "",
        marks[rollNumber]?.vivaVoice || "",
        calculateTotalMarks(rollNumber),
      ];
    });

    // Add the table to the PDF
    doc.autoTable({
      head: headers,
      body: data,
    });

    // Save the PDF
    doc.save("marksheet.pdf");
  };

  // Download Excel function
  const downloadExcel = () => {
    const data = rollNumbers.map((rollNumber, index) => {
      return {
        "S. No.": index + 1,
        "Set No.": setNumbers[rollNumber] || "",
        "Hall Ticket": rollNumber,
        "Program 1 Executed": setDetails[rollNumber]?.program1?.join(", ") || "-",
        "Mapping CO 1": setDetails[rollNumber]?.co1?.join(", ") || "-",
        "Write Up (10M)": marks[rollNumber]?.writeUp || "",
        "Compile Errors (15M)": marks[rollNumber]?.compileErrors || "",
        "Execution (15M)": marks[rollNumber]?.execution || "",
        "Program 2 Executed": setDetails[rollNumber]?.program2?.join(", ") || "-",
        "Mapping CO 2": setDetails[rollNumber]?.co2?.join(", ") || "-",
        "Program & Syntax (10M)": marks[rollNumber]?.programSyntax || "",
        "Viva-Voice (10M)": marks[rollNumber]?.vivaVoice || "",
        "Total Marks (60M)": calculateTotalMarks(rollNumber),
      };
    });

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Marks Data");
    XLSX.writeFile(wb, "marksheet.xlsx");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-4">Generated Roll Numbers</h1>
      <p className="text-center mb-4">
        <strong>Academic Year:</strong> {academicYear} | <strong>Branch:</strong> {Branch} | <strong>Section:</strong> {Section}
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse border border-gray-300 mt-6">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-1">S. No.</th>
              <th className="border border-gray-300 p-1">Set No.</th>
              <th className="border border-gray-300 p-1">Hall Ticket</th>
              <th className="border border-gray-300 p-1">Program 1 Executed</th>
              <th className="border border-gray-300 p-1">Mapping CO 1</th>
              <th className="border border-gray-300 p-1">Write Up (10M)</th>
              <th className="border border-gray-300 p-1">Compile Errors (15M)</th>
              <th className="border border-gray-300 p-1">Execution (15M)</th>
              <th className="border border-gray-300 p-1">Program 2 Executed</th>
              <th className="border border-gray-300 p-1">Mapping CO 2</th>
              <th className="border border-gray-300 p-1">Program & Syntax (10M)</th>
              <th className="border border-gray-300 p-1">Viva-Voice (10M)</th>
              <th className="border border-gray-300 p-1">Total Marks (60M)</th>
            </tr>
          </thead>
          <tbody>
            {rollNumbers.map((rollNumber, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-1 text-center">{index + 1}</td>
                <td className="border border-gray-300 p-1">
                  <input
                    type="number"
                    className="w-full border-none outline-none text-sm"
                    value={setNumbers[rollNumber] || ""}
                    onChange={(e) => handleSetNumberChange(rollNumber, e.target.value)}
                  />
                </td>
                <td className="border border-gray-300 p-1 text-center">{rollNumber}</td>
                <td className="border border-gray-300 p-1">
                  {setDetails[rollNumber]?.program1?.join(", ") || "-"}
                </td>
                <td className="border border-gray-300 p-1">
                  {setDetails[rollNumber]?.co1?.join(", ") || "-"}
                </td>
                <td className="border border-gray-300 p-1">
                  <input
                    type="number"
                    className="w-full border-none outline-none text-sm"
                    value={marks[rollNumber]?.writeUp || ""}
                    onChange={(e) => handleMarksChange(rollNumber, "writeUp", e.target.value)}
                  />
                </td>
                <td className="border border-gray-300 p-1">
                  <input
                    type="number"
                    className="w-full border-none outline-none text-sm"
                    value={marks[rollNumber]?.compileErrors || ""}
                    onChange={(e) => handleMarksChange(rollNumber, "compileErrors", e.target.value)}
                  />
                </td>
                <td className="border border-gray-300 p-1">
                  <input
                    type="number"
                    className="w-full border-none outline-none text-sm"
                    value={marks[rollNumber]?.execution || ""}
                    onChange={(e) => handleMarksChange(rollNumber, "execution", e.target.value)}
                  />
                </td>
                <td className="border border-gray-300 p-1">
                  {setDetails[rollNumber]?.program2?.join(", ") || "-"} {/* Program 2 Executed */}
                </td>
                <td className="border border-gray-300 p-1">
                  {setDetails[rollNumber]?.co2?.join(", ") || "-"} {/* CO Mapping 2 */}
                </td>
                <td className="border border-gray-300 p-1">
                  <input
                    type="number"
                    className="w-full border-none outline-none text-sm"
                    value={marks[rollNumber]?.programSyntax || ""}
                    onChange={(e) => handleMarksChange(rollNumber, "programSyntax", e.target.value)}
                  />
                </td>
                <td className="border border-gray-300 p-1">
                  <input
                    type="number"
                    className="w-full border-none outline-none text-sm"
                    value={marks[rollNumber]?.vivaVoice || ""}
                    onChange={(e) => handleMarksChange(rollNumber, "vivaVoice", e.target.value)}
                  />
                </td>
                <td className="border border-gray-300 p-1 text-center">
                  {calculateTotalMarks(rollNumber)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={downloadPDF}
          className="bg-blue-500 text-white p-2 rounded-md mr-4"
        >
          Download PDF
        </button>
        <button
          onClick={downloadExcel}
          className="bg-green-500 text-white p-2 rounded-md"
        >
          Download Excel
        </button>
      </div>
    </div>
  );
}

export default Name;













// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { debounce } from "lodash";

// function Name() {
//   const location = useLocation();
//   const { academicYear = "", Branch = "", Section = "" } = location.state || {};

//   if (!academicYear || !Branch || !Section) {
//     return <h1 className="text-center text-xl mt-10">Invalid Data</h1>;
//   }

//   const [rollNumbers, setRollNumbers] = useState([]);
//   const [marks, setMarks] = useState({});
//   const [setDetails, setSetDetails] = useState({});

//   // Fetch roll numbers based on year, branch, and section
//   const fetchRollNumbers = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("You are not authenticated. Please login.");
//       return;
//     }

//     try {
//       const response = await fetch(
//         `http://localhost:5000/api/students/${academicYear}/${Branch}/${Section}`,
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       const data = await response.json();
//       if (response.ok) {
//         setRollNumbers(data.rollNumbers);
//       } else {
//         alert("No students found for the given data.");
//       }
//     } catch (error) {
//       console.error("Error fetching roll numbers:", error);
//     }
//   };

//   useEffect(() => {
//     fetchRollNumbers();
//   }, [academicYear, Branch, Section]);

//   const handleMarksChange = (rollNumber, field, value) => {
//     setMarks((prev) => ({
//       ...prev,
//       [rollNumber]: {
//         ...prev[rollNumber],
//         [field]: value,
//       },
//     }));
//   };

//   const calculateTotalMarks = (rollNumber) => {
//     const studentMarks = marks[rollNumber] || {};
//     return (
//       (parseInt(studentMarks.writeUp) || 0) +
//       (parseInt(studentMarks.compileErrors) || 0) +
//       (parseInt(studentMarks.execution) || 0) +
//       (parseInt(studentMarks.programSyntax) || 0) +
//       (parseInt(studentMarks.vivaVoice) || 0)
//     );
//   };

//   const fetchSetDetailsDebounced = debounce(async (setNum, rollNumber) => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("You are not authenticated. Please login.");
//       return;
//     }

//     try {
//       const response = await fetch(
//         `http://localhost:5000/api/sets/fetchSetDetails?setNumber=${setNum}`,
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       const data = await response.json();
//       if (response.ok) {
//         const setData = data.sets.find((set) => set.setNumber === setNum);
//         if (setData) {
//           setSetDetails((prev) => ({ ...prev, [rollNumber]: setData }));
//         } else {
//           alert("Set number not found.");
//         }
//       } else {
//         alert("No set details found for the given set number.");
//       }
//     } catch (error) {
//       console.error("Error fetching set details:", error);
//     }
//   }, 500);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold text-center mb-4">Generated Roll Numbers</h1>
//       <p className="text-center mb-4">
//         <strong>Academic Year:</strong> {academicYear} | <strong>Branch:</strong> {Branch} | <strong>Section:</strong> {Section}
//       </p>

//       <div className="overflow-x-auto">
//         <table className="w-full text-sm border-collapse border border-gray-300 mt-6">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 p-1">S. No.</th>
//               <th className="border border-gray-300 p-1">Set No.</th>
//               <th className="border border-gray-300 p-1">Roll Number</th>
//               <th className="border border-gray-300 p-1">Program 1</th>
//               <th className="border border-gray-300 p-1">CO 1</th>
//               <th className="border border-gray-300 p-1">Write Up (10M)</th>
//               <th className="border border-gray-300 p-1">Compile Errors (15M)</th>
//               <th className="border border-gray-300 p-1">Execution (15M)</th>
//               <th className="border border-gray-300 p-1">Program 2</th>
//               <th className="border border-gray-300 p-1">CO 2</th>
//               <th className="border border-gray-300 p-1">Program & Syntax (10M)</th>
//               <th className="border border-gray-300 p-1">Viva-Voice (10M)</th>
//               <th className="border border-gray-300 p-1">Total Marks (60M)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rollNumbers.map((rollNumber, index) => (
//               <tr key={index}>
//                 <td className="border border-gray-300 p-1 text-center">{index + 1}</td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.setNumber || ""}
//                     onChange={(e) => {
//                       const setNum = e.target.value;
//                       setMarks({ ...marks, [rollNumber]: { ...marks[rollNumber], setNumber: setNum } });
//                       fetchSetDetailsDebounced(setNum, rollNumber);
//                     }}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1 text-center">{rollNumber}</td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.questions?.[0] || "ABSENT"}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.coNumbers?.[0] || "--"}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.writeUp || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "writeUp", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.compileErrors || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "compileErrors", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.execution || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "execution", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.questions?.[1] || "ABSENT"}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   {setDetails[rollNumber]?.coNumbers?.[1] || "--"}
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.programSyntax || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "programSyntax", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={marks[rollNumber]?.vivaVoice || ""}
//                     onChange={(e) => handleMarksChange(rollNumber, "vivaVoice", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1 text-center">
//                   {calculateTotalMarks(rollNumber)}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Name;





























// import React, { useState, useRef } from "react";
// import { useLocation } from "react-router-dom";
// // Import helper functions like generateRollNumbers if needed

// function Name() {
//   const location = useLocation();
//   const { academicYear, selectBranch, selectSection } = location.state || {};

//   if (!academicYear || !selectBranch || !selectSection) {
//     return <h1 className="text-center text-xl mt-10">Invalid Data</h1>;
//   }

//   // Replace with your own function to generate roll numbers
//   const rollNumbers = generateRollNumbers(academicYear, selectBranch, selectSection);
  
//   const [setNumbers, setSetNumbers] = useState({});
//   const [marks, setMarks] = useState({});
//   const tableRef = useRef(null);

//   const handleMarksChange = (rollNumber, field, value) => {
//     setMarks((prev) => ({
//       ...prev,
//       [rollNumber]: {
//         ...prev[rollNumber],
//         [field]: value,
//       },
//     }));
//   };

//   const calculateTotalMarks = (rollNumber) => {
//     const studentMarks = marks[rollNumber] || {};
//     return (
//       (parseInt(studentMarks.writeUp) || 0) +
//       (parseInt(studentMarks.compileErrors) || 0) +
//       (parseInt(studentMarks.execution) || 0) +
//       (parseInt(studentMarks.programSyntax) || 0) +
//       (parseInt(studentMarks.vivaVoice) || 0)
//     );
//   };

//   const handlePrint = () => {
//     window.print();
//   };

//   const handleExportExcel = () => {
//     const data = rollNumbers.map((rollNumber, index) => ({
//       "S. No.": index + 1,
//       "Set No.": setNumbers[rollNumber] || "",
//       "Roll Number": rollNumber,
//       "Write Up (10M)": marks[rollNumber]?.writeUp || "",
//       "Compile Errors (15M)": marks[rollNumber]?.compileErrors || "",
//       "Execution (15M)": marks[rollNumber]?.execution || "",
//       "Program & Syntax (10M)": marks[rollNumber]?.programSyntax || "",
//       "Viva-Voice (10M)": marks[rollNumber]?.vivaVoice || "",
//       "Total Marks (60M)": calculateTotalMarks(rollNumber),
//     }));

//     // Export logic here
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold text-center mb-4">Generated Roll Numbers</h1>
//       <p className="text-center mb-4">
//         <strong>Academic Year:</strong> {academicYear} | 
//         <strong> Branch:</strong> {selectBranch} | 
//         <strong> Section:</strong> {selectSection}
//       </p>

//       {/* Table for entering marks */}
//       <div className="overflow-x-auto">
//         <table ref={tableRef} className="w-full text-sm border-collapse border border-gray-300 mt-6">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 p-1">S. No.</th>
//               <th className="border border-gray-300 p-1">Set No.</th>
//               <th className="border border-gray-300 p-1">Roll Number</th>
//               <th className="border border-gray-300 p-1">Write Up (10M)</th>
//               <th className="border border-gray-300 p-1">Compile Errors (15M)</th>
//               <th className="border border-gray-300 p-1">Execution (15M)</th>
//               <th className="border border-gray-300 p-1">Program & Syntax (10M)</th>
//               <th className="border border-gray-300 p-1">Viva-Voice (10M)</th>
//               <th className="border border-gray-300 p-1">Total Marks (60M)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rollNumbers.map((rollNumber, index) => (
//               <tr key={index}>
//                 <td className="border border-gray-300 p-1 text-center">{index + 1}</td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={setNumbers[rollNumber] || ""}
//                     onChange={(e) => setSetNumbers((prev) => ({ ...prev, [rollNumber]: e.target.value }))}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1 text-center">{rollNumber}</td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     onChange={(e) => handleMarksChange(rollNumber, "writeUp", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     onChange={(e) => handleMarksChange(rollNumber, "compileErrors", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     onChange={(e) => handleMarksChange(rollNumber, "execution", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     onChange={(e) => handleMarksChange(rollNumber, "programSyntax", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     onChange={(e) => handleMarksChange(rollNumber, "vivaVoice", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1 text-center">
//                   {calculateTotalMarks(rollNumber)}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Buttons */}
//       <div className="flex justify-center space-x-4 mt-4">
//         <button onClick={handlePrint} className="px-4 py-2 bg-blue-500 text-white rounded">
//           Print
//         </button>
//         <button onClick={handleExportExcel} className="px-4 py-2 bg-green-500 text-white rounded">
//           Download Excel
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Name;
