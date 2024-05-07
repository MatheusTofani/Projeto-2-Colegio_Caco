// FORMULARIO
const form = document.getElementById('form');
let linhas = '';
const imgAprov = '<img src="cacoF.png"/>';
const imgReprov = '<img src="cacoT.png"/>';
const aprov = '<span class="aprovado"> Aprovado </span>';
const reprov = '<span class="reprovado"> Reprovado </span>';


const ativi = [];
const notasFin = [];

form.addEventListener('submit', function (e) {
    e.preventDefault();
    addLinha();
    attTab();
    medias();
    mediaFinal();
})

function addLinha() {

    const inputNome = document.getElementById('nome');
    const inputNumero = document.getElementById('number');

    if (ativi.includes(inputNome.value)) {
        alert(`A atividade ${inputNome.value} ja foi inserida`)
    } else {
        ativi.push(inputNome.value);
        notasFin.push(parseFloat(inputNumero.value));

        let linha = '<tr>';

        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += `<td>${inputNumero.value >= 6 ? imgAprov : imgReprov}</td>`;
        linha += '</tr>';

        linhas += linha;

    }

    inputNome.value = ('');
    inputNumero.value = ('');
    ;
}

function attTab() {
    const corpoTab = document.querySelector('tbody');
    corpoTab.innerHTML = linhas;
}

function mediaFinal() {
    const resultMed = medias();
    document.getElementById('media').innerHTML = resultMed.toFixed(2);
    document.getElementById('aprovado').innerHTML = resultMed >= 6 ? aprov : reprov;
}

function medias() {
    let somarNotas = 0;

    for (let i = 0; i < notasFin.length; i++) {
        somarNotas += notasFin[i];
    }
    return somarNotas / notasFin.length;
}

const btnLimparTabela = document.getElementById('bot');
btnLimparTabela.addEventListener('click', function () {
    linhas = '';
    attTab();
    document.getElementById('media').innerHTML = '';
    document.getElementById('aprovado').innerHTML = '';
})


// TABELA 2
const form3 = document.getElementById('form3');
let linhas2 = []; 
const numerr = new Set(); 

form3.addEventListener('submit', function (e) {
    e.preventDefault();
    addLinha2();
    attTab2();
});

function addLinha2() {
    const inputNome2 = document.getElementById('nome2');
    const inputNomer = document.getElementById('nomer');
    const inputNumero2 = document.getElementById('number2');
    
    
    if (numerr.has(inputNumero2.value)) {
        alert(`O número ${inputNumero2.value} já foi inserido`);
        return; 
    }
    
    
    numerr.add(inputNumero2.value);

    let linha2 = '<tr>';
    linha2 += `<td>${inputNome2.value}</td>`;
    linha2 += `<td>${inputNomer.value}</td>`;
    linha2 += `<td>${inputNumero2.value}</td>`;
    linha2 += '</tr>';
    linhas2.push(linha2); 

    inputNome2.value = '';
    inputNumero2.value = '';
    inputNomer.value = '';
}

function attTab2() {
    const corpoTab2 = document.querySelector('#tab2');
    corpoTab2.innerHTML = linhas2.join(''); 

    const totala = document.querySelector('#tota');
    totala.innerHTML = linhas2.length;
}

const btnLimparTabela2 = document.getElementById('bot2');
btnLimparTabela2.addEventListener('click', function () {
    linhas2 = []; 
    numerr.clear(); 
    attTab2();})