
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

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
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
      }, 100); // 100ms delay before closing
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
                if (openDropdown === link.label) {
                  setOpenDropdown(null);
                }
              }
            }
            // For mobile, sheet handles dropdowns differently or might not use Radix DropdownMenu directly within the sheet in the same way
          }}
        >
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={`text-header-foreground hover:bg-primary/80 hover:text-white ${isMobileLink ? 'w-full justify-start text-foreground hover:text-foreground' : 'group'}`}
              onMouseEnter={() => handleMouseEnter(link.label, isMobileLink)}
              onMouseLeave={() => handleMouseLeave(isMobileLink)}
              onClick={() => { // Retain click for accessibility and mobile toggling
                if (isMobileLink) {
                  // Mobile sheet logic
                } else {
                  // Desktop: toggle if not already open by hover, or let onOpenChange handle
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
            onMouseEnter={() => handleMouseEnter(link.label, isMobileLink)}
            onMouseLeave={() => handleMouseLeave(isMobileLink)}
          >
            {link.dropdown.map((item) => (
              <DropdownMenuItem key={item.label} asChild className="hover:bg-accent hover:text-accent-foreground">
                <Link
                  href={item.href}
                  onClick={() => {
                    if (isMobileLink) setMobileMenuOpen(false);
                    if (!isMobileLink && mounted) {
                      clearHoverTimeout();
                      setOpenDropdown(null);
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
            // For non-dropdown items, ensure any open hover dropdown closes
            if (!isMobileLink && mounted) {
              clearHoverTimeout();
              setOpenDropdown(null);
            }
          }}>
            {link.label}
          </Link>
        </Button>
      )
    );

  return (
    <header className="bg-header-background text-header-foreground shadow-lg sticky top-[calc(2.5rem)] md:top-[calc(2.25rem)] z-40"> {/* Adjusted top value if GlobalOfferBar height changes */}
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Prop Firm Finder
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
                    Prop Firm Finder
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
