import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  SubscrBtn,
  SubscrContainer,
  SubscrForm,
  SubscrInput,
  SubscrTitle,
} from "./SubscriptionArea.styled";
import OrderAccepted from "componets/UI/OrderAccepted";
import { AnimatePresence } from "framer-motion";

const SubscriptionArea = () => {
  //   const email = useRef();
  //   const emailValue = email.current.value;

  const [emailVal, setEmailVal] = useState("");
  const [emails, setEmails] = useState([]);
  const [codeType, setCodeType] = useState("");
  const [newCode, setNewCode] = useState("");
  console.log(emailVal);

  useEffect(() => {
    const storedEmails = JSON.parse(localStorage.getItem("emails")) || [];
    setEmails(storedEmails);
  }, []);

  // Save emails to localStorage whenever the emails array changes
  useEffect(() => {
    localStorage.setItem("emails", JSON.stringify(emails));
  }, [emails]);

  const handleEmailValue = (e) => {
    setEmailVal(e.target.value);
    console.log(emailVal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailVal) {
      if (emails.includes(emailVal)) {
        setCodeType("exists");
      } else {
        setEmails((state) => [...state, emailVal]);
        setNewCode(uuidv4());
        setCodeType("new");

        console.log("emails subscribed", [...emails, emailVal]);
      }
      setEmailVal("");
    } else {
      alert("Enter correct email");
    }
  };

  //   const handleCode = () => {
  //     setCode(true);
  //     setEmailVal("");
  //   };

  useEffect(() => {
    let timeout;
    if (codeType) {
      timeout = setTimeout(() => {
        setCodeType("");
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [codeType]);

  return (
    <SubscrContainer>
      <SubscrTitle>
        Subscribe to our news and get your promotion code!
      </SubscrTitle>
      <SubscrForm onSubmit={handleSubmit}>
        <label htmlFor="email"></label>
        <SubscrInput
          type="email"
          placeholder="Email"
          id="email"
          value={emailVal}
          onChange={handleEmailValue}
        />
        <SubscrBtn type="submit">Subscribe</SubscrBtn>
      </SubscrForm>
      <AnimatePresence>
        {codeType === "exists" && (
          <OrderAccepted text="This email is already in our database" />
        )}
        {codeType === "new" && (
          <OrderAccepted text={`Done well, your code is ${newCode}`} />
        )}
      </AnimatePresence>
    </SubscrContainer>
  );
};

export default SubscriptionArea;
