var percent=0;
var signoid=0;
function initPercent(){
    percent=0;
    signoid=0;
}
function printmyFullCreditsForGrad(){
    const myFullCreditsForGrad = document.getElementById('myFullCreditsForGrad').value;
  };

//학년에 따라 수강신청 확률 변경
function printmySemesters(){
    const mySemesters = document.getElementById('mySemesters').value;
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
    if(myAppliedForGrad==1){
        percent+=-0.22;
    }
};
//선택한과목에 따라 수강신청 확률 변경
function printselectCourse(){
    const selectCourse = document.getElementById('selectCourse').value;
    switch(selectCourse){
        case 1: percent+=90*0.14-69*0.05+2.58*0.28-13.85+75*0.05-0*1.24;     // 정원 / 참여인원 / 평점 / 실시간온라인여부 / 전공자정원수 / 동영상컨텐츠
        break;
        case 2: percent+=80*0.14-145*0.05+3.3*0.28-13.85+56*0.05-1*1.24;
        break;
        case 3: percent+=100*0.14-177*0.05+3.81*0.28-13.85+70*0.05-0*1.24;
        break;
        case 4: percent+=140*0.14-161*0.05+4.17*0.28-13.85+120*0.05-0*1.24;
        break;
        case 5: percent+=90*0.14 -80*0.05+4*0.28-13.85+63*0.05-0*1.24;   //김영석교수님 분반으로 설정
        break;
    }
};
//마일리지에 따라 수강신청 확률 변경
function printCredits(){
    const Credits = document.getElementById('Credits').value;
    percent+=0.11*Credits;
};
//총이수학점에 따라 수강신청 확률 변경
function printmyAllCredits(){
    const myAllCredits = document.getElementById('myAllCredits').value;
    percent+=3.56*myAllCredits;
};
//직전학기이수학점에 따라 수강신청 확률 변경
function printmyLastSemesterCredits(){
    const myLastSemesterCredits = document.getElementById('myLastSemesterCredits').value;
    percent+=0.25*myLastSemesterCredits;
};

function printSuccessRate(){
    signoid=100*(1/(1+Math.exp(-1*percent)));
    document.getElementById("result").innerText ="이 과목의 수강신청성공확률은" +signoid.toFixed(2)+"%입니다";
}


function printselectCourse2(){
    const selectCourse2 = document.getElementById('selectCourse2').value;
    switch(selectCourse2){
        case 이경호/인터넷프로그래밍: document.getElementById("Mon2").innerText ="이경호/인터넷프로그래밍";document.getElementById("Mon3").innerText ="이경호/인터넷프로그래밍";    // 정원 / 참여인원 / 평점 / 실시간온라인여부 / 전공자정원수 / 동영상컨텐츠
        break;
        case 이수경/이산구조: percent+=80*0.14-145*0.05+3.3*0.28-13.85+56*0.05-1*1.24;
        break;
        case 황성재/자료구조: percent+=100*0.14-177*0.05+3.81*0.28-13.85+70*0.05-0*1.24;
        break;
        case 차호정/운영체제: percent+=140*0.14-161*0.05+4.17*0.28-13.85+120*0.05-0*1.24;
        break;
        case 김영석/컴퓨터아키텍쳐: percent+=90*0.14 -80*0.05+4*0.28-13.85+63*0.05-0*1.24;   //김영석교수님 분반으로 설정
        break;
    }
};

