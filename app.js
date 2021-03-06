// get the buttons
const weighBtn = document.getElementById("weight");
const tempBtn = document.getElementById("temp");
const lenghtBtn = document.getElementById("lenght");



const menu_btn = document.getElementById("menu_btn");
const menu = document.getElementById("menu");


// event for menu nutton
menu_btn.addEventListener("click", () => {
    menu.classList.toggle("active_menu");
});

menu.addEventListener("click", () => {

    menu.classList.remove("active_menu");

})

// get the sections
const weightSection = document.querySelector(".weight");
const tempSection = document.querySelector(".temp");
const lenghtSection = document.querySelector(".lenght");

// button click event
weighBtn.addEventListener("click", () => {
    weightSection.classList.add("active");
    tempSection.classList.remove("active");
    lenghtSection.classList.remove("active");
});

tempBtn.addEventListener("click", () => {
    tempSection.classList.add("active");
    weightSection.classList.remove("active");
    lenghtSection.classList.remove("active");
});


lenghtBtn.addEventListener("click", () => {
    lenghtSection.classList.add("active");
    weightSection.classList.remove("active");
    tempSection.classList.remove("active");
});




// function for weight
function convert_weight(){
    var weight_select_input = document.getElementById("weight_select_input").value;
    var weight_select_output = document.getElementById("weight_select_output").value;
    var weight_input = document.getElementById("weight_input").value;
    var weight_output = document.getElementById("weight_output");


    // for same option
    if(weight_select_input == weight_select_output){
        weight_output.value = weight_input * 1;
    }

    // for gram to all
    if(weight_select_input == "g" && weight_select_output == "kg"){
        weight_output.value = weight_input / 1000;
    }

    if(weight_select_input == "g" && weight_select_output == "mt"){
        weight_output.value = weight_input / 1000000;
    }

    if(weight_select_input == "g" && weight_select_output == "onc"){
        weight_output.value = weight_input * 0.035274;
    }

    if(weight_select_input == "g" && weight_select_output == "pnd"){
        weight_output.value = weight_input * 0.002205;
    }


    // for kilogram to all
    if(weight_select_input == "kg" && weight_select_output == "g"){
        weight_output.value = weight_input * 1000;
    }

    if(weight_select_input == "kg" && weight_select_output == "mt"){
        weight_output.value = weight_input * 0.001;
    }

    if(weight_select_input == "kg" && weight_select_output == "onc"){
        weight_output.value = weight_input * 35.27396;
    }

    if(weight_select_input == "kg" && weight_select_output == "pnd"){
        weight_output.value = weight_input * 2.204623;
    }


    // for metric tonnes to all
    if(weight_select_input == "mt" && weight_select_output == "g"){
        weight_output.value = weight_input * 1000000;
    }

    if(weight_select_input == "mt" && weight_select_output == "kg"){
        weight_output.value = weight_input * 1000;
    }

    if(weight_select_input == "mt" && weight_select_output == "onc"){
        weight_output.value = weight_input * 35273.96;
    }

    if(weight_select_input == "mt" && weight_select_output == "pnd"){
        weight_output.value = weight_input * 2204.623;
    }




    // for ounces tonnes to all
    if(weight_select_input == "onc" && weight_select_output == "g"){
        weight_output.value = weight_input * 28.34952;
    }

    if(weight_select_input == "onc" && weight_select_output == "kg"){
        weight_output.value = weight_input * 0.02835;
    }

    if(weight_select_input == "onc" && weight_select_output == "mt"){
        weight_output.value = weight_input * 0.000028;
    }

    if(weight_select_input == "onc" && weight_select_output == "pnd"){
        weight_output.value = weight_input * 0.0625;
    }

    // for poundes tonnes to all
    if(weight_select_input == "pnd" && weight_select_output == "g"){
        weight_output.value = weight_input * 453.5924;
    }

    if(weight_select_input == "pnd" && weight_select_output == "kg"){
        weight_output.value = weight_input * 0.453592;
    }

    if(weight_select_input == "pnd" && weight_select_output == "mt"){
        weight_output.value = weight_input * 0.000454;
    }

    if(weight_select_input == "pnd" && weight_select_output == "onc"){
        weight_output.value = weight_input * 16;
    }
}



// function for temperature
function convert_temp(){
    var temp_select_input = document.getElementById("temp_select_input").value;
    var temp_select_output = document.getElementById("temp_select_output").value;
    var temp_input = document.getElementById("temp_input").value;
    var temp_output = document.getElementById("temp_output");


    // for same option
    if(temp_select_input == temp_select_output){
        temp_output.value = temp_input * 1;
    }

    // for Celcius to all
    if(temp_select_input == "c" && temp_select_output == "f"){
        temp_output.value = ((9 * temp_input) + 160) / 5;
    }


    // for Farenheit to all
    if(temp_select_input == "f" && temp_select_output == "c"){
        temp_output.value = ((temp_input - 32) * 5) / 9;
    }

}



