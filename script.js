function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years); 
    if (principal <= 0) {
        alert("Please enter a positive principal");
        document.getElementById("principal").focus();
        return false;
     }
    document.getElementById("result").innerHTML=
        "\<br\> If you deposit \<span id=\"lb1\"\>" + principal + "\<\/span\>, \<br\>at an interest rate of " + rate + "%\<br\>You will receive an amount of " + interest + ",\<br\>in the year "+year+"\<br\>";
}

function updaterate()
 {
     var rateval = document.getElementById("rate").value;
     document.getElementById("rate_val").innerText  = rateval + "%";

 }

        
