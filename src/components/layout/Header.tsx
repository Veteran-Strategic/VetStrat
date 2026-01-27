import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);

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
          
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Sectors
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="bg-card border border-border rounded-lg shadow-lg py-2 min-w-48">
                <Link to="/sectors/regulated-smbs" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                  Regulated SMBs
                </Link>
                <Link to="/sectors/government-contractors" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                  Government Contractors
                </Link>
              </div>
            </div>
          </div>

          <Link to="/insights" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Insights
          </Link>
          <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link to="/contact">Book a systems consult</Link>
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
            
            {/* Mobile Sectors Dropdown */}
            <div>
              <button 
                onClick={() => setSectorsOpen(!sectorsOpen)}
                className="flex items-center justify-between w-full py-2 text-sm font-medium text-foreground"
              >
                Sectors
                <ChevronDown className={`h-4 w-4 transition-transform ${sectorsOpen ? 'rotate-180' : ''}`} />
              </button>
              {sectorsOpen && (
                <div className="pl-4 space-y-1">
                  <Link to="/sectors/regulated-smbs" className="block py-2 text-sm text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>Regulated SMBs</Link>
                  <Link to="/sectors/government-contractors" className="block py-2 text-sm text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>Government Contractors</Link>
                </div>
              )}
            </div>
            
            <Link to="/insights" className="block py-2 text-sm font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>Insights</Link>
            <Link to="/about" className="block py-2 text-sm font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/contact" className="block py-2 text-sm font-medium text-primary" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
