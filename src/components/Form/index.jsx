import { useState } from "react";

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHover, setIshover] = useState(false);
  return (
    <form className="mt-5 mb-4 d-flex justify-content-center align-content-center gap-3">
      <input
        onChange={(e) => setIsChecked(e.target.checked)}
        id="terms"
        className="form-check-input"
        type="checkbox"
      />
      <div className="terms-wrapper">
        <label htmlFor="terms">Koşulları okudum ve kabul ediyorum</label>
        <p style={{ visibility: isHover ? "visible" : "hidden" }}>
          Size gerçekten bir şey teslim etmeyeceğiz
        </p>
      </div>

      <button
        onMouseEnter={() => setIshover(true)}
        onMouseLeave={() => setIshover(false)}
        disabled={!isChecked}
        className="btn btn-primary"
      >
        Siparişi Onayla
      </button>
    </form>
  );
};

export default Form;
