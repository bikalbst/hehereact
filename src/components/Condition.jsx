import Falsecomp from "./Falsecomp";
import Truecomp from "./Truecomp";

export default function Condition() {
  const display = false;
  {
    return display ? <Truecomp /> : <Falsecomp />;
  }
}
