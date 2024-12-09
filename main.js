document.getElementById('colorCuerpo').addEventListener('input', function() {
    document.getElementById('cuerpo').setAttribute('fill', this.value);
});
document.getElementById('colorCorrea').addEventListener('input', function() {
    document.getElementById('correaIzquierda').setAttribute('fill', this.value);
    document.getElementById('correaDerecha').setAttribute('fill', this.value);
});
document.getElementById('colorHebilla').addEventListener('input', function() {
    document.getElementById('hebilla').setAttribute('fill', this.value);
});
document.getElementById('colorDetalles').addEventListener('input', function() {
    document.getElementById('detalle1').setAttribute('fill', this.value);
    document.getElementById('detalle2').setAttribute('fill', this.value);
    document.getElementById('detalle3').setAttribute('fill', this.value);
    document.getElementById('detalle4').setAttribute('fill', this.value);
});