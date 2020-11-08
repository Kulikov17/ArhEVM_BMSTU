"use strict";

// проверка уникальности студенческого билета
function checkUniqeStudentCard(numberStudentCard, student) {
    for (let i = 0; i < student.length; i++) {
        if (student[i].numberStudentCard === numberStudentCard) {
            console.log(student[i]);
            return false;
        }
    }
    return true;
}

// создание студента
function Create(personalGroup, personalNumberStudentCard, personalMark, student) {
    if (checkUniqeStudentCard(personalNumberStudentCard, student)) {
        student.push( {
            group: personalGroup, 
            numberStudentCard: personalNumberStudentCard,
            mark: personalMark 
        });
    }
    else {
        console.log("Not create student" + personalNumberStudentCard + " because already exist")
    }
}

// прочтение информации о студенте
function Read(student) {
    console.log(student);
}

// прочтение информации о студентах
function ReadAll(student) {
    for (let i = 0; i < student.length; i++) {
        Read(student[i]);
    }
}

// обновить группу студента
function UpdateGroupStudent(newGroup, student) {
    student.group = newGroup;
}

// обновить студенческий билет студента
function UpdateNumberStudentCard(newNumberStudentCard, student) {
    student.numberStudentCard = newNumberStudentCard;
}

// обновить оценки студента
function UpdateMarkStudent(newMark, student) {
    student.mark = newMark;
}

// обновить данные студента
function UpdateALLParametrs(newGroup, newNumberStudentCard, newMark, student) {
    UpdateGroupStudent(newGroup, student);
    UpdateNumberStudentCard(newNumberStudentCard, student);
    UpdateMarkStudent(newMark, student);
}

// удалить студента
function Delete(numberStudentCard, student) {
    for (let i = 0; i < student.length; i++) {
        if (student[i].numberStudentCard === numberStudentCard) {
            student.splice(i,1);
            return;
        }
    }
}

// нвхождение средней оценки студента
function MiddleMark(student) {
    let m_mark = 0;
    for (let i = 0; i < student.mark.length; i++) {
        m_mark += student.mark[i];
    }
    if (student.mark.length == 0)
        return m_mark;
    return m_mark / student.mark.length
}

// получение информации о студентах в заданной группе
function GetStudentsFromGroup(group, student) {
    let groupStudents = [];
    for (let i = 0; i < student.length; i++) {
        if (student[i].group === group) {
            groupStudents.push(student[i]);
        }
    }
    return groupStudents;
}

// максимальное кол-во оценок у студентов
function FindMaxCountMark(student) {
    let mcount = 0;
    for (let i = 0; i < student.length; i++) {
        if (student[i].mark.length > mcount) {
            mcount = student[i].mark.length;
        }
    }
    return mcount;
}

// получение студента, у которого наибольшее количество оценок в заданной группе
function StudentsWithTheMostMarks(student) {
    let studentsWithTheMostMarks = [];
    let mcount = FindMaxCountMark(student);
    for (let i = 0; i < student.length; i++) {
        if (student[i].mark.length == mcount) {
            studentsWithTheMostMarks.push(student[i]);
        }
    }
    return studentsWithTheMostMarks;
}

// получение студента, у которого нет оценок
function StudentsWithNoMarks(student) {
    let studentsWithNoMarks = [];
    for (let i = 0; i < student.length; i++) {
        if (student[i].mark.length == 0) {
            studentsWithNoMarks.push(student[i]);
        }
    }
    return studentsWithNoMarks;
}

let student = [];

console.log("Creating");
Create("IU7-52", 100, [5, 4, 5], student);
Create("IU7-51", 101, [5, 3], student);
Create("IU7-52", 102, [5], student);
Create("IU7-53", 103, [5, 2, 5], student);
Create("IU7-53", 103, [4, 3, 3], student);
Create("IU7-52", 104, [4, 3], student);
Create("IU7-51", 105, [2, 1], student);
Create("IU7-53", 106, [2, 2], student);
Create("IU7-54", 107, [], student);
ReadAll(student);

console.log("\nDelete Student 102");
Delete(102, student);
ReadAll(student);

console.log("\nUpdate Student[5]");
console.log("Before");
Read(student[5]);
UpdateALLParametrs("IU7-54", 118, [3, 4, 5], student[5]);
console.log("After");
Read(student[5]);

console.log("\nMiddle mark student[0]");
console.log(MiddleMark(student[0]));
console.log("\nMiddle mark student[6]");
console.log(MiddleMark(student[6]));

console.log("\nStudents from group IU7-52");
console.log(GetStudentsFromGroup("IU7-52", student));

console.log("\nStudent with the most marks");
console.log(StudentsWithTheMostMarks(student));

console.log("\nStudent with no marks");
console.log(StudentsWithNoMarks(student));