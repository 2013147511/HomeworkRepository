var percent=0;  
var finalPercent=1;  
var signoid=0; 
var selectCourseName;
var multicsMileage=1;



var courseScedule = new object(); // 시간표 객체

var signoidReady1=0; //내 정보에서 받아서 계산가능한 값만 더할 변수
var intercept = 11.63; // intercept 값
var totalNumber ; // 정원
var numofParticipants; // 참여인원
var totalNumber_1; //정원_1학년
var majorElective = new Boolean(false); // 종별전선
var majorRequired = new Boolean(false); // 종별전필
var studentGrade; //학생들 평점
var Mileage; // 넣은 마일리지
var numOfSubjects; // 신청과목수
var applyForGrad = new Boolean(false); //졸업신청여부
var firstClass = new Boolean(false); //초수강여부
var totalCredits; //총이수학점
var gradCredits; //졸업이수학점
var lastCredits; //직전학기이수학점
var averageCredits; // 학기당 평균 수강학점
var semester; //학기수
var online = new Boolean(false); //실시간온라인
var video = new Boolean(false);  //동영상콘텐츠
var numOfMajor;  //전공자 정원
var grad_is_NAY; //평점is NAY
var MajorIsIncluded = new Boolean(false); //전공자정원포함여부


function signoidReady(){
    signoidReady1=intercept;  //intercept를 기본으로 더합니다.
    var one_one = 0;  //각 학기 수강학점
    var one_two = 0;
    var two_one = 0;
    var two_two = 0;
    var thr_one = 0;
    var thr_two = 0;
    var four_one =0;
    var four_two =0;
    var five_one =0;
    var five_two =0;
    var six_one = 0;
    var six_two = 0;

    var myMajor = document.getElementsByName("myMajor");  // 단과대가 공과대학이면 MajorIsIncluded 를 true로 바꾸고 공과대학이아니면 그대로 false값을 가집니다.
    myMajor = myMajor[0].options[myMajor[0].selectedIndex].value;
    if(myMajor=="공과대학"){
    MajorIsIncluded = true;
    }else{
    MajorIsIncluded = false;
    }

    gradCredits = document.getElementsByName("myFullCreditsForGrad");  //gradCredits 에 졸업이수학점을 저장합니다.
    gradCredits = gradCredits[0].value;
    gradCredits *=1; //spring to int

    semester = document.getElementsByName("mySemesters");  //semester 에 학기수를 저장합니다.
    semester = semester[0].value;                           // 3, 4, 5학년에 따라 signoidReady1값에 알맞은 상수를 더해줍니다.
    if(semester>=8){
        signoidReady1=signoidReady1 +12.65;
    }else if(semester>=6){
        signoidReady1=signoidReady1 -1.19;
    }else if(semester>=4){
        signoidReady1=signoidReady1 -0.36;
    }else{
        signoidReady1=signoidReady1;
    }

    applyForGrad = document.getElementsByName("myAppliedForGrad")[0].checked;  //졸업신청 여부값을 저장하고 true이면 그에맞는 상수를 더해줍니다.
    if(applyForGrad){
        signoidReady1 = signoidReady1 - 0.22;
    }

    one_one = document.getElementsByName("myCreditsAcquired1_1");  // 학기당 이수학점을 저장하고 총 이수학점에 더합니다.
    one_one = one_one[0].value;
    one_one *=1;   //spring to int
    lastCredits = one_one;
    if(semester>1){
    one_two = document.getElementsByName("myCreditsAcquired1_2");
    one_two = one_two[0].value;
    one_two *=1;
    lastCredits = one_two;
    if(semester>2){
    two_one = document.getElementsByName("myCreditsAcquired2_1");
    two_one = two_one[0].value;
    two_one *=1;
    lastCredits = two_one;
    if(semester>3){
    two_two = document.getElementsByName("myCreditsAcquired2_2");
    two_two = two_two[0].value;
    two_two *=1;
    lastCredits = two_two;
    if(semester>4){
    thr_one = document.getElementsByName("myCreditsAcquired3_1");
    thr_one = thr_one[0].value;
    thr_one *=1;
    lastCredits = thr_one;
    if(semester>5){
    thr_two = document.getElementsByName("myCreditsAcquired3_2");
    thr_two = thr_two[0].value;
    thr_two *=1;
    lastCredits = thr_two;
    if(semester>6){
    four_one = document.getElementsByName("myCreditsAcquired4_1");
    four_one = four_one[0].value;
    four_one *=1;
    lastCredits = four_one;
    if(semester>7){
    four_two = document.getElementsByName("myCreditsAcquired4_2");
    four_two = four_two[0].value;
    four_two *=1;
    lastCredits = four_two;
    if(semester>8){
    five_one = document.getElementsByName("myCreditsAcquired5_1");
    five_one = five_one[0].value;
    five_one *=1;
    lastCredits = five_one;
    if(semester>9){
    five_two = document.getElementsByName("myCreditsAcquired5_2");
    five_two = five_two[0].value;
    five_two *=1;
    lastCredits = five_two;
    if(semester>10){
    six_one = document.getElementsByName("myCreditsAcquired6_1");
    six_one = six_one[0].value;
    six_one *=1;
    lastCredits = six_one;
    if(semester>11){
    six_two = document.getElementsByName("myCreditsAcquired6_2");
    six_two = six_two[0].value;
    six_two *=1;
    lastCredits = six_two;
    }}}}}}}}}}}
    totalCredits = one_one+one_two+two_one+two_two+thr_one+thr_two+four_one+four_two+five_one+five_two+six_one+six_two;





    document.getElementById("readyre").innerText = lastCredits+14;

}


























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
};


