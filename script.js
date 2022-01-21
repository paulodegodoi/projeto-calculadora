function insert(num){
    let numero = document.getElementById('display').innerHTML
    document.getElementById('display').innerHTML = numero + num
}

function resetar(){
    document.getElementById('display').innerHTML = ''
}

function apagar(){
    let display = document.getElementById('display').innerHTML
    document.getElementById('display').innerHTML = display.substring(0, display.length -1)
}

function calcular(){
    let display = document.getElementById('display').innerHTML
    if(display){
        document.getElementById('display').innerHTML = eval(display)
    }
}

function msg(){
    document.getElementById('display').innerText = 'ON'
    let display = setTimeout(function(){
        document.getElementById('display').innerHTML = ''
    }, 2000)
}
/* let estado
let op1
let op2
let resultado
let operacao

let calculadora = {
    numeroArray: new Array()

    inicializacao: function() {
        estado = 'inicializado'
        this.display
    }
    adicao: function(){
        operacao = 'adicao'
        estado = 'operando2'
        this.numeroArray = []
    }
    subtracao: function(){
        operacao = 'subtracao'
        estado = 'operando2'
        this.numeroArray = []
    }
    multiplicacao: function(){
        operacao = 'multiplicacao'
        estado = 'operando2'
        this.numeroArray = []
    }
    divisao: function(){
        operacao = 'divisao'
        estado = 'operando2'
        this.numeroArray = []
    }
    ac: function(){
        calculadora.inicializacao
        this.numeroArray = []
    }
    del: function(){
        this.numeroArray.pop()
        this.proximoNumero()
        this.display
    }
    igual: function(){
        switch(operacao){
            case 'adicao':
                resultado = op1 + op2
                estado = 'resultado'
                this.display
                break
            case 'subtracao':
                resultado = op1 - op2
                estado = 'resultado'
                this.display
                break
            case 'multiplicacao':
                resultado = op1 * op2
                estado = 'resultado'
                this.display
                break
            case 'divisao':
                resultado = op1 / op2
                estado = 'resultado'
                this.display
                break
        }
    }
    display: function(){
        switch(estado){
            case 'inicializado':
                document.getElementById('display').innerText = 'Display'
                estado = 'operando1'
                break
            case 'operando1':
                document.getElementById('display').innerText = op1
                break
            case 'operando2':
                document.getElementById('display').innerText = op2
                break
            case 'resultado':
                document.getElementById('display').innerText = resultado
        }
    }
    proximoNumero: function(){
        switch(estado){
            case 'operando1':
                this.numeroArray.push(digito)
                op1 = parseFloat(this.numeroArray.join(''))
                this.display()
                break
            case 'operando2':
                this.numeroArray.push(digito)
                op2 = parseFloat(this.numeroArray.join(''))
                break
        }
    }
} */