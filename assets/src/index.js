window.onload = function() {

    function calculateIMC(weight, height) {
        return weight / ( height * height );
    }

    function translateIMC(imc){
        if (imc < 18.5) return "Magreza";

        if (imc < 24.9) return "Normal";

        if (imc < 30) return "Subrepeso";
        
        return "Obesidade";
    }
    
    var form = document.getElementById("imc-form") ;

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var weight = parseFloat(form["weight-input"].value);
        var height = parseFloat(form["height-input"].value);
        var result = weight && height ? translateIMC(calculateIMC(weight, height)) : "Informe valores numéricos nos campos acima.";

        document.getElementById("result-span").innerText = result;
    });

};