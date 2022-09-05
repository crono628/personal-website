import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="h-screen">
      <div className="text-center sm:pr-28 sticky top-20 sm:top-24 bg-orange-300 z-40 text-2xl py-5 w-full">
        Contact
      </div>
      <div className="flex pt-20 mt-14 flex-col items-center sm:pr-28">
        <div className="text-3xl">Michael DeSantis</div>
        <div className="flex flex-col gap-10 py-10">
          <a href="tel:+19143621701">Call</a>
          <a href="sms:+19143621701">Text</a>
          <a href="mailto:michael.desantis.dev@gmail.com?subject = Let's Talk!">
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
