let currentQuestionIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    loadQuiz();
    const backgroundMusic = document.getElementById('backgroundMusic');
    const playButton = document.getElementById('playMusicButton');

    playButton.addEventListener('click', () => {
        backgroundMusic.play();
        playButton.style.display = 'none'; // Versteckt den Play-Button nach dem Klick
    });
});

function loadQuiz() {
    showQuestion(currentQuestionIndex);
}

function showQuestion(index) {
    const quizForm = document.getElementById('quizForm');
    quizForm.innerHTML = ''; // Clear the previous question
    const question = questions[index];
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.innerHTML = `<p>${index + 1}. ${question.question}</p>`;
    question.answers.forEach((answer, i) => {
        questionDiv.innerHTML += `
            <label>
                <input type="radio" name="question${index}" value='${JSON.stringify(answer.points)}' required>
                ${answer.text}
            </label><br>`;
    });
    quizForm.appendChild(questionDiv);

    document.querySelectorAll('input[name="question' + index + '"]').forEach(element => {
        element.addEventListener('change', () => {
            document.getElementById('nextButton').style.display = 'inline-block';
        });
    });

    document.querySelectorAll('label').forEach(element => {
        element.addEventListener('mouseover', playHoverSound);
        element.addEventListener('click', playClickSound);
    });

    if (index === questions.length - 1) {
        document.getElementById('nextButton').style.display = 'none';
        document.getElementById('submitButton').style.display = 'inline-block';
    } else {
        document.getElementById('nextButton').style.display = 'none';
        document.getElementById('submitButton').style.display = 'none';
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
}

function submitQuiz() {
    const formData = new FormData(document.getElementById('quizForm'));
    const results = { race: {}, class: {}, subclass: {}, background: {} };

    for (let [key, value] of formData.entries()) {
        const points = JSON.parse(value);
        for (const category in points) {
            for (const item in points[category]) {
                if (!results[category][item]) {
                    results[category][item] = 0;
                }
                results[category][item] += points[category][item];
            }
        }
    }

    const finalResults = {
        race: getTopResult(results.race),
        class: getTopResult(results.class),
        subclass: getTopResult(results.subclass),
        background: getTopResult(results.background)
    };

    displayResults(finalResults, results);
}

function getTopResult(resultCategory) {
    return Object.keys(resultCategory).reduce((a, b) => resultCategory[a] > resultCategory[b] ? a : b);
}

function displayResults(finalResults, allResults) {
    const raceDescription = races[finalResults.race];
    const classDescription = classes[finalResults.class];
    const subclassDescription = subclasses[finalResults.subclass];
    const backgroundDescription = backgrounds[finalResults.background];

    const resultText = `
        Your ideal character is a ${finalResults.race} ${finalResults.class} (${finalResults.subclass}) with the ${finalResults.background} background.
        <br><br>
        ${raceDescription}<br>
        ${classDescription}<br>
        ${subclassDescription}<br>
        ${backgroundDescription}
    `;

    document.getElementById('resultText').innerHTML = resultText;
    document.getElementById('bestMatch').innerHTML = resultText;

    createChart('raceChart', 'Races', allResults.race);
    createChart('classChart', 'Classes', allResults.class);
    createChart('subclassChart', 'Subclasses', allResults.subclass);
    createChart('backgroundChart', 'Backgrounds', allResults.background);
}

function playClickSound() {
    if (!isSFXMuted) {
        document.getElementById('clickSound').play();
    }
}

function playHoverSound() {
    if (!isSFXMuted) {
        document.getElementById('hoverSound').play();
    }
}

let isMusicMuted = false;
let isSFXMuted = false;

function toggleMute(type) {
    if (type === 'music') {
        const audio = document.getElementById('backgroundMusic');
        isMusicMuted = !isMusicMuted;
        audio.muted = isMusicMuted;
        document.getElementById('muteMusicButton').innerText = isMusicMuted ? '🔇' : '🎵';
    } else if (type === 'sfx') {
        isSFXMuted = !isSFXMuted;
        document.getElementById('muteSFXButton').innerText = isSFXMuted ? '🔇' : '🔊';
    }
}
