var buttomLogin = document.getElementById('loginName');

buttomLogin.addEventListener('click', function () {

   var nameLoad = null;
   do {
       nameLoad = ('¿Cual es tu nombre?');
   }
   while (false == nameLoad || null === nameLoad);

 // agregar instrucciones

   document.getElementById('loginName').style.display = 'none';
   document.getElementById('userName').innerHTML = 'Bienvenid@ ' + nameLoad;
   document.getElementById('queries').style.visibility = 'visible';
   document.getElementById('clickMe').style.visibility = 'visible';
});

function reply() {

   var questionOne = '';

   if (document.getElementById('answerOne').checked) {
       questionOne = document.getElementById('answerOne').value;
   }

   if (document.getElementById('answerTwo').checked) {
       questionOne = document.getElementById('answerTwo').value;
   }

   if (document.getElementById('answerThree').checked) {
       questionOne = document.getElementById('answerThree').value;
   }


   var questionTwo = '';

   if (document.getElementById('answerFour').checked) {
       questionTwo = document.getElementById('answerFour').value;
   }

   if (document.getElementById('answerFive').checked) {
       questionTwo = document.getElementById('answerFive').value;
   }

   if (document.getElementById('answerSix').checked) {
       questionTwo = document.getElementById('answerSix').value;
   }

   var questionThree = '';

   if (document.getElementById('answerSeven').checked) {
       questionThree = document.getElementById('answerSeven').value;
   }

   if (document.getElementById('answerEight').checked) {
       questionThree = document.getElementById('answerEight').value;
   }

   if (document.getElementById('answerNine').checked) {
       questionThree = document.getElementById('answerNine').value;
   }

   var scoreQuestionOne = null;
   if (questionOne === 'San Francisco') {
       scoreQuestionOne = 1;
   }
   else {
       scoreQuestionOne = 0;
   }

   var scoreQuestionTwo = null;
   if (questionTwo === 'Ambos') {
       scoreQuestionTwo = 1;
   }
   else {
       scoreQuestionTwo = 0;
   }

   var scoreQuestionThree = null
   if (questionThree === '6 meses') {
       scoreQuestionThree = 1;
   }
   else {
       scoreQuestionThree = 0;
   }

   var resultScore = scoreQuestionOne + scoreQuestionTwo + scoreQuestionThree;

   document.getElementById('result').innerHTML = 'Tuviste: ' + resultScore + ' preguntas correctas.';
   document.getElementById('queries').style.display = 'none';
   document.getElementById('clickMe').style.display = 'none';
   document.getElementById('resultTable').style.visibility = 'visible'
}

document.getElementById("clickMe").onclick = reply;


    var questionTwo = '';

    if (document.getElementById('answerFour').checked) {
        questionTwo = document.getElementById('answerFour').value;
    }

    if (document.getElementById('answerFive').checked) {
        questionTwo = document.getElementById('answerFive').value;
    }

    if (document.getElementById('answerSix').checked) {
        questionTwo = document.getElementById('answerSix').value;
    }

    var questionThree = '';

    if (document.getElementById('answerSeven').checked) {
        questionThree = document.getElementById('answerSeven').value;
    }

    if (document.getElementById('answerEight').checked) {
        questionThree = document.getElementById('answerEight').value;
    }

    if (document.getElementById('answerNine').checked) {
        questionThree = document.getElementById('answerNine').value;
    }

    var scoreQuestionOne = null;
    if (questionOne === 'San Francisco') {
        scoreQuestionOne = 1;
    }
    else {
        scoreQuestionOne = 0;
    }

    var scoreQuestionTwo = null;
    if (questionTwo === 'Ambos') {
        scoreQuestionTwo = 1;
    }
    else {
        scoreQuestionTwo = 0;
    }

    var scoreQuestionThree = null
    if (questionThree === '6 meses') {
        scoreQuestionThree = 1;
    }
    else {
        scoreQuestionThree = 0;
    }

    var resultScore = scoreQuestionOne + scoreQuestionTwo + scoreQuestionThree;

    document.getElementById('result').innerHTML = 'Tuviste: ' + resultScore + ' preguntas correctas.'; 
    document.getElementById('queries').style.display = 'none';
    document.getElementById('clickMe').style.display = 'none';
    document.getElementById('resultTable').style.visibility = 'visible'
}

document.getElementById("clickMe").onclick = reply;