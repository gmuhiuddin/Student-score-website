let addInfoBtn = document.getElementById('addInfoBtn');
addInfoBtn.addEventListener('click',studentScoreFunc);
let studentNumber = 0;
let total = 0;  

function studentScoreFunc (){
    let studentNameInput = document.getElementById('studentNameInput').value;
    let FatherNameInput = document.getElementById('FatherNameInput').value;
    let studentScoreInput = document.getElementById('studentScoreInput').value;

    let tableForUser = document.getElementById('tableForUser');

studentNumber++
studentScoreInput = +studentScoreInput
    total += studentScoreInput

let tr = document.createElement('tr')

    let studentNumberTd = document.createElement('td')
    studentNumberTd.className = 'textCenter'
    studentNumberTd.innerText = studentNumber

    let totalTd = document.createElement('td')
    totalTd.className = 'textCenter'
    totalTd.innerText = total

    let stdntNameTd = document.createElement('td')
    stdntNameTd.innerText = studentNameInput

    let stdntFNameTd = document.createElement('td')
    stdntFNameTd.innerText = FatherNameInput

    let stdntScoreTd = document.createElement('td')
    stdntScoreTd.className = 'textCenter'
   stdntScoreTd.innerText = studentScoreInput

   tr.appendChild(studentNumberTd)
   tr.appendChild(stdntNameTd)
   tr.appendChild(stdntFNameTd)
   tr.appendChild(stdntScoreTd)
   tr.appendChild(totalTd)

   tableForUser.appendChild(tr)
}