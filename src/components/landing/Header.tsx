import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-navy flex items-center justify-center">
            <div className="w-3 h-3 rounded-sm bg-emerald" />
          </div>
          <span className="font-bold text-lg tracking-tight text-navy">PostcodePro</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#how" className="hover:text-navy transition-colors">How it works</a>
          <a href="#features" className="hover:text-navy transition-colors">Features</a>
          <a href="#pricing" className="hover:text-navy transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-navy transition-colors">FAQ</a>
        </nav>
        <a href="#waitlist" className="text-sm font-semibold text-navy hover:text-emerald transition-colors">
          Join waitlist →
        </a>
      </div>
    </header>
  );
}