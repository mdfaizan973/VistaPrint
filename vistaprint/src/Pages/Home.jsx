// import React from 'react'

import "./Styles/Home.css";
export default function Home() {
  return (
    <div className="home_main_container">
      <div className="text_container">
        <h1 className="text-4xl font-semibold mb-4">
          Feeling professional? We print that.
        </h1>
        <p className="text-white-700 mb-6">
          Create cards and more that look as good as you feel about your
          business. Choose from hundreds of designs, materials, and finishes.
        </p>

        <div className="flex space-x-4">
          <button className="button_home">Business Cards</button>
          <button className="button_home">Custom Marketing</button>
        </div>
      </div>
    </div>
  );
}
