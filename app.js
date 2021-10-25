
const players = [
{Name: 'Santana Moss', Team: 'Washington*'},
{Name: 'Gary Barnidge', Team: 'Browns'},
{Name: 'David Wilson', Team: 'Giants'},
{Name: 'Riley Cooper', Team: 'Eagles'},
{Name: 'Josh Freeman', Team: 'Buccaneers'},
{Name: 'Lance Moore', Team: 'Saints'},
{Name: 'Kevin White', Team: 'Bears'},
{Name: 'Peyton Hillis', Team: 'Browns'},
{Name: 'Kendall Wright', Team: 'Titans'},
{Name: 'Eddie Lacy', Team: 'Packers'},
{Name: 'Cecil Shorts', Team: 'Jaguars'},
{Name: 'Knowshon Moreno', Team: 'Broncos'},
{Name: 'Kenbrell Thompkins', Team: 'Patriots'},
{Name: 'Thomas Rawls', Team: 'Seahawks'},
{Name: 'Bishop Sankey', Team: 'Titans'},
{Name: 'John Kuhn', Team: 'Packers'},
{Name: 'Harry Douglas', Team: 'Falcons'},
{Name: 'Isiah Crowell', Team: 'Browns'},
{Name: 'Sammie Coates', Team: 'Steelers'},
{Name: 'Toby Gerhart', Team: 'Vikings'},
{Name: 'Kelvin Benjamin', Team: 'Panthers'},
{Name: 'Fred Jackson', Team: 'Bills'},
{Name: 'Julius Thomas', Team: 'Broncos'},
{Name: 'Nate Washington', Team: 'Titans'},
{Name: 'Jacquizz Rodgers', Team: 'Falcons'},
{Name: 'Sidney Rice', Team: 'Seahawks'},
{Name: 'Montee Ball', Team: 'Broncos'},
{Name: 'Darius Heyward Bey', Team: 'Raiders'},
{Name: 'Jonas Grey', Team: 'Patriots'},
{Name: 'Marquise Lee', Team: 'Jaguars'},
{Name: 'Michael Floyd', Team: 'Cardinals'},
{Name: 'Malcolm Mitchell', Team: 'Patriots'},
{Name: 'Chris Givens', Team: 'Rams'},
{Name: 'Fozzy Whittaker', Team: 'Panthers'},
{Name: 'Lance Dunbar', Team: 'Cowboys'},
{Name: 'Jermaine Kearce', Team: 'Seahawks'},
{Name: 'Jake Locker', Team: 'Titans'},
{Name: 'Paxton Lynch', Team: 'Broncos'},
{Name: 'Allen Hurns', Team: 'Jaguars'},
{Name: 'Trent Richardson', Team: 'Browns'},
{Name: 'Kamar Aiken', Team: 'Ravens'},
{Name: 'Donte Moncrief', Team: 'Colts'},
{Name: 'Matt Asiata', Team: 'Vikings'},
{Name: 'Greg Little', Team: 'Browns'},
{Name: 'Joique Bell', Team: 'Lions'},
{Name: 'Vick Ballard', Team: 'Colts'},
{Name: 'Brent Celek', Team: 'Eagles'},
{Name: 'Charcanrick West', Team: 'Chiefs'},
{Name: 'Bilal Powell', Team: 'Jets'},
{Name: 'Justin Blackmon', Team: 'Jaguars'}

];

const teamArray = ['Cardinals', 'Falcons', 'Panthers', 'Bears', 'Cowboys', 'Lions', 'Packers', 'Rams', 'Vikings', 'Saints', 'Giants', 'Eagles', '49ers', 'Seahawks', 'Buccaneers', 'Washington*', 'Ravens', 'Bills', 'Bengals', 'Browns', 'Broncos', 'Texans', 'Colts', 'Jaguars', 'Chiefs', 'Raiders', 'Chargers', 'Dolphins', 'Patriots', 'Jets', 'Steelers', 'Titans'];
var question;
var correct = 0;
var questionNumber = 0;
var chA, chB, chC, chD;

var start = document.getElementById("start-button");
var next = document.getElementById("next-button");
var intro = document.getElementById("intro");
chA = document.getElementById("b1");
chB = document.getElementById("b2");
chC = document.getElementById("b3");
chD = document.getElementById("b4");
var question = document.getElementById("question");
chA.style.width = 1000;
var score = document.getElementById('score');

