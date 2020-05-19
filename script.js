let score = {
    math: 0,
    physics: 0,
    chem: 0,
    bio: 0,
    eng: 0
}

let paraDOM;

setTimeout(() => {
    paraDOM = document.getElementById('para');
    paraDOM.style.display = 'none';
    console.log(paraDOM)
}, 0);

function subScore(name, event) {
    if(event.target.value.length <= 0) {
        paraDOM.style.display = 'none';
    }
    score[name] = event.target.value;
}

function getGrade(perc) {
    let grades;
    if(perc <= 100  && perc >= 80){
        grades = 'A';
      }else if(perc <= 79  && perc >= 60){
         grades = 'B';
      }else if(perc <= 59  && perc >= 40){
         grades = 'C';
      }else{
         grades = 'F';
      }
      return grades;
}

function btnSubmit(event) {
    event.preventDefault();
    const scoreValue = Object.values(score);
    if(scoreValue.includes(0) || scoreValue.includes("")) {
        alert('Please fill all fields to get score');
        return;
    } else {
        const res = scoreValue.reduce((a,b) => {
            return parseInt(a) + parseInt(b)
        }, 0);
        const marksDOM = document.getElementById('marks');
        const gradeDOM = document.getElementById('grade');
        paraDOM.style.display = 'block';
        marksDOM.innerHTML = `Out of 500 your total score is ${res} and percentage is ${(res/5)}%`
        gradeDOM.innerHTML = `Your grade is ${getGrade(res)}. You are ${res <= 33 ? 'FAIL' : 'PASS'}`
    }
}
