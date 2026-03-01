import React from "react";
import {
  CheckIcon,
  WrenchIcon,
  ShieldCheckIcon,
  ZapIcon,
  BarChart2Icon,
  ArrowRightIcon,
} from "lucide-react";
import type { Page } from "../App";
import image1 from "../assets/img1.jpeg";
import image2 from "../assets/img2.jpg";
import image3 from "../assets/img3.jpg";
import image4 from "../assets/img4.jpg";
interface ServicesProps {
  navigate: (page: Page) => void;
}

function ServiceImageCard({ src, label }) {
  return (
    <div
      className="rounded-2xl overflow-hidden relative shadow-sm"
      style={{
        border: "1px solid #e5e7eb",
        minHeight: "260px",
      }}
    >
      <img
        src={src}
        alt={label}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        style={{ minHeight: "260px" }}
      />

      {/* overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

      {/* label */}
      <div className="absolute bottom-4 left-4 right-4">
        <p className="text-white text-sm font-semibold">{label}</p>
      </div>
    </div>
  );
}

export function Services({ navigate }: ServicesProps) {
  const handleNav = (page: Page) => {
    navigate(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-full">
      {/* Page Header */}
      <section
        className="w-full py-16 px-4 bg-white"
        style={{
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            style={{
              color: "#111111",
            }}
          >
            Our Services
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{
              color: "#6b7280",
            }}
          >
            End-to-end solar panel maintenance solutions for residential,
            commercial, and industrial installations across Sri Lanka.
          </p>
        </div>
      </section>

      {/* Service 1 — Panel Cleaning (white) */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
                style={{
                  backgroundColor: "#fffbeb",
                  color: "#92400e",
                  border: "1px solid #f98a10",
                }}
              >
                Service 01
              </div>
              <h2
                className="text-3xl font-bold mb-4"
                style={{
                  color: "#111111",
                }}
              >
                Solar Panel Cleaning
              </h2>
              <p
                className="text-base leading-relaxed mb-6"
                style={{
                  color: "#6b7280",
                }}
              >
                Our certified technicians use purified water systems and
                non-abrasive soft-bristle equipment to safely remove dust, bird
                droppings, algae, and pollution deposits from your panels.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckIcon
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{
                      color: "#f98a10",
                    }}
                  />

                  <span
                    className="text-sm"
                    style={{
                      color: "#6b7280",
                    }}
                  >
                    Purified water — no mineral deposits or streaks
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{
                      color: "#f98a10",
                    }}
                  />

                  <span
                    className="text-sm"
                    style={{
                      color: "#6b7280",
                    }}
                  >
                    Safe for all panel brands and coatings
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{
                      color: "#f98a10",
                    }}
                  />

                  <span
                    className="text-sm"
                    style={{
                      color: "#6b7280",
                    }}
                  >
                    Restores up to 30% lost output efficiency
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{
                      color: "#f98a10",
                    }}
                  />

                  <span
                    className="text-sm"
                    style={{
                      color: "#6b7280",
                    }}
                  >
                    Available as one-time or scheduled service
                  </span>
                </li>
              </ul>
            </div>
            <ServiceImageCard src={image1} label="Solar Panel Cleaning" />
            {/* <div
              className="rounded-2xl p-10 flex items-center justify-center"
              style={{
                backgroundColor: "#f9fafb",
                border: "1px solid #e5e7eb",
                minHeight: "260px",
              }}
            > */}
            {/* <div className="text-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{
                  backgroundColor: "#fffbeb",
                }}
              >
                <WrenchIcon
                  className="w-8 h-8"
                  style={{
                    color: "#f59e0b",
                  }}
                />
              </div>
              <p
                className="text-sm font-medium"
                style={{
                  color: "#9ca3af",
                }}
              >
                Panel Cleaning Service
              </p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Service 2 — System Inspection (gray) */}
      <section
        className="w-full py-16 px-4"
        style={{
          backgroundColor: "#f5f5f5",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ServiceImageCard src={image2} label="System Health Checks" />
            {/* <div
              className="rounded-2xl p-10 flex items-center justify-center order-2 md:order-1"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                minHeight: "260px",
              }}
            >
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{
                    backgroundColor: "#fffbeb",
                  }}
                >
                  <ShieldCheckIcon
                    className="w-8 h-8"
                    style={{
                      color: "#f59e0b",
                    }}
                  />
                </div>
                <p
                  className="text-sm font-medium"
                  style={{
                    color: "#9ca3af",
                  }}
                >
                  System Inspection
                </p>
              </div>
            </div> */}
            <div className="order-1 md:order-2">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
                style={{
                  backgroundColor: "#fffbeb",
                  color: "#92400e",
                  border: "1px solid #f98a10",
                }}
              >
                Service 02
              </div>
              <h2
                className="text-3xl font-bold mb-4"
                style={{
                  color: "#111111",
                }}
              >
                System Health Checks
              </h2>
              <p
                className="text-base leading-relaxed mb-6"
                style={{
                  color: "#6b7280",
                }}
              >
                A thorough physical and electrical inspection of your entire
                solar system — panels, inverters, mounting structures, wiring,
                and junction boxes — to identify issues before they escalate.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckIcon
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{
                      color: "#f98a10",
                    }}
                  />

                  <span
                    className="text-sm"
                    style={{
                      color: "#6b7280",
                    }}
                  >
                    Thermal imaging to detect hotspots and micro-cracks
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{
                      color: "#f98a10",
                    }}
                  />

                  <span
                    className="text-sm"
                    style={{
                      color: "#6b7280",
                    }}
                  >
                    Inverter performance and fault code analysis
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{
                      color: "#f98a10",
                    }}
                  />

                  <span
                    className="text-sm"
                    style={{
                      color: "#6b7280",
                    }}
                  >
                    Wiring integrity and earthing checks
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{
                      color: "#f98a10",
                    }}
                  />

                  <span
                    className="text-sm"
                    style={{
                      color: "#6b7280",
                    }}
                  >
                    Detailed written report with recommendations
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3 — Performance Monitoring (white) */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
                style={{
                  backgroundColor: "#fffbeb",
                  color: "#92400e",
                  border: "1px solid #f98a10",
                }}
              >
                Service 03
              </div>
              <h2
                className="text-3xl font-bold mb-4"
                style={{
                  color: "#111111",
                }}
              >
                Annual Maintenance Plans
              </h2>
              <p
                className="text-base leading-relaxed mb-6"
                style={{
                  color: "#6b7280",
                }}
              >
                Continuous monitoring of your solar system's output with monthly
                performance reports. We track generation data, identify
                anomalies, and alert you to any underperformance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckIcon
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{
                      color: "#f98a10",
                    }}
                  />

                  <span
                    className="text-sm"
                    style={{
                      color: "#6b7280",
                    }}
                  >
                    Real-time generation data tracking
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{
                      color: "#f98a10",
                    }}
                  />

                  <span
                    className="text-sm"
                    style={{
                      color: "#6b7280",
                    }}
                  >
                    Monthly performance reports via email
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{
                      color: "#f98a10",
                    }}
                  />

                  <span
                    className="text-sm"
                    style={{
                      color: "#6b7280",
                    }}
                  >
                    Proactive alerts for underperforming panels
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{
                      color: "#f98a10",
                    }}
                  />

                  <span
                    className="text-sm"
                    style={{
                      color: "#6b7280",
                    }}
                  >
                    Annual efficiency benchmarking
                  </span>
                </li>
              </ul>
            </div>
            <ServiceImageCard src={image3} label="Annual Maintenance Plans" />
            {/* <div
              className="rounded-2xl p-10 flex items-center justify-center"
              style={{
                backgroundColor: "#f9fafb",
                border: "1px solid #e5e7eb",
                minHeight: "260px",
              }}
            >
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{
                    backgroundColor: "#fffbeb",
                  }}
                >
                  <ZapIcon
                    className="w-8 h-8"
                    style={{
                      color: "#f59e0b",
                    }}
                  />
                </div>
                <p
                  className="text-sm font-medium"
                  style={{
                    color: "#9ca3af",
                  }}
                >
                  Performance Monitoring
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Service 4 — Repair & Optimization (gray) */}
      <section
        className="w-full py-16 px-4"
        style={{
          backgroundColor: "#f5f5f5",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ServiceImageCard src={image4} label="Repair & Optimization" />
            {/* <div
              className="rounded-2xl p-10 flex items-center justify-center order-2 md:order-1"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                minHeight: "260px",
              }}
            >
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{
                    backgroundColor: "#fffbeb",
                  }}
                >
                  <BarChart2Icon
                    className="w-8 h-8"
                    style={{
                      color: "#f59e0b",
                    }}
                  />
                </div>
                <p
                  className="text-sm font-medium"
                  style={{
                    color: "#9ca3af",
                  }}
                >
                  Repair & Optimization
                </p>
              </div>
            </div> */}
            <div className="order-1 md:order-2">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
                style={{
                  backgroundColor: "#fffbeb",
                  color: "#92400e",
                  border: "1px solid #fde68a",
                }}
              >
                Service 04
              </div>
              <h2
                className="text-3xl font-bold mb-4"
                style={{
                  color: "#111111",
                }}
              >
                Repair & Optimization
              </h2>
              <p
                className="text-base leading-relaxed mb-6"
                style={{
                  color: "#6b7280",
                }}
              >
                From replacing faulty components to full system re-optimization,
                our engineers ensure your solar installation delivers maximum
                ROI throughout its lifespan.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckIcon
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{
                      color: "#f98a10",
                    }}
                  />

                  <span
                    className="text-sm"
                    style={{
                      color: "#6b7280",
                    }}
                  >
                    Inverter repair and replacement
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{
                      color: "#f98a10",
                    }}
                  />

                  <span
                    className="text-sm"
                    style={{
                      color: "#6b7280",
                    }}
                  >
                    Panel replacement and string re-configuration
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{
                      color: "#f98a10",
                    }}
                  />

                  <span
                    className="text-sm"
                    style={{
                      color: "#6b7280",
                    }}
                  >
                    Mounting structure reinforcement
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{
                      color: "#f98a10",
                    }}
                  />

                  <span
                    className="text-sm"
                    style={{
                      color: "#6b7280",
                    }}
                  >
                    System upgrade and capacity expansion
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold mb-4"
              style={{
                color: "#111111",
              }}
            >
              Maintenance Plans
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{
                color: "#6b7280",
              }}
            >
              Transparent pricing for residential and commercial systems. All
              plans include a service report.
            </p>
          </div>

          <div
            className="rounded-xl overflow-hidden"
            style={{
              border: "1px solid #e5e7eb",
            }}
          >
            {/* Table Header */}
            <div
              className="grid grid-cols-4 px-6 py-4"
              style={{
                backgroundColor: "#1f2937",
              }}
            >
              <div className="text-sm font-semibold text-white">Plan</div>
              <div className="text-sm font-semibold text-white text-center">
                Residential
              </div>
              <div className="text-sm font-semibold text-white text-center">
                Commercial
              </div>
              <div className="text-sm font-semibold text-white text-center">
                Industrial
              </div>
            </div>

            {/* Row 1 */}
            <div
              className="grid grid-cols-4 px-6 py-5 items-center"
              style={{
                borderBottom: "1px solid #e5e7eb",
                backgroundColor: "#ffffff",
              }}
            >
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{
                    color: "#111111",
                  }}
                >
                  Basic Clean
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{
                    color: "#9ca3af",
                  }}
                >
                  One-time visit
                </p>
              </div>
              <div className="text-center">
                <span
                  className="text-sm font-semibold"
                  style={{
                    color: "#111111",
                  }}
                >
                  LKR 4,500
                </span>
              </div>
              <div className="text-center">
                <span
                  className="text-sm font-semibold"
                  style={{
                    color: "#111111",
                  }}
                >
                  LKR 12,000
                </span>
              </div>
              <div className="text-center">
                <span
                  className="text-sm font-semibold"
                  style={{
                    color: "#111111",
                  }}
                >
                  Custom
                </span>
              </div>
            </div>

            {/* Row 2 */}
            <div
              className="grid grid-cols-4 px-6 py-5 items-center"
              style={{
                borderBottom: "1px solid #e5e7eb",
                backgroundColor: "#f9fafb",
              }}
            >
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{
                    color: "#111111",
                  }}
                >
                  Standard Care
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{
                    color: "#9ca3af",
                  }}
                >
                  Quarterly (4x/year)
                </p>
              </div>
              <div className="text-center">
                <span
                  className="text-sm font-semibold"
                  style={{
                    color: "#111111",
                  }}
                >
                  LKR 14,000
                </span>
                <span
                  className="text-xs block"
                  style={{
                    color: "#9ca3af",
                  }}
                >
                  /year
                </span>
              </div>
              <div className="text-center">
                <span
                  className="text-sm font-semibold"
                  style={{
                    color: "#111111",
                  }}
                >
                  LKR 38,000
                </span>
                <span
                  className="text-xs block"
                  style={{
                    color: "#9ca3af",
                  }}
                >
                  /year
                </span>
              </div>
              <div className="text-center">
                <span
                  className="text-sm font-semibold"
                  style={{
                    color: "#111111",
                  }}
                >
                  Custom
                </span>
              </div>
            </div>

            {/* Row 3 */}
            <div
              className="grid grid-cols-4 px-6 py-5 items-center"
              style={{
                backgroundColor: "#ffffff",
              }}
            >
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{
                    color: "#111111",
                  }}
                >
                  Premium Plan
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{
                    color: "#9ca3af",
                  }}
                >
                  Monthly + monitoring
                </p>
              </div>
              <div className="text-center">
                <span
                  className="text-sm font-semibold"
                  style={{
                    color: "#111111",
                  }}
                >
                  LKR 32,000
                </span>
                <span
                  className="text-xs block"
                  style={{
                    color: "#9ca3af",
                  }}
                >
                  /year
                </span>
              </div>
              <div className="text-center">
                <span
                  className="text-sm font-semibold"
                  style={{
                    color: "#111111",
                  }}
                >
                  LKR 85,000
                </span>
                <span
                  className="text-xs block"
                  style={{
                    color: "#9ca3af",
                  }}
                >
                  /year
                </span>
              </div>
              <div className="text-center">
                <span
                  className="text-sm font-semibold"
                  style={{
                    color: "#111111",
                  }}
                >
                  Custom
                </span>
              </div>
            </div>
          </div>

          <p
            className="text-xs text-center mt-4"
            style={{
              color: "#9ca3af",
            }}
          >
            Prices are indicative. Final pricing depends on system size and
            location. Contact us for a tailored quote.
          </p>

          <div className="text-center mt-8">
            <button
              onClick={() => handleNav("contact")}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold transition-all hover:opacity-90"
              style={{
                backgroundColor: "#111111",
                color: "#ffffff",
              }}
            >
              Get a Custom Quote
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