question.textContent = 'Do you really know random athletes?'
chA.style.display = 'none';
chB.style.display = 'none';
chC.style.display = 'none';
chD.style.display = 'none';
next.style.display = 'none';
intro.style.display = 'none';
next.style.display = 'none';
start.style.display = 'center-y';

start.addEventListener('click', function(){
nextQuestion();
});

chA.addEventListener('click', function(){
    console.log(chA.textContent);
    console.log(players[questionNumber - 1].Team);
    if (chA.textContent == players[questionNumber - 1].Team) {
        console.log("HI ALEX");
        correct++;
        score.textContent = 'Score: ' + correct + ' out of ' + questionNumber;
        nextQuestion();
    }
    else {
        score.textContent = 'Score: ' + correct + ' out of ' + questionNumber;
        nextQuestion();
    }
    
    });

chB.addEventListener('click', function(){
    console.log(chB.textContent);
    console.log(players[questionNumber - 1].Team);
    if (chB.textContent == players[questionNumber - 1].Team) {
        correct++;
        score.textContent = 'Score: ' + correct + ' out of ' + questionNumber;
        nextQuestion();
        console.log('u got it');
    }
    else {
        score.textContent = 'Score: ' + correct + ' out of ' + questionNumber;
        nextQuestion();
        console.log('bum');
    }
    
    });
chC.addEventListener('click', function(){
    console.log(chC.textContent);
    console.log(players[questionNumber - 1].Team);
    if (chC.textContent == players[questionNumber - 1].Team) {
        correct++;
        score.textContent = 'Score: ' + correct + ' out of ' + questionNumber;
        nextQuestion();
        console.log('u got it');

    }
    else {
        score.textContent = 'Score: ' + correct + ' out of ' + questionNumber;
        nextQuestion();
        console.log('bum');
    }    
});
chD.addEventListener('click', function(){
    console.log(chD.textContent);
    console.log(players[questionNumber - 1].Team);
    if (chD.textContent == players[questionNumber - 1].Team) {
        correct++;
        score.textContent = 'Score: ' + correct + ' out of ' + questionNumber;
        nextQuestion();
    }
    else {
        score.textContent = 'Score: ' + correct + ' out of ' + questionNumber;
        nextQuestion();
    }    
});


function nextQuestion() {
    if (questionNumber>= 50) {
        chA.style.display = 'none';
        chB.style.display = 'none';
        chC.style.display = 'none';
        chD.style.display = 'none';
        question.textContent = 'Thanks for playing chump. You scored a(n) ' + correct + ' out of ' + questionNumber;

    }
    
    console.log(questionNumber);
    question.textContent = 'Where was ' + players[questionNumber].Name + ' most fantasy relevant?';
     randomizeAnswerChoices();
    chA.style.display = 'block';
    chB.style.display = 'block';
    chC.style.display = 'block';
    chD.style.display = 'block';
    next.style.display = 'none';
    start.style.display = 'none';

    questionNumber++;
    
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function randomizeAnswerChoices() {
     tempTeamArray = threeWrongTeams(players[questionNumber].Team);
    var indexOfRightAnswer = getRandomInt(4);

   
    if (indexOfRightAnswer == 0) {
        chA.textContent = players[questionNumber].Team;
        chB.textContent = tempTeamArray[0];
        chC.textContent = tempTeamArray[1];
        chD.textContent = tempTeamArray[2];
    }
    if (indexOfRightAnswer == 1) {
        chB.textContent = players[questionNumber].Team;
        chA.textContent = tempTeamArray[0];
        chC.textContent = tempTeamArray[1];
        chD.textContent = tempTeamArray[2];
    }
    if (indexOfRightAnswer == 2) {
        chC.textContent = players[questionNumber].Team;
        chB.textContent = tempTeamArray[0];
        chA.textContent = tempTeamArray[1];
        chD.textContent = tempTeamArray[2];
    }
    if (indexOfRightAnswer == 3) {
        chD.textContent = players[questionNumber].Team;
        chB.textContent = tempTeamArray[0];
        chC.textContent = tempTeamArray[1];
        chA.textContent = tempTeamArray[2];
    }
}

function threeWrongTeams(hello) {
    var wrongTeams = [];
    
    wrongTeams.push(hello);

    while (wrongTeams.length < 5) {
        
        let randNum = getRandomInt(32);
        let tempTeam = teamArray[randNum];
        if (wrongTeams.includes(tempTeam)) {
            continue;
        }
        else {
            wrongTeams.push(tempTeam);
        }
    }
    wrongTeams.shift();
    
    
    return wrongTeams;
}