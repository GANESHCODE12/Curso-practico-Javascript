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
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
};

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
};

//Triángulo
function calcularPerimetroTriangulo(){
    //Lado1
    const inputLado1 = document.getElementById("InputLado1");
    const valor1 = parseFloat(inputLado1.value);

    //Lado2
    const inputLado2 = document.getElementById("InputLado2");
    const valor2 = parseFloat(inputLado2.value);

    //Base
    const inputBase = document.getElementById("InputBase");
    const valor3 = parseFloat(inputBase.value);

    if (valor1 === valor2 && valor1 != valor3) {
        const alturaIso = Math.sqrt((valor1 ** 2) - (valor3 ** 2/4))
        const perimetro = perimetroTriangulo(valor1, valor2, valor3);
        alert(`La altura del triángulo isósceles es ${alturaIso} y el perímetro es ${perimetro}`)
    } else {
        const perimetro = perimetroTriangulo(valor1, valor2, valor3);
        alert(perimetro);
    }
};

function calcularAreaTriangulo(){
    //Altura
    const inputAltura = document.getElementById("InputAltura");
    const valor4 = inputAltura.value;

    //Base
    const inputBase = document.getElementById("InputBase");
    const valor3 = inputBase.value;

    const area = areaTriangulo(valor3, valor4);
    alert(area);
};

//Circulo
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
};

function calcularAreaCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
};