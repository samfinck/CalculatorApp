import { useState } from "react";

export default function CalculatorComponent() {
  const [calculationEntry, setCalculationEntry] = useState(0);

  const [functionPressed, setFunctionPressed] = useState(false);

  const [equalsPressed, setEqualsPressed] = useState(false);

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
    }
  };

  const onAllClearButton = () => {
    setCalculationEntry(0);
    setFunctionPressed(false);
    setAdditionCapture(null);
    setSubtractionCapture(null);
    setMultiplicationCapture(null);
    setDivisionCapture(null);
  };

  const onEqualsButton = () => {
    if (additionCapture !== null) {
      setCalculationEntry((prev) => +prev + +additionCapture);
      setAdditionCapture(null);
      setFunctionPressed(true);
      setPointPressed(false);
      setEqualsPressed(true);
    }
    if (subtractionCapture !== null) {
      setCalculationEntry((prev) => +subtractionCapture - +prev);
      setSubtractionCapture(null);
      setFunctionPressed(true);
      setPointPressed(false);
      setEqualsPressed(true);
    }
    if (multiplicationCapture !== null) {
      setCalculationEntry((prev) => +prev * +multiplicationCapture);
      setMultiplicationCapture(null);
      setFunctionPressed(true);
      setPointPressed(false);
      setEqualsPressed(true);
    }
    if (divisionCapture !== null) {
      setCalculationEntry((prev) => +divisionCapture / +prev);
      setDivisionCapture(null);
      setFunctionPressed(true);
      setPointPressed(false);
      setEqualsPressed(true);
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
    }
  };

  const onOnePress = () => {
    if (functionPressed || calculationEntry === "0" || calculationEntry === 0) {
      setCalculationEntry(1);
      setFunctionPressed(false);
      setEqualsPressed(false);
    } else {
      setCalculationEntry((prev) => prev + "1");
    }
  };

  const onTwoPress = () => {
    if (functionPressed || calculationEntry === "0" || calculationEntry === 0) {
      setCalculationEntry(2);
      setFunctionPressed(false);
      setEqualsPressed(false);
    } else {
      setCalculationEntry((prev) => prev + "2");
    }
  };

  const onThreePress = () => {
    if (functionPressed || calculationEntry === "0" || calculationEntry === 0) {
      setCalculationEntry(3);
      setFunctionPressed(false);
      setEqualsPressed(false);
    } else {
      setCalculationEntry((prev) => prev + "3");
    }
  };

  const onFourPress = () => {
    if (functionPressed || calculationEntry === "0" || calculationEntry === 0) {
      setCalculationEntry(4);
      setFunctionPressed(false);
      setEqualsPressed(false);
    } else {
      setCalculationEntry((prev) => prev + "4");
    }
  };
  const onFivePress = () => {
    if (functionPressed || calculationEntry === "0" || calculationEntry === 0) {
      setCalculationEntry(5);
      setFunctionPressed(false);
      setEqualsPressed(false);
    } else {
      setCalculationEntry((prev) => prev + "5");
    }
  };

  const onSixPress = () => {
    if (functionPressed || calculationEntry === "0" || calculationEntry === 0) {
      setCalculationEntry(6);
      setFunctionPressed(false);
      setEqualsPressed(false);
    } else {
      setCalculationEntry((prev) => prev + "6");
    }
  };

  const onSevenPress = () => {
    if (functionPressed || calculationEntry === "0" || calculationEntry === 0) {
      setCalculationEntry(7);
      setFunctionPressed(false);
      setEqualsPressed(false);
    } else {
      setCalculationEntry((prev) => prev + "7");
    }
  };
  const onEightPress = () => {
    if (functionPressed || calculationEntry === "0" || calculationEntry === 0) {
      setCalculationEntry(8);
      setFunctionPressed(false);
      setEqualsPressed(false);
    } else {
      setCalculationEntry((prev) => prev + "8");
    }
  };
  const onNinePress = () => {
    if (functionPressed || calculationEntry === "0" || calculationEntry === 0) {
      setCalculationEntry(9);
      setFunctionPressed(false);
      setEqualsPressed(false);
    } else {
      setCalculationEntry((prev) => prev + "9");
    }
  };

  return (
    <div className="calculator-container">
      <div className={`entry-div ${equalsPressed ? "entry-div-equals" : ""}`}>
        {calculationEntry}
      </div>

      <div className="clear-div" onClick={onClearLastButton}>
        Clear Last Entry
      </div>

      <div className="last-value-clear-div" onClick={onAllClearButton}>
        AC
      </div>

      <div className="equals-div" onClick={onEqualsButton}>
        =
      </div>

      <div
        className={`addition-div ${
          additionCapture !== null ? "addition-div-highlight" : ""
        }`}
        onClick={onAdditionButton}
      >
        +
      </div>

      <div
        className={`subtraction-div ${
          subtractionCapture !== null ? "subtraction-div-highlight" : ""
        }`}
        onClick={onSubtractionButton}
      >
        −
      </div>

      <div
        className={`multiplication-div ${
          multiplicationCapture !== null ? "multiplication-div-highlight" : ""
        }`}
        onClick={onMultiplicationButton}
      >
        ×
      </div>

      <div
        className={`division-div ${
          divisionCapture !== null ? "division-div-highlight" : ""
        }`}
        onClick={onDivisionButton}
      >
        ÷
      </div>

      <div className="point-div" onClick={onPointPress} id="point-div">
        .
      </div>

      <div className="zero-div" onClick={onZeroPress}>
        0
      </div>

      <div className="one-div" onClick={onOnePress}>
        1
      </div>

      <div className="two-div" onClick={onTwoPress}>
        2
      </div>

      <div className="three-div" onClick={onThreePress}>
        3
      </div>

      <div className="four-div" onClick={onFourPress}>
        4
      </div>

      <div className="five-div" onClick={onFivePress}>
        5
      </div>

      <div className="six-div" onClick={onSixPress}>
        6
      </div>

      <div className="seven-div" onClick={onSevenPress}>
        7
      </div>

      <div className="eight-div" onClick={onEightPress}>
        8
      </div>

      <div className="nine-div" onClick={onNinePress}>
        9
      </div>
    </div>
  );
}
