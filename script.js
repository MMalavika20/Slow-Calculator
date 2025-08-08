function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;
  const resultDiv = document.getElementById("result");
  const loadingDiv = document.getElementById("loadingText");

  if (isNaN(num1) || isNaN(num2)) {
    resultDiv.textContent = "Please enter valid numbers!";
    loadingDiv.textContent = "";
    return;
  }

  resultDiv.textContent = "";
  loadingDiv.textContent = "Thinking...";

  // Step-by-step messages
  setTimeout(() => loadingDiv.textContent = "Still thinking...", 3000);
  setTimeout(() => loadingDiv.textContent = "Ugh, math is hard...", 6000);

  setTimeout(() => {
    let result;
    switch (operator) {
      case "+": result = num1 + num2; break;
      case "-": result = num1 - num2; break;
      case "*": result = num1 * num2; break;
      case "/":
        result = num2 !== 0 ? (num1 / num2).toFixed(2) : "Divide by 0? Seriously?";
        break;
      default: result = "Invalid operator";
    }

    loadingDiv.textContent = "Here's your answer... probably.";
    resultDiv.textContent = `Result: ${result}`;
  }, 10000);
}

   