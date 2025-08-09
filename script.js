
const themeButtons = document.querySelectorAll('.theme-toggle, #theme-toggle');
themeButtons.forEach(btn=>btn?.addEventListener?.('click', ()=>{
  document.body.classList.toggle('dark');
  localStorage.theme = document.body.classList.contains('dark') ? 'dark' : 'light';
}));
if(localStorage.theme==='dark') document.body.classList.add('dark');
document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('.fade-up').forEach((el, i)=> setTimeout(()=> el.classList.add('visible'), 120*i));
});
