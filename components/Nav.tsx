// components/Navbar.js
import Link from "next/link";
import { ModeToggle } from "./Modetoggle";
import { SheetDemo } from "./sheetdemo";

const Navbar = () => {
  return (
    <div>
      {/* Main Navbar (Visible on medium and large screens) */}
      <nav
        className="shadow-md p-4 fixed w-full top-0 z-50 hidden md:flex justify-between items-center bg-transparent"
        aria-label="Main Navigation"
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-xl md:text-1xl lg:text-2xl font-sans py-2 md:py-6 lg:py-1 relative z-20 font-bold tracking-tight">
            ShinraiDevs
          </div>
          <ul className="flex justify-center space-x-8">
            <li>
              <Link href="/" passHref>
                <span className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-xs md:text-sm lg:text-xl font-sans py-2 md:py-6 lg:py-1 relative z-20 font-bold tracking-tight">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="aboutus" passHref>
                <span className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-xs md:text-sm lg:text-xl font-sans py-2 md:py-6 lg:py-1 relative z-20 font-bold tracking-tight">
                  About
                </span>
              </Link>
            </li>
            <li>
              <Link href="/services" passHref>
                <span className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-xs md:text-sm lg:text-xl font-sans py-2 md:py-6 lg:py-1 relative z-20 font-bold tracking-tight">
                  Services
                </span>
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref>
                <span className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-xs md:text-sm lg:text-xl font-sans py-2 md:py-6 lg:py-1 relative z-20 font-bold tracking-tight">
                  Contact
                </span>
              </Link>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <ModeToggle />
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar (Visible only on small screens) */}
      <div className="container mx-auto flex justify-between items-center md:hidden shadow-md p-4 fixed w-full top-0 z-50 bg-transparent">
        <div className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white relative z-20 font-bold tracking-tight">
          ShinraiDevs
        </div>
        <div className="flex items-center space-x-4">
          <SheetDemo />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
