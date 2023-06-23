"use client";

import { useState } from "react";
import Headline from "@/components/shared/Headline";
import GetStarted, { GetStartedWhite } from "./GetStarted";
import Check, { CheckWhite } from "./IconCheck";
import priceList, { PriceList, starting, pro, enterprise } from "./PriceList";

export default function Pricing() {
  const [active, setactive] = useState(1);

  return (
    <section className="max-w-screen-xl mx-auto">
      <div className="px-4 mx-auto max-w-screen-xl py-16 lg:px-6 space-y-10">
        <Headline>
          Our <span className="text-teal-400">Packages</span>
        </Headline>
        <div className="flex flex-wrap flex-col lg:flex-row justify-center gap-8">
          {priceList.map((e: PriceList, i) => (
            <div
              className="self-center max-w-lg text-start text-white rounded-lg shadow overflow-hidden"
              key={i}
              onClick={() => {
                setactive(i);
              }}
            >
              {e.recommended && (
                <div className="w-full bg-vpurple-900 flex justify-center py-2 text-vpurple-500 gap-1">
                  <svg
                    className="w-5 text-vpurple-500"
                    viewBox="0 0 22 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.6144 17.2956C9.277 18.0682 8.20776 18.0682 7.8704 17.2956L6.99275 15.2854C6.21171 13.4966 4.80589 12.0726 3.0523 11.2942L0.63658 10.2219C-0.131464 9.881 -0.131463 8.76368 0.63658 8.42276L2.97685 7.38394C4.77553 6.58552 6.20657 5.10881 6.97427 3.25892L7.8633 1.11673C8.19319 0.321768 9.2916 0.321766 9.6215 1.11673L10.5105 3.25894C11.2782 5.10881 12.7092 6.58552 14.5079 7.38394L16.8482 8.42276C17.6162 8.76368 17.6162 9.881 16.8482 10.2219L14.4325 11.2942C12.6789 12.0726 11.2731 13.4966 10.492 15.2854L9.6144 17.2956ZM3.53956 9.32234C5.8254 10.337 7.68402 12.0048 8.74238 14.2996C9.8008 12.0048 11.6594 10.337 13.9452 9.32234C11.6321 8.29557 9.7676 6.54647 8.74239 4.21088C7.71719 6.54648 5.85267 8.29557 3.53956 9.32234ZM18.4014 22.1899L18.6482 21.6242C19.0882 20.6156 19.8807 19.8125 20.8695 19.3732L21.6299 19.0353C22.0412 18.8526 22.0412 18.2549 21.6299 18.0722L20.9121 17.7532C19.8978 17.3026 19.0911 16.4698 18.6586 15.4269L18.4052 14.8156C18.2285 14.3896 17.6395 14.3896 17.4628 14.8156L17.2094 15.4269C16.777 16.4698 15.9703 17.3026 14.956 17.7532L14.2381 18.0722C13.8269 18.2549 13.8269 18.8526 14.2381 19.0353L14.9985 19.3732C15.9874 19.8125 16.7798 20.6156 17.2198 21.6242L17.4667 22.1899C17.6473 22.604 18.2207 22.604 18.4014 22.1899ZM17.3745 18.5469L17.937 17.9883L18.4878 18.5469L17.937 19.0898L17.3745 18.5469Z"
                      fill="currentColor"
                    />
                  </svg>
                  Recommended
                </div>
              )}

              {i === active ? (
                <div className="flex flex-col items-start bg-vlinear p-6 lg:px-6 lg:py-8">
                  <Title>{e.title}</Title>
                  <p className="font-light text-gray-300 sm:text-lg">
                    Starting at
                  </p>
                  <div className="flex justify-center items-baseline mt-4 mb-6">
                    <span className="mr-2 text-5xl font-extrabold">
                      ${e.price}
                    </span>
                    <span className="text-gray-200">/month</span>
                  </div>
                  {/* List */}
                  <ul role="list" className="mb-8 space-y-4 text-left">
                    {pro.features.map((e, i) => (
                      <Feature key={i}>
                        <CheckWhite />
                        {e}
                      </Feature>
                    ))}
                  </ul>
                  <GetStartedWhite to="/" />
                </div>
              ) : (
                <div className="flex flex-col items-start bg-vpurple-900 p-6 lg:px-6 lg:py-8">
                  <Title>{e.title}</Title>
                  <p className="font-light text-gray-500 sm:text-lg">
                    Starting at
                  </p>
                  <Price>{e.price}</Price>
                  {/* List */}
                  <ul role="list" className="mb-8 space-y-4 text-left">
                    {starting.features.map((e, i) => (
                      <Feature key={i}>
                        <Check />
                        {e}
                      </Feature>
                    ))}
                  </ul>
                  <GetStarted to="/" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="py-5"></div>
    </section>
  );
}

export const Price = ({ children }: any): JSX.Element => (
  <div className="flex justify-center items-baseline mt-4 mb-6">
    <span className="mr-2 text-5xl font-extrabold">${children}</span>
    <span className="text-gray-500">/month</span>
  </div>
);
export const Title = ({ children }: any): JSX.Element => (
  <h3 className="mb-4 text-2xl font-semibold">{children}</h3>
);
export const Feature = ({ children }: any): JSX.Element => (
  <li className="flex items-center gap-3">{children}</li>
);

export function PricingOldWay() {
  const [active, setactive] = useState(1);

  return (
    <section className="max-w-screen-xl mx-auto">
      <div className="px-4 mx-auto max-w-screen-xl py-16 lg:px-6 space-y-10">
        <Headline>
          Our <span className="text-teal-400">Packages</span>
        </Headline>
        <div className="flex flex-wrap flex-col lg:flex-row justify-center gap-8">
          {/* Pricing Card */}
          <div className="self-center flex flex-col items-start p-6 max-w-lg text-start text-gray-300 bg-vpurple-900 rounded-lg shadow lg:px-6 lg:py-8">
            <Title>Starter</Title>
            <p className="font-light text-gray-500 sm:text-lg">Starting at</p>
            <Price>500</Price>
            {/* List */}
            <ul role="list" className="mb-8 space-y-4 text-left">
              {starting.features.map((e, i) => (
                <Feature key={i}>
                  <Check />
                  {e}
                </Feature>
              ))}
            </ul>
            <GetStarted to="/" />
          </div>
          {/* Pricing Card */}
          <div className="self-center max-w-lg text-start text-white rounded-lg shadow overflow-hidden">
            <div className="bg-vpurple-900 flex justify-center py-2 text-vpurple-500 gap-1">
              <svg
                className="w-5"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.6144 17.2956C9.277 18.0682 8.20776 18.0682 7.8704 17.2956L6.99275 15.2854C6.21171 13.4966 4.80589 12.0726 3.0523 11.2942L0.63658 10.2219C-0.131464 9.881 -0.131463 8.76368 0.63658 8.42276L2.97685 7.38394C4.77553 6.58552 6.20657 5.10881 6.97427 3.25892L7.8633 1.11673C8.19319 0.321768 9.2916 0.321766 9.6215 1.11673L10.5105 3.25894C11.2782 5.10881 12.7092 6.58552 14.5079 7.38394L16.8482 8.42276C17.6162 8.76368 17.6162 9.881 16.8482 10.2219L14.4325 11.2942C12.6789 12.0726 11.2731 13.4966 10.492 15.2854L9.6144 17.2956ZM3.53956 9.32234C5.8254 10.337 7.68402 12.0048 8.74238 14.2996C9.8008 12.0048 11.6594 10.337 13.9452 9.32234C11.6321 8.29557 9.7676 6.54647 8.74239 4.21088C7.71719 6.54648 5.85267 8.29557 3.53956 9.32234ZM18.4014 22.1899L18.6482 21.6242C19.0882 20.6156 19.8807 19.8125 20.8695 19.3732L21.6299 19.0353C22.0412 18.8526 22.0412 18.2549 21.6299 18.0722L20.9121 17.7532C19.8978 17.3026 19.0911 16.4698 18.6586 15.4269L18.4052 14.8156C18.2285 14.3896 17.6395 14.3896 17.4628 14.8156L17.2094 15.4269C16.777 16.4698 15.9703 17.3026 14.956 17.7532L14.2381 18.0722C13.8269 18.2549 13.8269 18.8526 14.2381 19.0353L14.9985 19.3732C15.9874 19.8125 16.7798 20.6156 17.2198 21.6242L17.4667 22.1899C17.6473 22.604 18.2207 22.604 18.4014 22.1899ZM17.3745 18.5469L17.937 17.9883L18.4878 18.5469L17.937 19.0898L17.3745 18.5469Z"
                  fill="#9C85FB"
                />
              </svg>
              Recommended
            </div>
            <div className="flex flex-col items-start bg-vlinear p-6 lg:px-6 lg:py-8 ">
              <Title>Pro</Title>
              <p className="font-light text-gray-300 sm:text-lg">Starting at</p>
              <div className="flex justify-center items-baseline mt-4 mb-6">
                <span className="mr-2 text-5xl font-extrabold">$1000</span>
                <span className="text-gray-200">/month</span>
              </div>
              {/* List */}
              <ul role="list" className="mb-8 space-y-4 text-left">
                {pro.features.map((e, i) => (
                  <Feature key={i}>
                    <CheckWhite />
                    {e}
                  </Feature>
                ))}
              </ul>
              <GetStartedWhite to="/" />
            </div>
          </div>
          {/* Pricing Card */}
          <div className="self-center flex flex-col items-start p-6 max-w-lg text-start text-gray-300 bg-vpurple-900 rounded-lg shadow lg:px-6 lg:py-8">
            <Title>Enterprise</Title>
            <p className="font-light text-gray-500 sm:text-lg">Starting at</p>
            <Price>1500</Price>
            {/* List */}
            <ul role="list" className="mb-8 space-y-4 text-left">
              {enterprise.features.map((e, i) => (
                <Feature key={i + "key"}>
                  <Check />
                  {e}
                </Feature>
              ))}
            </ul>
            <GetStarted to="/" />
          </div>
        </div>
      </div>
      <div className="py-5"></div>
    </section>
  );
}
