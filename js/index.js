let continuar = true
let importe = 0

const mensajeInicial = "Ingresa el código del servicio a consultar: \n" +
    "a) Corte de cabello \n" +
    "b) Arreglo de barba \n" +
    "c) Corte y diseño \n" +
    "d) Corte y barba \n" +
    "e) Cera \n"

function iniciarConsulta() {
    let resultado = prompt(mensajeInicial).toLowerCase().trim()
    if (resultado !== "a" && resultado !== "b" && resultado !== "c" && resultado !== "d" && resultado !== "e") {
        alert("⛔️ Debes ingresar un código de servicio válido.")
    } else {
        let clientebp = confirm("¿Eres socio de Barbería Popular?")
        if (clientebp === true) {
            descuento = 0.90
        } else {
            descuento = 1
        }
        switch (resultado) {
            case "a":
                importe = 2000 * descuento
                alert("💰 El corte de cabello cuesta $ " + importe)
                
                break
            case "b":
                alert("💰 El arreglo de barba cuesta $ 1000")
                importe = 1000
                break
            case "c":
                alert("💰 El corte y diseño cuesta $ 2500")
                break
            case "d":
                alert("💰 El corte y barba cuesta $ 2700")
                break
            case "e":
                alert("💰 La Cera cuesta $ 3000")
                break
            default:
                console.error("No entendí tu consulta.")
        }
    }
}

function consultarPrecios() {
    while (continuar) {
        iniciarConsulta()
        continuar = confirm("¿Deseas conocer el precio de otro servicio?")
    }
    alert("👍 No hay problema. Gracias por tu visita :)")
}
consultarPrecios()