var readlineSync = require("readline-sync");
var chalk = require('chalk');
var log = console.log;
var score = 0;
log(chalk.blue.bold('               WELCOME TO FRIENDS QUIZ'));

var input = readlineSync.question("May i ask your name? ");
log(chalk.yellow.bold("Welcome! " + input + " Do you know vinit?"));
log(chalk.yellow.bold("PLEASE PLAY DO YOU KNOW ME QUIZ"));

function play(question, answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase()==answer) {
    log(chalk.greenBright("you are right"));
    score = score+5;
  }
  else{
    log(chalk.redBright("you are wrong"));
  }
  
  log(chalk.bgRed("score is:"+score));
  console.log("----------");
}
 
var questions = [{
  question: `
    Q1) Where do Vinit live? 
    a: BAREILLY
    b: NEW DELHI
    c: LUCKNOW\n`,
    answer:"A"
}, {
  question: `
    Q2) Tell me Vinit's favourite game?
    a: CRICKET
    b: VOLLEYBALL
    c: BASKETBALL\n`,
    answer:"C"
}, {
    question: `
    Q3) What is Vinit's hobby?
    a: COOKING
    b: SINGING
    c: PLAYING\n`,
    answer:"B"
}, {
    question: `
    Q4) Which is Vinit's favourite movie?
    a: WELCOME
    b: PHIR HERA PHERI
    c: KAHO NA PYAR HAI\n`,
    answer:"A"
}, {
  question: `
    Q5) Which is Vinit's favourite color?
    a: BLUE
    b: RED
    c: GREEN\n`,
    answer:"A"
}];
for(var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}
log(chalk.blue.bold("HEY Your score is:" +score));
var currentscore = score;

function plays(Name, Marks){
if(currentscore > Marks){
  log(chalk.green("Congratulations! You are winner. You have beaten highestscorer: "+Name+ ". Please share screenshot of your score."));
}
else
  log(chalk.red("Sorry winner is: "+Name));

}
var highestscorer = [
  {
    Name : "Akash",
    Marks : 18
  },{
    Name : "Rahul",
    Marks : 18
  },{
    Name : "Aman",
    Marks : 18
  },{
    Name : "Ankit",
    Marks : 18
  }
];
for(i=0; i<highestscorer.length; i++){
  var higsc = highestscorer[i];
  plays(higsc.Name,higsc.Marks);

  
}
