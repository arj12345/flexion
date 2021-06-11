import { render, screen } from "@testing-library/react";
import App from "./App";

const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
const celsiusToKelvin = (celsius) => celsius + 273.15;
const kelvinToCelcius = (kelvin) => kelvin - 273.15;
const fahrenheitToRankine = (fahrenheit) => fahrenheit + 459.67;
const rankineToFahrenheit = (rankine) => rankine - 459.67;
const fahrenheitToKelvin = (fahrenheit) => ((fahrenheit - 32) * 5) / 9 + 273.15;
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

test("celsiusToFahrenheit", () => {
  const value = celsiusToFahrenheit(100);
  expect(value).toBe(212);
});
test("fahrenheitToCelsius", () => {
  const value = fahrenheitToCelsius(100);
  expect(Math.round(value * 10) / 10).toBe(37.8);
});
test("celsiusToKelvin", () => {
  const value = celsiusToKelvin(100);
  expect(Math.round(value * 10) / 10).toBe(373.2);
});
test("kelvinToCelcius", () => {
  const value = kelvinToCelcius(100);
  expect(Math.round(value * 10) / 10).toBe(-173.1);
});
test("fahrenheitToRankine", () => {
  const value = fahrenheitToRankine(100);
  expect(Math.round(value * 10) / 10).toBe(559.7);
});
test("rankineToFahrenheit", () => {
  const value = rankineToFahrenheit(100);
  expect(Math.round(value * 10) / 10).toBe(-359.7);
});
test("fahrenheitToKelvin", () => {
  const value = fahrenheitToKelvin(100);
  expect(Math.round(value * 10) / 10).toBe(310.9);
});
test("litersToGallons", () => {
  const value = litersToGallons(100);
  expect(Math.round(value * 10) / 10).toBe(26.4);
});
test("gallonsToLiters", () => {
  const value = gallonsToLiters(100);
  expect(Math.round(value * 10) / 10).toBe(378.5);
});
test("cupsToGallons", () => {
  const value = cupsToGallons(100);
  expect(Math.round(value * 10) / 10).toBe(6.3);
});
test("gallonsToCups", () => {
  const value = gallonsToCups(100);
  expect(Math.round(value * 10) / 10).toBe(1600);
});
test("gallonsToTablespoons", () => {
  const value = gallonsToTablespoons(100);
  expect(Math.round(value * 10) / 10).toBe(25600);
});
test("tablespoonsToGallons", () => {
  const value = tablespoonsToGallons(100);
  expect(Math.round(value * 10) / 10).toBe(0.4);
});
test("cubicinchesToGallons", () => {
  const value = cubicinchesToGallons(100);
  expect(Math.round(value * 10) / 10).toBe(0.4);
});
test("gallonsToCubicinches", () => {
  const value = gallonsToCubicinches(100);
  expect(Math.round(value * 10) / 10).toBe(23100);
});
test("cubicfeetToGallons", () => {
  const value = cubicfeetToGallons(100);
  expect(Math.round(value * 10) / 10).toBe(748.1);
});
test("gallonsToCubicfeet", () => {
  const value = gallonsToCubicfeet(100);
  expect(Math.round(value * 10) / 10).toBe(13.4);
});

test("fake test", () => {
  expect(true).toBeTruthy();
});
