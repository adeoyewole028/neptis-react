import { Link } from "react-scroll";

const navigation = [
  { name: "Home", href: "hero" },
  { name: "Features", href: "features" },
  { name: "How it works", href: "how-it-works" },
  { name: "Pricing", href: "pricing" },
];
const Footer = () => {
  return (
    <div>
      <nav
        className="lg:mx-auto gap-14 flex flex-col lg:flex-row max-w-7xl lg:items-center justify-between p-6 lg:px-8 bg-transparent"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            smooth={true}
            duration={500}
            offset={-70}
            to="hero"
            className="-m-1.5 p-1.5"
          >
            <span className="sr-only">Neptis</span>
            <img className="h-8 w-auto" src="/images/logo.png" alt="Neptis" />
          </Link>
        </div>

        <div className="flex items-center">
          <div className="flex lg:flex-row flex-col lg:gap-x-12 gap-6">
            {navigation.map((item) => (
              <Link
                smooth={true}
                duration={500}
                offset={-70}
                key={item.name}
                to={item.href}
                className="cursor-pointer text-sm font-light leading-6 text-[rgba(255,255,255,0.80)]"
              >
                {item.name}
              </Link>
            ))}
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
