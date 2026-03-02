import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";
import type { Page } from "../App";
import logo from "../assets/logo.png";
interface FooterProps {
  navigate: (page: Page) => void;
}
export function Footer({ navigate }: FooterProps) {
  const handleNav = (page: Page) => {
    navigate(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer
      style={{
        backgroundColor: "#f5f5f5",
        borderTop: "1px solid #e5e7eb",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-40">
          {/* Brand Column */}
          <div>
            <button
              onClick={() => handleNav("home")}
              className="mb-4 inline-flex items-center"
              aria-label="Luminar Energy home"
            >
              <img
                src={logo}
                alt="Luminar Energy Logo"
                className="h-14 w-60 object-contain ml-[-34px]"
              />
            </button>
            <p
              className="text-sm leading-relaxed"
              style={{
                color: "#6b7280",
              }}
            >
              Sri Lanka's trusted solar panel maintenance specialists. Keeping
              your energy systems performing at peak efficiency.
            </p>
            <p
              className="text-xs mt-4"
              style={{
                color: "#9ca3af",
              }}
            >
              © {new Date().getFullYear()} Luminar Energy. All rights reserved.
            </p>
          </div>

          {/* Links Column */}
          <div className="ml-12">
            <h3
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{
                color: "#111111",
              }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => handleNav("home")}
                  className="text-sm transition-colors hover:text-gray-900"
                  style={{
                    color: "#6b7280",
                  }}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("services")}
                  className="text-sm transition-colors hover:text-gray-900"
                  style={{
                    color: "#6b7280",
                  }}
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("about")}
                  className="text-sm transition-colors hover:text-gray-900"
                  style={{
                    color: "#6b7280",
                  }}
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("contact")}
                  className="text-sm transition-colors hover:text-gray-900"
                  style={{
                    color: "#6b7280",
                  }}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{
                color: "#111111",
              }}
            >
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPinIcon
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
                  No. 45, Galle Road, Colombo 03, Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon
                  className="w-4 h-4 flex-shrink-0"
                  style={{
                    color: "#f98a10",
                  }}
                />

                <a
                  href="tel:+94112345678"
                  className="text-sm transition-colors hover:text-gray-900"
                  style={{
                    color: "#6b7280",
                  }}
                >
                  +94 11 234 5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon
                  className="w-4 h-4 flex-shrink-0"
                  style={{
                    color: "#f98a10",
                  }}
                />

                <a
                  href="mailto:info@luminarenergy.lk"
                  className="text-sm transition-colors hover:text-gray-900"
                  style={{
                    color: "#6b7280",
                  }}
                >
                  info@luminarenergy.lk
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
