/* eslint-disable @typescript-eslint/comma-dangle */
import React, { useRef, useState } from "react";
import "./FormStyle.css";
import emailjs from "@emailjs/browser";

export default function Form() {
  const form = useRef<HTMLFormElement>(null);
  const [contactStatus, setContactStatus] = useState({
    success: "",
    message: "",
  });
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function formValidator(form: object): boolean {
    let errors = 0;

    for (const [key, value] of Object.entries(form)) {
      if (value.length === 0) {
        setContactStatus({
          success: "false",
          message: `Fill the ${key}, please.`,
        });
        errors++;
        break;
      } else if (value.length < 6) {
        setContactStatus({
          success: "false",
          message: `The ${key} is too short!`,
        });
        errors++;
        break;
      } else if (key === "email") {
        try {
          if (value.split("@")[1].split(".")[1].length >= 2) {
            setContactStatus({ success: "", message: "" });
          } else {
            setContactStatus({
              success: "false",
              message: `Enter a valid email!`,
            });
            errors++;
            break;
          }
        } catch (err) {
          setContactStatus({
            success: "false",
            message: `Enter a valid email!`,
          });
          errors++;
          break;
        }
      }
    }

    return errors === 0;
  }

  const valueHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.currentTarget;
    setContactInfo((prevState) => ({
      ...prevState,
      [name]: value.replace(/\r?\n|\r/g, " "),
    }));
  };

  const handleStatus = (status: boolean): void => {
    if (status) {
      setContactStatus({
        success: "true",
        message: "Email successfully sent!",
      });
    } else {
      setContactStatus({
        success: "false",
        message: "There was an error sending the email.",
      });
    }
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (form.current != null) {
      const validatedForm = formValidator(contactInfo);
      if (validatedForm) {
        emailjs
          .sendForm(
            "service_v2q879k",
            "template_otr4ebj",
            form.current,
            "opvtiAC6K9-_-Pyez"
          )
          .then((result) => {
            handleStatus(true);
            form.current?.reset();
            setContactInfo({
              name: "",
              email: "",
              subject: "",
              message: "",
            });
          })
          .catch((error) => {
            console.error("Email sending error:", error);
            handleStatus(false);
          });
      }
    }
  };

  return (
    <div className="form">
      <form onSubmit={sendEmail} ref={form}>
        <label>Your name *</label>
        <input type="text" name="name" onChange={valueHandler} />

        <label>Email *</label>
        <input type="text" name="email" onChange={valueHandler} />

        <label>Subject *</label>
        <input type="text" name="subject" onChange={valueHandler} />

        <label>Message *</label>
        <textarea
          rows={6}
          placeholder="Type your message here"
          name="message"
          onChange={valueHandler}
        />

        <button className="btn">Submit</button>
      </form>
      {contactStatus.success === "true" && (
        <p className="email-status success">{contactStatus.message}</p>
      )}
      {contactStatus.success === "false" && (
        <p className="email-status fail">{contactStatus.message}</p>
      )}
    </div>
  );
}
