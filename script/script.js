var result = document.getElementById("result");
function medir() {
    var peso = document.getElementById("pound").value;
    var altura = document.getElementById("height").value;
    let p = Number(peso);
    let a = Number.parseFloat(altura);
    let bmi = p / (Math.pow(a,2));
    if((bmi%1)>0){
        bmi = bmi.toFixed(3);
        Number(bmi);
    }
    console.log(a,p,bmi)
    
    try {
        result.classList.remove('bom','baixo','alto','muitoAlto','muitoBaixo','poucoAlto');
        if (bmi < 16 && bmi > 1) {
            result.classList.add('muitobaixo');
            result.innerHTML = "Seu valor BMI é igual a " + bmi + "; Você está com BMI muito baixo, Severamente abaixo do peso";
        } else if (bmi < 18.5 && bmi >= 16) {
            result.classList.add('baixo');
            result.innerHTML = "Seu valor BMI é igual a " + bmi + "; Você está com BMI baixo, abaixo do peso";
        } else if (bmi < 25 && bmi >= 18.5) {
            result.classList.add('bom');
            result.innerHTML = "Seu valor BMI é igual a " + bmi + "; Você está com BMI bom, Saudável";
        } else if (bmi < 30 && bmi >= 25) {
            result.classList.add('alto');
            result.innerHTML = "Seu valor BMI é igual a " + bmi + "; Você está com BMI um pouco alto, sobrepeso";
        } else if (bmi < 35 && bmi >= 30) {
    
            result.classList.add('poucoAlto');
            result.innerHTML = "Seu valor BMI é igual a " + bmi + "; Você está com BMI alto, obsidade moderada";
        } else if (bmi >= 35) {
            result.classList.add('muitoAlto');
            result.innerHTML = "Seu valor BMI é igual a " + bmi + "; Você está com BMI muito alto, Obesidade";
        } else{
            throw 'Valores incorretos, redigite os valores';
        }
    } catch (error) {
        result.classList.add('error');
        let txt = `Erro nos dados:\n Tipo de error: ${error} \n valor do BMI é : ${bmi}  `
            result.innerHTML =txt;
        
        }
        
        defineRuler(bmi);
        result.classList.add('result--open');

}
const pointer = document.createElement('div');
let box =document.querySelector('.box');
document.body.appendChild(pointer);
function defineRuler(bmi) {
    pointer.classList.add('pointer');
    box.classList.add('result--open');
    let line = ruler(bmi);
    
    pointer.style.left = `calc(0% + ${line}px)`;
    pointer.classList.add('result--open');

}


function ruler(size) {
    let w = window.innerWidth;
    let total = 50;

    let x = (w*size)/total;

    return x
}