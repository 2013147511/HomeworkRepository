var percent;

function printmyFullCreditsForGrad(){
    const myFullCreditsForGrad = document.getElementById('myFullCreditsForGrad').value;
    document.getElementById("result1").innerText = myFullCreditsForGrad;
  };


function printmySemesters(){
    const mySemesters = document.getElementById('mySemesters').value;
    document.getElementById("result2").innerText = mySemesters;
};

function printmyAppliedForGrad(){
    const myAppliedForGrad = document.getElementById('myAppliedForGrad').value;
    document.getElementById("result3").innerText = myAppliedForGrad;
};

function printselectCourse(){
    const selectCourse = document.getElementById('selectCourse').value;
    document.getElementById("result4").innerText = selectCourse;
};

function printmyCredits(){
    const myCredits = document.getElementById('myCredits').value;
    document.getElementById("result5").innerText = myCredits;
};

function printmyLastSemesterCredits(){
    const myLastSemesterCredits = document.getElementById('myLastSemesterCredits').value;
    document.getElementById("result6").innerText = myLastSemesterCredits;
};