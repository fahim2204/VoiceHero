"use client";
import { BiCheckCircle } from "react-icons/bi";
import { Button, Tab, Tabs } from "@nextui-org/react";
import React, { useState } from "react";

export default function PricingCards() {
  const [activeTab, setActiveTab] = useState("monthly");

  const PricingList = [
    {
      id: "free",
      name: "Free",
      desc: "For individuals who want to try out the most advanced AI audio.",
      price: {
        monthly: 0,
        yearly: 0,
      },
      features: [
        "Generate speech in 29 languages using thousands of unique voices",
        "Translate content with automatic dubbing",
        "Create custom, synthetic voices",
        "Clone your voice with as little as 1 minute of audio",
        "Access to the Dubbing Studio for more control over translation & timing",
        "License to use ElevenLabs for commercial use",
        "Translate content with automatic dubbing",
        "Translate content with automatic dubbing",
        "Generate speech in 29 languages using thousands of unique voices",
        "Create custom, synthetic voices",
      ],
    },
    {
      id: "basic",
      name: "Starter",
      desc: "For hobbyists creating projects with AI audio.",
      price: {
        monthly: 99,
        yearly: 599,
      },
      features: [
        "Generate speech in 29 languages using thousands of unique voices",
        "Translate content with automatic dubbing",
        "Create custom, synthetic voices",
        "Clone your voice with as little as 1 minute of audio",
        "Access to the Dubbing Studio for more control over translation & timing",
        "License to use ElevenLabs for commercial use",
        "Translate content with automatic dubbing",
        "Translate content with automatic dubbing",
        "Generate speech in 29 languages using thousands of unique voices",
        "Create custom, synthetic voices",
      ],
    },
    {
      id: "premium",
      name: "Pro",
      desc: "For creators and teams ramping up their content production.",
      price: {
        monthly: 149,
        yearly: 1099,
      },
      features: [
        "Generate speech in 29 languages using thousands of unique voices",
        "Translate content with automatic dubbing",
        "Create custom, synthetic voices",
        "Clone your voice with as little as 1 minute of audio",
        "Access to the Dubbing Studio for more control over translation & timing",
        "License to use ElevenLabs for commercial use",
        "Translate content with automatic dubbing",
        "Translate content with automatic dubbing",
        "Generate speech in 29 languages using thousands of unique voices",
        "Create custom, synthetic voices",
      ],
    },
  ];

  return (
    <div className="max-w-[1400px] mx-auto z-0 relative overflow-hidden">
      <div className='container max-w-7xl w-full my-16'>
        <div className="w-full flex flex-col gap-3 mb-12">
          <p className="uppercase font-bold text-sm md:text-base text-[#9B2948] tracking-[0.3em] text-center">Pricing</p>
          <div className="text-4xl sm:text-5xl md:text-6xl text-center font-semibold">Plans built for
            <br />creators and businesses</div>
        </div>
        <section className="xl:max-w-6xl 2xl:max-w-7xl w-full mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center mt-6 mb-8">
            <Tabs
              radius="sm"
              size="lg"
              aria-label="Tabs radius"
              variant="solid"
              color="primary"
              selectedKey={activeTab}
              onSelectionChange={(key) => setActiveTab(key)}
              classNames={{
                base: "bg-white",
                tabList: "rounded-3xl bg-white drop-shadow p-0",
                cursor: "rounded-3xl bg-alpha px-4",
                tab: "px-10"

              }}
            >
              <Tab key="monthly" title="Monthly" />
              <Tab key="yearly" title="Yearly" />
            </Tabs>
          </div>
          <div className="grid md:grid-cols-3 gap-3 mb-10">
            {PricingList.map((item, index) => (
              <div
                key={item.id}
                className={`${index == 1 ? "bg-beta border-3 border-alpha" : "bg-white"
                  } rounded-2xl px-8 py-6 text-center`}
              >
                <h2 className="font-bold uppercase tracking-wider">{item.name}</h2>
                <p className="max-w-64 mx-auto text-sm text-center mb-3">{item.desc}</p>
                <div className="flex items-center justify-center mb-4">
                  <span className="self-start text-lg opacity-70">$</span>
                  <p className="text-4xl font-extrabold font-inter tracking-tight">
                    {item.id === "free"
                      ? 0
                      : activeTab === "monthly"
                        ? item.price.monthly
                        : item.price.yearly}
                  </p>
                  <span className="self-end text-lg opacity-70">
                    /
                    {item.id === "free"
                      ? "forever"
                      : activeTab.split("ly")[0]}
                  </span>
                </div>
                <Button color={index === 1 ? "primary" : "secondary"} radius="full" size="lg" fullWidth className="mt-6">
                  Start Today
                </Button>
                <ul className="text-sm text-left space-y-2 mt-6 pt-4">
                  {item.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1"><BiCheckCircle size={18} className="flex-shrink-0" /></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>

  );
}
