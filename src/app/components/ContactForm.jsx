"use client";
import { useState } from "react";

function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [messageStatus, setMessageStatus] = useState("");
  function resetState() {
    setEmail("");
    setSubject("");
    setMessage("");
    setFullName("");
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        email: email,
        fullname: fullName,
        subject: subject,
        message: message,
      }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });
    setMessageStatus(res.ok);
    resetState();
  };
  return (
    <div
      className="bg-primary-color border-secondary-color flex flex-col items-center justify-center rounded-3xl border 
   border-dashed px-5 pb-0.5 pt-5 text-center shadow-[0px_0px_150px_rgba(255,0,0,0.25),-50px_0px_150px_rgba(0,0,255,0.25),50px_0px_150px_rgba(255,255,0,0.25)] transition-all duration-1000 ease-in-out"
    >
      <form onSubmit={handleSubmit} className="flex w-[50vw] flex-col">
        <h1 className=" border-secondary-color my-6 w-full border-b border-dashed text-3xl">
          {" "}
          Send a Message 📧{" "}
        </h1>
        <label htmlFor="fullname">
          Full name <span className="text-red-500">*</span>
        </label>
        <input
          className=" text-text-field-text  placeholder:text-primary-text-color focus:bg-text-field-bg focus:ring-offset-secondary-color focus:ring-offset m-3 rounded-lg border border-gray-500 bg-transparent p-2 transition-all duration-1000 ease-in-out placeholder:italic placeholder:opacity-60 focus:outline-none focus:ring focus:ring-blue-700 focus:ring-opacity-30"
          type="text"
          placeholder="Please enter your Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <label htmlFor="email">
          E-mail <span className="text-red-500">*</span>
        </label>
        <input
          placeholder="Please enter a valid Email"
          className=" text-text-field-text  placeholder:text-primary-text-color focus:bg-text-field-bg focus:ring-offset-secondary-color focus:ring-offset m-3 rounded-lg border border-gray-500 bg-transparent p-2 transition-all duration-1000 ease-in-out placeholder:italic placeholder:opacity-60 focus:outline-none focus:ring focus:ring-blue-700 focus:ring-opacity-30"
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <label htmlFor="subject">
          Subject<span className="text-red-500">*</span>
        </label>

        <input
          placeholder="Please enter a subject line"
          className=" text-text-field-text  placeholder:text-primary-text-color focus:bg-text-field-bg focus:ring-offset-secondary-color focus:ring-offset m-3 rounded-lg border border-gray-500 bg-transparent p-2 transition-all duration-1000 ease-in-out placeholder:italic placeholder:opacity-60 focus:outline-none focus:ring focus:ring-blue-700 focus:ring-opacity-30"
          type="text"
          name="subject"
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
          required
        />

        <label htmlFor="message">
          Message<span className="text-red-500">*</span>
        </label>
        <textarea
          className="text-text-field-text placeholder:text-primary-text-color bg-text-field-bg focus:ring-offset-secondary-color focus:ring-offset border-gray-500p-2 m-3 min-h-[20vh] rounded-lg border transition-all duration-1000 ease-in-out placeholder:italic placeholder:opacity-60 focus:outline-none focus:ring focus:ring-blue-700 focus:ring-opacity-30"
          name="message"
          value={message}
          placeholder="Enter your message Here"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          required
        ></textarea>
        <div className="flex w-full flex-row justify-end ">
          {messageStatus === true && (
            <h1 className="mr-5 w-full self-center italic text-green-400">
              Message successfully sent 😀
            </h1>
          )}
          <button
            className="hover:bg-text-field-bg shadow-text-field-text m-3 w-[10vw] rounded-full border  border-dashed p-2 px-5 shadow transition-all duration-500 ease-in-out hover:border-solid"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
