import React, { useState } from "react";

const ContactRight = () => {
  const [fullName, SetFullName] = useState("");
  const [phoneNumber, SetPhoneNumber] = useState("");
  const [email, SetEmail] = useState("");
  const [subject, SetSubject] = useState("");
  const [message, SetMessage] = useState("");
  const [errorMessage, SetErrorMessage] = useState("");
  const [successMessage, SetSuccessMessage] = useState("");

  //   Email Validation
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (fullName === "") {
      SetErrorMessage("Full name is required");
    } else if (phoneNumber === "") {
      SetErrorMessage("Phone Number is required");
    } else if (email === "") {
      SetErrorMessage("Email Address is required");
    } else if (!emailValidation(email)) {
      SetErrorMessage("Incorrect Email Address");
    } else if (subject === "") {
      SetErrorMessage("Subject is required");
    } else if (message === "") {
      SetErrorMessage("Message is required");
    } else {
      SetSuccessMessage(
        `Thank you ${fullName}, your message has been sent successfully.`
      );
      SetErrorMessage("");
      SetFullName("");
      SetPhoneNumber("");
      SetEmail("");
      SetSubject("");
      SetMessage("");
    }
  };
  return (
    <div className="w-full lgl:w-[60%] h-full py-8 bg-gradient-to-r from-[#1e2024] to-[#202327] flex flex-col gap-8 px-4 lgl:px-8 rounded-lg shadow-shadowOne">
      <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
        {errorMessage && (
          <p className="py-3 bg--gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
            {errorMessage}
          </p>
        )}
        {successMessage && (
          <p className="py-3 bg--gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
            {successMessage}
          </p>
        )}
        <div className="w-full flex flex-col lgl:flex-row gap-2 lg:gap-10">
          <div className="w-full lgl:w-1/2 flex flex-col gap-4">
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              Full Name
            </p>
            <input
              onChange={(e) => SetFullName(e.target.value)}
              value={fullName}
              type="text"
              className={` ${
                errorMessage === "Full name is required" &&
                "outline-designColor"
              } contactInput `}
            />
          </div>
          <div className="w-full lgl:w-1/2 flex flex-col gap-4">
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              Phone Number
            </p>
            <input
              onChange={(e) => SetPhoneNumber(e.target.value)}
              value={phoneNumber}
              type="text"
              className={` ${
                errorMessage === "Phone Number is required" &&
                "outline-designColor"
              } contactInput `}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            Email Address
          </p>
          <input
            onChange={(e) => SetEmail(e.target.value)}
            value={email}
            type="email"
            className={` ${
              (errorMessage === "Email Address is required" ||
                errorMessage === "Incorrect Email Address") &&
              "outline-designColor"
            } contactInput `}
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            Subject
          </p>
          <input
            onChange={(e) => SetSubject(e.target.value)}
            value={subject}
            type="text"
            className={` ${
              errorMessage === "Subject is required" && "outline-designColor"
            } contactInput `}
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            Message
          </p>
          <textarea
            onChange={(e) => SetMessage(e.target.value)}
            value={message}
            cols="30"
            rows="8"
            className={` ${
              errorMessage === "Message is required" && "outline-designColor"
            } contactTextArea `}
          ></textarea>
        </div>
        <div className="w-full">
          <button
            onClick={handleSend}
            className="w-full h-12 hover:border-[1px] bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white hover:border-designColor border-transparent duration-300"
          >
            Send Meassage
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactRight;
