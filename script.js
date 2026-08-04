function startQuiz() {
  const quizBox = document.getElementById("quizBox");
  quizBox.innerHTML = `
    <h3>Q: What's the biggest planet in our Solar System?</h3>
    <button onclick="alert('Correct!')">Jupiter</button>
    <button onclick="alert('Wrong!')">Earth</button>
  `;
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.onclick = e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  }
});
