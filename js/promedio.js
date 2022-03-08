function calcularEstadistica () {

    const prom = document.getElementById("InputLista");
    const promValue = prom.value;

    let arrayValor = Array.from(promValue.split(","), Number);

    //Media aritmética
    const promedioLista = (lista) =>{
        const sumaLista = lista.reduce(
            function (valorAcumulado = 0, nuevoElemento) {
                return valorAcumulado + nuevoElemento;
            }
        );

        return sumaLista / lista.length;
    }

    const resultadoProm = document.getElementById("promedio");
    resultadoProm.innerText = `El promedio de tu lista es: ${promedioLista(arrayValor)}`


    //Mediana
    function esPar(numero) {
        if (numero % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    const calcularMediana = (lista) => {
        const listaOrdenada = lista.sort((a, b) => a - b);
        const mitadlista = parseInt(listaOrdenada.length / 2);

        let mediana;

        if (esPar(lista.length)) {
            const elemento1 = lista[mitadlista - 1] ;
            const elemento2 = lista[mitadlista];
    
            const promedioMediana = promedioLista([
                elemento1,
                elemento2,
            ]);
    
            mediana = promedioMediana;
        } else {
            mediana = lista[mitadlista];
        }
        return mediana;
    }
    
    const resultadomediana = document.getElementById("mediana");
    resultadomediana.innerText = `La mediana de tu lista es: ${calcularMediana(arrayValor)}`


    //Moda
    function calcularModa(lista) {
        const listaCuenta = {};

        lista.map(
            function (elemento) {
                if (listaCuenta[elemento]) {
                    listaCuenta[elemento] += 1;
                } else {
                    listaCuenta[elemento] = 1;
                }
            }
        );

        const listaModa = Object.entries(listaCuenta).sort(
            function (elementoA, elementoB) {
                return elementoA[1] - elementoB[1];
            }
        );
        
        moda = listaModa[listaModa.length - 1];

        return moda[0];
    }

    const resultadoModa = document.getElementById("moda");
    resultadoModa.innerText = `La moda de tu lista es: ${calcularModa(arrayValor)}`
}