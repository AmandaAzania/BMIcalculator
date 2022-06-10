document.write("<div>");
document.write("<form>");
document.write("Weight(in Kilograms):<input type='float' id='weight' placeholder='weight in kg' /><br />");
document.write("Height (in cms):<input type='float' id='height' placeholder='height in cm' /><br />");
document.write('<input type="button" onclick="calculate()" value="Evaluate" /> <br />');
document.write('BMI: <input id="ans" type="text" /><br />');
document.write('Category: <input type="text" id="category" />');
document.write('<input type="reset" value="Reset"/>');
document.write('</form>');
document.write("</div>");

function calculate()
{
    var w = parseFloat(document.getElementById("weight").value);  

    var h = parseFloat(document.getElementById("height").value)/100; 
    var b = w/(h*h);  
    document.getElementById("ans").value = String(b.toPrecision(3)) ; 
    if (b < 18.5)
    {
        document.getElementById("category").value = "Underweight";
    }
    else if (b >= 18.5 && b <= 25)
    {
        document.getElementById("category").value = "Healthy weight";
    }
    else if (b > 25 && b <= 30)
    {
        document.getElementById("category").value = "Overweight";
    }
    else if (b > 30 && b <= 35)
    {
        document.getElementById("category").value = "Obese Class 1";
    }
    else if(b > 35 && b <= 40)
    {
        document.getElementById("category").value = "Obese Class 2";
    }
    else
    {
        document.getElementById("category").value = "Obese Class 3";
    }
}