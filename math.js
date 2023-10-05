const ladoCuadrado = document.querySelector('#ladoCuadradoTxt');
const resultadoP = document.querySelector('#resultadoP');
const resultadoA = document.querySelector('#resultadoA');


const lado1 = document.querySelector('#lado1Txt');
const lado2 = document.querySelector('#lado2Txt');
const baseTriangulo = document.querySelector('#baseTrianguloTxt');
const alturaTriangulo = document.querySelector('#alturaTrianguloTxt');
const resultadoPT = document.querySelector('#resultadoPT');
const resultadoAT = document.querySelector('#resultadoAT');
const lado1Mostrar = document.querySelector('#lado1PT');
const lado2Mostrar = document.querySelector('#lado2PT');
const ladoBaseMostrar = document.querySelector('#ladoBasePT');
const alturaMostrar = document.querySelector('#alturaPT');

//altura del triangulo

const lado1Altura = document.querySelector('#lado1AlturaTxt');
//const lado2Altura = document.querySelector('#lado2AlturaTxt');
const baseAltura = document.querySelector('#baseTrianguloAlturaTxt');
const resultText = document.querySelector('#resultadoAlturaT');


function calcularValoresCuadrado(){
    var resulP = parseInt(ladoCuadrado.value) * 4;
    var resulA = Math.pow(parseInt(ladoCuadrado.value),2);

    resultadoP.innerText = "El perimetro es : " + resulP;
    resultadoA.innerText = "El area es : " + resulA;

}

function calcularValoresTriangulo(){
    var resulAreaT = (parseFloat(baseTriangulo.value) * parseFloat(alturaTriangulo.value)) / 2;
    var resulPeriT = parseFloat(lado1.value) + parseFloat(lado2.value) + parseFloat(baseTriangulo.value);
    
    lado1Mostrar.innerText = "valor lado 1: " + lado1.value;
    lado2Mostrar.innerText = "valor lado 2: " + lado2.value;
    ladoBaseMostrar.innerText = "valor lado base: " + baseTriangulo.value;
    alturaMostrar.innerText = "valor lado base: " + alturaTriangulo.value;

    resultadoAT.innerText = "el area es: "+ resulAreaT;
    resultadoPT.innerText = "el perimetro es: " + resulPeriT;

    borrarDatos();
}

function borrarDatos(){
    document.getElementById("lado1Txt").value = "";
    document.getElementById("lado2Txt").value = "";
    document.getElementById("baseTrianguloTxt").value = "";
    document.getElementById("alturaTrianguloTxt").value = "";
    document.getElementById("lado1Txt").value = "";
}

function calcularAlturaTriangula(){
    if(parseInt(lado1Altura.value) == parseInt(baseAltura.value)){
        alert("No es un triangulo isosceles");
    }else{
        // h = raiz cuadrada(lado1**2- (b**2)/4)
        const altura = Math.sqrt((parseInt(lado1Altura.value)**2) - ((parseInt(baseAltura.value) ** 2)) / 4);
        //return altura;
        resultText.innerText = "la altura es: " + altura;
    }
    
}


