// get the buttons
const weighBtn = document.getElementById("weight");
const tempBtn = document.getElementById("temp");

// get the sections
const weightSection = document.querySelector(".weight");
const tempSection = document.querySelector(".temp");

// button click event
weighBtn.addEventListener("click", () => {
    weightSection.classList.add("active");
    tempSection.classList.remove("active");
});

tempBtn.addEventListener("click", () => {
    tempSection.classList.add("active");
    weightSection.classList.remove("active");
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


    // for kilogram to all
    if(weight_select_input == "kg" && weight_select_output == "g"){
        weight_output.value = weight_input * 1000;
    }

    if(weight_select_input == "kg" && weight_select_output == "mt"){
        weight_output.value = weight_input * 0.001;
    }


    // for metric tonnes to all
    if(weight_select_input == "mt" && weight_select_output == "g"){
        weight_output.value = weight_input * 1000000;
    }

    if(weight_select_input == "mt" && weight_select_output == "kg"){
        weight_output.value = weight_input * 1000;
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