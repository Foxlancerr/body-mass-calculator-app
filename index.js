// bmi-condition
// bmi-result
// close-result
// result-box
let resultBox = document.getElementById("result-box");

let bmiCondition = document.getElementById("bmi-condition");
let bmiResult = document.getElementById("bmi-result");


// BMI FORMULA
function bmiFinder(weight, height) {
    return weight / height * height
}

// BMI DISPLAY RESULT BASED ON CONDITION
function bmiValueCheck(result) {
    if (result < 18.5) {
        return "Underweight";
    } else if (result > 18.5 && result < 22.9) {
        return "Normal";
    } else if (result > 23 && result < 24.9) {
        return "Overweight";
    } else if (result > 25 && result < 29.9) {
        return "Obese";
    } else if (result > 30) {
        return "Extremely Obese";
    }
}

// FORM HANDLING
// let bmiForm = document.getElementById("btn-submit")
let bmiForm = document.getElementById("bmi-form")
console.log(bmiForm);



bmiForm.addEventListener("click", (e) => {
    e.preventDefault()
    // resultBox.style.display = "flex";
    console.log(e.currentTarget);
    
})

// RESULT CLOSING
let closeResultBox = document.getElementById("result-box");

closeResultBox.addEventListener("click", () => {
    resultBox.style.display = "none";
})

