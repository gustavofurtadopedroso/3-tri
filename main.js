// Adicione isso após suas imports
function criarParticulas() {
    const particulas = 30;
    const body = document.body;
    
    for (let i = 0; i < particulas; i++) {
        const particula = document.createElement('div');
        particula.classList.add('tech-particle');
        
        // Tamanho aleatório entre 1px e 3px
        const size = Math.random() * 2 + 1;
        particula.style.width = `${size}px`;
        particula.style.height = `${size}px`;
        
        // Posição aleatória
        particula.style.left = `${Math.random() * 100}vw`;
        particula.style.top = `${Math.random() * 100}vh`;
        
        // Atraso de animação aleatório
        particula.style.animationDelay = `${Math.random() * 15}s`;
        
        // Duração de animação aleatória
        particula.style.animationDuration = `${10 + Math.random() * 20}s`;
        
        body.appendChild(particula);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    iniciarJogo();
    criarParticulas();
});