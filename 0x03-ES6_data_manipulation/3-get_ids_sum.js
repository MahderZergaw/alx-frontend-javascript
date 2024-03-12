export default function getStudentIdsSum(students){
students.reduce((result,student) => result+student.id,0);
}
