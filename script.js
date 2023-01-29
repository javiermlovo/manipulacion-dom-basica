const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');
// console.log(input.value);
// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input
// });
// h1.innerHTML = 'Patito <br> Feo';
// h1.innerText = 'Patito <br> Feo';
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo');
// h1.classList.add('rojo');
// h1.classList.remove('verde');
// h1.classList.toggle('verde');
// h1.classList.contains('verde');
// input.value = "456"

const img = document.createElement('img');
img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');

pid.innerHTML = "";
pid.appendChild(img);
const input1=document.querySelector('#calculo1');
const input2=document.querySelector('#calculo2');
const btn=document.querySelector('#btnCalcular');
const pResult=document.querySelector('#result');
btn.addEventListener('click',btnOnClick);
function btnOnClick(){
    const sumaInputs=parseInt(input1.value)+parseInt(input2.value);
    if(Number.isNaN(sumaInputs) == false){
        console.log(sumaInputs);
        pResult.innerText="Resultado: "+sumaInputs;
    } else {
        pResult.innerText="Resultado no es numerico Intente de nuevo";
    };
    
}