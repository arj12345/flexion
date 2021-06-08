import { render, screen } from "@testing-library/react";
import App from "./App";

const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
const celsiusToKelvin = (celsius) => celsius + 273.15;
const kelvinToCelcius = (kelvin) => kelvin - 273.15;
const fahrenheitToRankine = (fahrenheit) => fahrenheit + 459.67;
const rankineToFahrenheit = (rankine) => rankine - 459.67;
const fahrenheitToKelvin = (fahrenheit) => ((fahrenheit - 32) * 5) / 9 + 273.15;

test("celsiusToFahrenheit", () => {
  const value = celsiusToFahrenheit(100);
  expect(value).toBe(212);
});

test("fake test", () => {
  expect(true).toBeTruthy();
});
