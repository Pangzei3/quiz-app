const questions = [
    {
        title: "Which one is the type of a javascript file?",
        options: [".ts", ".js", ".jsx", ".j"],
        answer: ".js"
    }, {
        title: "Inside which HTML element do we put the JavaScript?",
        options: ["<scripting>", "<script>", "<js>", "<javascript>"],
        answer: "<script>"
    }, {
        title: "Where is the correct place to insert a JavaScript?",
        options: [
            "The <head> section",
            "Both the <head> section and the <body> section are correct",
            "The <body> section",
            "Anywhere in the HTML document"],
        answer: "Both the <head> section and the <body> section are correct"
    }, {
        title: "What is the correct syntax for referring to an external script called \"xxx.js\"?",
        options: [
            '<script name="xxx.js">',
            '<script src="xxx.js">',
            '<script link="xxx.js">',
            '<script href="xxx.js">'
        ],
        answer: '<script src="xxx.js">'
    }, {
        title: 'How do you write "Hello World" in an alert box?',
        options: [
            'msg("Hello World");',
            'alert("Hello World");',
            'msgBox("Hello World");',
            'console.log("Hello World");',
        ],
        answer: 'alert("Hello World");'
    }
];

// insert text for below elements
const question_count = document.querySelector(".question-count");
const time_left = document.querySelector(".timer");
const question = document.querySelector(".question-context");
const option_arr = document.querySelectorAll("label")
const score_final = document.querySelector(".score")

// add eventListener to below button
const btn_start = document.querySelector('.btn-start')
const btn_next = document.querySelector(".btn-next")
const btn_exit = document.querySelector('.btn-exit')

// add class to make css styling
const start_card = document.querySelector('.start-card')
const quiz_card = document.querySelector('.quiz-card')
const end_card = document.querySelector('.end-card')

// use these variables to store data
let quizNum = 0;
let score = 0;

// main functions
function showQuestion(index) {
    showTime(12)
    question.innerText = questions[index].title;
    for(let i=0; i<=3; i++) {
        option_arr[i].innerText = questions[index].options[i];
        option_arr[i].setAttribute("onclick", "optionCheck(this)");
        option_arr[i].previousElementSibling.checked = false;
    }
    let quiz_count = quizNum +1;
    question_count.innerHTML = '<strong>' + quiz_count + '</strong>' + "&nbsp of &nbsp" + questions.length + '&nbsp Questions';
    
}

function optionCheck(answer_selected) {
    let selected = answer_selected.textContent;
    if (selected === questions[quizNum-1].answer) {
        score++
    } else {

    }
}

// add eventListener or onclick attribute 
btn_start.onclick = () => {
    showQuestion(0)
    quizNum++
    start_card.classList.add('deactive')
    quiz_card.classList.add('active')
}

btn_next.onclick = () => {
    if (quizNum < 5) {
        clearInterval(time_counter)
        showQuestion(quizNum);
        quizNum++
    } else {
        clearInterval(time_counter)
        quizNum =0;
        quiz_card.classList.remove('active')
        end_card.classList.add('active')
        score_final.innerText = `You got ${score *20} points!`
    };
}

btn_exit.onclick = () => {
    end_card.classList.remove('active')
    start_card.classList.remove('deactive')
    score =0
}

// helper function 
function showTime(time) {
    time_counter = setInterval(timer, 1000);
    function timer() {
        time_left.textContent = time;
        time--;
        if(time <9) {
            let addZero = time_left.textContent; 
            time_left.textContent = "0" + addZero; 
        }
        if (time < 0) {
            clearInterval(time_counter)
        }
    }
}
