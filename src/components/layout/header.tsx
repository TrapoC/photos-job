import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-40 transition-all duration-300 ease-in-out px-6 md:px-12",
        scrolled ? "py-4 bg-black/90 backdrop-blur-sm" : "py-6 bg-transparent"
      )}
    >
      <div className="flex items-center justify-between">
        <Link 
          to="/" 
          className="text-white text-2xl font-bold tracking-tighter cursor-pointer"
        >
          PHOTO<span className="text-gray-400">PORTFOLIO</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" label="Work" />
          <NavLink to="/about" label="About" />
          <NavLink to="/contact" label="Contact" />
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
          <button 
            className="absolute top-6 right-6 text-white"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <nav className="flex flex-col items-center space-y-8">
            <MobileNavLink to="/" label="Work" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink to="/about" label="About" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink to="/contact" label="Contact" onClick={() => setIsMenuOpen(false)} />
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, label }: { to: string; label: string }) {
  const location = useLocation();
  const isActive = location.pathname === to || 
    (to !== "/" && location.pathname.startsWith(to));

  return (
    <Link 
      to={to} 
      className={cn(
        "text-sm uppercase tracking-wider transition-colors duration-300",
        isActive ? "text-white" : "text-gray-400 hover:text-white"
      )}
    >
      {label}
    </Link>
  );
}

function MobileNavLink({ to, label, onClick }: { to: string; label: string; onClick: () => void }) {
  const location = useLocation();
  const isActive = location.pathname === to || 
    (to !== "/" && location.pathname.startsWith(to));

  return (
    <Link 
      to={to} 
      className={cn(
        "text-3xl uppercase tracking-wider transition-colors duration-300",
        isActive ? "text-white" : "text-gray-400 hover:text-white"
      )}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}