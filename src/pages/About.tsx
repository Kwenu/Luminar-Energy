import { CheckIcon, ArrowRightIcon, AwardIcon } from "lucide-react";

import type { Page } from "../App";
interface AboutProps {
  navigate: (page: Page) => void;
}

export function About({ navigate }: AboutProps) {
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
            About Luminar Energy
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{
              color: "#6b7280",
            }}
          >
            Founded in Colombo, built for Sri Lanka's unique solar landscape.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Left Content */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
                style={{
                  color: "#111111",
                }}
              >
                Who We Are
              </h2>

              <p
                className="text-base leading-8 mb-5"
                style={{
                  color: "#6b7280",
                }}
              >
                Luminar Energy was established by a team of electrical engineers
                and renewable energy specialists who recognized a critical gap
                in Sri Lanka's solar industry: the lack of dedicated,
                professional maintenance services. While solar installations
                were growing rapidly, system owners had no reliable partner to
                keep their panels performing optimally.
              </p>

              <p
                className="text-base leading-8"
                style={{
                  color: "#6b7280",
                }}
              >
                Today, we support residential, commercial, and industrial
                clients across Sri Lanka with dependable solar maintenance
                solutions. Our certified technicians operate island-wide,
                bringing professional service standards, technical expertise,
                and long-term care to every installation.
              </p>
            </div>

            {/* Right Highlight Card */}
            <div>
              <div
                className="rounded-2xl p-8 md:p-10"
                style={{
                  background:
                    "linear-gradient(135deg, #fff7ed 0%, #ffffff 100%)",
                  border: "1px solid #fde68a",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                }}
              >
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{
                    color: "#111111",
                  }}
                >
                  Trusted Solar Maintenance Across Sri Lanka
                </h3>

                <p
                  className="text-sm leading-7 mb-8"
                  style={{
                    color: "#6b7280",
                  }}
                >
                  We focus on keeping solar systems clean, safe, and efficient
                  with maintenance services tailored for homes, businesses, and
                  larger installations.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="rounded-xl p-5 text-center"
                    style={{
                      backgroundColor: "#ffffff",
                      border: "1px solid #e5e7eb",
                    }}
                  >
                    <div
                      className="text-3xl font-bold mb-1"
                      style={{
                        color: "#f98a10",
                      }}
                    >
                      15
                    </div>
                    <div
                      className="text-sm"
                      style={{
                        color: "#6b7280",
                      }}
                    >
                      Certified Technicians
                    </div>
                  </div>

                  <div
                    className="rounded-xl p-5 text-center"
                    style={{
                      backgroundColor: "#ffffff",
                      border: "1px solid #e5e7eb",
                    }}
                  >
                    <div
                      className="text-3xl font-bold mb-1"
                      style={{
                        color: "#f98a10",
                      }}
                    >
                      20
                    </div>
                    <div
                      className="text-sm"
                      style={{
                        color: "#6b7280",
                      }}
                    >
                      Districts Covered
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Box */}
      <section
        className="w-full py-16 px-4"
        style={{
          backgroundColor: "#f5f5f5",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div
            className="p-8 md:p-10 rounded-2xl"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e5e7eb",
            }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: "#fffbeb",
                }}
              >
                <AwardIcon
                  className="w-5 h-5"
                  style={{
                    color: "#f98a10",
                  }}
                />
              </div>
              <div>
                <h2
                  className="text-2xl font-bold mb-2"
                  style={{
                    color: "#111111",
                  }}
                >
                  Our Mission
                </h2>
                <p
                  className="text-sm"
                  style={{
                    color: "#9ca3af",
                  }}
                >
                  What drives everything we do
                </p>
              </div>
            </div>
            <p
              className="text-base leading-relaxed mb-4"
              style={{
                color: "#6b7280",
              }}
            >
              To accelerate Sri Lanka's transition to clean energy by ensuring
              every solar installation operates at its full potential. We
              believe that reliable, professional maintenance is the backbone of
              a sustainable solar economy — protecting investments, maximizing
              output, and building confidence in renewable energy.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{
                color: "#6b7280",
              }}
            >
              We are committed to raising the standard of solar maintenance in
              Sri Lanka through continuous training, investment in modern
              equipment, and a customer-first approach that prioritizes
              transparency and long-term relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold mb-4"
              style={{
                color: "#111111",
              }}
            >
              Why Choose Luminar Energy
            </h2>
            <p
              className="text-base leading-relaxed max-w-xl mx-auto"
              style={{
                color: "#6b7280",
              }}
            >
              We're not just another maintenance company. Here's what sets us
              apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <div className="flex items-start gap-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{
                  backgroundColor: "#fffbeb",
                }}
              >
                <CheckIcon
                  className="w-4 h-4"
                  style={{
                    color: "#f98a10",
                  }}
                />
              </div>
              <div>
                <h3
                  className="text-sm font-semibold mb-1"
                  style={{
                    color: "#111111",
                  }}
                >
                  Certified & Insured Technicians
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#6b7280",
                  }}
                >
                  All our engineers hold IEE Sri Lanka certification and are
                  fully insured for on-site work.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{
                  backgroundColor: "#fffbeb",
                }}
              >
                <CheckIcon
                  className="w-4 h-4"
                  style={{
                    color: "#f98a10",
                  }}
                />
              </div>
              <div>
                <h3
                  className="text-sm font-semibold mb-1"
                  style={{
                    color: "#111111",
                  }}
                >
                  Island-wide Service Coverage
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#6b7280",
                  }}
                >
                  We operate across all 25 districts of Sri Lanka with regional
                  teams for fast response times.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{
                  backgroundColor: "#fffbeb",
                }}
              >
                <CheckIcon
                  className="w-4 h-4"
                  style={{
                    color: "#f98a10",
                  }}
                />
              </div>
              <div>
                <h3
                  className="text-sm font-semibold mb-1"
                  style={{
                    color: "#111111",
                  }}
                >
                  Transparent Reporting
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#6b7280",
                  }}
                >
                  Every service visit includes a detailed written report with
                  before/after performance data.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{
                  backgroundColor: "#fffbeb",
                }}
              >
                <CheckIcon
                  className="w-4 h-4"
                  style={{
                    color: "#f98a10",
                  }}
                />
              </div>
              <div>
                <h3
                  className="text-sm font-semibold mb-1"
                  style={{
                    color: "#111111",
                  }}
                >
                  Brand-Agnostic Expertise
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#6b7280",
                  }}
                >
                  We service all major panel and inverter brands — SunPower,
                  Jinko, Huawei, SMA, and more.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{
                  backgroundColor: "#fffbeb",
                }}
              >
                <CheckIcon
                  className="w-4 h-4"
                  style={{
                    color: "#f98a10",
                  }}
                />
              </div>
              <div>
                <h3
                  className="text-sm font-semibold mb-1"
                  style={{
                    color: "#111111",
                  }}
                >
                  Flexible Scheduling
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#6b7280",
                  }}
                >
                  We work around your schedule, including weekends and early
                  morning slots for commercial clients.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{
                  backgroundColor: "#fffbeb",
                }}
              >
                <CheckIcon
                  className="w-4 h-4"
                  style={{
                    color: "#f98a10",
                  }}
                />
              </div>
              <div>
                <h3
                  className="text-sm font-semibold mb-1"
                  style={{
                    color: "#111111",
                  }}
                >
                  Warranty Protection
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#6b7280",
                  }}
                >
                  Our maintenance contracts are designed to comply with
                  manufacturer warranty requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => handleNav("contact")}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold transition-all hover:opacity-90"
              style={{
                backgroundColor: "#111111",
                color: "#ffffff",
              }}
            >
              Work With Us
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
