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
    let score = parseInt(perc)
    if(score <= 100  && score >= 80){
        grades = 'A';
      }else if(score <= 79  && score >= 60){
         grades = 'B';
      }else if(score <= 59  && score >= 40){
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
        gradeDOM.innerHTML = `Your grade is ${getGrade(res/5)}. You are ${(res/5) <= 33 ? 'FAIL' : 'PASS'}`
    }
}
