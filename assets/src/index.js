window.onload = function() {
    

    var form = document.getElementById("imc-form") ;

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var weight = parseFloat(form["weight-input"].value);
        var height = parseFloat(form["height-input"].value);
        
        var result;

        if (isNaN(weight) || isNaN(height)) {
            result = "Informe valores númericos nos campos acima.";
        } else {
            var imc = weight / ( height * height );

            if(imc < 18.5) {
                result = "Magreza";
            } else if (imc >= 18.5 && imc <= 24.9) {
                result = "Normal";
            } else if (imc > 24.9 && imc <= 30) {
                result = "Subrepeso";
            } else {
                result = "Obesidade";
            }
        }

        var resultSpan = document.getElementById("result-span");
        resultSpan.innerText = result;
    });

};