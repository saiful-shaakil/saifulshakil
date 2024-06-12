import React, { useState } from "react";
import { useForm } from "@formspree/react";
import {
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

const ContactMe = () => {
  const [state, handleSubmit] = useForm("xayvkopr");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  if (state.succeeded) {
    resetForm();
  }

  return (
    <section
      className="m_sec md:l_sec font-roboto -mt-2 md:bg-transparent lg:snap_child"
      id="contact"
    >
      <div className="m_wid">
        <h1 className="m_title_h1 md:l_title_h1">Want to Talk?</h1>
        <div className="lg:flex lg:gap-x-10 lg:justify-between">
          <div>
            <p className="flex items-center">
              ► Got a project? Big or small. Hit me up!
            </p>
            <div className="my-5">
              <p className="flex items-center">
                {`► Want to build something together and have fun as well? I'm listening!`}
              </p>
            </div>
            <p className="flex items-start">
              ► Want to talk about data, machine learning, coding, product
              development? Ping me!
            </p>
            <div className="flex items-center gap-5 mt-5">
              <a href="mailto:saifulshaakil@gmail.com">
                <span className="text-3xl lg:text-4xl cursor-pointer">
                  <FaGoogle />
                </span>
              </a>
              <a href="https://github.com/saiful-shaakil">
                <span className="text-3xl lg:text-4xl cursor-pointer">
                  <FaGithub />
                </span>
              </a>
              <a href="https://www.linkedin.com/in/saiful-shakil">
                <span className="text-3xl lg:text-4xl cursor-pointer">
                  <FaLinkedin />
                </span>
              </a>
              <a href="https://twitter.com/saiful_shaakil">
                <span className="text-3xl lg:text-4xl cursor-pointer">
                  <FaTwitter />
                </span>
              </a>
              <a href="https://www.facebook.com/saiful.shaakil">
                <span className="text-3xl lg:text-4xl cursor-pointer">
                  <FaFacebook className="cursor-pointer" />
                </span>
              </a>
            </div>
          </div>

          <div>
            <form className="my-10 lg:my-0" onSubmit={handleSubmit}>
              <input
                autoComplete="off"
                placeholder="Your Name*"
                required
                className="border-b-2 w-full font-roboto focus:border-b-gray-800 focus:outline-none z-50 cursor-pointer"
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                autoComplete="off"
                placeholder="Your Email*"
                required
                className="border-b-2 w-full mt-5 font-roboto focus:border-b-gray-800 focus:outline-none z-50 cursor-pointer"
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                rows="4"
                name="message"
                id="message"
                required
                placeholder="Your Message*"
                className="w-full resize-none mt-5 border-b-2 focus:border-b-gray-800 font-roboto outline-none z-50 cursor-pointer"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <input
                disabled={state.submitting}
                className="bg-black text-white px-4 py-2 mt-2 float-right cursor-pointer"
                type="submit"
                value="Send Message"
              />
              {state.succeeded && (
                <p id="response-message" className="font-roboto">
                  {` **Thanks for your message. You'll get my reply soon.`}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
