/* Elementos */
const body = document.querySelector('body');
const principal_screen = document.querySelector('.pantalla-principal');
const start_btn = principal_screen.querySelector('.start-btn');
const info_box = document.querySelector('.info-box');
const quit_btn = info_box.querySelector('.botones .cancel-btn');
const continue_btn = info_box.querySelector('.botones .start-btn');
const quiz_box = document.querySelector('.quiz-box')

/* Press Start Btn */
start_btn.onclick = () =>{
    info_box.classList.remove('desactivado');
    principal_screen.classList.add('desactivado');
    body.style.background = '#DCC1B6';
}

/* Press Quit Btn */
quit_btn.onclick = () =>{
    info_box.classList.add('desactivado');
    principal_screen.classList.remove('desactivado');
    body.style.background = '#FAFAFA';
}

/* Press Continue Btn */
continue_btn.onclick = () =>{
    info_box.classList.add('desactivado');
    quiz_box.classList.remove('desactivado');
    showQuestions(0);
    QuestionCounter(1);
}

let contador = 0;
let numero_pregunta = 1;

const next_btn = quiz_box.querySelector('.next-btn');

/* Press Next Btn */
next_btn.onclick = () =>{
    if(contador < questions.length - 1){
        contador++;
        numero_pregunta++;
        showQuestions(contador);
        QuestionCounter(numero_pregunta); 
    }else{
        console.log('Quiz completado');
    }
}

/* Obteniendo preguntas y opciones del array */

function showQuestions(index){
    const question_text = document.querySelector('.question-text');
    const option_list = document.querySelector('.option-list');

    let option_tag = '<li class="option"><span>' + questions[index].options[0] + '</span></li>'
                    + '<li class="option"><span>' + questions[index].options[1] + '</span></li>'
                    + '<li class="option"><span>' + questions[index].options[2] + '</span></li>'
                    + '<li class="option"><span>' + questions[index].options[3] + '</span></li>'
                    + '<li class="option"><span>' + questions[index].options[4] + '</span></li>';

    question_text.innerHTML = questions[index].question;
    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll('.option');
    for(let i = 0; i < option.length; i++){
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}

function optionSelected(answer){
    let userAnswer = answer.textContent;
    let correctAnswer = questions[contador].answer;
    if(userAnswer == correctAnswer){
        answer.classList.add('correct');
    }else{
        answer.classList.add('incorrect');
    }
}

function QuestionCounter(index){
    const question_num = document.querySelector('.quiz-box-titulo span');
    const cont_question = document.querySelector('.question-numb');
    const question_total = document.querySelector('.question-total');

    question_num.innerHTML = index;
    cont_question.innerHTML = index;
    question_total.innerHTML = questions.length;
}