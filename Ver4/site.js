
'use strict';
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#site-nav');
if(menu&&nav){
 const closeMenu=()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');};
 menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';nav.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();closeCards();}});
 nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
}
const cards=[...document.querySelectorAll('.flip-card')];
function closeCards(except=null){cards.forEach(c=>{if(c!==except){c.classList.remove('is-flipped');c.setAttribute('aria-expanded','false')}})}
cards.forEach(card=>{
 card.setAttribute('role','button');card.setAttribute('aria-expanded','false');
 const toggle=()=>{const opening=!card.classList.contains('is-flipped');closeCards(card);card.classList.toggle('is-flipped',opening);card.setAttribute('aria-expanded',String(opening));};
 card.addEventListener('click',e=>{e.stopPropagation();toggle();});
 card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();e.stopPropagation();toggle();}});
});
document.addEventListener('click',()=>closeCards());
