let students = [
    {name: 'John', rollNumber: 12, marks: 30},
    {name: 'Peter', rollNumber: 10, marks: 55},
    {name: 'Thomas', rollNumber: 33, marks: 90},
    {name: 'Mark', rollNumber: 34, marks: 70},
    {name: 'Jamie', rollNumber: 30, marks:45}
]

// let capitalStudents = students.filter((student) => student.marks > 60 && student.rollNumber > 15)
// console.log(capitalStudents)

// let sumOfMarks = students.reduce((acc, curr) => (acc + curr.marks), 0) 

// console.log(sumOfMarks)
// let namesMore60 = students.filter(student => student.marks > 60).map(student => student.name)

// console.log(namesMore60)


let totalMarls = students.map(student => {
    if (student.marks < 60) {
        student.marks += 20
    }
    return student
}).filter(student => student.marks > 60).reduce((acc, curr) => (acc + curr.marks), 0)


console.log(totalMarls)


let totalMarks = students.forEach(student => {
    if (student.marks < 60) {
        student.marks += 20
    }
    return student
})

console.log(totalMarks)
console.log(students)

