const generateBtn = document.getElementById("generate");
const promptInput = document.getElementById("prompt");
const resultP = document.getElementById("result");

// Zet hier je Render backend URL neer
const BACKEND_URL = "https://YOUR-RENDER-BACKEND.onrender.com";

generateBtn.addEventListener("click", async () => {
  const prompt = promptInput.value;
  resultP.textContent = "Loading...";

  try {
    const res = await fetch(`${BACKEND_URL}/api/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    resultP.textContent = data.text;
  } catch (err) {
    resultP.textContent = "Error: " + err.message;
  }
});
