// ===== Tab Switching =====
function switchTab(sectionId, btn){
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('show'));
  document.getElementById(sectionId).classList.add('show');
}

// ===== Chatbot =====
function chat(){
  const input = document.getElementById('chatInput').value;
  const output = document.getElementById('chatOutput');
  const replies = {hello:"Hi there!", hi:"Hey!", bye:"Goodbye!", name:"I'm your AI bot!"};
  let response="I don't know that yet!";
  for(let key in replies){if(input.toLowerCase().includes(key)) response=replies[key];}
  output.textContent = "You: "+input+"\nAI: "+response;
}

// ===== Image Generator =====
function generateImage(){
  const prompt = document.getElementById('imgPrompt').value;
  document.getElementById('genImage').src = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`;
}

// ===== Voice Assistant =====
function startListening(){
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US";
  recognition.start();
  recognition.onresult = (event) => {document.getElementById('voiceText').value = event.results[0][0].transcript;}
}
function speak(){
  const text = document.getElementById('voiceText').value;
  const msg = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(msg);
}

// ===== Content Writer =====
function writeContent(){
  const topic = document.getElementById('writeTopic').value;
  const output = document.getElementById('writeOutput');
  output.textContent = `Generating AI article on "${topic}"...\nHere’s a quick article about ${topic}.\nAI technology is shaping our future. Stay curious!`;
}
