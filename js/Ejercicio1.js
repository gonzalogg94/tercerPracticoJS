// 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista  los doce nombres del arreglo.

let meses=[]
document.write(`<ul>`);
document.write('<h3>Meses del año</h3>')
for(i=0;i<12;i++){
    meses.push(prompt("ingrese un mes del año"));
    document.write(`<li>${meses[i]}</li>`)
}
document.write(`</ul>`);