class Student {
    grades = new Map();
    constructor(name,grades){
        this.name = name;
        this.grades = grades;
    }
    calcFinalGrade(){
        let count = 0;
        let calc = 0;
        this.grades.forEach((subject, grade)=>{
            calc = grade + calc;
            count ++;
        })
        return calc / count
    }
}
const grades = new Map([
    ["matematica", 19],
    ["english", 17]
]);
const student = new Student("Nelson",grades)
console.log(student.calcFinalGrade());