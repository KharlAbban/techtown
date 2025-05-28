import {
  APP_DESCRIPTION,
  APP_LOGO_URL,
  APP_TITLE,
  FOOTER_CONTENT,
} from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaYoutube, FaFacebook, FaMedium } from "react-icons/fa6";

export default function Footer() {
  const { footerSections, legal } = FOOTER_CONTENT;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Image
                src={APP_LOGO_URL}
                height={50}
                width={50}
                className="object-contain relative"
                alt={APP_TITLE}
              />
              <span className="ml-3 text-2xl font-bold">TechTown</span>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              {APP_DESCRIPTION}
            </p>
            <div className="flex space-x-4">
              <button
                title="LinkedIn"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <span className="text-sm font-bold">
                  <FaLinkedin size={20} />
                </span>
              </button>
              <button
                title="YouTube"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <span className="text-sm font-bold">
                  <FaYoutube size={20} />
                </span>
              </button>
              <button
                title="Facebook"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <span className="text-sm font-bold">
                  <FaFacebook size={20} />
                </span>
              </button>
              <button
                title="Medium"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <span className="text-sm font-bold">
                  <FaMedium size={20} />
                </span>
              </button>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              <p>
                &copy; {new Date().getFullYear()} {APP_TITLE} - All rights
                reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              {legal.map((item) => (
                <Link
                  key={item.text}
                  href={item.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
