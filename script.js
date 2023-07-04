const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];
  
// 1. Функція getSubjects
function getSubjects(student) {
    const subjects = Object.keys(student.subjects);
    const formattedSubjects = subjects.map(subject => {
        return subject.charAt(0).toUpperCase() + subject.slice(1).replace("_", " ");
    });
    return formattedSubjects;
}
  
console.log(getSubjects(students[0]));  // За замовчуванням тут і далі обрано першого студента за індексом 0
  
// 2. Функція getAverageMark
function getAverageMark(student) {
    const subjects = Object.values(student.subjects);
    const marks = subjects.flat();
    const averageMark = marks.reduce((sum, mark) => sum + mark) / marks.length;
    return averageMark.toFixed(2);
}

console.log(getAverageMark(students[0])); // Індекс міняється вручну
  
// 3. Функція getStudentInfo
function getStudentInfo(student) {
    const studentInfo = {
        course: student.course,
        name: student.name,
        averageMark: getAverageMark(student)
    };
    return studentInfo;
}

console.log(getStudentInfo(students[0])); // Індекс міняється вручну
  
// 4. Функція getStudentsNames
function getStudentsNames(students) {
    const names = students.map(student => student.name);
    return names.sort();
}

console.log(getStudentsNames(students));  // ["Anton", "Tanya", "Victor"]
  
// 5. Функція getBestStudent
function getBestStudent(students) {
    let bestStudent = students[0];
    let highestAverageMark = parseFloat(getAverageMark(students[0]));

    for (let i = 1; i < students.length; i++) {
        const currentAverageMark = parseFloat(getAverageMark(students[i]));
        if (currentAverageMark > highestAverageMark) {
            highestAverageMark = currentAverageMark;
            bestStudent = students[i];
        }
    }

    return bestStudent.name;
}

console.log(getBestStudent(students));  // "Anton"
  
// 6. Функція calculateWordLetters
function calculateWordLetters(word) {
    const letters = {};
    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        if (letters.hasOwnProperty(letter)) {
            letters[letter]++;
        } else {
            letters[letter] = 1;
        }
    }
    return letters;
}

console.log(calculateWordLetters("тест"));  // { "т": 2, "е": 1, "с": 1 }