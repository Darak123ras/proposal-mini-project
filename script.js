const h=150;
const w=150;
// const maxW=window.innerWidth-w;
// const maxH=window.innerHeight-h;

window.addEventListener('DOMContentLoaded',()=>{
    const button=document.getElementById('rej');

    button.addEventListener('click',()=> alert('Crying!'));
    button.addEventListener('mouseover',()=>{

        const maxW = window.innerWidth - w;
        const maxH = window.innerHeight - h;

        button.style.left=Math.floor(Math.random()*(maxW))+'px';
        button.style.top=Math.floor(Math.random()*(maxH))+'px';

    })
    
});

