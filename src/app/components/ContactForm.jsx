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
      className="flex w-full flex-col items-center justify-center rounded-3xl border border-dashed 
   border-secondary-color bg-primary-color px-5 pb-0.5 pt-5 text-left shadow-[0px_0px_150px_rgba(255,0,0,0.25),-50px_0px_150px_rgba(0,0,255,0.25),50px_0px_150px_rgba(255,255,0,0.25)] transition-all duration-1000 ease-in-out md:w-[80%]"
    >
      <form onSubmit={handleSubmit} className="flex flex-col md:w-full">
        <h1 className=" my-6 w-full border-b border-dashed border-secondary-color text-center text-3xl">
          {" "}
          Send a Message 📧{" "}
        </h1>
        <label htmlFor="fullname">
          Full name <span className="text-red-500">*</span>
        </label>
        <input
          className=" focus:ring-offset  m-3 rounded-lg border border-gray-500 bg-transparent p-2 text-text-field-text transition-all duration-1000 ease-in-out placeholder:italic placeholder:text-primary-text-color placeholder:opacity-60 focus:bg-text-field-bg focus:outline-none focus:ring focus:ring-blue-700 focus:ring-opacity-30 focus:ring-offset-secondary-color"
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
          className=" focus:ring-offset  m-3 rounded-lg border border-gray-500 bg-transparent p-2 text-text-field-text transition-all duration-1000 ease-in-out placeholder:italic placeholder:text-primary-text-color placeholder:opacity-60 focus:bg-text-field-bg focus:outline-none focus:ring focus:ring-blue-700 focus:ring-opacity-30 focus:ring-offset-secondary-color"
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
          className=" focus:ring-offset  m-3 rounded-lg border border-gray-500 bg-transparent p-2 text-text-field-text transition-all duration-1000 ease-in-out placeholder:italic placeholder:text-primary-text-color placeholder:opacity-60 focus:bg-text-field-bg focus:outline-none focus:ring focus:ring-blue-700 focus:ring-opacity-30 focus:ring-offset-secondary-color"
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
          className="focus:ring-offset m-3 min-h-[150px] rounded-lg border border-gray-500 bg-text-field-bg p-2 text-text-field-text transition-all duration-1000 ease-in-out placeholder:italic placeholder:text-primary-text-color placeholder:opacity-60 focus:outline-none focus:ring focus:ring-blue-700 focus:ring-opacity-30 focus:ring-offset-secondary-color"
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
            className="m-3 w-[30%] rounded-full border border-dashed p-2  px-5 shadow shadow-text-field-text transition-all duration-500 ease-in-out hover:border-solid hover:bg-text-field-bg"
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
