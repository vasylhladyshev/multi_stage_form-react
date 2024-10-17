import "./AddOns.css";
import { useState } from "react";

const AddOns = ({onChange, termChoosed, firstCheckMain, secondCheckMain, thirdCheckMain}) => {
  const [firstCheck, setFirstCheck] = useState(firstCheckMain);
  const [secondCheck, setSecondCheck] = useState(secondCheckMain);
  const [thirdCheck, setThirdCheck] = useState(thirdCheckMain);


  const handleChangeAcces = () => {
    const newCheckState = !firstCheck;
    setFirstCheck(newCheckState);
    onChange({add: 'Online service', addCost: '+$1/mo', checkStateFirst:  newCheckState, checkStateSecond: secondCheck, checkStateThird: thirdCheck})
  }

  const handleChangeStorage = () => {
    const newCheckState = !secondCheck;
    setSecondCheck(newCheckState);
    onChange({add: 'Larger storage', addCost: '+$1/mo', checkStateFirst:  firstCheck, checkStateSecond: newCheckState, checkStateThird: thirdCheck})
  }

  const handleChangeCustomizable = () => {
    const newCheckState = !thirdCheck;
    setThirdCheck(newCheckState);
    onChange({add: 'Customizable profile', addCost: '+2/mo', checkStateFirst:  firstCheck, checkStateSecond: secondCheck, checkStateThird: newCheckState})
  }


  return (
    <div className="addOns">
      <h1 className="title">Pick add-ons</h1>
      <p className="description">
        Add-ons help enhance your gaming experience.
      </p>
      <div className={`extencion ${firstCheckMain ? 'added' : ''}`} onClick={handleChangeAcces} >
        <input className="extencion-checkbox" type="checkbox" checked={firstCheck}></input>
        <div className="extencion-text">
        <div className="extencion-description">
          <span className="extencion-description-name">Online service</span>
          <span className="extencion-description-text">
            Access to multiplayer games
          </span>
        </div>
        <span className="extencion-price">{`${termChoosed ? '+$1/mo' : '+$10/yr'}`}</span>
        </div>
      </div>
      <div className={`extencion ${secondCheckMain ? 'added' : ''}`} onClick={handleChangeStorage} >
        <input className="extencion-checkbox" type="checkbox" checked={secondCheck}></input>
        <div className="extencion-text">
        <div className="extencion-description">
          <span className="extencion-description-name">Larger storage</span>
          <span className="extencion-description-text">
            Extra 1TB of cloud save
          </span>
        </div>
        <span className="extencion-price">{`${termChoosed ? '+$1/mo' : '+$10/yr'}`}</span>
        </div>
      </div>
      <div className={`extencion ${thirdCheckMain ? 'added' : ''}`} onClick={handleChangeCustomizable}>
        <input className="extencion-checkbox" type="checkbox" checked={thirdCheck}></input>
        <div className="extencion-text">
        <div className="extencion-description">
          <span className="extencion-description-name">
            Customizable profile
          </span>
          <span className="extencion-description-text">
            Custom theme on your profile
          </span>
        </div>
        <span className="extencion-price">{`${termChoosed ? '+$2/mo' : '+$20/yr'}`}</span>
        </div>
      </div>
    </div>
  );
};

export default AddOns;