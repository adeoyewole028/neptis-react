import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Features", href: "features" },
  { name: "How it works", href: "how-it-works" },
  { name: "Pricing", href: "pricing" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollThreshold = 100; // Adjust this value as needed

      // Check if the page is scrolled beyond the threshold
      setIsScrolled(scrollTop > scrollThreshold);
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (href) => {
    scroll.scrollTo(href, {
      duration: 500,
      smooth: "easeInOutQuart",
      offset: -70,
    });
  };

  return (
    <div
      className={`mx-auto  py-4 max-w-7xl px-2 sm:px-6 lg:px-8 w-full ${
        isScrolled ? "bg-[#221c38] max-w-none shadow-md fixed z-20" : "" // Add the background color class when isScrolled is true
      } `}
    >
      <header className="absolute inset-x-0 top-0  bg-inherit z-50">
        <nav
          id="#"
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link
              duration={500}
              offset={-70}
              to="/"
              className="-m-1.5 p-1.5 cursor-pointer"
            >
              <span className="sr-only">Neptis</span>
              <img className="h-8 w-auto" src="/images/logo.png" alt="Neptis" />
            </Link>
          </div>
          <div className="flex items-center gap-10">
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <ScrollLink
                  key={item.name}
                  activeClass="active"
                  to={item.href}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => handleLinkClick()}
                  className="cursor-pointer text-sm font-semibold leading-6 text-[rgba(255,255,255,0.80)]"
                >
                  {item.name}
                </ScrollLink>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link
                to="/register"
                className="text-sm font-semibold leading-6 bg-white px-10 py-5 rounded-full text-[#221C38] hover:bg-indigo-500 hover:text-white"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-52 overflow-y-auto bg-[#221c38] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link
                duration={500}
                offset={-70}
                to="/"
                className="-m-1.5 p-1.5"
              >
                <span className="sr-only">Neptis</span>
                <img
                  className="h-8 w-auto"
                  src="/images/logo.png"
                  alt="Neptis"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {" "}
                  {navigation.map((item) => (
                    <ScrollLink
                      key={item.name}
                      activeClass="active"
                      to={item.href}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={() => handleLinkClick()}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-indigo-500"
                    >
                      {item.name}
                    </ScrollLink>
                  ))}
           
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
};

export default Navbar;
