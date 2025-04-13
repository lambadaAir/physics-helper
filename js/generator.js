document.getElementById("test-form").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const topic = document.getElementById("topic").value;
  const difficulty = document.getElementById("difficulty").value;
  const count = parseInt(document.getElementById("count").value);

  const output = document.getElementById("test-output");
  output.innerHTML = `<h2>Згенерований тест (${topic}, ${difficulty})</h2>`;
  
  for (let i = 1; i <= count; i++) {
    output.innerHTML += `<p><b>Питання ${i}:</b> [Тут буде питання з теми]</p>`;
  }
});