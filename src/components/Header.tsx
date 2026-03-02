import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import type { Page } from "../App";
import logo from "../assets/logo.png";
interface HeaderProps {
  currentPage: Page;
  navigate: (page: Page) => void;
}

const navLinks: {
  label: string;
  page: Page;
}[] = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "Services",
    page: "services",
  },
  {
    label: "About",
    page: "about",
  },
];

export function Header({ currentPage, navigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleNav = (page: Page) => {
    navigate(page);
    setMobileOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <header
      className="sticky top-0 z-50 w-full bg-white"
      style={{
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNav("home")}
            className="flex items-center"
            aria-label="Luminar Energy home"
          >
            <img
              src={logo}
              alt="Luminar Energy Logo"
              className="h-14 w-60 object-contain ml-[-40px]"
            />
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-6 ml-[-70px]"
            aria-label="Main navigation"
          >
            {navLinks.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => handleNav(page)}
                className="relative px-4 py-2 text-sm font-medium transition-colors rounded-md"
                style={{
                  color: currentPage === page ? "#111111" : "#6b7280",
                }}
              >
                {label}
                {currentPage === page && (
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full"
                    style={{
                      backgroundColor: "#f98a10",
                    }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNav("contact")}
              className="px-4 py-2 text-sm font-semibold rounded-md transition-all hover:bg-gray-50"
              style={{
                border: "1.5px solid #111111",
                color: "#111111",
              }}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <XIcon className="w-5 h-5" />
            ) : (
              <MenuIcon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden bg-white animate-fade-in"
          style={{
            borderTop: "1px solid #e5e7eb",
          }}
        >
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => handleNav(page)}
                className="text-left px-3 py-2.5 text-sm font-medium rounded-md transition-colors"
                style={{
                  color: currentPage === page ? "#111111" : "#6b7280",
                  backgroundColor:
                    currentPage === page ? "#f5f5f5" : "transparent",
                }}
              >
                {label}
              </button>
            ))}
            <div className="pt-2 pb-1">
              <button
                onClick={() => handleNav("contact")}
                className="w-full px-4 py-2.5 text-sm font-semibold rounded-md transition-all"
                style={{
                  border: "1.5px solid #111111",
                  color: "#111111",
                }}
              >
                Contact Us
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
