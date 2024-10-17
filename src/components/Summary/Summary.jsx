import "./Summary.css";

const Summary = ({
  plan,
  cost,
  firstCheckMain,
  secondCheckMain,
  thirdCheckMain,
  termChoosed,
  onChange
}) => {
  const planPrice = (plan.includes('Arcade')&& termChoosed) ? 9 : (plan.includes('Arcade')&& !termChoosed) ? 90 : (plan.includes('Advanced')&& termChoosed) ? 12 : (plan.includes('Advanced')&& !termChoosed) ? 120 : (plan.includes('Pro')&& termChoosed) ? 15 : (plan.includes('Pro')&& !termChoosed) ? 150 : 0;
  const firstAddPrice = (firstCheckMain && termChoosed) ? 1 : (firstCheckMain && !termChoosed) ? 10 : 0;
  const secondAddPrice = (secondCheckMain && termChoosed) ? 1 : (secondCheckMain && !termChoosed) ? 10 : 0;
  const thirdAddPrice = (thirdCheckMain && termChoosed) ? 2 : (thirdCheckMain && !termChoosed) ? 20 : 0;
  const totalPrice = planPrice + firstAddPrice + secondAddPrice + thirdAddPrice;

  const handleChangePage = () => {
    onChange(2)
  }

  return (
    <div className="summary">
      <h1 className="title">Finishing up</h1>
      <p className="description">
        Double-check everything looks OK before confirming.
      </p>
      <div className="summary-elections">
        <div className="summary-elections-plan">
          <div className="summary-elections-plan-name">
            <span className="currentPlan">{plan}</span>
            <span className="changePlan" onClick={handleChangePage}>Change</span>
          </div>
          <span className="summary-elections-plan-price">{cost}</span>
        </div>

        {firstCheckMain && (
          <div className="summary-elections-addons">
            <span className="summary-elections-addons-name">
              Online service
            </span>
            <span className="summary-elections-addons-price">{`${
              termChoosed ? "+$1/mo" : "+$10/yr"
            }`}</span>
          </div>
        )}

        {secondCheckMain && (
          <div className="summary-elections-addons">
            <span className="summary-elections-addons-name">
              Larger storage
            </span>
            <span className="summary-elections-addons-price">{`${
              termChoosed ? "+$1/mo" : "+$10/yr"
            }`}</span>
          </div>
        )}

        {thirdCheckMain && (
          <div className="summary-elections-addons">
            <span className="summary-elections-addons-name">
              Customizable profile
            </span>
            <span className="summary-elections-addons-price">
              {`${termChoosed ? "+$2/mo" : "+$20/yr"}`}
            </span>
          </div>
        )}
      </div>
      <div className="summary-total">
        <span className="summary-total-text">Total (per month)</span>
        <span className="summary-total-price">
          +${totalPrice}/{termChoosed ? 'mo' : 'yr'}
        </span>
      </div>
    </div>
  );
};

export default Summary;
