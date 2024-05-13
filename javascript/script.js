let students = [
    {name: 'John', rollNumber: 31, marks: 80},
    {name: 'Peter', rollNumber: 32, marks: 85},
    {name: 'Thomas', rollNumber: 33, marks: 90},
    {name: 'Mark', rollNumber: 34, marks: 70},
]

let capitalStudents = students.map((student) => student.name.toUpperCase())
console.log(capitalStudents)
