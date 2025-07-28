import { iniciarJogo } from './logica.js';
import { elementos } from './interface.js';

document.addEventListener('DOMContentLoaded', iniciarJogo);
elementos.btnReiniciar.addEventListener('click', iniciarJogo);