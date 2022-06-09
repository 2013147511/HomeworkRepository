var percent=0;
var signoid=0;
var selectCourseName;
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

//해당 과목 수강신청 성공확률 출력
function printSuccessRate(){
    signoid=100*(1/(1+Math.exp(-1*percent)));
    document.getElementById("result").innerText ="이 과목의 수강신청성공확률은" +signoid.toFixed(2)+"%입니다";
}


function printselectCourse2(){
    const selectCourse2 = document.getElementById('selectCourse2').value;
    selectCourseName = selectCourse2;
    
};

//고른 과목에 따라 시간표에 해당과목 추가
function addCoursetoTable(){
    const selectCourseName1 = document.getElementById('selectCourse2').value;
    switch(selectCourseName1){
        case "이경호/인터넷프로그래밍": document.getElementById("Mon2").innerText ="이경호/인터넷프로그래밍";
                                      document.getElementById("Wed2").innerText ="이경호/인터넷프로그래밍";  
                                      document.getElementById("Wed3").innerText ="이경호/인터넷프로그래밍";  // 정원 / 참여인원 / 평점 / 실시간온라인여부 / 전공자정원수 / 동영상컨텐츠
        break;
        case "이수경/이산구조":      document.getElementById("Tue3").innerText ="이수경/이산구조";   
                                    document.getElementById("Wed11").innerText ="이수경/이산구조";
                                    document.getElementById("Wed12").innerText ="이수경/이산구조";
        break;
        case "황성재/자료구조": document.getElementById("Tue6").innerText ="황성재/자료구조";
                               document.getElementById("Thu6").innerText ="황성재/자료구조";  
                               document.getElementById("Thu7").innerText ="황성재/자료구조";
        break;
        case "차호정/운영체제":  document.getElementById("Mon8").innerText ="차호정/운영체제";
                                document.getElementById("Wed3").innerText ="차호정/운영체제";  
                                document.getElementById("Wed4").innerText ="차호정/운영체제";
        break;
        case "김영석/컴퓨터아키텍쳐": document.getElementById("Tue8").innerText ="김영석/컴퓨터아키텍쳐";
                                    document.getElementById("Thu6").innerText ="김영석/컴퓨터아키텍쳐";  
                                    document.getElementById("Thu7").innerText ="김영석/컴퓨터아키텍쳐";
        break;
        case "이인권/객체지향프로그래밍": document.getElementById("Tue8").innerText ="이인권/객체지향프로그래밍";
                                        document.getElementById("Tue9").innerText ="이인권/객체지향프로그래밍";  
                                        document.getElementById("Thu11").innerText ="이인권/객체지향프로그래밍";
        break;
        case "벅스텔러번트/컴퓨터프로그래밍": document.getElementById("Thu5").innerText ="벅스텔러번트/컴퓨터프로그래밍";
                                            document.getElementById("Thu6").innerText ="벅스텔러번트/컴퓨터프로그래밍";  
                                            document.getElementById("Thu9").innerText ="벅스텔러번트/컴퓨터프로그래밍";
                                            document.getElementById("Thu10").innerText ="벅스텔러번트/컴퓨터프로그래밍";
        break;
        case "이병주/컴퓨터프로그래밍":       document.getElementById("Thu5").innerText ="이병주/컴퓨터프로그래밍";
                                            document.getElementById("Thu6").innerText ="이병주/컴퓨터프로그래밍";  
                                            document.getElementById("Thu9").innerText ="이병주/컴퓨터프로그래밍";
                                            document.getElementById("Thu10").innerText ="이병주/컴퓨터프로그래밍";                                    
        break;
        case "최종현/컴퓨터과학입문":     document.getElementById("Wed8").innerText ="최종현/컴퓨터과학입문";
                                        document.getElementById("Fri6").innerText ="최종현/컴퓨터과학입문";  
                                        document.getElementById("Fri7").innerText ="최종현/컴퓨터과학입문";
        break;
        case "이경우/컴퓨터아키텍쳐":     document.getElementById("Tue2").innerText ="이경우/컴퓨터아키텍쳐";
                                        document.getElementById("Tue3").innerText ="이경우/컴퓨터아키텍쳐";  
                                        document.getElementById("Thu2").innerText ="이경우/컴퓨터아키텍쳐";
        break;
        case "이인권/컴퓨터그래픽스":     document.getElementById("Tue6").innerText ="이인권/컴퓨터그래픽스";
                                        document.getElementById("Tue7").innerText ="이인권/컴퓨터그래픽스";  
                                        document.getElementById("Thu12").innerText ="이인권/컴퓨터그래픽스";
        break;
        case "조성배/인공지능":          document.getElementById("Mon6").innerText ="조성배/인공지능";
                                        document.getElementById("Mon7").innerText ="조성배/인공지능";  
                                        document.getElementById("Wed6").innerText ="조성배/인공지능";
        break;
        case "소프트웨어종합설계":        document.getElementById("Wed9").innerText ="소프트웨어종합설계";
                                        document.getElementById("Fri7").innerText ="소프트웨어종합설계";  
                                        document.getElementById("Fri8").innerText ="소프트웨어종합설계";
        break;
        case "송도경/정보보호":          document.getElementById("Mon6").innerText ="송도경/정보보호";
                                        document.getElementById("Mon7").innerText ="송도경/정보보호";  
                                        document.getElementById("Wed6").innerText ="송도경/정보보호";
        break;
        case "김선주/컴퓨터비전":          document.getElementById("Tue3").innerText ="김선주/컴퓨터비전";
                                        document.getElementById("Tue4").innerText ="김선주/컴퓨터비전";  
                                        document.getElementById("Thu3").innerText ="김선주/컴퓨터비전";
        break;
        case "조성배/데이타마이닝":       document.getElementById("Mon2").innerText ="조성배/데이타마이닝";
                                        document.getElementById("Wed2").innerText ="조성배/데이타마이닝";  
                                        document.getElementById("Wed3").innerText ="조성배/데이타마이닝";
        break;
        case "이진호/멀티코어및GPU프로그래밍":       document.getElementById("Wed7").innerText ="이진호/멀티코어및GPU프로그래밍";
                                                    document.getElementById("Wed8").innerText ="이진호/멀티코어및GPU프로그래밍";  
                                                    document.getElementById("Fri6").innerText ="이진호/멀티코어및GPU프로그래밍";
        break;
        case "박노성/기계학습":       document.getElementById("Tue5").innerText ="박노성/기계학습";
                                        document.getElementById("Thu4").innerText ="박노성/기계학습";  
                                        document.getElementById("Thu5").innerText ="박노성/기계학습";
        break;
        case "여진영/빅데이터":       document.getElementById("Tue6").innerText ="여진영/빅데이터";
                                        document.getElementById("Tue7").innerText ="여진영/빅데이터";  
                                        document.getElementById("Thu6").innerText ="여진영/빅데이터";
        break;
        default : 
        break;
    }

}