//  %%%%%%%%%%%%%%%%%%%%%%%%%%%         filter()     %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


// filter() kya hota hai? (Simple words)
// filter array ka method hai jo:
// 👉 sirf woh values rakhta hai jo condition pass karein

let users = [
  {
    name: "Hasnain",
    age: 21,
    education: "BS",
    field: "Computer Science",
    experience: "Web Developer",
  },
  {
    name: "Ali",
    age: 23,
    education: "FSc",
    field: "Computer Science",
    experience: "Web Designer",
  },
  {
    name: "Ahmed",
    age: 25,
    education: "BS",
    field: "Software Engineering",
    experience: "Frontend Developer",
  },
  {
    name: "Sara",
    age: 22,
    education: "BS",
    field: "Information Technology",
    experience: "UI/UX Designer",
  },
  {
    name: "Ayesha",
    age: 24,
    education: "MS",
    field: "Data Science",
    experience: "Data Analyst",
  },
  {
    name: "Usman",
    age: 26,
    education: "BS",
    field: "Cyber Security",
    experience: "Security Analyst",
  },
  {
    name: "Bilal",
    age: 20,
    education: "FSc",
    field: "Computer Science",
    experience: "Student",
  },
  {
    name: "Hina",
    age: 27,
    education: "MBA",
    field: "Management",
    experience: "Project Manager",
  },
  {
    name: "Zain",
    age: 23,
    education: "BS",
    field: "Artificial Intelligence",
    experience: "ML Engineer",
  },
  {
    name: "Hamza",
    age: 28,
    education: "BS",
    field: "Computer Science",
    experience: "Full Stack Developer",
  },
];

let result = users.filter((u) => u.education === "BS"); // Print those Users Only Who Education is BS
console.log(result);
