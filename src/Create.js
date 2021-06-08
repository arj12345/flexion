import { useState } from "react";

const Create = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputUnit, setInputUnit] = useState("");
  const [toUnit, setToUnit] = useState("");
  const [studentAnswer, setStudentAnswer] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { inputValue, inputUnit, toUnit, studentAnswer };
    var input = parseFloat(inputValue);
    var grade = "correct";
    var result = 0;
    if (
      (inputUnit.toLowerCase() != "celsius" &&
        inputUnit.toLowerCase() != "fahrenheit" &&
        inputUnit.toLowerCase() != "kelvin" &&
        inputUnit.toLowerCase() != "rankine" &&
        inputUnit.toLowerCase() !== "liters" &&
        inputUnit.toLowerCase() !== "tablespoons" &&
        inputUnit.toLowerCase() !== "gallons" &&
        inputUnit.toLowerCase() !== "cups" &&
        inputUnit.toLowerCase() !== "cubic-feet" &&
        inputUnit.toLowerCase() !== "cubic-inches") ||
      (toUnit.toLowerCase() != "celsius" &&
        toUnit.toLowerCase() != "fahrenheit" &&
        toUnit.toLowerCase() != "kelvin" &&
        toUnit.toLowerCase() != "rankine" &&
        toUnit.toLowerCase() !== "liters" &&
        toUnit.toLowerCase() !== "tablespoons" &&
        toUnit.toLowerCase() !== "gallons" &&
        toUnit.toLowerCase() !== "cups" &&
        toUnit.toLowerCase() !== "cubic-feet" &&
        toUnit.toLowerCase() !== "cubic-inches")
    ) {
      grade = "invalid";
      setMessage("invalid");
    } else if (
      inputUnit.toLowerCase() === "celsius" &&
      toUnit.toLowerCase() === "fahrenheit"
    ) {
      if (
        Math.round(studentAnswer * 10) / 10 ===
        Math.round(celsiusToFahrenheit(input) * 10) / 10
      ) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "fahrenheit" &&
      toUnit.toLowerCase() === "celsius"
    ) {
      if (
        Math.round(studentAnswer * 10) / 10 ===
        Math.round(fahrenheitToCelsius(input) * 10) / 10
      ) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "celsius" &&
      toUnit.toLowerCase() === "kelvin"
    ) {
      if (studentAnswer == celsiusToKelvin(input)) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "kelvin" &&
      toUnit.toLowerCase() === "celsius"
    ) {
      if (studentAnswer == kelvinToCelcius(input)) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "fahrenheit" &&
      toUnit.toLowerCase() === "kelvin"
    ) {
      if (studentAnswer == celsiusToKelvin(fahrenheitToCelsius(input))) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "kelvin" &&
      toUnit.toLowerCase() === "fahrenheit"
    ) {
      if (studentAnswer == celsiusToFahrenheit(kelvinToCelcius(input))) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "fahrenheit" &&
      toUnit.toLowerCase() === "rankine"
    ) {
      if (studentAnswer == fahrenheitToRankine(input)) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "fahrenheit" &&
      toUnit.toLowerCase() === "rankine"
    ) {
      if (studentAnswer == rankineToFahrenheit(input)) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "celsius" &&
      toUnit.toLowerCase() === "rankine"
    ) {
      if (studentAnswer == fahrenheitToRankine(celsiusToFahrenheit(input))) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "rankine" &&
      toUnit.toLowerCase() === "celsius"
    ) {
      if (studentAnswer == fahrenheitToCelsius(rankineToFahrenheit(input))) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "rankine" &&
      toUnit.toLowerCase() === "kelvin"
    ) {
      if (studentAnswer == fahrenheitToKelvin(rankineToFahrenheit(input))) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "kelvin" &&
      toUnit.toLowerCase() === "rankine"
    ) {
      if (studentAnswer == fahrenheitToRankine(fahrenheitToCelsius(input))) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      /**           Volume Conversions            **/
      inputUnit.toLowerCase() === "liters" &&
      toUnit.toLowerCase() === "gallons"
    ) {
      if (studentAnswer == litersToGallons(input)) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "gallons" &&
      toUnit.toLowerCase() === "liters"
    ) {
      if (studentAnswer == gallonsToLiters(input)) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "cups" &&
      toUnit.toLowerCase() === "gallons"
    ) {
      if (studentAnswer == cupsToGallons(input)) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "gallons" &&
      toUnit.toLowerCase() === "cups"
    ) {
      if (studentAnswer == gallonsToCups(input)) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "gallons" &&
      toUnit.toLowerCase() === "tablespoons"
    ) {
      if (studentAnswer == gallonsToTablespoons(input)) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "tablespoons" &&
      toUnit.toLowerCase() === "gallons"
    ) {
      if (studentAnswer == tablespoonsToGallons(input)) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "cubic-inches" &&
      toUnit.toLowerCase() === "gallons"
    ) {
      if (studentAnswer == cubicinchesToGallons(input)) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "gallons" &&
      toUnit.toLowerCase() === "cubic inches"
    ) {
      if (studentAnswer == gallonsToCubicinches(input)) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "gallons" &&
      toUnit.toLowerCase() === "cubic feet"
    ) {
      if (studentAnswer == gallonsToCubicfeet(input)) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "cubic-feet" &&
      toUnit.toLowerCase() === "gallons"
    ) {
      if (studentAnswer == cubicfeetToGallons(input)) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "cubic-inches" &&
      toUnit.toLowerCase() === "cubic-feet"
    ) {
      if (studentAnswer == cubicinchesToCubicfeet(input)) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "cubic-feet" &&
      toUnit.toLowerCase() === "cubic-inches"
    ) {
      if (studentAnswer == cubicfeetToCubicinches(input)) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "cubic-inches" &&
      toUnit.toLowerCase() === "liters"
    ) {
      if (studentAnswer == cubicinchesToLiters(input)) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "liters" &&
      toUnit.toLowerCase() === "cubic-inches"
    ) {
      if (studentAnswer == litersToCubicinches(input)) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "liters" &&
      toUnit.toLowerCase() === "tablespoons"
    ) {
      if (studentAnswer == litersToTablespoons(input)) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "tablespoons" &&
      toUnit.toLowerCase() === "liters"
    ) {
      if (studentAnswer == tablespoonsToLiters(input)) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "liters" &&
      toUnit.toLowerCase() === "cups"
    ) {
      if (studentAnswer == litersToCups(input)) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "cups" &&
      toUnit.toLowerCase() === "liters"
    ) {
      if (studentAnswer == cupsToLiters(input)) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "liters" &&
      toUnit.toLowerCase() === "cubic-feet"
    ) {
      if (studentAnswer == litersToCubicfeet(input)) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "cubic-feet" &&
      toUnit.toLowerCase() === "liters"
    ) {
      if (studentAnswer == cubicfeetToLiters(input)) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "tablespoons" &&
      toUnit.toLowerCase() === "cubic-inches"
    ) {
      if (studentAnswer == tablespoonsToCubicinches(input)) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "cubic-inches" &&
      toUnit.toLowerCase() === "tablespoons"
    ) {
      if (studentAnswer == cubicinchesToTablespoons(input)) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "cubic-feet" &&
      toUnit.toLowerCase() === "cups"
    ) {
      if (studentAnswer == cubicfeetToCups(input)) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "cups" &&
      toUnit.toLowerCase() === "cubic-feet"
    ) {
      if (studentAnswer == cupsToCubicfeet(input)) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "cups" &&
      toUnit.toLowerCase() === "tablespoons"
    ) {
      if (studentAnswer == cupsToTablespoons(input)) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "tablespoons" &&
      toUnit.toLowerCase() === "cups"
    ) {
      if (studentAnswer == tablespoonsToCups(input)) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "tablespoons" &&
      toUnit.toLowerCase() === "cubic-feet"
    ) {
      if (studentAnswer == tablespoonsToCubicfeet(input)) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "cubic-feet" &&
      toUnit.toLowerCase() === "tablespoons"
    ) {
      if (studentAnswer == cubicfeetToTablespoons(input)) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "cups" &&
      toUnit.toLowerCase() === "cubic-inches"
    ) {
      if (studentAnswer == cupsToCubicinches(input)) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    } else if (
      inputUnit.toLowerCase() === "cubic-inches" &&
      toUnit.toLowerCase() === "cups"
    ) {
      if (studentAnswer == cubicinchesToCups(input)) {
        grade = "correct";
        setMessage("correct");
      } else {
        grade = "incorrect";
        setMessage("incorrect");
      }
    }

    console.log(blog);
    console.log(input);
    console.log(celsiusToFahrenheit(input));
    console.log(result);
    console.log(grade);
  };
  /*   Conversion Formulae    */
  const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
  const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
  const celsiusToKelvin = (celsius) => celsius + 273.15;
  const kelvinToCelcius = (kelvin) => kelvin - 273.15;
  const fahrenheitToRankine = (fahrenheit) => fahrenheit + 459.67;
  const rankineToFahrenheit = (rankine) => rankine - 459.67;
  const fahrenheitToKelvin = (fahrenheit) =>
    ((fahrenheit - 32) * 5) / 9 + 273.15;

  const litersToGallons = (liters) => liters * 0.264172;
  const gallonsToLiters = (gallons) => gallons * 3.78541;
  const cupsToGallons = (cups) => cups * 0.0625;
  const gallonsToCups = (gallons) => gallons * 16;
  const gallonsToTablespoons = (gallons) => gallons * 256;
  const tablespoonsToGallons = (tablespoons) => tablespoons * 0.00390625;
  const cubicinchesToGallons = (cubicinches) => cubicinches * 0.004329;
  const gallonsToCubicinches = (gallons) => gallons * 231;
  const cubicfeetToGallons = (cubicfeet) => cubicfeet * 7.48052;
  const gallonsToCubicfeet = (gallons) => gallons * 0.133681;

  const cubicinchesToCubicfeet = (cubicinches) => cubicinches * 0.000578704;
  const cubicfeetToCubicinches = (cubicfeet) => cubicfeet * 1728;

  const litersToCubicinches = (liters) => liters * 61.0237;
  const cubicinchesToLiters = (cubicinches) => cubicinches * 0.0163871;
  const litersToTablespoons = (liters) => liters * 67.628;
  const tablespoonsToLiters = (liters) => liters * 0.01478;
  const litersToCups = (liters) => liters * 4.2267;
  const cupsToLiters = (cups) => cups * 0.2365;
  const litersToCubicfeet = (liters) => liters * 0.0353;
  const cubicfeetToLiters = (cubicfeet) => cubicfeet * 28.317;

  const tablespoonsToCubicinches = (tablespoons) => tablespoons * 0.902;
  const cubicinchesToTablespoons = (cubicinches) => cubicinches * 1.108;
  const cupsToTablespoons = (cups) => cups * 16;
  const tablespoonsToCups = (tablespoons) => tablespoons * 0.0625;
  const tablespoonsToCubicfeet = (tablespoons) => tablespoons * 0.000522;
  const cubicfeetToTablespoons = (cubicfeet) => cubicfeet * 1915.01;

  const cubicfeetToCups = (cubicfeet) => cubicfeet * 119.688;
  const cupsToCubicfeet = (cups) => cups * 0.008355;

  const cupsToCubicinches = (cups) => cups * 14.437;
  const cubicinchesToCups = (cubicinches) => cubicinches * 0.0693;

  return (
    <div className="create">
      <h2>Convert</h2>
      <form onSubmit={handleSubmit}>
        <label>Input Value:</label>
        <input
          type="text"
          required
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <label>Input Unit:</label>
        <input
          required
          value={inputUnit}
          onChange={(e) => setInputUnit(e.target.value)}
        ></input>
        <label>To Unit:</label>
        <input
          type="text"
          required
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
        ></input>

        <label>Student Answer:</label>
        <textarea
          required
          value={studentAnswer}
          onChange={(e) => setStudentAnswer(e.target.value)}
        ></textarea>
        <button>Grade</button>
      </form>
      {message}
    </div>
  );
};

export default Create;
