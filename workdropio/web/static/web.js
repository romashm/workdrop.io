var questionTree = function (selector) {

    var nowQuestion,
        arrayQuestions = [],
        self = this,
        select = document.querySelector(selector),

        quest = function (questions, arrAnswer, arrToQuestion) {
            this.question = questions;
            this.arrAnswer = arrAnswer;
            this.arrToQuestion = arrToQuestion;
        };

    this.addQuestion = function (questions, arrAnswer, arrToQuestion) {
        arrayQuestions.push(new quest(questions, arrAnswer, arrToQuestion));
    };

    this.startQuestions = function() {
          var buttonStart = document.createElement('input');
          buttonStart.type = "button";
          buttonStart.className = "btn btn-cta btn-cta__green text-uppercase";
          buttonStart.value = "Начать";
          select.querySelector(".buttons").appendChild(buttonStart);
          nowQuestion = 0;
          buttonStart.addEventListener("click", printQuestion);
     };

    function nextQuestion(event) {
        nowQuestion = +event.target.data;
        printQuestion();
    }

     function printQuestion() {
        select.querySelector(".question").innerHTML = arrayQuestions[nowQuestion].question;
        if(arrayQuestions[nowQuestion].arrAnswer[0] != "end"){
         printButton();
        }else{
            delButton(select.querySelector(".buttons"));
            self.startQuestions();
        }
    }
    
    function printButton(){
        var q = arrayQuestions[nowQuestion].arrAnswer.length,
            selectButton = select.querySelector(".buttons");
            delButton(selectButton);
        for(var i = 0; i < q; i++){
            var val = arrayQuestions[nowQuestion].arrAnswer[i],
                nxt = arrayQuestions[nowQuestion].arrToQuestion[i],
                newButton = document.createElement('input');
                newButton.type = "button";
                newButton.className = "btn btn-cta btn-cta__green text-uppercase";
                newButton.data = nxt;
                newButton.value = val;
                newButton.addEventListener("click",nextQuestion);
            selectButton.appendChild(newButton);
        }
    }

    function delButton(selector){
        while (selector.firstChild) {
            selector.removeChild(selector.firstChild);
        }
    }
};
var question = new questionTree(".questionTree");

let Career_Guidance = new Array();
let Answer_first = new Array();
let Answer_second = new Array();

let Result_of_Skills = new Array();

try {
    for ( let i = 0; i < document.querySelectorAll(".questions").length; i++ ) {
        Career_Guidance.push(document.querySelectorAll(".questions")[i].firstChild.nodeValue);
        Answer_first.push(document.querySelectorAll(".answers_1")[i].innerText);
        Answer_second.push(document.querySelectorAll(".answers_2")[i].innerText);
    }
} catch (err) {
    Career_Guidance.pop(), Answer_first.pop(), Answer_second.pop()
}
    
console.log(
    Career_Guidance,
    Answer_first,
    Answer_second,
);

{% comment %} window.onload = function() {
    document.querySelectorAll(".btn").addEventListener('click', function() {
        console.log("1");
    })
} {% endcomment %}

window.onload = function() {
    for(let i = 0; i < Career_Guidance.length; i++) {
        question.addQuestion(Career_Guidance[i], ["Да", "Нет"], ["1", "2"]);
        document.getElementById("Result").innerText = Career_Guidance[i];
    }
}

{% comment %} question.addQuestion("Молодец", ["end"]);
question.addQuestion("Зря", ["end"]); {% endcomment %}

question.startQuestions();

document.getElementById.addEventListener