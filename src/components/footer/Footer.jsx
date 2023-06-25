const Footer = () => {
  return (
    <div>
      <nav
        className="lg:mx-auto gap-14 flex flex-col lg:flex-row max-w-7xl lg:items-center justify-between p-6 lg:px-8 bg-transparent"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Neptis</span>
            <img className="h-8 w-auto" src="/images/logo.png" alt="Neptis" />
          </a>
        </div>

        <div className="flex items-center">
          <div className="flex lg:flex-row flex-col lg:gap-x-12 gap-6">
            <a
              href="#"
              className="text-sm font-light leading-6 text-[rgba(255,255,255,0.80)]"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-sm font-light leading-6 text-[rgba(255,255,255,0.80)]"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-light leading-6 text-[rgba(255,255,255,0.80)]"
            >
              How it works
            </a>
            <a
              href="#pricing"
              className="text-sm font-light leading-6 text-[rgba(255,255,255,0.80)]"
            >
              Pricing
            </a>
          </div>
        </div>
        <div className="flex lg:flex-1 gap-5 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            <img src="/images/twitter.png" alt="twitter" />
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            <img src="/images/linkedin.png" alt="linkedin" />
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            <img src="/images/facebook.png" alt="facebook" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
