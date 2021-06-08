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
    var input = parseInt(inputValue);
    var grade = "correct";
    var result = 0;

    
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
        <textarea
          required
          value={inputUnit}
          onChange={(e) => setInputUnit(e.target.value)}
        ></textarea>
        <label>To Unit:</label>
        <input
          type="text"
          required
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
        />
        <label>Convert from:</label>
        <select
          value={studentAnswer}
          onChange={(e) => setStudentAnswer(e.target.value)}
        >
          <option value="m">Celcius to Kelvin</option>
          <option value="y">Kelvin to Celcius</option>
        </select>
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