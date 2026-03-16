import React, { Component } from "react";
import {
  ArrowRightIcon,
  CheckIcon,
  ShieldCheckIcon,
  ZapIcon,
  WrenchIcon,
  BarChart2Icon,
  PhoneIcon,
} from "lucide-react";
import type { Page } from "../App";
interface HomeProps {
  navigate: (page: Page) => void;
}

export function Home({ navigate }: HomeProps) {
  const handleNav = (page: Page) => {
    navigate(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-white py-24 md:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-8"
            style={{
              backgroundColor: "#fffbeb",
              color: "#92400e",
              border: "1px solid #f98a10",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 inline-block" />
            Sri Lanka's Solar Maintenance Specialists
          </div>
          <h1
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
            style={{ color: "#111111" }}
          >
            <span className="block mb-5">Keep Your Solar Energy System</span>

            <span className="block" style={{ color: "#f98a10" }}>
              Running at Peak Efficiency.
            </span>
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{
              color: "#6b7280",
            }}
          >
            Sri Lanka's trusted experts in solar panel cleaning and maintenance.
            Improve energy output, extend system life, and save more every day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleNav("contact")}
              className="px-7 py-3.5 rounded-md text-sm font-semibold transition-all hover:opacity-90 active:scale-95"
              style={{
                backgroundColor: "#111111",
                color: "#ffffff",
              }}
            >
              Contact Us
            </button>
            <button
              onClick={() => handleNav("services")}
              className="flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold transition-all hover:bg-gray-50"
              style={{
                border: "1.5px solid #e5e7eb",
                color: "#111111",
              }}
            >
              View Services
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
          {/* Trust indicators */}
          <div
            className="flex flex-wrap items-center justify-center gap-6 mt-14 pt-10"
            style={{
              borderTop: "1px solid #e5e7eb",
            }}
          >
            {/* <div className="flex items-center gap-2">
              <CheckIcon
                className="w-4 h-4"
                style={{
                  color: "#f98a10",
                }}
              />

              <span
                className="text-sm font-medium"
                style={{
                  color: "#6b7280",
                }}
              >
                500+ Systems Maintained
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon
                className="w-4 h-4"
                style={{
                  color: "#f98a10",
                }}
              />

              <span
                className="text-sm font-medium"
                style={{
                  color: "#6b7280",
                }}
              >
                Island-wide Coverage
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon
                className="w-4 h-4"
                style={{
                  color: "#f98a10",
                }}
              />

              <span
                className="text-sm font-medium"
                style={{
                  color: "#6b7280",
                }}
              >
                Certified Technicians
              </span>
            </div> */}
          </div>
        </div>
      </section>

      {/* Why Maintenance Section */}
      <section
        className="w-full py-20 px-4"
        style={{
          backgroundColor: "#f5f5f5",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold mb-4"
              style={{
                color: "#111111",
              }}
            >
              Why Choose Regular Maintenance
            </h2>
            <p
              className="text-base leading-relaxed max-w-2xl mx-auto"
              style={{
                color: "#6b7280",
              }}
            >
              Solar panels are a significant investment. Without regular
              maintenance, performance degrades silently — costing you money
              every day.
            </p>
          </div>

          {/* Highlight Box */}
          <div
            className="rounded-xl p-6 md:p-8 mb-10"
            style={{
              backgroundColor: "#fffbeb",
              border: "1px solid #f98a10",
            }}
          >
            <div className="flex items-start gap-3 mb-4">
              <ZapIcon
                className="w-5 h-5 mt-0.5 flex-shrink-0"
                style={{
                  color: "#f98a10",
                }}
              />

              <h3
                className="text-base font-semibold"
                style={{
                  color: "#92400e",
                }}
              >
                Did you know? Dirty panels can lose up to 25% efficiency.
              </h3>
            </div>
            <ul className="space-y-2.5 ml-8">
              <li className="flex items-start gap-2.5">
                <CheckIcon
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  style={{
                    color: "#f98a10",
                  }}
                />

                <span
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#78350f",
                  }}
                >
                  Dust, bird droppings, and pollution accumulate on panels,
                  blocking sunlight and reducing output
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckIcon
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  style={{
                    color: "#f98a10",
                  }}
                />

                <span
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#78350f",
                  }}
                >
                  Sri Lanka's tropical climate accelerates degradation —
                  humidity, heat, and monsoon rains cause unique wear
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckIcon
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  style={{
                    color: "#f98a10",
                  }}
                />

                <span
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#78350f",
                  }}
                >
                  Regular inspections catch micro-cracks and hotspots before
                  they become costly failures
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckIcon
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  style={{
                    color: "#f98a10",
                  }}
                />

                <span
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#78350f",
                  }}
                >
                  Maintenance contracts protect your warranty and extend system
                  lifespan by 5–10 years
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p
            className="text-base leading-relaxed max-w-2xl mx-auto text-center"
            style={{
              color: "#6b7280",
            }}
          >
            At <b>Luminar Energy</b>, we make sure your solar system always performs at
            its best safely, efficiently, and affordably.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold mb-4"
              style={{
                color: "#111111",
              }}
            >
              Our Services
            </h2>
            <p
              className="text-base leading-relaxed max-w-xl mx-auto"
              style={{
                color: "#6b7280",
              }}
            >
              Comprehensive maintenance solutions for residential and commercial
              solar installations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Card 1 */}
            <div
              className="p-6 rounded-xl"
              style={{
                backgroundColor: "#f9fafb",
                border: "1px solid #e5e7eb",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{
                  backgroundColor: "#fffbeb",
                }}
              >
                <WrenchIcon
                  className="w-5 h-5"
                  style={{
                    color: "#f98a10",
                  }}
                />
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{
                  color: "#111111",
                }}
              >
                Solar Panel Cleaning
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "#6b7280",
                }}
              >
                Professional cleaning using purified water and soft-bristle
                systems. Safe for all panel types, no streaks, maximum light
                transmission restored.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="p-6 rounded-xl"
              style={{
                backgroundColor: "#f9fafb",
                border: "1px solid #e5e7eb",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{
                  backgroundColor: "#fffbeb",
                }}
              >
                <ShieldCheckIcon
                  className="w-5 h-5"
                  style={{
                    color: "#f98a10",
                  }}
                />
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{
                  color: "#111111",
                }}
              >
                System Health Checks
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "#6b7280",
                }}
              >
                Comprehensive electrical and physical inspection of panels,
                inverters, wiring, and mounting systems. Thermal imaging
                available.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="p-6 rounded-xl"
              style={{
                backgroundColor: "#f9fafb",
                border: "1px solid #e5e7eb",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{
                  backgroundColor: "#fffbeb",
                }}
              >
                <ZapIcon
                  className="w-5 h-5"
                  style={{
                    color: "#f98a10",
                  }}
                />
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{
                  color: "#111111",
                }}
              >
                Annual Maintenance Plans
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "#6b7280",
                }}
              >
                Real-time output monitoring and monthly performance reports. 
                Stay covered year-round with scheduled visits.
              </p>
            </div>

            {/* Card 4 */}
            <div
              className="p-6 rounded-xl"
              style={{
                backgroundColor: "#f9fafb",
                border: "1px solid #e5e7eb",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{
                  backgroundColor: "#fffbeb",
                }}
              >
                <BarChart2Icon
                  className="w-5 h-5"
                  style={{
                    color: "#f98a10",
                  }}
                />
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{
                  color: "#111111",
                }}
              >
                Repair & Optimization
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "#6b7280",
                }}
              >
                Component replacement, inverter servicing, and system
                optimization to ensure you're getting maximum return on your
                solar investment.
              </p>
            </div>


          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => handleNav("services")}
              className="flex items-center gap-2 mx-auto text-sm font-semibold transition-colors hover:opacity-80"
              style={{
                color: "#111111",
              }}
            >
              View all services
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="w-full py-20 px-4"
        style={{
          backgroundColor: "#f5f5f5",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <div
            className="text-center p-10 md:p-14 rounded-2xl"
            style={{
              border: "1.5px solid #e5e7eb",
              backgroundColor: "#ffffff",
            }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-6"
              style={{
                backgroundColor: "#f98a10",
              }}
            >
              <PhoneIcon className="w-6 h-6 text-white" />
            </div>
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{
                color: "#111111",
              }}
            >
              Ready to Maximize Your Solar Output?
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{
                color: "#6b7280",
              }}
            >
              Get a free site assessment and customized maintenance plan. Our
              team is available island-wide.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => handleNav("contact")}
                className="px-7 py-3.5 rounded-md text-sm font-semibold transition-all hover:opacity-90"
                style={{
                  backgroundColor: "#111111",
                  color: "#ffffff",
                }}
              >
                Schedule a Free Assessment
              </button>
              <a
                href="tel:+94112345678"
                className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-gray-900"
                style={{
                  color: "#6b7280",
                }}
              >
                <PhoneIcon className="w-4 h-4" />
                +94 11 234 5678
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
