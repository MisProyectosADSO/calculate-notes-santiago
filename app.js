const username = document.getElementById('name')
const data1 = document.getElementById('note1')
const data2 = document.getElementById('note2')
const data3 = document.getElementById('note3')
const botton1 = document.getElementById('btn-calculate')
const botton2 = document.getElementById('btn-predict')
const answer = document.getElementById('result')

botton1.addEventListener('click', calculateNote)

function calculateNote() {
    let user = username.value
    let note1 = Number(data1.value)
    let note2 = Number(data2.value)
    let note3 = Number(data3.value)
    let result = ((note1 * 0.3) + (note2 * 0.3) + (note3 * 0.4))
    let badnote =`Perdio la materia`
    let regularnote=`Gano la materia`
    let goodnote = `Tienes una nota sobre saliente, Ganas la materia`
    if (result<3.5){
        answer.textContent = `Hola ${user} su nota es de: ${result} \n`+ `${badnote}` 
       answer.style.color='black'}
    else if (result>3.5 && result<4.5){
        answer.textContent = `Hola ${user} su nota es de: ${result} \n`+regularnote
        answer.style.color='orange'}
    else if (result>4.5 && result<5.0){
    answer.textContent = `Hola ${user} su nota es de: ${result} \n`+goodnote
    answer.style.color='green'}
else
answer.textContent = `Nota Invalida, Revisa que alguno de los datos no sea mayor a 5.0`
}
