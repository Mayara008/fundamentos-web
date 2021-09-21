
let nome = window.document.getElementById('nome')
let email = document.querySelector('#mail')
let assunto = document.querySelector('#assunto')
let nomeOk = false 
let emailOk = false 
let assuntoOk = false 
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    }   else { 
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true 
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf ('@') == -1 || email.value.indexOf('.') == -1 ) {
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'
        mailOk = true
    }
    
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto') 

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = '<h1>Teste 01 h1</h1>'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
        
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar() {
        if (nomeOk == true && emailOk == true && assunto == true) {
        alert ('formulário enviado com sucesso!')
    } else {
        alert ('Preencha o formulário corretamente...')
    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}













// Criação das variaveis

// var idade = 35 //não é mais indicado pelo padrão EcmaScript

// let idade = 35 //padrão indicado pelo EcmaScript - valores mutaveis
// const idade = 35 //padrão indicado pelo EcmaScript - valores imutaveis

// Gets de Elementos
// DOM - document

// por Tag: document.getElementsByTagName('img')
// por ID: document.getElementById('menu')
// por Nome: document.getElementsByName('nome')
// por Classe: document.getElementsByClassName('classe')
// por Seletor: document.querySelector('#id / .classe / nome / tag')


// -- segue a baixo palavras reservadas 
// var - Variavel de escopo (escopo é o que está em um determinado local, que está determinadno um perimetro, uma jurisdição do meu código, as fronterias do nosso código. se eu abro um código CSS, tudo que esá dentro da chave  ) global, 
// let - Escopo local
// const - Escopo global e que não muda. 
//
//
//
//
//
//  
// 
//  