export default function getListStudentIds(studentList) {
    if (Array.isArray(studentList)) {
      const idList = [];
      for (const student of studentList) {
        idList.push(student.id);
      }
      return idList;
    }
    return [];
  }
  