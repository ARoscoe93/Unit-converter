function convert() {
    const inputValue = parseFloat(document.getElementById('userInput').value);
    const unit = document.getElementById('unit').value;
    let result = 0;
    let resultString = "";
  
    switch (unit) {
      case "milesToKm":
        result = inputValue * 1.60934;
        resultString = inputValue + " mile(s) is " + result.toFixed(2) + " kilometer(s)";
        break;
      case "kmToMiles":
        result = inputValue / 1.60934;
        resultString = inputValue + " kilometer(s) is " + result.toFixed(2) + " mile(s)";
        break;
      case "fahrenheitToCelsius":
        result = (inputValue - 32) / 1.8;
        resultString = inputValue + "° Fahrenheit is " + result.toFixed(2) + "° Celsius";
        break;
      case "celsiusToFahrenheit":
        result = (inputValue * 1.8) + 32;
        resultString = inputValue + "° Celsius is " + result.toFixed(2) + "° Fahrenheit";
        break;
      default:
        resultString = "Invalid unit.";
    }
  
    const resultElement = document.getElementById('resultElement');
    resultElement.innerHTML = resultString;
  }