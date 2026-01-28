import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="container-wide flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-foreground">Veteran Strategic</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Services
          </Link>
          <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Link to="/insights" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Insights
          </Link>
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link to="/contact">Schedule assessment</Link>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button className="xl:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-border bg-background">
          <nav className="container-wide py-4 space-y-1">
            <Link to="/" className="block py-2 text-sm font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/services" className="block py-2 text-sm font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link to="/about" className="block py-2 text-sm font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/insights" className="block py-2 text-sm font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>Insights</Link>
            <Link to="/contact" className="block py-2 text-sm font-medium text-primary" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
