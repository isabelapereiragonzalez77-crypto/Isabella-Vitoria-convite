// Função para abrir as portas de gelo e dar play na música
function openGate() {
    const gate = document.getElementById('ice-gate');
    gate.classList.add('open');
    
    // Inicia a música de fundo
    const music = document.getElementById('background-music');
    if(music) {
        music.play().catch(error => {
            console.log("O navegador bloqueou a reprodução automática de áudio:", error);
        });
    }
    
    // Remove completamente a tela da frente após a animação acabar
    setTimeout(() => {
        gate.style.display = 'none';
    }, 1500);
}

// FUNÇÃO PARA ABRIR/FECHAR A LISTA DE PRESENTES SUAVEMENTE
function toggleModal(show) {
    const modal = document.getElementById('gift-modal');
    if (show) {
        modal.classList.add('active');
    } else {
        modal.classList.remove('active');
    }
}

// Configuração da Contagem Regressiva (Data da festa: 21 Setembro 2026 às 20:00)
const targetDate = new Date("September 21, 2026 20:00:00").getTime();

const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Cálculos de tempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostra o resultado nos elementos correspondentes
    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

    // Se a contagem terminar
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".countdown-container").innerHTML = "<h3>É Hoje! ❄️</h3>";
    }
}, 1000);

