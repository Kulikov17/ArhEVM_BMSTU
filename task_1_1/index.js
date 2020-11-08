"use strict";

// проверка уникальности фамилии
function checkUniqeSurname(surname, children) {
    for (let i = 0; i < children.length; i++) {
        if (children[i].surname === surname) {
            return false;
        }
    }
    return true;
}

// создание ребенка
function Create(surname_person, age_person, children) {
    if (checkUniqeSurname(surname_person, children)) {
        children.push({surname: surname_person, age: age_person });
    }
    else {
        console.log("Not create " + surname_person +" "+ age_person + " because surname not uniqle")
    }
}

// прочтение ребенка
function Read(child) {
    console.log(child);
}

// прочтение всех детей
function ReadAll(children) {
    for (let i = 0; i < children.length; i++) {
        Read(children[i]);
    }
}

// обновить фамилию ребенка
function UpdateSurname(new_surname, child) {
    child.surname = new_surname;
}

// обновить возраст ребенка
function UpdateAge(new_age, child) {
    child.age = new_age;
}

// обновить все данные ребенка
function UpdateALLParametrs(new_surname, new_age, child) {
    UpdateSurname(new_surname, child);
    UpdateAge(new_age, child);
}

// удалить ребенка
function Delete(surname, children) {
    for (let i = 0; i < children.length; i++) {
        if (children[i].surname === surname) {
            children.splice(i,1);
            return;
        }
    }
}

// получение среднего возраста детей
function MiddleAge(children) {
    let m_age = 0;
    for (let i = 0; i < children.length; i++) {
        m_age += children[i].age;
    }
    return m_age / children.length
}

// получение информации о самом старшем ребенке
function OlderChild(children) {
    let olderChild = children[0];
    for (let i = 1; i < children.length; i++) {
        if (children[i].age > olderChild.age)
            olderChild = children[i];
    }
    return olderChild
}

// получение информации о детях, возраст которых входит в заданный отрезок
function ChildrenNeedAge(children, start, stop) {
    let children_symbol = [];
    for (let i = 0; i < children.length; i++) {
        if (children[i].age >= start && children[i].age <= stop) {
            children_symbol.push({surname:children[i].surname, age: children[i].age});
        }
    }
    return children_symbol;
}

// получение информации о детях, фамилия которых начинается с заданной буквы
function ChildrenBeginSymbol(children, s) {
    let children_symbol = [];
    for (let i = 0; i < children.length; i++) {
        if (children[i].surname[0] === s)
            children_symbol.push({surname:children[i].surname, age: children[i].age});
    }
    return children_symbol;
}

// получение информации о детях, фамилия которых длиннее заданного количества символов
function ChildrenLongerSurname(children, len) {
    let children_symbol = [];
    for (let i = 0; i < children.length; i++) {
        if (children[i].surname.length > len)
            children_symbol.push({surname:children[i].surname, age: children[i].age});
    }
    return children_symbol;
}

// получение информации о детях, фамилия которых начинается с гласной буквы
function ChildrenBeginVowel(children) {
    let vowel = ['A', 'E', 'U', 'Y', 'I', 'O'];
    let children_symbol = [];
    for (let i = 0; i < children.length; i++) {
        if (vowel.indexOf(children[i].surname[0], 0) != -1)
            children_symbol.push({surname:children[i].surname, age: children[i].age});
    }
    return children_symbol;
}

let children = [];

console.log("Creating");
Create("Ivanov", 13, children);
Create("Petrov", 14, children);
Create("Kulikov", 15, children);
Create("Petrov", 10, children);
Create("Yusupov", 17, children);
Create("Kovalenko", 16, children);
Create("Napasenkov", 17, children);
Create("Antonov", 17, children);
ReadAll(children);

console.log("\nChild update");
UpdateALLParametrs("Drozdov", 10, children[0]);
Read(children[0]);

console.log("\nDeleting");
Delete("Yusupov", children);
ReadAll(children);

console.log("\nMiddle age")
console.log(MiddleAge(children));

console.log("\nOlder child");
console.log(OlderChild(children));

console.log("\nNeed children 16-17");
console.log(ChildrenNeedAge(children, 16, 17));
console.log("\nNeed children 7-8");
console.log(ChildrenNeedAge(children, 7, 8));

console.log("\nChildren Begin Surname K");
console.log(ChildrenBeginSymbol(children, 'K'));

console.log("\nChildren with longer surname 6 count of symbols");
console.log(ChildrenLongerSurname(children, 6));

console.log("\nChildren Begin Vowel surname");
console.log(ChildrenBeginVowel(children));

