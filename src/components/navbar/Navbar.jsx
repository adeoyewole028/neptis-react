import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Features", href: "#features", current: false },
  { name: "How it works", href: "#how-it-works", current: false },
  { name: "Pricing", href: "#pricing", current: false },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.scrollY || document.documentElement.scrollTop;
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

  return (
    <div
      className={`mx-auto mt-5 py-4 max-w-7xl px-2 sm:px-6 lg:px-8 ${
        isScrolled
          ? "bg-[#221c38] shadow-md w-full fixed top-0 left-0 z-20 mt-0"
          : "" // Add the background color class when isScrolled is true
      } `}
    >
      <header className={`absolute inset-x-0 top-0 z-50 bg-inherit`}>
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Neptis</span>
              <img className="h-8 w-auto" src="/images/logo.png" alt="Neptis" />
            </a>
          </div>
          <div className="flex items-center gap-10">
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-[rgba(255,255,255,0.80)]"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href="#"
                className="text-sm font-semibold leading-6 bg-white px-10 py-5 rounded-full text-[#221C38] hover:bg-indigo-500 hover:text-white"
              >
                Get Started
              </a>
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
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Neptis</span>
                <img
                  className="h-8 w-auto"
                  src="/images/logo.png"
                  alt="Neptis"
                />
              </a>
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
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-indigo-500"
                    >
                      {item.name}
                    </a>
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
