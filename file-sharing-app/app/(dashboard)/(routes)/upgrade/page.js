import React from "react";
import Title from './_components/Title'

const pricingPlans = [
  {
    name: "Starter",
    price: "Free",
    period: "/month",
    description: "Best option for personal use & for your next project.",
    features: [
      "Max 30 Files",
      "No setup, or hidden fees",
      "Team size: 1 developer",
      "File size - 2 MB",
      "Max storge - 1 GB"
    ],
    supportDuration: "No Technical Support",
    updatesDuration: "No Updates ",
  },
  {
    name: "Company",
    price: "$99",
    period: "/month",
    description: "Relevant for multiple users, extended & premium support.",
    features: [
      "Unlimited Files",
      "No setup, or hidden fees",
      "Team size: 20 developer",
      "File size - 500 MB",
      "Max storage - 5 TB"
    ],
    supportDuration: "12 months",
    updatesDuration: "12 months",
  },
  {
    name: "Enterprise",
    price: "$899",
    period: "/year",
    description: "Best for large scale uses and extended redistribution rights.",
    features: [
      "Unlimited Files",
      "No setup, or hidden fees",
      "Team size: 20 developer",
      "File size - 500 MB",
      "Max storage - 50 TB"
    ],
    supportDuration: "36 months",
    updatesDuration: "36 months",
  },
];

const Upgrade = () => {
  return (
    <>
      <Title />
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="space-y-8 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8"
              >
                <h3 className="mb-4 text-2xl font-semibold">{plan.name}</h3>
                <p className="font-light text-gray-500 sm:text-lg">
                  {plan.description}
                </p>
                <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">
                    {plan.price}
                  </span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <ul role="list" className="mb-8 space-y-4 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Get started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Upgrade;
