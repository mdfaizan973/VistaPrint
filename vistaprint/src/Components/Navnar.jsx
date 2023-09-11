// import { useState } from "react";
import "./Styles/Navbar.css";
import {
  LiaUserSolid,
  LiaShoppingBagSolid,
  LiaRocketchat,
  LiaFolder,
} from "react-icons/lia";
export default function Navnar() {
  return (
    <>
      <div className="main_top_nav">
        <ul>
          <li>
            <button className="main_top_data">Vista</button>
          </li>
          <li>
            <button className="main_top_data">Websites by Vista x Wix</button>
          </li>
          <li>
            <button className="main_top_data">Corporate Pricing</button>
          </li>
          <li>
            <button className="main_top_data">Reseller Program</button>
          </li>
          <li>
            <button className="main_top_data">VistaCreate</button>
          </li>
        </ul>
      </div>
      <div className="main_Navbar">
        {/* ---Search nav---- */}
        <div className="search_nav">
          <div className="web-logo">
            <img
              src="https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/0_b3fhwb3w/def_height/2700/def_width/2700/version/100012/type/1"
              alt=""
            />
          </div>
          <div className="search_bar">
            <div className="p-4">
              <div className="relative">
                <input
                  className="border rounded-lg w-full py-4 px-6 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Search..."
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="fill-current h-5 w-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.293 13.293a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M9 18a9 9 0 100-18 9 9 0 000 18zM9 1a8 8 0 100 16A8 8 0 009 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="nav_icons">
            <ul>
              <li>
                <span>
                  <LiaRocketchat />
                </span>
                Help is here <br /> 1.866.207.4955
              </li>
              <li>
                <span>
                  <LiaFolder />
                </span>
                Projects
              </li>
              <li>
                <span>
                  <LiaUserSolid />
                </span>
                Sign sin
              </li>
              <li>
                <span>
                  <LiaShoppingBagSolid />
                </span>
                Cart
              </li>
            </ul>
          </div>
        </div>
        {/* ---hover nav---- */}

        <div className="hover_Nav">
          <div className="dropdown">
            <button className="dropdown-button">Deals</button>
            <ul className="dropdown-menu">
              <li>Deals</li>
              <li>Business Cards</li>
              <li>Wedding</li>
              <li>Clothing & Bags</li>
              <li>Promotional Products</li>
              <li>Design & Logo</li>
              <li>New Arrivals</li>
            </ul>
          </div>
          <div className="dropdown">
            <button className="dropdown-button">Wedding</button>
            <ul className="dropdown-menu">
              <li>Deals</li>
              <li>Business Cards</li>
              <li>Wedding</li>
              <li>Clothing & Bags</li>
              <li>Promotional Products</li>
              <li>Design & Logo</li>
              <li>New Arrivals</li>
            </ul>
          </div>
          <div className="dropdown">
            <button className="dropdown-button">
              Business <br /> Cards
            </button>
            <ul className="dropdown-menu">
              <li>Deals</li>
              <li>Business Cards</li>
              <li>Wedding</li>
              <li>Clothing & Bags</li>
              <li>Promotional Products</li>
              <li>Design & Logo</li>
              <li>New Arrivals</li>
            </ul>
          </div>
          <div className="dropdown">
            <button className="dropdown-button">
              Celebrations, Invitations & <br />
              Stationery
            </button>
            <ul className="dropdown-menu">
              <li>Deals</li>
              <li>Business Cards</li>
              <li>Wedding</li>
              <li>Clothing & Bags</li>
              <li>Promotional Products</li>
              <li>Design & Logo</li>
              <li>New Arrivals</li>
            </ul>
          </div>
          <div className="dropdown">
            <button className="dropdown-button">
              Home <br />& Gifts
            </button>
            <ul className="dropdown-menu">
              <li>Deals</li>
              <li>Business Cards</li>
              <li>Wedding</li>
              <li>Clothing & Bags</li>
              <li>Promotional Products</li>
              <li>Design & Logo</li>
              <li>New Arrivals</li>
            </ul>
          </div>
          <div className="dropdown">
            <button className="dropdown-button">Design & Logo</button>
            <ul className="dropdown-menu">
              <li>Deals</li>
              <li>Business Cards</li>
              <li>Wedding</li>
              <li>Clothing & Bags</li>
              <li>Promotional Products</li>
              <li>Design & Logo</li>
              <li>New Arrivals</li>
            </ul>
          </div>
          <div className="dropdown">
            <button className="dropdown-button">
              Promotional <br />
              Products
            </button>
            <ul className="dropdown-menu">
              <li>Deals</li>
              <li>Business Cards</li>
              <li>Wedding</li>
              <li>Clothing & Bags</li>
              <li>Promotional Products</li>
              <li>Design & Logo</li>
              <li>New Arrivals</li>
            </ul>
          </div>
          <div className="dropdown">
            <button className="dropdown-button">New Arrivals</button>
            <ul className="dropdown-menu">
              <li>Deals</li>
              <li>Business Cards</li>
              <li>Wedding</li>
              <li>Clothing & Bags</li>
              <li>Promotional Products</li>
              <li>Design & Logo</li>
              <li>New Arrivals</li>
            </ul>
          </div>
          <div className="dropdown">
            <button className="dropdown-button">Wedding</button>
            <ul className="dropdown-menu">
              <li>Deals</li>
              <li>Business Cards</li>
              <li>Wedding</li>
              <li>Clothing & Bags</li>
              <li>Promotional Products</li>
              <li>Design & Logo</li>
              <li>New Arrivals</li>
            </ul>
          </div>
          <div className="dropdown">
            <button className="dropdown-button">Promotional Products</button>
            <ul className="dropdown-menu">
              <li>Deals</li>
              <li>Business Cards</li>
              <li>Wedding</li>
              <li>Clothing & Bags</li>
              <li>Promotional Products</li>
              <li>Design & Logo</li>
              <li>New Arrivals</li>
            </ul>
          </div>
          <div className="dropdown">
            <button className="dropdown-button">Business Cards</button>
            <ul className="dropdown-menu">
              <li>Deals</li>
              <li>Business Cards</li>
              <li>Wedding</li>
              <li>Clothing & Bags</li>
              <li>Promotional Products</li>
              <li>Design & Logo</li>
              <li>New Arrivals</li>
            </ul>
          </div>
          <div className="dropdown">
            <button className="dropdown-button">
              Labels, Stickers & <br />
              Packaging
            </button>
            <ul className="dropdown-menu">
              <li>Deals</li>
              <li>Business Cards</li>
              <li>Wedding</li>
              <li>Clothing & Bags</li>
              <li>Promotional Products</li>
              <li>Design & Logo</li>
              <li>New Arrivals</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
