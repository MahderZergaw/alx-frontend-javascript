export default getStudentsByLocation(student,location){
    return student.filter(()=>student.location===location);
}