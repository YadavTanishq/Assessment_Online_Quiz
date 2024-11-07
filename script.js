const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: 2
    },
    {
      question: "Which is the largest ocean on earth?",
      options: ["Pacific", "Indian", "Atlantic", "Arctic"],
      answer: 1
    },
    {
      question: "What is 49 / 7?",
      options: ["3", "4", "7", "6"],
      answer: 3
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: 2
    },
    {
      question: "What is the capital of india?",
      options: ["Delhi", "Ghaziabad", "chennai", "lucknow"],
      answer: 1
    }
  ];
  let cq = 0;
  function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const question = questions[cq];
    questionContainer.innerHTML = `
      <p>${question.question}</p>
      <div class="options">
        ${question.options.map((option, index) => `
          <label>
            <input type="radio" name="option" value="${index}">
            ${option}
          </label><br>
        `).join('')}
      </div>
    `;
    document.getElementById("prev-btn").disabled = cq === 0;
    document.getElementById("next-btn").style.display = cq === questions.length - 1 ? "none" : "inline-block";
    document.getElementById("submit-btn").style.display = cq === questions.length - 1 ? "inline-block" : "none";
  }
  function prevQuestion() {
    if (cq> 0) {
      cq--;
      loadQuestion();
    }
  }
  function nextQuestion() {
    if (cq< questions.length - 1) {
      cq++;
      loadQuestion();
    }
  }
  function submitQuiz() {
    alert("Quiz submitted!");
  }
  document.addEventListener("DOMContentLoaded",loadQuestion);
