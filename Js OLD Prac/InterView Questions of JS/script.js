let Students = [
  "yousaf",
  "Ali",
  "Zaulqarnin",
  "Hasnian",
  "Mohsin",
  "Ziaulhaq",
  "abdurrehman",
  "abdullahkhan",
];

for (const student of Students) {
  let len = student.length;
  let house = "";

  if (len <= 4) {
    house = "Dear Student Your House is  No 1 floor 1";
  } else if (len <= 7) {
    house = "Dear Student Your House is  No 2 floor 3";
  } else if (len <= 10) {
    house = "Dear Student Your House is  No 5 floor 4";
  } else {
    house = "Dear Student Your House is  No 23 floor 6";
  }

  console.log(`${student} → ${house}`);
}