// function for lenght
function convert_lenght(){
    var lenght_select_input = document.getElementById("lenght_select_input").value;
    var lenght_select_output = document.getElementById("lenght_select_output").value;
    var lenght_input = document.getElementById("lenght_input").value;
    var lenght_output = document.getElementById("lenght_output");



    // for same option
    if(lenght_select_input == lenght_select_output){
        lenght_output.value = lenght_input * 1;
    }


    // inches to all

    if(lenght_select_input == "in" && lenght_select_output == "nm"){
        lenght_output.value = lenght_input * 254000000;
    }

    if(lenght_select_input == "in" && lenght_select_output == "mm"){
        lenght_output.value = lenght_input * 25.4;
    }

    if(lenght_select_input == "in" && lenght_select_output == "cm"){
        lenght_output.value = lenght_input * 2.54;
    }

    if(lenght_select_input == "in" && lenght_select_output == "m"){
        lenght_output.value = lenght_input * 0.0254;
    }

    if(lenght_select_input == "in" && lenght_select_output == "km"){
        lenght_output.value = lenght_input * 0.0000254;
    }

    if(lenght_select_input == "in" && lenght_select_output == "ft"){
        lenght_output.value = lenght_input * 0.083333;
    }

    if(lenght_select_input == "in" && lenght_select_output == "yd"){
        lenght_output.value = lenght_input * 0.027778;
    }

    if(lenght_select_input == "in" && lenght_select_output == "mls"){
        lenght_output.value = lenght_input * 0.000016;
    }


    // nanometers to all

    if(lenght_select_input == "nm" && lenght_select_output == "in"){
        lenght_output.value = lenght_input * 0.000000039370079;
    }

    if(lenght_select_input == "nm" && lenght_select_output == "mm"){
        lenght_output.value = lenght_input * 0.000001;
    }

    if(lenght_select_input == "nm" && lenght_select_output == "cm"){
        lenght_output.value = lenght_input * 0.0000001;
    }

    if(lenght_select_input == "nm" && lenght_select_output == "m"){
        lenght_output.value = lenght_input * 0.000000001;
    }

    if(lenght_select_input == "nm" && lenght_select_output == "km"){
        lenght_output.value = lenght_input * 0.000000000001;
    }

    if(lenght_select_input == "nm" && lenght_select_output == "ft"){
        lenght_output.value = lenght_input * 0.00000000328084;
    }

    if(lenght_select_input == "nm" && lenght_select_output == "yd"){
        lenght_output.value = lenght_input * 0.000000001093613;
    }

    if(lenght_select_input == "nm" && lenght_select_output == "mls"){
        lenght_output.value = lenght_input * 0.000000000000621;
    }


    // milimeters to all


    if(lenght_select_input == "mm" && lenght_select_output == "in"){
        lenght_output.value = lenght_input * 0.03937;
    }

    if(lenght_select_input == "mm" && lenght_select_output == "nm"){
        lenght_output.value = lenght_input * 1000000;
    }

    if(lenght_select_input == "mm" && lenght_select_output == "cm"){
        lenght_output.value = lenght_input * 0.1;
    }

    if(lenght_select_input == "mm" && lenght_select_output == "m"){
        lenght_output.value = lenght_input * 0.001;
    }

    if(lenght_select_input == "mm" && lenght_select_output == "km"){
        lenght_output.value = lenght_input * 0.000001;
    }

    if(lenght_select_input == "mm" && lenght_select_output == "ft"){
        lenght_output.value = lenght_input * 0.003281;
    }

    if(lenght_select_input == "mm" && lenght_select_output == "yd"){
        lenght_output.value = lenght_input * 0.001094;
    }

    if(lenght_select_input == "mm" && lenght_select_output == "mls"){
        lenght_output.value = lenght_input * 0.000000621371192;
    }


    // centimeters to all

    if(lenght_select_input == "cm" && lenght_select_output == "in"){
        lenght_output.value = lenght_input * 0.393701;
    }

    if(lenght_select_input == "cm" && lenght_select_output == "nm"){
        lenght_output.value = lenght_input * 10000000;
    }

    if(lenght_select_input == "cm" && lenght_select_output == "mm"){
        lenght_output.value = lenght_input * 10;
    }

    if(lenght_select_input == "cm" && lenght_select_output == "m"){
        lenght_output.value = lenght_input * 0.01;
    }

    if(lenght_select_input == "cm" && lenght_select_output == "km"){
        lenght_output.value = lenght_input * 0.00001;
    }

    if(lenght_select_input == "cm" && lenght_select_output == "ft"){
        lenght_output.value = lenght_input * 0.032808;
    }

    if(lenght_select_input == "cm" && lenght_select_output == "yd"){
        lenght_output.value = lenght_input * 0.010936;
    }

    if(lenght_select_input == "cm" && lenght_select_output == "mls"){
        lenght_output.value = lenght_input * 0.000006;
    }


    // meters to all

    if(lenght_select_input == "m" && lenght_select_output == "in"){
        lenght_output.value = lenght_input * 39.37008;
    }

    if(lenght_select_input == "m" && lenght_select_output == "nm"){
        lenght_output.value = lenght_input * 1000000000;
    }

    if(lenght_select_input == "m" && lenght_select_output == "mm"){
        lenght_output.value = lenght_input * 1000;
    }

    if(lenght_select_input == "m" && lenght_select_output == "cm"){
        lenght_output.value = lenght_input * 100;
    }

    if(lenght_select_input == "m" && lenght_select_output == "km"){
        lenght_output.value = lenght_input * 0.001;
    }

    if(lenght_select_input == "m" && lenght_select_output == "ft"){
        lenght_output.value = lenght_input * 3.28084;
    }

    if(lenght_select_input == "m" && lenght_select_output == "yd"){
        lenght_output.value = lenght_input * 1.093613;
    }

    if(lenght_select_input == "m" && lenght_select_output == "mls"){
        lenght_output.value = lenght_input * 0.000621;
    }


    // kilometers to all

    if(lenght_select_input == "km" && lenght_select_output == "in"){
        lenght_output.value = lenght_input * 39370.08;
    }

    if(lenght_select_input == "km" && lenght_select_output == "nm"){
        lenght_output.value = lenght_input * 1000000000000;
    }

    if(lenght_select_input == "km" && lenght_select_output == "mm"){
        lenght_output.value = lenght_input * 1000000;
    }

    if(lenght_select_input == "km" && lenght_select_output == "cm"){
        lenght_output.value = lenght_input * 100000;
    }

    if(lenght_select_input == "km" && lenght_select_output == "m"){
        lenght_output.value = lenght_input * 1000;
    }

    if(lenght_select_input == "km" && lenght_select_output == "ft"){
        lenght_output.value = lenght_input * 3280.84;
    }

    if(lenght_select_input == "km" && lenght_select_output == "yd"){
        lenght_output.value = lenght_input * 1093.613;
    }

    if(lenght_select_input == "km" && lenght_select_output == "mls"){
        lenght_output.value = lenght_input * 0.621371;
    }



    // feet to all

    if(lenght_select_input == "ft" && lenght_select_output == "in"){
        lenght_output.value = lenght_input * 12;
    }

    if(lenght_select_input == "ft" && lenght_select_output == "nm"){
        lenght_output.value = lenght_input * 304800000;
    }

    if(lenght_select_input == "ft" && lenght_select_output == "mm"){
        lenght_output.value = lenght_input * 304.8;
    }

    if(lenght_select_input == "ft" && lenght_select_output == "cm"){
        lenght_output.value = lenght_input * 30.48;
    }

    if(lenght_select_input == "ft" && lenght_select_output == "m"){
        lenght_output.value = lenght_input * 0.3048;
    }

    if(lenght_select_input == "ft" && lenght_select_output == "km"){
        lenght_output.value = lenght_input * 0.000305;
    }

    if(lenght_select_input == "ft" && lenght_select_output == "yd"){
        lenght_output.value = lenght_input * 0.333333;
    }

    if(lenght_select_input == "ft" && lenght_select_output == "mls"){
        lenght_output.value = lenght_input * 0.000189;
    }


    // yards to all

    if(lenght_select_input == "yd" && lenght_select_output == "in"){
        lenght_output.value = lenght_input * 36;
    }

    if(lenght_select_input == "yd" && lenght_select_output == "nm"){
        lenght_output.value = lenght_input * 914400000;
    }

    if(lenght_select_input == "yd" && lenght_select_output == "mm"){
        lenght_output.value = lenght_input * 914.4;
    }

    if(lenght_select_input == "yd" && lenght_select_output == "cm"){
        lenght_output.value = lenght_input * 91.44;
    }

    if(lenght_select_input == "yd" && lenght_select_output == "m"){
        lenght_output.value = lenght_input * 0.9144;
    }

    if(lenght_select_input == "yd" && lenght_select_output == "km"){
        lenght_output.value = lenght_input * 0.000914;
    }

    if(lenght_select_input == "yd" && lenght_select_output == "ft"){
        lenght_output.value = lenght_input * 3;
    }

    if(lenght_select_input == "yd" && lenght_select_output == "mls"){
        lenght_output.value = lenght_input * 0.000568;
    }


    // miles to all

    if(lenght_select_input == "mls" && lenght_select_output == "in"){
        lenght_output.value = lenght_input * 63360;
    }

    if(lenght_select_input == "mls" && lenght_select_output == "nm"){
        lenght_output.value = lenght_input * 1609344000000;
    }

    if(lenght_select_input == "mls" && lenght_select_output == "mm"){
        lenght_output.value = lenght_input * 1609344;
    }

    if(lenght_select_input == "mls" && lenght_select_output == "cm"){
        lenght_output.value = lenght_input * 160934.4;
    }

    if(lenght_select_input == "mls" && lenght_select_output == "m"){
        lenght_output.value = lenght_input * 1609.344;
    }

    if(lenght_select_input == "mls" && lenght_select_output == "km"){
        lenght_output.value = lenght_input * 1.609344;
    }

    if(lenght_select_input == "mls" && lenght_select_output == "ft"){
        lenght_output.value = lenght_input * 5280;
    }

    if(lenght_select_input == "mls" && lenght_select_output == "yd"){
        lenght_output.value = lenght_input * 1760;
    }

}