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
