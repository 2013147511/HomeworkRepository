var percent=0;

function printmyFullCreditsForGrad(){
    const myFullCreditsForGrad = document.getElementById('myFullCreditsForGrad').value;
    document.getElementById("result1").innerText = myFullCreditsForGrad;
  };


function printmySemesters(){
    const mySemesters = document.getElementById('mySemesters').value;
    document.getElementById("result2").innerText = mySemesters;
    if(mySemesters<3){
        percent+= -0.33;
    }else if(mySemesters<5){
        percent+= 0;
    }else if(mySemesters<7){
        percent+= -0.36;
    }else if(mySemesters<9){
        percent+= -1.19;
    }else{
        percent+= 12.65;
    }
};

function printmyAppliedForGrad(){
    const myAppliedForGrad = document.getElementById('myAppliedForGrad').value;
    document.getElementById("result3").innerText = myAppliedForGrad;
    if(myAppliedForGrad==1){
        percent+=-0.22;
    }
};

function printselectCourse(){
    const selectCourse = document.getElementById('selectCourse').value;
    document.getElementById("result4").innerText = selectCourse;
};

function printmyCredits(){
    const myCredits = document.getElementById('myCredits').value;
    document.getElementById("result5").innerText = myCredits;
    percent+=3.56*myCredits;
};

function printmyLastSemesterCredits(){
    const myLastSemesterCredits = document.getElementById('myLastSemesterCredits').value;
    percent+=0.25*myLastSemesterCredits;
    document.getElementById("result6").innerText ="이 과목의 수강신청성공확률은" +percent+"입니다";
};