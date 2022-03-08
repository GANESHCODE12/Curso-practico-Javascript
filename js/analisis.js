//Helpers
function esPar(numero) {
    return numero % 2 === 0;
}


const promedioLista = (lista) =>{
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    return sumaLista / lista.length;
}


//Calculadora de mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = promedioLista([
            personaMitad1,
            personaMitad2,
        ]);

        return mediana
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}


//Mediana general
const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
);


const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);


//Mediana del top 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = (salariosColSorted.length - spliceStart);

const salarioColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col = medianaSalarios(salarioColTop10);

console.log({
    medianaGeneralCol,
    salarioColTop10,
});