<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Text to Voice Converter</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="wrapper">
        <h1>🗣️ Text to Voice Converter</h1>
        <div class="box">
            <label for="textInput">Enter your text below:</label>
            <br></br>
            <textarea id="textInput" placeholder="Type something you'd like to hear..."></textarea>

            <div class="options">
                <div>
                    <label for="voiceSelect">Choose Voice:</label>
                    <select id="voiceSelect"></select>
                </div>
                <div class="btns">
                  
                    <button id="speakBtn">Speak</button>
                    <button id="stopBtn">Stop</button>
                    <button id="clearBtn">Clear</button>
                </div>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
