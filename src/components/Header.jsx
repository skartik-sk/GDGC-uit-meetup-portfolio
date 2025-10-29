import { useState } from "react";

const Header = ({ navigation, name }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-light/50 bg-background-light/80 backdrop-blur-lg px-4 sm:px-10 py-4">
      <div className="flex items-center justify-between whitespace-nowrap">
        <div className="flex items-center gap-4">
          <div className="text-charcoal size-5">
            <svg
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 6H42L36 24L42 42H6L12 24L6 6Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2 className="text-charcoal text-base sm:text-lg font-bold leading-tight tracking-[-0.015em]">
            {name}
          </h2>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            {navigation.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-charcoal text-sm font-medium leading-normal hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
            <span className="truncate">Resume</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-charcoal"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 border-t border-neutral-light/50 pt-4">
          <nav className="flex flex-col gap-4">
            {navigation.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-charcoal text-base font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="mt-2 w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg px-4 py-3 bg-primary text-white text-sm font-bold transition-opacity hover:opacity-90">
              <span className="truncate">Resume</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
