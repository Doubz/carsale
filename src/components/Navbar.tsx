"use client";

import { useState, useEffect, MouseEvent } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const router = useRouter();

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    event.preventDefault();

    if (pathname === "/") {
      scrollToSection(sectionId);
    } else {
      router.push(`/#${sectionId}`);
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg" // 滚动后：白色背景 + 阴影
          : "bg-transparent" // 未滚动：透明背景
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <Link
            href="/"
            className="flex items-center"
            aria-label="Go to homepage"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <svg
                className={`w-8 h-8 ${isScrolled ? "text-primary" : "text-white"}`}
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
              </svg>
              <span
                className={`text-xl font-bold ${isScrolled ? "text-gray-900" : "text-white"}`}
              >
                {t.nav.brandName}
              </span>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">

            <Link
              href="/#banner"
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-primary" // 滚动后：深灰色，悬停变主题色
                  : "text-white hover:text-gray-200" // 未滚动：白色，悬停变浅灰
              }`}
              onClick={(event) => handleNavClick(event, "banner")}
            >
              {t.nav.home}
            </Link>

            <Link
              href="/#features"
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-white hover:text-gray-200"
              }`}
              onClick={(event) => handleNavClick(event, "features")}
            >
              {t.nav.vehicles}
            </Link>

            <Link
              href="/#register"
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-white hover:text-gray-200"
              }`}
              onClick={(event) => handleNavClick(event, "register")}
            >
              {t.nav.register}
            </Link>

            <Link
              href="/contact"
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-white hover:text-gray-200"
              }`}
            >
              {t.nav.contact}
            </Link>

            <LanguageSwitcher isScrolled={isScrolled} />

            <Link
              href="/#register"
              className="bg-primary hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
              aria-label="开始注册"
              onClick={(event) => handleNavClick(event, "register")}
            >
              {t.nav.registerNow}
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${
              isScrolled ? "text-gray-700" : "text-white" // 根据滚动状态改变颜色
            }`}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="px-4 pt-2 pb-4 space-y-2">

            <Link
              href="/#banner"
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              onClick={(event) => handleNavClick(event, "banner")}
            >
              {t.nav.home}
            </Link>

            <Link
              href="/#features"
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              onClick={(event) => handleNavClick(event, "features")}
            >
              {t.nav.vehicles}
            </Link>

            <Link
              href="/#register"
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              onClick={(event) => handleNavClick(event, "register")}
            >
              {t.nav.register}
            </Link>

            <Link
              href="/contact"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.contact}
            </Link>

            <div className="px-4 py-2">
              <LanguageSwitcher isScrolled={true} />
            </div>

            <Link
              href="/#register"
              className="block w-full text-center bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold mt-2"
              onClick={(event) => handleNavClick(event, "register")}
            >
              {t.nav.registerNow}
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
