import Display from "./Display";
import ButtonTop from "./ButtonTop";
import ButtonMath from "./ButtonMath";
import ButtonOpp from "./ButtonOpp";
import ButtonNum from "./ButtonNum";
import Title from "./Title";
import { useEffect, useState } from "react";

export default function Calculator() {
  const [disp, setDisplay] = useState("0");
  const [clear, setClear] = useState(false);

  useEffect(() => {
    document.querySelector("#display").value = disp;
  }, []);
  useEffect(() => {
    if (clear) setDisplay("0");
  });
  const addChar = (e) => {
    e.preventDefault();
    if (clear) setClear(false);
    let currentchar = e.target.value;

    if (disp === "0") {
      setDisplay("");
      setDisplay(currentchar);
    } else {
      let chars = disp + currentchar;
      setDisplay(chars);
    }
  };
  const clearfun = (e) => {
    setClear(true);
  };

  const equalfun = (e) => {
    let result = eval(disp);
    setDisplay(result);
  };
  const delChar = (e) => {
    let result = disp.substring(0, disp.length - 1);
    setDisplay(result);
  };
  const changeSign = (e) => {
    if (disp.substring(0, 1) === "-") {
      let result = disp.substring(1, disp.length);
      setDisplay(result);
    } else setDisplay("-" + disp);
  };
  const pi = (e) => {
    let result = disp + "3.14159265359";
    setDisplay(result);
  };
  const square = (e) => {
    let sqr = disp * disp;
    setDisplay(sqr);
  };
  return (
    <form name="sci-calc">
      <Title />
      <table className="calculator" cellSpacing="0" cellPadding="1">
        <tr>
          <Display value={disp} />
        </tr>
        <tr>
          <ButtonTop value="C" click={(e) => setDisplay("0")} />
          <ButtonTop value="<__" click={delChar} />
          <ButtonTop value="=" click={equalfun} />
          <ButtonOpp value="&#960;" click={pi} />
          <ButtonMath value="%" click={addChar} />
        </tr>
        <tr>
          <ButtonNum value="7" click={addChar} />
          <ButtonNum value="8" click={addChar} />
          <ButtonNum value="9" click={addChar} />
          <ButtonOpp value="x&#94;" click={(e) => setDisplay(Math.exp(disp))} />
          <ButtonMath value="/" click={addChar} />
        </tr>
        <tr>
          <ButtonNum value="6" click={addChar} />
          <ButtonNum value="5" click={addChar} />
          <ButtonNum value="4" click={addChar} />
          <ButtonOpp value="ln" click={(e) => setDisplay(Math.log(disp))} />
          <ButtonMath value="*" click={addChar} />
        </tr>
        <tr>
          <ButtonNum value="3" click={addChar} />
          <ButtonNum value="2" click={addChar} />
          <ButtonNum value="1" click={addChar} />
          <ButtonOpp
            value="&radic;"
            click={(e) => setDisplay(Math.sqrt(disp))}
          />
          <ButtonMath value="-" click={addChar} />
        </tr>
        <tr>
          <ButtonMath value="&#177;" click={changeSign} />
          <ButtonNum value="0" click={addChar} />
          <ButtonMath value="." click={addChar} />
          <ButtonOpp value="x&#50;" click={square} />
          <ButtonMath value="+" click={addChar} />
        </tr>
        <tr>
          <ButtonMath value="(" click={addChar} />
          <ButtonMath value=")" click={addChar} />
          <ButtonMath value="sin" click={(e) => setDisplay(Math.sin(disp))} />
          <ButtonMath value="cos" click={(e) => setDisplay(Math.cos(disp))} />
          <ButtonMath value="tan" click={(e) => setDisplay(Math.tan(disp))} />
        </tr>
      </table>
    </form>
  );
}
