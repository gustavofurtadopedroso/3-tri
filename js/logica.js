import { elementos } from './interface.js';
import { perguntas } from './dados.js';

let perguntaAtual = 0;
let perfilUsuario = { tecno: 0, etica: 0, curiosidade: 0 };

export function iniciarJogo() {
    perguntaAtual = 0;
    perfilUsuario = { tecno: 0, etica: 0, curiosidade: 0 };
    mostrarPergunta();
    elementos.painelResultado.classList.remove('mostrar');
}

function mostrarPergunta() {
    const questao = perguntas[perguntaAtual];
    elementos.indicador.textContent = `Pergunta ${perguntaAtual + 1}/${perguntas.length}`;
    elementos.pergunta.textContent = questao.texto;
    elementos.alternativas.innerHTML = '';

    questao.alternativas.forEach((alternativa, index) => {
        const botao = document.createElement('button');
        botao.textContent = alternativa.texto;
        botao.addEventListener('click', () => selecionarAlternativa(index));
        elementos.alternativas.appendChild(botao);
    });
}

function selecionarAlternativa(index) {
    const alternativa = perguntas[perguntaAtual].alternativas[index];
    
    Object.keys(alternativa.perfil).forEach(categoria => {
        perfilUsuario[categoria] += alternativa.perfil[categoria];
    });

    if (perguntaAtual < perguntas.length - 1) {
        perguntaAtual++;
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    const total = Math.max(1, Object.values(perfilUsuario).reduce((a, b) => a + b, 0));
    const percentualTecno = (perfilUsuario.tecno / total) * 100;
    
    elementos.barraProgresso.style.width = `${percentualTecno}%`;
    
    let resultadoTexto;
    if (perfilUsuario.tecno > perfilUsuario.etica) {
        resultadoTexto = "Você é um Inovador Tecnológico!";
    } else if (perfilUsuario.etica > perfilUsuario.tecno) {
        resultadoTexto = "Você é um Guardião Ético!";
    } else {
        resultadoTexto = "Você é um Equilibrista Digital!";
    }
    
    elementos.descricaoResultado.textContent = resultadoTexto;
    elementos.painelResultado.classList.add('mostrar');
}