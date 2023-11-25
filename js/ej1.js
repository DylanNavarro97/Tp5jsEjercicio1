const botonInicio = document.querySelectorAll('.btn')[0]
const botonEnviar = document.querySelectorAll('.btn')[1]
const botonReplay = document.querySelectorAll('.btn')[2]
const input = document.querySelector('input')
const form = document.querySelector('form')
let numeroAleatorio = 0
let juegoIniciado = false

botonInicio.addEventListener('click', () => {
    if (juegoIniciado === false){
        botonInicio.className = 'd-none'
        numeroAleatorio = Math.ceil(Math.random() * 10)

        form.className = 'form my-4 d-flex justify-content-center'
        juegoIniciado = true
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    valorIngresado = parseInt(input.value)
    
    if (valorIngresado > numeroAleatorio && typeof(valorIngresado) === 'number'){
        alert("El número que ingresaste es más alto, proba con un número más chico")
    } else if (valorIngresado < numeroAleatorio && typeof(valorIngresado) === 'number'){
        alert("El número que ingresaste es más bajo, proba con un número más alto")
    } else if (valorIngresado === numeroAleatorio && typeof(valorIngresado) === 'number'){
        alert(`Acertaste, el número era ${numeroAleatorio}`)
        juegoIniciado = false
        form.className = 'd-none'
        botonReplay.className = 'btn btn-success'
        input.value = ''
        valorIngresado = 0
    } else {
        alert("Ingresa un número válido")
    }
})

botonReplay.addEventListener('click', () => {
    botonReplay.className = 'd-none'
    botonInicio.className = 'btn btn bg-primary'
})


