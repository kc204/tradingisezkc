
'use client';

import Link from 'next/link';
import { Menu, Moon, Sun, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useTheme } from 'next-themes';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  {
    href: '/firms',
    label: 'Prop Firms',
    dropdown: [
      { href: '/firms', label: 'All Firms' },
      { href: '/compare', label: 'Compare Firms' },
    ],
  },
  {
    href: '/resources',
    label: 'Trading Resources',
    dropdown: [
      { href: '/resources/guides', label: 'Guides' },
      { href: '/resources/tools', label: 'Tools' },
      { href: '/resources/news', label: 'News' },
      { href: '/resources/al-brooks-trading-course', label: 'Al Brooks Course' },
    ],
  },
  { href: '/about', label: 'About Us' },
];

const SCROLL_DELTA_THRESHOLD = 5; 
const HEADER_ALWAYS_VISIBLE_THRESHOLD = 64; 

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setMounted(true);
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      lastScrollY.current = window.scrollY;

      const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (Math.abs(currentScrollY - lastScrollY.current) < SCROLL_DELTA_THRESHOLD) {
          return; 
        }

        if (currentScrollY < HEADER_ALWAYS_VISIBLE_THRESHOLD) {
          setIsVisible(true); 
        } else if (currentScrollY > lastScrollY.current) {
          setIsVisible(false); 
        } else {
          setIsVisible(true); 
        }
        lastScrollY.current = currentScrollY;
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);


  const clearHoverTimeout = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const handleMouseEnter = (label: string, isMobileLink: boolean) => {
    if (!isMobileLink && mounted) {
      clearHoverTimeout();
      setOpenDropdown(label);
    }
  };

  const handleMouseLeave = (isMobileLink: boolean) => {
    if (!isMobileLink && mounted) {
      clearHoverTimeout();
      hoverTimeoutRef.current = setTimeout(() => {
        setOpenDropdown(null);
      }, 100);
    }
  };

  const ThemeToggle = () => {
    if (!mounted) {
      return <Button variant="ghost" size="icon" className="w-9 h-9" disabled><Sun className="h-[1.2rem] w-[1.2rem]" /></Button>;
    }
    return (
      <Button
        variant="ghost"
        size="icon"
        className="text-header-foreground hover:bg-primary/80 hover:text-white w-9 h-9"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        aria-label="Toggle theme"
      >
        {theme === 'light' ? (
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        )}
      </Button>
    );
  };

  const renderNavLinks = (isMobileLink: boolean) =>
    navLinks.map((link) =>
      link.dropdown ? (
        <DropdownMenu
          key={link.label}
          open={!isMobileLink && mounted && openDropdown === link.label}
          onOpenChange={(isOpen) => {
            if (!isMobileLink && mounted) {
              if (isOpen) {
                setOpenDropdown(link.label);
              } else {
                // Only close if it's the currently open one, to avoid closing due to focus changes
                if (openDropdown === link.label) {
                  setOpenDropdown(null);
                }
              }
            }
          }}
        >
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={`text-header-foreground hover:bg-primary/80 hover:text-white ${isMobileLink ? 'w-full justify-start text-foreground hover:text-foreground' : 'group'}`}
              onMouseEnter={() => handleMouseEnter(link.label, isMobileLink)}
              onMouseLeave={() => handleMouseLeave(isMobileLink)}
              onClick={() => { // Handles click for both mobile and desktop (toggle for desktop)
                if (isMobileLink) {
                  // Mobile sheet dropdowns are handled by Radix UI state or custom state if needed
                } else {
                  setOpenDropdown(openDropdown === link.label ? null : link.label);
                }
              }}
            >
              {link.label}
              {!isMobileLink && mounted && (
                <ChevronDown className="ml-1 h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="bg-card text-card-foreground"
            onMouseEnter={() => handleMouseEnter(link.label, isMobileLink)} // Keep open on hover content
            onMouseLeave={() => handleMouseLeave(isMobileLink)} // Allow closing when mouse leaves content
          >
            {link.dropdown.map((item) => (
              <DropdownMenuItem key={item.label} asChild className="hover:bg-accent hover:text-accent-foreground">
                <Link
                  href={item.href}
                  onClick={() => {
                    if (isMobileLink) setMobileMenuOpen(false);
                    if (!isMobileLink && mounted) {
                      clearHoverTimeout(); // Clear any pending close
                      setOpenDropdown(null); // Close dropdown on item click
                    }
                  }}
                >
                  {item.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button key={link.label} variant="ghost" asChild className={`text-header-foreground hover:bg-primary/80 hover:text-white ${isMobileLink ? 'w-full justify-start text-foreground hover:text-foreground' : ''}`}>
          <Link href={link.href} onClick={() => {
            if (isMobileLink) setMobileMenuOpen(false);
            if (!isMobileLink && mounted) {
               clearHoverTimeout(); // Clear any pending close
               setOpenDropdown(null); // Close any open dropdown
            }
          }}>
            {link.label}
          </Link>
        </Button>
      )
    );

  return (
    <header
      className={cn(
        "bg-header-background text-header-foreground shadow-lg sticky z-40",
        "top-[2.25rem]", // Consistent top offset below GlobalOfferBar
        "transition-[transform,opacity] duration-300 ease-out", // Use ease-out for a quicker start to the animation
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none"
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-header-foreground" onClick={() => {
          if (mobileMenuOpen) setMobileMenuOpen(false);
          if (openDropdown) setOpenDropdown(null); // Close dropdown if clicking main logo
        }}>
          TradingisEZ
        </Link>

        <nav className="hidden md:flex items-center space-x-2">
          {renderNavLinks(false)}
          <ThemeToggle />
        </nav>

        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-2 text-header-foreground hover:bg-primary/80 hover:text-white">
                <Menu />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-card text-card-foreground p-6">
              <div className="flex justify-between items-center mb-6">
                 <Link href="/" className="text-2xl font-bold text-foreground" onClick={() => setMobileMenuOpen(false)}>
                    TradingisEZ
                  </Link>
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                  <X />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="flex flex-col space-y-3">
                {renderNavLinks(true)}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
