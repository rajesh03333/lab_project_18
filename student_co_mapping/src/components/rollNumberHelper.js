// export const generateRollNumbers = (academicYear, branch, section) => {
    
//     if (!academicYear || !branch || !section) return [];
  
//     const year = academicYear.slice(-2); // Extract last two digits of the academic year
//     const branchMap = {
//       CSE: "05",
//       IT: "12",
//       ECE: "04",
//       EEE: "02",
//       CSM: "61",
//       CSD: "67",
//     };
  
//     const branchShortCode = branchMap[branch];
//     if (!branchShortCode) return [];
  
//     const baseRollNumber = `${year}B81A${branchShortCode}`;
  
//     const sectionMap = {
//       A: 1,
//       B: 65,
//       C: 129,
//       D: 193,
//       E: 257,
//       F: 321,
//       G: 385,
//       H: 449,
//       I: 513,
//       J: 577,
//     };
  
//     const toAlphanumeric = (num) => {
//       if (num < 100) {
//         return String(num).padStart(2, "0");
//       }
  
//       const index = num - 100;
//       const firstLetter = Math.floor(index / 10);
//       const secondLetter = index % 10;
  
//       if (index < 260) {
//         return String.fromCharCode(firstLetter + 65) + secondLetter;
//       }
  
//       const firstLetterIndex = Math.floor(index / 260);
//       const secondLetterIndex = index % 260;
//       return (
//         String.fromCharCode(firstLetterIndex + 65) +
//         String.fromCharCode(secondLetterIndex + 65)
//       );
//     };
  
//     if (!(section in sectionMap)) return [];
  
//     const sectionStart = sectionMap[section];
//     let sectionRollNumbers = [];
  
//     for (let i = sectionStart; i < sectionStart + 64; i++) {
//       let rollNumberSuffix = toAlphanumeric(i);
//       sectionRollNumbers.push(`${baseRollNumber}${rollNumberSuffix}`);
//     }
//     // console.log(academicYear);
//     // console.log(branch);
//     // console.log(section);
//     // console.log(sectionRollNumbers);
//     return sectionRollNumbers;
//   };
  

export const generateRollNumbers = (academicYear, branch, section) => {
  if (!academicYear || !branch || !section) return [];

  const year = academicYear.slice(-2);
  const branchMap = {
    CSE: "05",
    IT: "12",
    ECE: "04",
    EEE: "02",
    CSM: "61",
    CSD: "67",
    AIML: "73",
    AIDS: "72",
  };

  const branchShortCode = branchMap[branch];
  if (!branchShortCode) return [];

  const baseRollNumber = `${year}B81A${branchShortCode}`;

  const sectionMap = {
    A: 1,
    B: 65,
    C: 129,
    D: 193,
    E: 257,
    F: 321,
    G: 385,
    H: 449,
    I: 513,
    J: 577,
  };

  const toAlphanumeric = (num) => {
    if (num < 100) {
      return String(num).padStart(2, "0");
    }

    let index = num - 100;
    if (index < 260) {
      let firstLetter = String.fromCharCode(65 + Math.floor(index / 10));
      let secondDigit = index % 10;

      if (firstLetter === "I") firstLetter = "J";
      if (firstLetter === "O") firstLetter = "P";

      return `${firstLetter}${secondDigit}`;
    }

    const firstLetterIndex = Math.floor((index - 260) / 26);
    const secondLetterIndex = (index - 260) % 26;

    let firstLetter = String.fromCharCode(65 + firstLetterIndex);
    let secondLetter = String.fromCharCode(65 + secondLetterIndex);

    if (firstLetter === "I") firstLetter = "J";
    if (firstLetter === "O") firstLetter = "P";
    if (secondLetter === "I") secondLetter = "J";
    if (secondLetter === "O") secondLetter = "P";

    return `${firstLetter}${secondLetter}`;
  };

  if (!(section in sectionMap)) return [];

  const sectionStart = sectionMap[section];
  let sectionRollNumbers = [];

  for (let i = sectionStart; i < sectionStart + 64; i++) {
    let rollNumberSuffix = toAlphanumeric(i);
    sectionRollNumbers.push(`${baseRollNumber}${rollNumberSuffix}`);
  }

  console.log(sectionRollNumbers);
  return sectionRollNumbers;
};

