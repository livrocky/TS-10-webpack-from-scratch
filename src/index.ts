import './style/reset.css';
import './style/style.css';

const n1: number = 500;

console.log('n1 ===', n1);

const app = document.getElementById('app') as HTMLDivElement | null;
if (app) app.innerHTML = n1.toString();
