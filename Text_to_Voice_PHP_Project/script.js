// DOM references
const textInput = document.getElementById("textInput");
const speakBtn = document.getElementById("speakBtn");
const stopBtn = document.getElementById("stopBtn");
const clearBtn = document.getElementById("clearBtn");
const voiceSelect = document.getElementById("voiceSelect");

let voices = [];

// Load available voices from the browser
function loadVoices() {
    voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = "";
    voices.forEach((voice, i) => {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = `${voice.name} (${voice.lang})`;
        voiceSelect.appendChild(option);
    });
}

window.speechSynthesis.onvoiceschanged = loadVoices;

// Speak function
function speakText() {
    const text = textInput.value.trim();
    if (text === "") {
        alert("Please type some text first!");
        return;
    }

    const utter = new SpeechSynthesisUtterance(text);
    const selectedVoice = voices[voiceSelect.value];
    if (selectedVoice) utter.voice = selectedVoice;
    utter.rate = 1;
    utter.pitch = 1;

    window.speechSynthesis.speak(utter);
}

// Stop speaking
function stopSpeaking() {
    window.speechSynthesis.cancel();
}

// Clear textarea
function clearText() {
    textInput.value = "";
}

// Event listeners
speakBtn.addEventListener("click", speakText);
stopBtn.addEventListener("click", stopSpeaking);
clearBtn.addEventListener("click", clearText);
