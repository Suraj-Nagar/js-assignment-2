
const students=[
    {
    name:'mithium',
    score:99,
    },
    {
    name:'lithium',
    score:75,
    },
    {
    name:'ammonium',
    score:92,
    },
    {
    name:'carbon',
    score:66,
    },
    {
    name:'hydrogen',
    score:2,
    }
    ];
    function checkresult(studentName){
    
        const index=students.findIndex(student => {
        return student.name==studentName
        })
    
        if(students[index].score>90){
            console.log(`Congratulations ${studentName}! You have cleared the exam.`)
        }
    }
    checkresult('mithium');

