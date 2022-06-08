 // '내 정보' > '지금까지 이수한 학기 수(mySemesters)' 입력값에 따라서 '학기별 수강 학점(myCreditsAcquired#_#)' 입력란을 자동으로 생성해주는 코드
        // 이도엽 작성
        document.querySelector("input[name='mySemesters']").onchange = function(){
            const numOfSemester = parseInt(this.value);
            const targetElem = document.querySelector("#credits-per-semester");
            generateInputs(numOfSemester, targetElem);
        }
        function generateInputs(numOfSemester, targetElem) {
            const y = Math.floor((numOfSemester + 1) / 2);
            const s = 2 - numOfSemester % 2;
            var result = "<h3>학기별 수강 학점</h3>";
            for(let i = 1; i <= y; i++) {
                if(i < y) {
                    for(let j = 1; j <= 2; j++) {
                        var input = `
                        <p><label>${i}학년 ${j}학기
                        <input name="myCreditsAcquired${i}_${j}" type="number" min="0" max="30" step="0.5">
                        </label></p>`;
                        result += input;
                    }
                }
                else {
                    for(let j = 1; j <= s; j++) {
                        var input = `
                        <p><label>${i}학년 ${j}학기
                        <input name="myCreditsAcquired${i}_${j}" type="number" min="0" max="30" step="0.5">
                        </label></p>`;
                        result += input;
                    }
                }
            }
            targetElem.innerHTML = result;
        }
        // 코드 끝



        // #cs-panel과 #others-panel을 버튼 onclick 이벤트 발생에 따라 보이거나 숨기게 해주는 코드
        // 이도엽 작성
        document.querySelector("#cs-panel-button").onclick = function(){
            document.querySelector("#cs-panel").style.display = "block";
        }
        document.querySelector("#cs-panel input[type='submit']").onclick = function(){
            document.querySelector("#cs-panel").style.display = "none";
        }
        document.querySelector("#others-panel-button").onclick = function(){
            document.querySelector("#others-panel").style.display = "block";
        }
        document.querySelector("#others-panel input[type='submit']").onclick = function(){
            document.querySelector("#others-panel").style.display = "none";
        }
        // 코드 끝



        // #timetable 테이블의 24개 row를 자동으로 생성해주는 코드
        // 이도엽 작성
        const hrsInDay = 24;
        var result = "";
        for(let i = 0; i < hrsInDay; i++) {
            let x = `
            <tr>
                <th>${i}-${i + 1}</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>`;
            result += x;
        }
        document.querySelector("#timetable tbody").innerHTML = result;
        // 코드 끝


        

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
