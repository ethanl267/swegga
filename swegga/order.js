

function totalprice(a, b) {
    y = parseFloat(document.getElementById("Quantity_1").value);
    var answer = document.getElementById("fresult");
    answer.value = 150.95 * y;
    x = parseFloat(document.getElementById("Quantity_2").value);
    var answer1 = document.getElementById("mresult");
    answer1.value = 180.95 * x;
    a = parseFloat(document.getElementById("fresult").value).toFixed(2);
    b = parseFloat(document.getElementById("mresult").value).toFixed(2);
    var answer2 = document.getElementById("result");
    answer2.value = a + b;
    }
   

    

