
'use client';

import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
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
      { href: '/resources/al-brooks-trading-course', label: 'Al Brooks Course Info' }, // Kept distinct from free course
    ],
  },
  {
    href: '/free-resources',
    label: 'Free Resources',
    dropdown: [
      { href: '/free-resources', label: 'Overview' },
      { href: '/free-resources/audiobooks', label: 'Audiobooks' },
      { href: '/free-resources/al-brooks-course', label: 'Al Brooks Free Course' },
    ],
  },
  { href: '/about', label: 'About Us' },
];

const SCROLL_DELTA_THRESHOLD = 5;
const HEADER_ALWAYS_VISIBLE_THRESHOLD = 64; 

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
          }}
        >
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={`text-header-foreground hover:bg-primary/80 hover:text-white ${isMobileLink ? 'w-full justify-start text-foreground hover:text-foreground' : 'group'}`}
              onMouseEnter={() => handleMouseEnter(link.label, isMobileLink)}
              onMouseLeave={() => handleMouseLeave(isMobileLink)}
              onClick={() => { 
                if (isMobileLink) {
                  // Mobile sheet dropdowns are handled by Radix UI state
                } else {
                  setOpenDropdown(openDropdown === link.label ? null : link.label);
                }
              }}
            >
              {link.label}
              {!isMobileLink && mounted && (
                <ChevronDown className="ml-1 h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180 text-header-foreground" />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="bg-header-background" 
            onMouseEnter={() => handleMouseEnter(link.label, isMobileLink)} 
            onMouseLeave={() => handleMouseLeave(isMobileLink)} 
          >
            {link.dropdown.map((item) => (
              <DropdownMenuItem key={item.label} asChild className="text-popover-foreground hover:bg-accent hover:text-accent-foreground">
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
    <header
      className={cn(
        "bg-header-background text-header-foreground shadow-lg sticky z-40",
        "top-[2.25rem]", 
        "transition-[transform,opacity] duration-300 ease-out", 
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none"
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-header-foreground" onClick={() => {
          if (mobileMenuOpen) setMobileMenuOpen(false);
          if (openDropdown) setOpenDropdown(null); 
        }}>
          TradingisEZ
        </Link>

        <nav className="hidden md:flex items-center space-x-2">
          {renderNavLinks(false)}
        </nav>

        <div className="md:hidden flex items-center">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-2 text-header-foreground hover:bg-primary/80 hover:text-white">
                <Menu />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-card text-card-foreground p-6">
              <SheetTitle className="sr-only">Main Menu</SheetTitle>
              <div className="flex justify-between items-center mb-6">
                 <Link href="/" className="text-2xl font-bold text-foreground" onClick={() => setMobileMenuOpen(false)}>
                    TradingisEZ
                  </Link>
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
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
