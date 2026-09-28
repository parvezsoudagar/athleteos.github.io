document.querySelectorAll('.menu').forEach(b=>b.addEventListener('click',()=>document.querySelector('.links').classList.toggle('open')));
document.querySelectorAll('.form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();window.location.href='mailto:contact@AthleteOS.club?subject=AthleteOS%20Demo%20Enquiry'}));
