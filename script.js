function checkAnswers1() {
    var q1Answer = document.querySelector('input[name="q1"]:checked');
    var q2Answer = document.querySelector('input[name="q2"]:checked');
    var q3Answer = document.querySelector('input[name="q3"]:checked');
  
    if (q1Answer === null || q2Answer === null || q3Answer === null) {
      alert("Por favor, responda todas as perguntas.");
      return;
    }
  
    var q1 = q1Answer.value;
    var q2 = q2Answer.value;
    var q3 = q3Answer.value;
  
    var score = 0;
  
    if (q1 === "c") {
      score += 1;
      document.getElementById("q1-feedback").innerHTML = "Resposta correta.";
      document.getElementById("q1-feedback").className = "correct";
    } else {
      document.getElementById("q1-feedback").innerHTML = "Resposta incorreta.";
      document.getElementById("q1-feedback").className = "incorrect";
    }
  
    if (q2 === "a") {
      score += 1;
      document.getElementById("q2-feedback").innerHTML = "Resposta correta.";
      document.getElementById("q2-feedback").className = "correct";
    } else {
      document.getElementById("q2-feedback").innerHTML = "Resposta incorreta.";
      document.getElementById("q2-feedback").className = "incorrect";
    }
  
    if (q3 === "a") {
      score += 1;
      document.getElementById("q3-feedback").innerHTML = "Resposta correta.";
      document.getElementById("q3-feedback").className = "correct";
    } else {
      document.getElementById("q3-feedback").innerHTML = "Resposta incorreta.";
      document.getElementById("q3-feedback").className = "incorrect";
    }
  
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Você acertou " + score + " de 3 perguntas.";
  }
  
  function welcomeMessage() {
    var name = document.getElementById("nameInput").value;
    document.getElementById("showName").textContent = "Olá, " + name + "!";
  }
  
  function question1() {
      window.location.href = "categoria1.html"
  }
  
  function question2() {
      window.location.href = "categoria2.html"
  }
  
  function playAgain() {
      window.location.href = "index.html"
  }
  
  let timeLeft = 30;
  
  function showCountdown() {
    const elementTimer = document.getElementById("timer");
    
    elementTimer.textContent = timeLeft;
    
    if (timeLeft === 0) {
      clearInterval(interval);
      elementTimer.textContent = "Tempo esgotado!";
    } else {
  
      timeLeft--;
    }
  }
  
  showCountdown();
  
  const interval = setInterval(showCountdown, 1000);
  
  function checkAnswers2() {
    var q12Answer = document.querySelector('input[name="q12"]:checked');
    var q22Answer = document.querySelector('input[name="q22"]:checked');
    var q32Answer = document.querySelector('input[name="q32"]:checked');
  
    if (q12Answer === null || q22Answer === null || q32Answer === null) {
      alert("Por favor, responda todas as perguntas.");
      return;
    }
  
    var q12 = q12Answer.value;
    var q22 = q22Answer.value;
    var q32 = q32Answer.value;
  
    var score = 0;
  
    if (q12 === "b") {
      score += 1;
      document.getElementById("q12-feedback").innerHTML = "Resposta correta.";
      document.getElementById("q12-feedback").className = "correct";
    } else {
      document.getElementById("q12-feedback").innerHTML = "Resposta incorreta.";
      document.getElementById("q12-feedback").className = "incorrect";
    }
  
    if (q22 === "a") {
      score += 1;
      document.getElementById("q22-feedback").innerHTML = "Resposta correta.";
      document.getElementById("q22-feedback").className = "correct";
    } else {
      document.getElementById("q22-feedback").innerHTML = "Resposta incorreta.";
      document.getElementById("q22-feedback").className = "incorrect";
    }
  
    if (q32 === "c") {
      score += 1;
      document.getElementById("q32-feedback").innerHTML = "Resposta correta.";
      document.getElementById("q32-feedback").className = "correct";
    } else {
      document.getElementById("q32-feedback").innerHTML = "Resposta incorreta.";
      document.getElementById("q32-feedback").className = "incorrect";
    }
  
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Você acertou " + score + " de 3 perguntas.";
  }
  

