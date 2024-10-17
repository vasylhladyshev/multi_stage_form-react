import { useState } from "react";
import "./App.css";
import Info from "./components/Info/Info";
import Plan from "./components/Plan/Plan";
import AddOns from "./components/Add-ons/AddOns";
import Summary from "./components/Summary/Summary";
import FinalPage from "./components/FinalPage/FinalPage";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [state, setState] = useState(1);
  const [plan, setPlan] = useState("You didn't choosed yet");
  const [planName, setPlanName] = useState("");
  const [termChoosed, setTermChoosed] = useState(true);
  const [cost, setCost] = useState("");
  const [firstCheckMain, setFirstCheckMain] = useState(false);
  const [secondCheckMain, setSecondCheckMain] = useState(false);
  const [thirdCheckMain, setThirdCheckMain] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [nameError, setNameError] = useState("Name cannot be empty.");
  const [emailError, setEmailError] = useState("Invalid email format.");
  const [numberError, setNumberError] = useState(
    "Invalid phone number format."
  );

  const handleChangeChoice = ({ planName, plan, cost, term }) => {
    setPlan(plan);
    setCost(cost);
    setPlanName(planName);
    setTermChoosed(term);
  };

  const handleChangeAdds = ({
    checkStateFirst,
    checkStateSecond,
    checkStateThird,
  }) => {
    setFirstCheckMain(checkStateFirst);
    setSecondCheckMain(checkStateSecond);
    setThirdCheckMain(checkStateThird);
  };

  const handleChangePage = (number) => {
    setState(number);
  };

  const setNext = () => {
    setState((state) => state + 1);
  };

  const setPrev = () => {
    setState((state) => state - 1);
  };

  return (
    <div className="app">
      <nav className="navigation">
        <ul className="pagination">
          <li className="page-item">
            <button
              className={`page-link ${1 === state ? "active" : ""}`}
              onClick={() => setState(1)}
            >
              1
            </button>
            <div className="page-text">
              <span className="page-step">STEP 1</span>
              <span className="page-name">YOUR INFO</span>
            </div>
          </li>
          <li className="page-item">
            <button
              className={`page-link ${2 === state ? "active" : ""}`}
              onClick={() => setState(2)}
            >
              2
            </button>
            <div className="page-text">
              <span className="page-step">STEP 2</span>
              <span className="page-name">SELECT PLAN</span>
            </div>
          </li>
          <li className="page-item">
            <button
              className={`page-link ${3 === state ? "active" : ""}`}
              onClick={() => setState(3)}
            >
              3
            </button>
            <div className="page-text">
              <span className="page-step">STEP 3</span>
              <span className="page-name">ADD-ONS</span>
            </div>
          </li>
          <li className="page-item">
            <button
              className={`page-link ${
                4 === state ? "active" : 5 === state ? "active" : ""
              }`}
              onClick={() => setState(4)}
            >
              4
            </button>
            <div className="page-text">
              <span className="page-step">STEP 4</span>
              <span className="page-name">SUMMARY</span>
            </div>
          </li>
        </ul>
      </nav>
      <div className="page-control">
        <div className="page-content">
          {state === 1 && (
            <Info
              setIsButtonDisabled={setIsButtonDisabled}
              isButtonDisabled={isButtonDisabled}
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              number={number}
              setNumber={setNumber}
              nameError={nameError}
              setNameError={setNameError}
              emailError={emailError}
              setEmailError={setEmailError}
              numberError={numberError}
              setNumberError={setNumberError}
            />
          )}
          {state === 2 && (
            <Plan
              onChange={handleChangeChoice}
              planName={planName}
              termChoosed={termChoosed}
              setIsButtonDisabled={setIsButtonDisabled}
              isButtonDisabled={isButtonDisabled}
            />
          )}
          {state === 3 && (
            <AddOns
              onChange={handleChangeAdds}
              termChoosed={termChoosed}
              firstCheckMain={firstCheckMain}
              secondCheckMain={secondCheckMain}
              thirdCheckMain={thirdCheckMain}
            />
          )}
          {state === 4 && (
            <Summary
              onChange={handleChangePage}
              plan={plan}
              cost={cost}
              firstCheckMain={firstCheckMain}
              secondCheckMain={secondCheckMain}
              thirdCheckMain={thirdCheckMain}
              termChoosed={termChoosed}
            />
          )}
          {state === 5 && <FinalPage />}
        </div>
        {state !== 5 && (
          <div className={`pagination-buttons ${state === 1 ? "start" : ""} `}>
            {state > 1 && (
              <button className="prev-page" onClick={setPrev}>
                Go back
              </button>
            )}
            {state === 4 ? (
              <button className="confirm" onClick={() => setState(5)}>
                Confirm
              </button>
            ) : (
              <button
                className="next-page"
                onClick={setNext}
                disabled={isButtonDisabled}
              >
                Next Step
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
