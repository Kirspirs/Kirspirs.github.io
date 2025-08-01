const words = ["Иксы", 'облегчИт', 'нанЯвшийся', 'донЕльзя', 'накренИтся','закУпорить','зАгнутый','одолжИть','влилАсь','пОгнутый','освЕдомиться','квартАл','нажИвший','красИвее','плодоносИть'];
let usedWords = [];

document.addEventListener('DOMContentLoaded', function() {
    const wordDisplay = document.getElementById('word-display');
    const nextBtn = document.getElementById('next-btn');
    const resetBtn = document.getElementById('reset-btn');
    const usedCount = document.getElementById('used-count');
    const totalCount = document.getElementById('total-count');
    const progressBar = document.getElementById('progress');

    totalCount.textContent = words.length;
    
    function updateStats() {
        usedCount.textContent = usedWords.length;
        progressBar.value = (usedWords.length / words.length) * 100;
    }

    function getRandomWord() {
        const unusedWords = words.filter(word => !usedWords.includes(word));
        
        if (unusedWords.length === 0) {
            return { word: "Все слова использованы!", isEnd: true };
        }
        
        const randomIndex = Math.floor(Math.random() * unusedWords.length);
        return { word: unusedWords[randomIndex], isEnd: false };
    }

    nextBtn.addEventListener('click', function() {
        const { word, isEnd } = getRandomWord();
        wordDisplay.textContent = word;
        
        if (!isEnd) {
            usedWords.push(word);
            updateStats();
            
            if (usedWords.length === words.length) {
                setTimeout(() => {
                }, 300);
            }
        }
    });
    
    resetBtn.addEventListener('click', function() {
        usedWords = [];
        wordDisplay.textContent = 'Нажмите "Следующее слово"';
        updateStats();
    });
    
    updateStats();
});