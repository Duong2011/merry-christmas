// Câu hỏi lịch sử Việt Nam
const questions = [
    {
        question: "Người Việt cổ sinh sống chủ yếu ở đâu?",
        options: ["Đồng bằng Bắc Bộ", "Đồng bằng Nam Bộ", "Miền Trung", "Miền núi phía Bắc"],
        answer: 0
    },
    {
        question: "Ai là người sáng lập nước Việt Nam Dân chủ Cộng hòa?",
        options: ["Hồ Chí Minh", "Trần Hưng Đạo", "Nguyễn Ái Quốc", "Lê Duẩn"],
        answer: 0
    },
    {
        question: "Chiến thắng Điện Biên Phủ diễn ra vào năm nào?",
        options: ["1945", "1954", "1975", "1980"],
        answer: 1
    },
    {
        question: "Chiếc nón lá đầu tiên xuất hiện ở Việt Nam vào thời kỳ nào?",
        options: ["Hùng Vương", "Đinh Bộ Lĩnh", "Lý Công Uẩn", "Ngô Quyền"],
        answer: 0
    }
];

// DOM elements
const card = document.getElementById('card');
const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const successMessage = document.getElementById('successMessage');

// Lật thiệp
card.addEventListener('click', () => {
    if (!card.classList.contains('flipped')) {
        card.classList.add('flipped');
        loadQuestion();
    }
});

// Tải câu hỏi
function loadQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const question = questions[randomIndex];

    questionEl.textContent = question.question;
    answersEl.innerHTML = '';

    question.options.forEach((option, index) => {
        const answerButton = document.createElement('div');
        answerButton.className = 'answer';
        answerButton.textContent = option;
        answerButton.addEventListener('click', () => checkAnswer(index, question.answer));
        answersEl.appendChild(answerButton);
    });
}

// Kiểm tra đáp án
function checkAnswer(selected, correct) {
    if (selected === correct) {
        successMessage.classList.add('active');
        questionEl.classList.add('hidden');
        answersEl.classList.add('hidden');
    } else {
        alert("Sai rồi, thử lại nhé!");
    }
}
