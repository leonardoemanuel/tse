let trVisor = document.getElementById('trVisor')
let numeroCanditado =''
let fotoCandidato = document.getElementById('fotoCandidato')

const loop = setInterval(()=>{
    if(numeroCanditado==22){
        fotoCandidato.src='../imagens/foto-oficial-Bolsonaro.webp'
    }else if(numeroCanditado==13){
        fotoCandidato.src='../imagens/lula.jpg'
    }else if(numeroCanditado==32){
        fotoCandidato.src='../imagens/ciro-gomes.jpg'
    }
},1)

function valor9(){
    if(numeroCanditado.length==2){

    }else if(numeroCanditado.length==0 ||numeroCanditado.length==1){
        numeroCanditado+='9'
        trVisor.innerHTML=`<td>${numeroCanditado}</td>`
    }
}
function valor8(){
    if(numeroCanditado.length==2){

    }else if(numeroCanditado.length==0 ||numeroCanditado.length==1){
        numeroCanditado+='8'
        trVisor.innerHTML=`<td>${numeroCanditado}</td>`
    }
}
function valor7(){
    if(numeroCanditado.length==2){

    }else if(numeroCanditado.length==0 ||numeroCanditado.length==1){
        numeroCanditado+='7'
        trVisor.innerHTML=`<td>${numeroCanditado}</td>`
    }
}
function valor6(){
    if(numeroCanditado.length==2){

    }else if(numeroCanditado.length==0 ||numeroCanditado.length==1){
        numeroCanditado+='6'
        trVisor.innerHTML=`<td>${numeroCanditado}</td>`
    }
}
function valor5(){
    if(numeroCanditado.length==2){

    }else if(numeroCanditado.length==0 ||numeroCanditado.length==1){
        numeroCanditado+='5'
        trVisor.innerHTML=`<td>${numeroCanditado}</td>`
    }
}
function valor4(){
    if(numeroCanditado.length==2){

    }else if(numeroCanditado.length==0 ||numeroCanditado.length==1){
        numeroCanditado+='4'
        trVisor.innerHTML=`<td>${numeroCanditado}</td>`
    }
}
function valor3(){
    if(numeroCanditado.length==2){

    }else if(numeroCanditado.length==0 ||numeroCanditado.length==1){
        numeroCanditado+='3'
        trVisor.innerHTML=`<td>${numeroCanditado}</td>`
    }
}
function valor2(){
    if(numeroCanditado.length==2){

    }else if(numeroCanditado.length==0 ||numeroCanditado.length==1){
        numeroCanditado+='2'
        trVisor.innerHTML=`<td>${numeroCanditado}</td>`
    }
    
    
}
function valor1(){
    if(numeroCanditado.length==2){

    }else if(numeroCanditado.length==0 ||numeroCanditado.length==1){
        numeroCanditado+='1'
        trVisor.innerHTML=`<td>${numeroCanditado}</td>`
    }
}
function branco(){
    trVisor.innerHTML='<td>VOCÊ VOTOU EM BRANCO</td>'
    numeroCanditado=''
    fotoCandidato.src='../imagens/tse-logo.png'
}
function confirma(){
    if(numeroCanditado==22){
        trVisor.innerHTML='<td>VOCÊ VOTOU EM BOLSONARO</td>'
    }else if(numeroCanditado==13){
        trVisor.innerHTML='<td>VOCÊ VOTOU EM LULA</td>'
    }else if(numeroCanditado==32){
        trVisor.innerHTML='<td>VOCÊ VOTOU EM CIRO GOMES</td>'
    }else{
        trVisor.innerHTML='<td>VOCÊ VOTOU NULO</td>'
    }
}
function corrigir(){
    numeroCanditado=''
    trVisor.innerHTML=''
    fotoCandidato.src='../imagens/tse-logo.png'
}
