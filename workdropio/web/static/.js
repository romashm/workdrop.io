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

let CountButtonHomeClicks = 0;

document.getElementById("Right").addEventListener('click', function() {
    console.log(Career_Guidance[0]);
    document.getElementById("Result").innerText = Career_Guidance[CountButtonHomeClicks];
    CountButtonHomeClicks += 1;
})    
