//Código del cuadrado
//Perímetro del cuadrado
perimetroCuadrado = (lado) => {
    return lado * 4;
};

//Área del cuadrado
areaCuadrado = (lado) => {
    return lado ** 2;
};


//Código del triángulo
//Perímetro del triángulo
perimetroTriangulo = (lado1, lado2, base) => {
    return lado1 + lado2 + base;
};

//Área del triángulo
areaTriangulo = (base, altura) => {
    return (base * altura) / 2;
};


//Código del Circulo
//Diámetro
diametroCirculo = (radio) => {
    return radio * 2;
}

//Circunferencia
perimetroCirculo = (radio) => {
    const diametro = diametroCirculo(radio);
    const PI = Math.PI;
    
    return diametro * PI;
};

//Área
areaCirculo = (radio) => {
    const PI = Math.PI;
    
    return (radio ** 2) * PI;
};


//Interacción con HTML
//Cuadrado
function analisisCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    const area = areaCuadrado(value);

    const peri = document.getElementById("perimetroCuadrado");
    peri.innerText = `El perimetro del cuadrado es: ${perimetro}`

    const are = document.getElementById("areaCuadrado");
    are.innerText = `El área del cuadrado es: ${area}`
};


//Triángulo
function analisisTriangulo(){
    //Lado1
    const inputLado1 = document.getElementById("InputLado1");
    const valor1 = parseFloat(inputLado1.value);

    //Lado2
    const inputLado2 = document.getElementById("InputLado2");
    const valor2 = parseFloat(inputLado2.value);

    //Base
    const inputBase = document.getElementById("InputBase");
    const valor3 = parseFloat(inputBase.value);

    //Altura
    const inputAltura = document.getElementById("InputAltura");
    const valor4 = inputAltura.value;

    //Mensaje perimetro
    const perimetro = perimetroTriangulo(valor1, valor2, valor3);

    const peri = document.getElementById("perimetroTriangulo");
    peri.innerText = `El perimetro del triángulo es: ${perimetro}`;


    //Mensaje altura
    if (valor1 === valor2 && valor1 != valor3) {
        const alturaIso = Math.sqrt((valor1 ** 2) - (valor3 ** 2/4));

        const altu = document.getElementById("alturaTriangulo");
        altu.innerText = `La altura del triángulo isósceles es: ${alturaIso}`;
    } else {
        const altu = document.getElementById("alturaTriangulo");
        altu.innerText = `No es un triángulo isósceles`;
    }

    //Mensaje área
    if (valor1 === valor2 && valor1 != valor3) {
        const alturaIso = Math.sqrt((valor1 ** 2) - (valor3 ** 2/4));

        const are = document.getElementById("areaTriangulo");

        const area = areaTriangulo(valor3, alturaIso);
        are.innerText = `El área del triángulo es: ${area}`
    } else {
        const area = areaTriangulo(valor3, valor4);
    
        const are = document.getElementById("areaTriangulo");
        are.innerText = `El área del triángulo es: ${area}`
    }
};


//Circulo
function analisisCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    const area = areaCirculo(value);

    const peri = document.getElementById("perimetroCirculo");
    peri.innerText = `El perimetro del circulo es: ${perimetro}`

    const are = document.getElementById("areaCirculo");
    are.innerText = `El área del circulo es: ${area}`
};