function printselectCourse2(){
    const selectCourse2 = document.getElementById('selectCourse2').value;
    selectCourseName = selectCourse2;
    
};

function csMileage(){
    const csMileage = document.getElementById('csMileage').value;
    multicsMileage *= signoid;
    document.getElementById("#calc-result-number").innerText ="이 과목의 수강신청성공확률은" +signoid.toFixed(2)+"%입니다"+multicsMileage.toFixed(2);
};

//고른 과목에 따라 시간표에 해당과목 추가
function addCoursetoTable(){
    const selectCourseName1 = document.getElementById('selectCourse2').value;
    switch(selectCourseName1){
        case "이경호/인터넷프로그래밍": document.getElementById("Mon2",).innerText ="이경호/인터넷프로그래밍";
                                      document.getElementById("Wed2").innerText ="이경호/인터넷프로그래밍";  
                                      document.getElementById("Wed3").innerText ="이경호/인터넷프로그래밍";
                                      courseScedule.CSI2109.day=['Mon2', 'Wed2','Wed3'];
                                      courseScedule.CSI2109.professorName="이경호";
                                      courseScedule.CSI2109.courseName="인터넷프로그래밍";
        break;
        case "이수경/이산구조":      document.getElementById("Tue3").innerText ="이수경/이산구조";   
                                    document.getElementById("Wed11").innerText ="이수경/이산구조";
                                    document.getElementById("Wed12").innerText ="이수경/이산구조";
                                    courseScedule.CSI2101.day=['Tue3', 'Wed11','Wed12'];
                                    courseScedule.CSI2101.professorName="이수경";
                                    courseScedule.CSI2101.courseName="이산구조";
        break;
        case "황성재/자료구조": document.getElementById("Tue6").innerText ="황성재/자료구조";
                               document.getElementById("Thu6").innerText ="황성재/자료구조";  
                               document.getElementById("Thu7").innerText ="황성재/자료구조";
                               courseScedule.CSI2103.day=['Tue6','Thu6', 'Thu7'];
                               courseScedule.CSI2103.professorName="황성재";
                               courseScedule.CSI2103.courseName="자료구조";
        break;
        break;
        case "차호정/운영체제":  document.getElementById("Mon8").innerText ="차호정/운영체제";
                                document.getElementById("Wed3").innerText ="차호정/운영체제";  
                                document.getElementById("Wed4").innerText ="차호정/운영체제";
                                courseScedule.CSI3101.day=['Mon8','Wed3', 'Wed4'];
                                courseScedule.CSI3101.professorName="차호정";
                                courseScedule.CSI3101.courseName="운영체제";
        break;
        case "김영석/컴퓨터아키텍쳐": document.getElementById("Tue8").innerText ="김영석/컴퓨터아키텍쳐";
                                    document.getElementById("Thu6").innerText ="김영석/컴퓨터아키텍쳐";  
                                    document.getElementById("Thu7").innerText ="김영석/컴퓨터아키텍쳐";
                                    courseScedule.CSI3102.day=['Tue8','Thu6', 'Thu7'];
                                    courseScedule.CSI3102.professorName="김영석";
                                    courseScedule.CSI3102.courseName="컴퓨터아키텍쳐";
        break;
        case "이인권/객체지향프로그래밍": document.getElementById("Tue8").innerText ="이인권/객체지향프로그래밍";
                                        document.getElementById("Tue9").innerText ="이인권/객체지향프로그래밍";  
                                        document.getElementById("Thu11").innerText ="이인권/객체지향프로그래밍";
                                        courseScedule.CSI2102.day=['Tue8','Tue9', 'Thu11'];
                                        courseScedule.CSI2102.professorName="이인권";
                                        courseScedule.CSI2102.courseName="객체지향프로그래밍";
        break;
        case "벅스텔러번트/컴퓨터프로그래밍": document.getElementById("Thu5").innerText ="벅스텔러번트/컴퓨터프로그래밍";
                                            document.getElementById("Thu6").innerText ="벅스텔러번트/컴퓨터프로그래밍";  
                                            document.getElementById("Thu9").innerText ="벅스텔러번트/컴퓨터프로그래밍";
                                            document.getElementById("Thu10").innerText ="벅스텔러번트/컴퓨터프로그래밍";
                                            courseScedule.CAC1100.day=['Thu5','Thu6', 'Thu9','Thu10'];
                                            courseScedule.CAC1100.professorName="벅스텔러번트";
                                            courseScedule.CAC1100.courseName="컴퓨터프로그래밍";
        break;
                                            
        break;      
        case "이병주/컴퓨터프로그래밍":       document.getElementById("Thu5").innerText ="이병주/컴퓨터프로그래밍";
                                            document.getElementById("Thu6").innerText ="이병주/컴퓨터프로그래밍";  
                                            document.getElementById("Thu9").innerText ="이병주/컴퓨터프로그래밍";
                                            document.getElementById("Thu10").innerText ="이병주/컴퓨터프로그래밍";
                                            courseScedule.CAC1100.day=['Thu5','Thu6', 'Thu9','Thu10'];
                                            courseScedule.CAC1100.professorName="이병주";
                                            courseScedule.CAC1100.courseName="컴퓨터프로그래밍";                                    
        break;
        case "최종현/컴퓨터과학입문":     document.getElementById("Wed8").innerText ="최종현/컴퓨터과학입문";
                                        document.getElementById("Fri6").innerText ="최종현/컴퓨터과학입문";  
                                        document.getElementById("Fri7").innerText ="최종현/컴퓨터과학입문";
                                        courseScedule.CSI2106.day=['Wed8','Fri6', 'Fri7'];
                                        courseScedule.CSI2106.professorName="최종현";
                                        courseScedule.CSI2106.courseName="컴퓨터과학입문";
        break;
        case "이경우/컴퓨터아키텍쳐":     document.getElementById("Tue2").innerText ="이경우/컴퓨터아키텍쳐";
                                        document.getElementById("Tue3").innerText ="이경우/컴퓨터아키텍쳐";  
                                        document.getElementById("Thu2").innerText ="이경우/컴퓨터아키텍쳐";
                                        courseScedule.CSI3102.day=['Tue2','Tue3', 'Thu2'];
                                        courseScedule.CSI3102.professorName="이경우";
                                        courseScedule.CSI3102.courseName="컴퓨터아키텍쳐";
        break;
        case "이인권/컴퓨터그래픽스":     document.getElementById("Tue6").innerText ="이인권/컴퓨터그래픽스";
                                        document.getElementById("Tue7").innerText ="이인권/컴퓨터그래픽스";  
                                        document.getElementById("Thu12").innerText ="이인권/컴퓨터그래픽스";
                                        courseScedule.CSI4105.day=['Tue6','Tue7', 'Thu12'];
                                        courseScedule.CSI4105.professorName="이인권";
                                        courseScedule.CSI4105.courseName="컴퓨터그래픽스";
        break;
        case "조성배/인공지능":          document.getElementById("Mon6").innerText ="조성배/인공지능";
                                        document.getElementById("Mon7").innerText ="조성배/인공지능";  
                                        document.getElementById("Wed6").innerText ="조성배/인공지능";
                                        courseScedule.CSI4108.day=['Mon6','Mon7', 'Wed6'];
                                        courseScedule.CSI4108.professorName="조성배";
                                        courseScedule.CSI4108.courseName="인공지능";
        break;
        case "소프트웨어종합설계":        document.getElementById("Wed9").innerText ="소프트웨어종합설계";
                                        document.getElementById("Fri7").innerText ="소프트웨어종합설계";  
                                        document.getElementById("Fri8").innerText ="소프트웨어종합설계";
                                        courseScedule.CSI4101.day=['Wed9','Fri7', 'Fri8'];
                                        courseScedule.CSI4101.professorName="";
                                        courseScedule.CSI4101.courseName="소프트웨어종합설계";
        break;
        case "송도경/정보보호":          document.getElementById("Mon6").innerText ="송도경/정보보호";
                                        document.getElementById("Mon7").innerText ="송도경/정보보호";  
                                        document.getElementById("Wed6").innerText ="송도경/정보보호";
                                        courseScedule.CSI4109.day=['Mon6','Mon7', 'Wed6'];
                                        courseScedule.CSI4109.professorName="이인권송도경";
                                        courseScedule.CSI4109.courseName="정보보호";
        break;
        case "김선주/컴퓨터비전":          document.getElementById("Tue3").innerText ="김선주/컴퓨터비전";
                                        document.getElementById("Tue4").innerText ="김선주/컴퓨터비전";  
                                        document.getElementById("Thu3").innerText ="김선주/컴퓨터비전";
                                        courseScedule.CSI4116.day=['Tue3','Tue4', 'Thu3'];
                                        courseScedule.CSI4116.professorName="김선주";
                                        courseScedule.CSI4116.courseName="컴퓨터비전";
        break;
        case "조성배/데이타마이닝":       document.getElementById("Mon2").innerText ="조성배/데이타마이닝";
                                        document.getElementById("Wed2").innerText ="조성배/데이타마이닝";  
                                        document.getElementById("Wed3").innerText ="조성배/데이타마이닝";
                                        courseScedule.CSI4117.day=['Mon2','Wed2', 'Wed3'];
                                        courseScedule.CSI4117.professorName="조성배";
                                        courseScedule.CSI4117.courseName="데이터마이닝";
        break;
        case "이진호/멀티코어및GPU프로그래밍":       document.getElementById("Wed7").innerText ="이진호/멀티코어및GPU프로그래밍";
                                                    document.getElementById("Wed8").innerText ="이진호/멀티코어및GPU프로그래밍";  
                                                    document.getElementById("Fri6").innerText ="이진호/멀티코어및GPU프로그래밍";
                                                    courseScedule.CSI4119.day=['Wed7','Wed8', 'Fri6'];
                                                    courseScedule.CSI4119.professorName="이진호";
                                                    courseScedule.CSI4119.courseName="멀티코어및GPU프로그래밍";

        break;
        case "박노성/기계학습":       document.getElementById("Tue5").innerText ="박노성/기계학습";
                                        document.getElementById("Thu4").innerText ="박노성/기계학습";  
                                        document.getElementById("Thu5").innerText ="박노성/기계학습";
                                        courseScedule.CSI4120.day=['Tue5','Thu4', 'Thu5'];
                                        courseScedule.CSI4120.professorName="박노성";
                                        courseScedule.CSI4120.courseName="기계학습";
        break;
        case "여진영/빅데이터":       document.getElementById("Tue6").innerText ="여진영/빅데이터";
                                        document.getElementById("Tue7").innerText ="여진영/빅데이터";  
                                        document.getElementById("Thu6").innerText ="여진영/빅데이터";
                                        courseScedule.CSI4121.day=['Tue6','Tue7', 'Thu6'];
                                        courseScedule.CSI4121.professorName="여진영";
                                        courseScedule.CSI4121.courseName="빅데이터";
        break;
        default : 
        break;
    }

};

