const slides = document.querySelectorAll('.quiz-slide');
const botoesProximo = document.querySelectorAll('.next-btn');
const botoesAnterior = document.querySelectorAll('.prev-btn');
const botaoEnviar = document.getElementById('submitBtn');
let slideAtual = 0;

function mostrarSlide(index) {
    // Esconde o slide atual
    slides[slideAtual].classList.remove('current-slide');
    slides[slideAtual].style.backgroundColor = ''; // Limpa o fundo, se necessário

    // Mostra o novo slide
    slides[index].classList.add('current-slide');
    slideAtual = index;

    const containerBotao = slides[index].querySelector('.button-container');

    // Exibe o botão 'Enviar Respostas' apenas no último slide
    if (slideAtual === slides.length - 1) {
        containerBotao.appendChild(botaoEnviar);
        botaoEnviar.style.display = 'block';
    } else {
        botaoEnviar.style.display = 'none';
    }
}

botoesProximo.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        mostrarSlide(slideAtual + 1);
    });
});

botoesAnterior.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        mostrarSlide(slideAtual - 1);
    });
});

document.getElementById('quizForm').addEventListener('submit', function(event) {
    let QuestNotResp = null;
    slides.forEach((slide, index) => {
        if (!slide.querySelector('input[type="radio"]:checked')) {
            slide.style.backgroundColor = '#ffcccc'; // Fundo vermelho claro para perguntas não respondidas
            if (QuestNotResp === null) {
                QuestNotResp = index;
            }
        }
    });

    if (QuestNotResp !== null) {
        event.preventDefault();
        alert('Por favor, responda todas as perguntas. Ainda há questão(ões) não respondida(s).');
        mostrarSlide(QuestNotResp); // Navega para a primeira pergunta não respondida
    }
});
