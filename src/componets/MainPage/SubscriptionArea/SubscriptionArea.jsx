import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const SubscriptionArea = () => {
  //   const email = useRef();
  //   const emailValue = email.current.value;

  const [emailVal, setEmailVal] = useState("");
  const [emails, setEmails] = useState([]);
  const [code, setCode] = useState(false);
  console.log(emailVal);

  const handleEmailValue = (e) => {
    setEmailVal(e.target.value);
    console.log(emailVal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailVal) {
      setEmails((state) => [...state, emailVal]);
      console.log("emails subscribed", [...emails, emailVal]);
      setEmailVal("");
    } else {
      alert("Enter correct email");
    }
  };

  const handleCode = () => {
    setCode(true);
  };

  return (
    <div>
      <p>Subscribe to our news and get your promotoon code!</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email"></label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          value={emailVal}
          onChange={handleEmailValue}
        />
        <button type="submit" onClick={handleCode}>
          Subscribe
        </button>
        {code && <p>Done well, your code is {uuidv4()}</p>}
      </form>
    </div>
  );
};

export default SubscriptionArea;
