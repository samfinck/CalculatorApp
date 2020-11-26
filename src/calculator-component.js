import { useState } from "react";

export default function CalculatorComponent() {
  const [calculationEntry, setCalculationEntry] = useState(0);

  const [functionPressed, setFunctionPressed] = useState(false);

  const [equalsPressed, setEqualsPressed] = useState(false);

  const [largeNumber, setLargeNumber] = useState(false);

  const [additionCapture, setAdditionCapture] = useState(null);

  const [subtractionCapture, setSubtractionCapture] = useState(null);

  const [multiplicationCapture, setMultiplicationCapture] = useState(null);

  const [divisionCapture, setDivisionCapture] = useState(null);

  const [pointPressed, setPointPressed] = useState(false);

  const onClearLastButton = () => {
    if (calculationEntry === 0) {
      console.log("zero minus zero");
    }
    if (calculationEntry < 10 && calculationEntry > 0) {
      setCalculationEntry(0);
    }
    if (calculationEntry > 9) {
      let str = calculationEntry.toString();
      str = str.slice(0, -1);
      setCalculationEntry(str);
    }
    if (equalsPressed) {
      setCalculationEntry(0);
      setEqualsPressed(false);
    }
  };

  const onAllClearButton = () => {
    setCalculationEntry(0);
    setFunctionPressed(false);
    setAdditionCapture(null);
    setSubtractionCapture(null);
    setMultiplicationCapture(null);
    setDivisionCapture(null);
    setEqualsPressed(false);
  };

  const onEqualsButton = () => {
    if (additionCapture !== null) {
      let a = (+additionCapture + +calculationEntry).toString();
      if (`${a.length}` > 8) {
        setLargeNumber(true);
      }
      setCalculationEntry((prev) => +prev + +additionCapture);
      setAdditionCapture(null);
      setFunctionPressed(true);
      setPointPressed(false);
      setEqualsPressed(true);
    }
    if (subtractionCapture !== null) {
      let a = (+subtractionCapture - +calculationEntry).toString();
      if (`${a.length}` > 8) {
        setLargeNumber(true);
      }
      setCalculationEntry((prev) => +subtractionCapture - +prev);
      setSubtractionCapture(null);
      setFunctionPressed(true);
      setPointPressed(false);
      setEqualsPressed(true);
    }
    if (multiplicationCapture !== null) {
      let a = (+multiplicationCapture * +calculationEntry).toString();
      if (`${a.length}` > 8) {
        setLargeNumber(true);
      }
      setCalculationEntry((prev) => +prev * +multiplicationCapture);
      setMultiplicationCapture(null);
      setFunctionPressed(true);
      setPointPressed(false);
      setEqualsPressed(true);
    }
    if (divisionCapture !== null) {
      let a = (+divisionCapture / +calculationEntry).toString();
      if (`${a.length}` > 8) {
        console.log(`${a} ${a.length}`);
        let b = a.substring(0, 8);
        setCalculationEntry(b);
        setDivisionCapture(null);
        setFunctionPressed(true);
        setPointPressed(false);
        setEqualsPressed(true);
      } else {
        setCalculationEntry((prev) => +divisionCapture / +prev);
        setDivisionCapture(null);
        setFunctionPressed(true);
        setPointPressed(false);
        setEqualsPressed(true);
      }
    }
  };

  const onAdditionButton = () => {
    var a = +subtractionCapture + +multiplicationCapture + +divisionCapture;
    if (a === 0) {
      setAdditionCapture(calculationEntry);
      setFunctionPressed(true);
      setPointPressed(false);
      setEqualsPressed(false);
      setSubtractionCapture(null);
      setMultiplicationCapture(null);
      setDivisionCapture(null);
    } else if (a !== 0) {
      setAdditionCapture(a);
      setSubtractionCapture(null);
      setMultiplicationCapture(null);
      setDivisionCapture(null);
    }
  };

  const onSubtractionButton = () => {
    var a = +additionCapture + +multiplicationCapture + +divisionCapture;
    if (a === 0) {
      setSubtractionCapture(calculationEntry);
      setFunctionPressed(true);
      setPointPressed(false);
      setEqualsPressed(false);
      setAdditionCapture(null);
      setMultiplicationCapture(null);
      setDivisionCapture(null);
    } else if (
      +additionCapture + +multiplicationCapture + +divisionCapture !==
      0
    ) {
      setSubtractionCapture(a);
      setAdditionCapture(null);
      setMultiplicationCapture(null);
      setDivisionCapture(null);
    }
  };

  const onMultiplicationButton = () => {
    var a = +additionCapture + +subtractionCapture + +divisionCapture;
    if (a === 0) {
      setMultiplicationCapture(calculationEntry);
      setFunctionPressed(true);
      setPointPressed(false);
      setEqualsPressed(false);
      setAdditionCapture(null);
      setSubtractionCapture(null);
      setDivisionCapture(null);
    } else if (
      +additionCapture + +subtractionCapture + +divisionCapture !==
      0
    ) {
      setMultiplicationCapture(a);
      setAdditionCapture(null);
      setSubtractionCapture(null);
      setDivisionCapture(null);
    }
  };
  const onDivisionButton = () => {
    var a = +additionCapture + subtractionCapture + +multiplicationCapture;
    if (a === 0 && calculationEntry !== 0) {
      setDivisionCapture(calculationEntry);
      setFunctionPressed(true);
      setPointPressed(false);
      setEqualsPressed(false);
      setAdditionCapture(null);
      setSubtractionCapture(null);
      setMultiplicationCapture(null);
    } else if (
      +additionCapture + +subtractionCapture + +multiplicationCapture !==
      0
    ) {
      setDivisionCapture(a);
      setAdditionCapture(null);
      setSubtractionCapture(null);
      setMultiplicationCapture(null);
    }
  };

  const onPointPress = () => {
    if (pointPressed) {
      console.log("point pressed already");
    }
    if (equalsPressed || functionPressed || calculationEntry === 0) {
      setCalculationEntry("0.");
      setFunctionPressed(false);
      setEqualsPressed(false);
      setPointPressed(true);
      setLargeNumber(false);
    }
    if (
      calculationEntry !== 0 &&
      !pointPressed &&
      !equalsPressed &&
      !functionPressed
    ) {
      setCalculationEntry((prev) => prev + ".");
      setPointPressed(true);
    }
  };

  const onZeroPress = () => {
    if (calculationEntry === "0" || calculationEntry === 0) {
      console.log("zero on zero");
    }
    if (calculationEntry !== 0) {
      setCalculationEntry((prev) => prev + "0");
    }
    if (functionPressed || equalsPressed) {
      setCalculationEntry(0);
      setFunctionPressed(false);
      setLargeNumber(false);
    }
  };

  const onOnePress = () => {
    if (
      functionPressed ||
      calculationEntry === "0" ||
      calculationEntry === 0 ||
      equalsPressed
    ) {
      setCalculationEntry(1);
      setFunctionPressed(false);
      setEqualsPressed(false);
    } else {
      setCalculationEntry((prev) => prev + "1");
    }
  };

  const onTwoPress = () => {
    if (
      functionPressed ||
      calculationEntry === "0" ||
      calculationEntry === 0 ||
      equalsPressed
    ) {
      setCalculationEntry(2);
      setFunctionPressed(false);
      setEqualsPressed(false);
      setLargeNumber(false);
    } else {
      setCalculationEntry((prev) => prev + "2");
    }
  };

  const onThreePress = () => {
    if (
      functionPressed ||
      calculationEntry === "0" ||
      calculationEntry === 0 ||
      equalsPressed
    ) {
      setCalculationEntry(3);
      setFunctionPressed(false);
      setEqualsPressed(false);
      setLargeNumber(false);
    } else {
      setCalculationEntry((prev) => prev + "3");
    }
  };

  const onFourPress = () => {
    if (
      functionPressed ||
      calculationEntry === "0" ||
      calculationEntry === 0 ||
      equalsPressed
    ) {
      setCalculationEntry(4);
      setFunctionPressed(false);
      setEqualsPressed(false);
      setLargeNumber(false);
    } else {
      setCalculationEntry((prev) => prev + "4");
    }
  };
  const onFivePress = () => {
    if (
      functionPressed ||
      calculationEntry === "0" ||
      calculationEntry === 0 ||
      equalsPressed
    ) {
      setCalculationEntry(5);
      setFunctionPressed(false);
      setEqualsPressed(false);
      setLargeNumber(false);
    } else {
      setCalculationEntry((prev) => prev + "5");
    }
  };

  const onSixPress = () => {
    if (
      functionPressed ||
      calculationEntry === "0" ||
      calculationEntry === 0 ||
      equalsPressed
    ) {
      setCalculationEntry(6);
      setFunctionPressed(false);
      setEqualsPressed(false);
      setLargeNumber(false);
    } else {
      setCalculationEntry((prev) => prev + "6");
    }
  };

  const onSevenPress = () => {
    if (
      functionPressed ||
      calculationEntry === "0" ||
      calculationEntry === 0 ||
      equalsPressed
    ) {
      setCalculationEntry(7);
      setFunctionPressed(false);
      setEqualsPressed(false);
      setLargeNumber(false);
    } else {
      setCalculationEntry((prev) => prev + "7");
    }
  };
  const onEightPress = () => {
    if (
      functionPressed ||
      calculationEntry === "0" ||
      calculationEntry === 0 ||
      equalsPressed
    ) {
      setCalculationEntry(8);
      setFunctionPressed(false);
      setEqualsPressed(false);
      setLargeNumber(false);
    } else {
      setCalculationEntry((prev) => prev + "8");
    }
  };
  const onNinePress = () => {
    if (
      functionPressed ||
      calculationEntry === "0" ||
      calculationEntry === 0 ||
      equalsPressed
    ) {
      setCalculationEntry(9);
      setFunctionPressed(false);
      setEqualsPressed(false);
      setLargeNumber(false);
    } else {
      setCalculationEntry((prev) => prev + "9");
    }
  };

  return (
    <div className="calculator-container">
      <div
        className={`entry-div ${equalsPressed ? "entry-div-equals" : ""} ${
          largeNumber ? "entry-div-large" : ""
        }`}
      >
        {calculationEntry}
      </div>

      <button className="clear-div" onClick={onClearLastButton}>
        Clear Last
      </button>

      <button className="last-value-clear-div" onClick={onAllClearButton}>
        AC
      </button>

      <button className="equals-div" onClick={onEqualsButton}>
        =
      </button>

      <button
        className={`addition-div ${
          additionCapture !== null ? "addition-div-highlight" : ""
        }`}
        onClick={onAdditionButton}
      >
        +
      </button>

      <button
        className={`subtraction-div ${
          subtractionCapture !== null ? "subtraction-div-highlight" : ""
        }`}
        onClick={onSubtractionButton}
      >
        −
      </button>

      <button
        className={`multiplication-div ${
          multiplicationCapture !== null ? "multiplication-div-highlight" : ""
        }`}
        onClick={onMultiplicationButton}
      >
        ×
      </button>

      <button
        className={`division-div ${
          divisionCapture !== null ? "division-div-highlight" : ""
        }`}
        onClick={onDivisionButton}
      >
        ÷
      </button>

      <button className="point-div" onClick={onPointPress} id="point-div">
        .
      </button>

      <button className="zero-div" onClick={onZeroPress}>
        0
      </button>

      <button className="one-div" onClick={onOnePress}>
        1
      </button>

      <button className="two-div" onClick={onTwoPress}>
        2
      </button>

      <button className="three-div" onClick={onThreePress}>
        3
      </button>

      <button className="four-div" onClick={onFourPress}>
        4
      </button>

      <button className="five-div" onClick={onFivePress}>
        5
      </button>

      <button className="six-div" onClick={onSixPress}>
        6
      </button>

      <button className="seven-div" onClick={onSevenPress}>
        7
      </button>

      <button className="eight-div" onClick={onEightPress}>
        8
      </button>

      <button className="nine-div" onClick={onNinePress}>
        9
      </button>
    </div>
  );
}
