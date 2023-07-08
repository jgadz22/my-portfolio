import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactRight = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  const form = useRef();
  const [fullName, SetFullName] = useState("");
  const [phoneNumber, SetPhoneNumber] = useState("");
  const [email, SetEmail] = useState("");
  const [subject, SetSubject] = useState("");
  const [message, SetMessage] = useState("");
  const [errorMessage, SetErrorMessage] = useState("");
  const [successMessage, SetSuccessMessage] = useState("");

  //   full Name Validation
  const fullNameValidation = (name) => {
    let regex = /^[A-Za-z.\- ]+$/;
    return regex.test(name);
  };

  //   Phone Number Validation
  const phoneNumberValidation = (mobileNumber) => {
    let regex = /^\d{7,15}$/;
    return regex.test(mobileNumber);
  };

  //   Email Validation
  const emailValidation = (userEmail) => {
    return String(userEmail)
      .toLocaleLowerCase()
      .match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (fullName === "") {
      SetErrorMessage("Full name is required");
    } else if (!fullNameValidation(fullName)) {
      SetErrorMessage("Please enter a valid Full Name");
    } else if (phoneNumber === "") {
      SetErrorMessage("Phone Number is required");
    } else if (!phoneNumberValidation(phoneNumber)) {
      SetErrorMessage("Phone Number accepted only 7-15 digits");
    } else if (email === "") {
      SetErrorMessage("Email Address is required");
    } else if (!emailValidation(email)) {
      SetErrorMessage("Incorrect Email Address");
    } else if (subject === "") {
      SetErrorMessage("Subject is required");
    } else if (message === "") {
      SetErrorMessage("Message is required");
    } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            e.target.reset();
            SetSuccessMessage(
              `Thank you ${fullName}, your message has been sent successfully.`
            );
          },
          (error) => {
            console.log(error.text);
          }
        );

      SetErrorMessage("");
      SetFullName("");
      SetPhoneNumber("");
      SetEmail("");
      SetSubject("");
      SetMessage("");
    }
  };

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: "100%",
        transition: {
          duration: 3,
          type: "spring",
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: "0%",
      });
    }
  }, [inView, animation]);
  return (
    <div className="w-full lgl:w-[60%]" ref={ref}>
    <motion.div animate={animation}>
    <div className="w-full h-full py-8 bg-gradient-to-r from-[#1e2024] to-[#202327] flex flex-col gap-8 px-4 lgl:px-8 rounded-lg shadow-shadowOne">
      <form
        ref={form}
        onSubmit={handleSend}
        className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
      >
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
              placeholder="Ex.: Joseph G. Gadiaza"
              onChange={(e) => SetFullName(e.target.value)}
              value={fullName}
              type="text"
              name="fullName_set"
              className={` ${
                (errorMessage === "Full name is required" ||
                  errorMessage === "Please enter a valid Full Name") &&
                "outline-designColor"
              } contactInput `}
            />
          </div>
          <div className="w-full lgl:w-1/2 flex flex-col gap-4">
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              Phone Number
            </p>
            <input
             placeholder="Ex.: 9511050865"
              onChange={(e) => SetPhoneNumber(e.target.value)}
              value={phoneNumber}
              type="text"
              name="phoneNumber_set"
              className={` ${
                (errorMessage === "Phone Number is required" ||
                  errorMessage === "Phone Number accepted only 7-15 digits") &&
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
            placeholder="Ex.: gadiazajoseph18@gmail"
            onChange={(e) => SetEmail(e.target.value)}
            value={email}
            type="email"
            name="email_set"
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
            name="subject_set"
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
            name="message_set"
            cols="30"
            rows="8"
            className={` ${
              errorMessage === "Message is required" && "outline-designColor"
            } contactTextArea `}
          ></textarea>
        </div>
        <div className="w-full">
          <button className="w-full h-12 hover:border-[1px] bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white hover:border-designColor border-transparent duration-300">
            Send Meassage
          </button>
        </div>
      </form>
    </div>
    </motion.div>
  </div>
  );
};

export default ContactRight;
