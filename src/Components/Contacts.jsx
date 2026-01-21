import React from "react";

export default function Contacts() {
  return (
    <div
      id="Contacts"
      className="h-[calc(100vh-58px)] bg-black text-white text-center flex flex-col justify-center items-center min-h-screen"
    >
      <h1 className="font-bold py-2">CONTACTS</h1>
      <p className="py-2">Phone Number call : 07065284207</p>
      <p className="py-2">Phone Number call : 08158320314</p>
      <p className="py-2">Phone Number WhatsApp : 07073990374</p>
      <p className="py-2 pb-5">Email : egbuchimezie7@gmail.com</p>
      <p>
        <a href="https://www.linkedin.com/in/chimezie-cornelius-egbu-1009b2367?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=andriod_app">
          <p className="border p-3 bg-white text-black font-black">
            LinkedIn Profile
          </p>
        </a>
      </p>
    </div>
  );
}
