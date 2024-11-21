// Source: https://www.codewars.com/dashboard

export default function getGrade(s1, s2, s3) {
  let avgGrade = (s1 + s2 + s3) / 3;
  if (avgGrade < 60) return "F";
  if (avgGrade < 70) return "D";
  if (avgGrade < 80) return "C";
  if (avgGrade < 90) return "B";
  return "A";
}
