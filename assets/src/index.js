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
        var result = "";
        if (parseFloat(weight) && parseFloat(height)) {
            var imc = calculateIMC(weight, height);
            result = translateIMC(imc);
        } else {
            result = "Informe valores numéricos nos campos acima.";
        }

        var resultSpan = document.getElementById("result-span");
        resultSpan.innerText = result;
    });

};