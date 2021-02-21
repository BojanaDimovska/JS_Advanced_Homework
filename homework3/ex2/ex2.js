fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json")
.then((response) => response.json())
.then((students) => {
    // console.log(students);
    console.log("All students with average grade higher than 3:");
    let allStudentsAvgHigherThan3 = students.filter(student => student.averageGrade > 3);
    console.log(allStudentsAvgHigherThan3);

    console.log("All Female students with an average grade of 5:");
    let allFemaleAvg5 = students.filter(student => student.gender === 'Female' && student.averageGrade === 5).map(student => student.firstName);
    console.log(allFemaleAvg5);

    console.log("All Male students full names who live in Skopje and are over 18 years:");
    let allMaleWhoLiveInSkopjeOver18 = students.filter(student => student.gender === 'Male' && student.city === 'Skopje' && student.age > 18).map(student => `${student.firstName} ${student.lastName}`);
    console.log(allMaleWhoLiveInSkopjeOver18);
    
    console.log("The average grade of all Female students that are over the age of 24");
    let allFemaleOver24AvgGrade = students.filter(student => student.gender === 'Female' && student.age > 24).map(student => student.averageGrade).reduce((sum, acc) => sum + acc, 0)/58;
    //All females with age over 24 are 58 in total
    console.log(allFemaleOver24AvgGrade);

    console.log("All Male students with a name starting with B and average grade over 2");
    let allMaleWithInitialBAvgOver2 = students.filter(student => student.gender === 'Male' && student.averageGrade > 2 && student.firstName[0] === 'B').map(student => student.firstName);
    console.log(allMaleWithInitialBAvgOver2);
})
.catch((err) => err)