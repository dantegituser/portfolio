import { ScrollTop } from './scrollTop.js';
import { Drawing } from './drawing.js';
import { About } from './aboutAnimation.js';
document.addEventListener('DOMContentLoaded', iniciarAplicacion);




function iniciarAplicacion() {
    console.log('aplicacion iniciada');
    const scrolltrigger = new ScrollTop();
    const drawing = new Drawing();
    const about = new About();

}