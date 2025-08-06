let afirmacoesPositivasColetadas = [];
let afirmacoesNegativasColetadas = [];

function selecionarAlternativa(index) {
    const alternativa = perguntas[perguntaAtual].alternativas[index];
    
    // Adiciona às listas de feedback
    afirmacoesPositivasColetadas.push(...alternativa.afirmacoesPositivas);
    afirmacoesNegativasColetadas.push(...alternativa.afirmacoesNegativas);
    
    // Atualiza perfil
    Object.keys(alternativa.perfil).forEach(categoria => {
        perfilUsuario[categoria] = (perfilUsuario[categoria] || 0) + alternativa.perfil[categoria];
    });

    if (perguntaAtual < perguntas.length - 1) {
        perguntaAtual++;
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    let resultadoHTML = `
        <h2>Seu Perfil Digital</h2>
        <div class="pontos-positivos">
            <h3>Pontos Fortes:</h3>
            <ul>${afirmacoesPositivasColetadas.map(af => `<li>✓ ${af}</li>`).join('')}</ul>
        </div>
        <div class="pontos-atencao">
            <h3>Pontos de Atenção:</h3>
            <ul>${afirmacoesNegativasColetadas.map(af => `<li>⚠ ${af}</li>`).join('')}</ul>
        </div>
    `;
    
    elementos.descricaoResultado.innerHTML = resultadoHTML;
    elementos.painelResultado.classList.add('mostrar');
}