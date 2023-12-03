// bmi-condition
// bmi-result
// close-result
// result-box
let resultBox = document.getElementById("result-box");

let bmiCondition = document.getElementById("bmi-condition");
let bmiResult = document.getElementById("bmi-result");


// BMI FORMULA
function bmiFinder(weight = 0, height = 0) {
    // Check if the input is valid (non-negative numbers)
    return weight / (height ** 2)
}

// BMI DISPLAY RESULT BASED ON CONDITION
function bmiValueCheck(result = 0) {
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
let btnSubmit = document.getElementById("btn-submit")
let bmiForm = document.getElementById("bmi-form")
// console.log(bmiForm);

function formSubmit(e) {
    e.preventDefault()
    let form = new FormData(bmiForm)
    
    let formDataGetted = []
    for (let [key, value] of form) {
        if (key !== "username" && key !== "age") {
            formDataGetted.push({ [key]: Number(value) })
        }

    }
    console.log(formDataGetted);
    

    // disstructureed the data
    const [{ height }, { weight }] = formDataGetted;

    const result = bmiFinder(height, weight)
    const conditionDisplay = bmiValueCheck(result.toFixed(2))

    console.log(result);
    document.getElementById("bmi-result").innerText = result;
    document.getElementById("bmi-condition").innerText = `( ${conditionDisplay} )`;
    resultBox.style.display = "flex";
}

btnSubmit.addEventListener("click", e => formSubmit(e))

// RESULT CLOSING
let closeResultBox = document.getElementById("result-box");

closeResultBox.addEventListener("click", () => {
    resultBox.style.display = "none";
})

