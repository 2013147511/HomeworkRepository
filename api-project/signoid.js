var percent=0;

function printmyFullCreditsForGrad(){
    const myFullCreditsForGrad = document.getElementById('myFullCreditsForGrad').value;
    document.getElementById("result1").innerText = myFullCreditsForGrad;
  };

//학년에 따라 수강신청 확률 변경
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
//졸업신청여부에 따라 수강신청 확률 변경
function printmyAppliedForGrad(){
    const myAppliedForGrad = document.getElementById('myAppliedForGrad').value;
    document.getElementById("result3").innerText = myAppliedForGrad;
    if(myAppliedForGrad==1){
        percent+=-0.22;
    }
};
//선택한과목에 따라 수강신청 확률 변경
function printselectCourse(){
    const selectCourse = document.getElementById('selectCourse').value;
    document.getElementById("result4").innerText = selectCourse;
    switch(selectCourse){
        case 1: percent+=90*0.14-69*0.05+2.58*0.28-13.85+75*0.05;     // 정원 / 참여인원 / 평점 / 실시간온라인여부 / 전공자정원수
        break;
        case 2: percent+=80*0.14-145*0.05+3.3*0.28-13.85+56*0.05;
        break;
        case 3: percent+=100*0.14-177*0.05+3.81*0.28-13.85+70*0.05;
        break;
        case 4: percent+=140*0.14-161*0.05+4.17*0.28-13.85+120*0.05;
        break;
        case 5: percent+=90*0.14 -80*0.05+4*0.28-13.85+63*0.05;   //김영석교수님 분반으로 설정
        break;
    }
};
//총이수학점에 따라 수강신청 확률 변경
function printmyCredits(){
    const myCredits = document.getElementById('myCredits').value;
    document.getElementById("result5").innerText = myCredits;
    percent+=3.56*myCredits;
};
//직전학기이수학점에 따라 수강신청 확률 변경
function printmyLastSemesterCredits(){
    const myLastSemesterCredits = document.getElementById('myLastSemesterCredits').value;
    percent+=0.25*myLastSemesterCredits;
    const signoid=1/(1+Math.exp(percent));
    document.getElementById("result6").innerText ="이 과목의 수강신청성공확률은" +signoid+"%입니다";
};