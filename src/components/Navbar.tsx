import { Link, useLocation } from 'react-router-dom';
import { BookOpen, User, Home } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  return (
    <>
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur border-b border-border h-14 flex items-center px-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg text-primary">
          <BookOpen className="w-5 h-5" />
          <span>MindVault</span>
        </Link>
        <div className="ml-auto">
          <Link to="/profile" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <User className="w-4 h-4" />
            <span className="hidden sm:inline">Profile</span>
          </Link>
        </div>
      </header>

      {/* Bottom tab bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur border-t border-border flex">
        <Link
          to="/"
          className={`flex-1 flex flex-col items-center justify-center py-3 gap-0.5 text-xs transition-colors ${location.pathname === '/' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
        >
          <Home className="w-5 h-5" />
          <span>Home</span>
        </Link>
        <Link
          to="/profile"
          className={`flex-1 flex flex-col items-center justify-center py-3 gap-0.5 text-xs transition-colors ${location.pathname === '/profile' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
        >
          <User className="w-5 h-5" />
          <span>Profile</span>
        </Link>
      </nav>
    </>
  );
}
