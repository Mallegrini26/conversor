/*
document.getElementById('boton').addEventListener('click', function() {
    const tasaDeCambio = 0.001; // Ejemplo de tasa de cambio fija (1 peso = 0.001 dólares)
    const cantidadPesos = parseFloat(document.getElementById('num').value);
    
    if (isNaN(cantidadPesos)) {
        alert('Por favor, ingresa una cantidad válida.');
        return;
    }

    const cantidadDolares = cantidadPesos * tasaDeCambio;
    document.getElementById('num1').value = cantidadDolares.toFixed(2);
});
*/
function mostrar() {
    document.getElementById("fecha").innerHTML = Date();
}
document.getElementById('boton').addEventListener('click', function() {
    const tasaDeCambio = 0.001; // Ejemplo de tasa de cambio fija (1 peso = 0.001 dólares)
    const cantidad = parseFloat(document.getElementById('num').value);
    const direccion = document.getElementById('conversion-direction').value;
    
    if (isNaN(cantidad)) {
        alert('Por favor, ingresa una cantidad válida.');
        return;
    }

    let resultado;
    if (direccion === 'pesos-a-dolares') {
        resultado = cantidad * tasaDeCambio;
        document.getElementById('result-symbol').innerText = '$';
        // ESTO AGREGA EL RESULTADO CON EL SÍMBOLO DE PESOS
    } else if (direccion === 'dolares-a-pesos') {
        resultado = cantidad / tasaDeCambio;
        document.getElementById('result-symbol').innerText = 'ARS$';
        // ESTO AGREGA EL RESULTADO CON EL SÍMBOLO DE PESOS
    }

    document.getElementById('num1').value = resultado.toFixed(2);
});
