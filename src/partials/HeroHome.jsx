import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import axios from "axios";
import md5 from "md5";
import CheckResult from "../pages/CheckResult";
import Modal from "../utils/Modal";

import banner from "../images/banner.png";

function HeroHome() {
  const [url, setUrl] = useState("");
  const navigate = useNavigate();

  const checkUrl = async (event) => {
    event.preventDefault();
    if (url === "") {
      alert("Insira o URL de um site para verificar se é confiável.");
      return;
    } else if (url.includes(",") || !url.includes(".")) {
      alert("Insira um URL de site válido.");
      return;
    } else {
      const clientId = md5(url).slice(0, 24);
      try {
        const response = await axios.post(
          "https://api.reduza.com.br/siteconfiavel/trustchecks",
          {
            bypassCache: false,
            clientSideId: clientId,
            numberOfAttempts: 0,
            url: url,
          }
        );
        navigate(`/site/${clientId}`);
      } catch (err) {
        alert("Insira um URL de site válido.");
      }
    }
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Hero content */}
          <div className="md:grid md:grid-cols-12 md:gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="md:col-span-6 lg:col-span-6 mb-8 md:mb-0 text-center md:text-left">
              <h1
                className="h2 lg:text-5xl mb-4 font-red-hat-display font-extrabold"
                data-aos="fade-down"
              >
                seu site é confiável?
              </h1>
              <p
                className="text-lg text-gray-600 dark:text-gray-400"
                data-aos="fade-down"
                data-aos-delay="150"
              >
                Você não precisa mais ter medo de acessar um site ou link. Basta
                nos dizer qual site você deseja acessar e nós o ajudaremos e
                informaremos se o site é confiável ou não.
              </p>
              {/* CTA form */}
              <form
                className="mt-8"
                data-aos="fade-down"
                data-aos-delay="300"
                onSubmit={checkUrl}
              >
                <div className="flex flex-col justify-center max-w-sm mx-auto sm:max-w-md md:mx-0">
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="form-input w-full mb-2 h-14"
                    placeholder="Insira o link ou url do site."
                  />
                  <button
                    type="submit"
                    className="btn text-white bg-teal-500 hover:bg-teal-400 shrink-0 h-14"
                  >
                    Verificar site
                  </button>
                </div>
                {/* Success message */}
                {/* <p className="text-center md:text-left mt-2 opacity-75 text-sm">Thanks for subscribing!</p> */}
              </form>
              <ul
                className="max-w-sm sm:max-w-md mx-auto md:max-w-none text-gray-600 dark:text-gray-400 mt-8 -mb-2"
                data-aos="fade-down"
                data-aos-delay="450"
              >
                <li className="flex items-center mb-2">
                  <svg
                    className="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Lorem ipsum is placeholder text commonly.</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg
                    className="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Excepteur sint occaecat cupidatat.</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg
                    className="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Lorem ipsum is placeholder text commonly.</span>
                </li>
              </ul>
            </div>
            {/* Banner Image */}
            <div
              className="md:col-span-6 lg:col-span-6 text-center md:text-right"
              data-aos="fade-up"
              data-aos-delay="450"
            >
              <div className="inline-flex relative justify-center items-center">
                {/* Glow illustration */}
                <svg
                  className="absolute mr-12 mt-32 pointer-events-none -z-1 dark:opacity-40"
                  aria-hidden="true"
                  width="678"
                  height="634"
                  viewBox="0 0 678 634"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="240"
                    cy="394"
                    r="240"
                    fill="url(#piphoneill_paint0_radial)"
                    fillOpacity=".4"
                  />
                  <circle
                    cx="438"
                    cy="240"
                    r="240"
                    fill="url(#piphoneill_paint1_radial)"
                    fillOpacity=".6"
                  />
                  <defs>
                    <radialGradient
                      id="piphoneill_paint0_radial"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="rotate(90 -77 317) scale(189.054)"
                    >
                      <stop stopColor="#667EEA" />
                      <stop offset="1" stopColor="#667EEA" stopOpacity=".01" />
                    </radialGradient>
                    <radialGradient
                      id="piphoneill_paint1_radial"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="rotate(90 99 339) scale(189.054)"
                    >
                      <stop stopColor="#9F7AEA" />
                      <stop offset="1" stopColor="#9F7AEA" stopOpacity=".01" />
                    </radialGradient>
                  </defs>
                </svg>
                <img
                  className="relative"
                  src={banner}
                  width="100%"
                  style={{ maxWidth: "100%" }}
                  alt="Features illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
