import { Menu, Search } from "lucide-react";
import Link from "next/link";
import { APP_LOGO_URL, APP_TITLE, NAV_ITEMS } from "@/lib/constants";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex space-x-1 items-center">
            <Image
              src={APP_LOGO_URL}
              height={50}
              width={50}
              className="object-contain relative"
              alt={APP_TITLE}
            />
            <span className="text-lg font-bold text-gray-900">TechTown</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Search & Mobile Nav */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
            >
              <Search className="h-5 w-5" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="md:hidden">
                  <Menu className="text-black" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {NAV_ITEMS.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link href={item.href} className="text-lg text-black">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
