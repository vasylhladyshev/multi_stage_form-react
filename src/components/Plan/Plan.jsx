import "./Plan.css";
import { useEffect, useState } from "react";

const Plan = ({ onChange, planName, termChoosed, setIsButtonDisabled, isButtonDisabled  }) => {
  const [term, setTerm] = useState(termChoosed);

  const [choice, setChoice] = useState(planName);

  const handleChangeArcade = () => {
    setChoice("Arcade");
    onChange({
      planName: "Arcade",
      plan: `Arcade (${term ? "Monthly" : "Yearly"})`,
      cost: `${term ? "$9/mo" : "$90/yr"}`,
      term: term,
    });
  };

  const handleChangeAdvanced = () => {
    setChoice("Advanced");
    onChange({
      planName: "Advanced",
      plan: `Advanced (${term ? "Monthly" : "Yearly"})`,
      cost: `${term ? "$12/mo" : "$120/yr"}`,
      term: term,
    });
  };

  const handleChangePro = () => {
    setChoice("Pro");
    onChange({
      planName: "Pro",
      plan: `Pro (${term ? "Monthly" : "Yearly"})`,
      cost: `${term ? "$15/mo" : "$150/yr"}`,
      term: term,
    });
  };

  const handleChangeCommon = () => {
    const newTerm = !term;
    const newCost = `${
      choice === "Arcade"
        ? newTerm
          ? "$9/mo"
          : "$90/yr"
        : choice === "Advanced"
        ? newTerm
          ? "$12/mo"
          : "$120/yr"
        : newTerm
        ? "$15/mo"
        : "$150/yr"
    }`;
    setTerm(newTerm);
    onChange({
      planName: choice,
      plan: `${choice} (${!term ? "Monthly" : "Yearly"})`,
      cost: newCost,
      term: newTerm,
    });
  };

  useEffect(() => {if(choice){setIsButtonDisabled(false)}else{setIsButtonDisabled(true)}}, [choice])

  return (
    <div className="plan">
      <h1 className="title">Select your plan</h1>
      <p className="description">
        You have the option of monthly or yearly billing
      </p>
      <div className="levels">
        <div
          className={`level ${choice === "Arcade" ? "selected" : ""}`}
          onClick={handleChangeArcade}
        >
          <img
            className="level-icon"
            src="icon-arcade.svg"
            alt="icon-arcade"
          ></img>
          <div className="level-description">
            <h2 className="level-name">Arcade</h2>
            {term ? (
              <span className="level-price">$9/mo</span>
            ) : (
              <span className="level-price">$90/yr</span>
            )}
            {!term && <span className="level-bonus">2 month free</span>}
          </div>
        </div>
        <div
          className={`level ${choice === "Advanced" ? "selected" : ""}`}
          onClick={handleChangeAdvanced}
        >
          <img
            className="level-icon"
            src="icon-advanced.svg"
            alt="icon-advanced"
          ></img>
          <div className="level-description">
            <h2 className="level-name">Advanced</h2>
            {term ? (
              <span className="level-price">$12/mo</span>
            ) : (
              <span className="level-price">$120/yr</span>
            )}
            {!term && <span className="level-bonus">2 month free</span>}
          </div>
        </div>
        <div
          className={`level ${choice === "Pro" ? "selected" : ""}`}
          onClick={handleChangePro}
        >
          <img className="level-icon" src="icon-pro.svg" alt="icon-pro"></img>
          <div className="level-description">
            <h2 className="level-name">Pro</h2>
            {term ? (
              <span className="level-price">$15/mo</span>
            ) : (
              <span className="level-price">$150/yr</span>
            )}
            {!term && <span className="level-bonus">2 month free</span>}
          </div>
        </div>
      </div>
      <div className="term-choose">
        <span
          className={term === true ? 'toggle-active' : "toggle-non-active"}
        >
          Monthly
        </span>
        <div className="toggle-switch">
          <input
            type="checkbox"
            id="toggle"
            onChange={handleChangeCommon}
            checked={!term}
          />
          <label for="toggle"></label>
        </div>
        <span
          className={term === true ? "toggle-non-active" : "toggle-active"}
        >
          Yearly
        </span>
      </div>
      {isButtonDisabled && <div className="button-disabled-alarm">Please select a plan.</div>}
    </div>
  );
};

export default Plan;
