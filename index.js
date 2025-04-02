/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204

const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")
const inputEl = document.getElementById("num-input")
const errorEl = document.getElementById("error")
const themeToggle = document.getElementById("theme-toggle")

function resetValues() {
   lengthEl.textContent = ` 0 meters = 0.000 feet | 0 feet = 0.000 meters `
   volumeEl.textContent =  ` 0 liters = 0.000 gallons | 0 gallons = 0.000 liters `
   massEl.textContent = ` 0 kilograms = 0.000 pounds | 0 pounds = 0.000 kilograms ` 
}

resetValues()

convertBtn.addEventListener("click", renderValue)

function pluralize(value, singular, plural) {
    return (value === 1 ? singular : plural)
}

function renderValue() {
    let baseValue = Number(inputEl.value)
    errorEl.textContent = ""
    
    if (inputEl.value.trim() === "") {
        errorEl.textContent = "Please enter a number"
        resetValues()
        return
    }
    
    if (baseValue < 0) {
        errorEl.textContent = "Length, volume, and mass cannot have negative values"
        resetValues()
        return
        
    } else {
        lengthEl.textContent = ` ${baseValue} ${pluralize(baseValue, "meter", "meters")} = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} ${pluralize(baseValue, "foot", "feet")} = ${(baseValue / meterToFeet).toFixed(3)} meters `
        
        volumeEl.textContent = ` ${baseValue} ${pluralize(baseValue, "liter", "liters")} = ${(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} ${pluralize(baseValue, "gallon", "gallons")} = ${(baseValue / literToGallon).toFixed(3)} liters `
        
        massEl.textContent = ` ${baseValue} ${pluralize(baseValue, "kilogram", "kilograms")} = ${(baseValue * kilogramToPound).toFixed(3)} pounds | ${baseValue} ${pluralize(baseValue, "pound", "pounds")} = ${(baseValue / kilogramToPound).toFixed(3)} kilograms `;
    }
    
}

themeToggle.addEventListener("change", function() {
    if (themeToggle.checked) {
        document.body.classList.add("dark-mode")
    } else {
        document.body.classList.remove("dark-mode")
    }
})