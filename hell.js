function bmi()
{
var height=parseFloat(document.querySelector("#h").value);
var weight=parseFloat(document.querySelector("#w").value);
if (height > 0 && weight > 0) {
    var Bmi = weight / Math.pow(height, 2);
    document.querySelector("p").innerHTML = "Your BMI is: " + Bmi.toFixed(3);
} else {
    document.querySelector("p").innerHTML = "Please enter valid height and weight.";
}
}