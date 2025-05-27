
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

const mainSiteNavLinks = [
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

const HEADER_ALWAYS_VISIBLE_THRESHOLD = 64; // If scrollY is less than this, header is visible
const SCROLL_DELTA_THRESHOLD = 5; // Minimum scroll change to react

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const navLinks = mainSiteNavLinks;

  useEffect(() => {
    setMounted(true); // For dropdown hover logic
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initialize lastScrollY with the current scroll position on mount
      lastScrollY.current = window.scrollY;
      
      // Set initial visibility based on load scroll position
      // This helps if the page loads already scrolled down.
      if (window.scrollY > HEADER_ALWAYS_VISIBLE_THRESHOLD) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (Math.abs(currentScrollY - lastScrollY.current) < SCROLL_DELTA_THRESHOLD) {
          // Not enough scroll to trigger a change, but ensure it's visible if near top
           if (currentScrollY < HEADER_ALWAYS_VISIBLE_THRESHOLD && !isVisible) {
            setIsVisible(true);
          }
          return;
        }

        if (currentScrollY < HEADER_ALWAYS_VISIBLE_THRESHOLD) {
          setIsVisible(true);
        } else {
          // Scrolled past the threshold
          if (currentScrollY > lastScrollY.current) {
            // Scrolling Down
            setIsVisible(false);
          } else {
            // Scrolling Up
            setIsVisible(true);
          }
        }
        lastScrollY.current = currentScrollY;
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isVisible]); // Re-run effect if isVisible changes, to correctly capture it in closure.
                  // This dependency might cause too many re-registrations.
                  // Let's remove it and define handleScroll inside useEffect to capture state.

  // More stable useEffect for scroll listener
  useEffect(() => {
    if (typeof window === 'undefined') return;

    lastScrollY.current = window.scrollY;
    // Set initial visibility more robustly
    if (window.scrollY > HEADER_ALWAYS_VISIBLE_THRESHOLD) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    const handleScrollLogic = () => {
      const currentScrollY = window.scrollY;
      const localLastScrollY = lastScrollY.current;

      if (Math.abs(currentScrollY - localLastScrollY) < SCROLL_DELTA_THRESHOLD) {
        if (currentScrollY < HEADER_ALWAYS_VISIBLE_THRESHOLD) {
          // If not visible and should be, update.
          // Using functional update to avoid needing isVisible in deps for this specific case.
          setIsVisible(prev => prev ? true : true);
        }
        return;
      }
      
      if (currentScrollY < HEADER_ALWAYS_VISIBLE_THRESHOLD) {
        setIsVisible(true);
      } else {
        if (currentScrollY > localLastScrollY) { // Scrolling Down
          setIsVisible(false);
        } else { // Scrolling Up
          setIsVisible(true);
        }
      }
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScrollLogic, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollLogic);
  }, []); // Empty dependency array: run once on mount/unmount


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
              className={cn(
                "text-header-foreground hover:bg-primary/80 hover:text-white group",
                isMobileLink ? 'w-full justify-start text-foreground hover:text-foreground' : ''
              )}
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
            className="bg-popover"
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
        <Button
          key={link.label}
          variant="ghost"
          asChild
          className={cn(
            "text-header-foreground hover:bg-primary/80 hover:text-white",
            isMobileLink ? 'w-full justify-start text-foreground hover:text-foreground' : ''
          )}
          >
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
        <Link
          href="/"
          className={cn(
            "text-2xl font-bold text-header-foreground"
            )}
            onClick={() => {
            if (mobileMenuOpen) setMobileMenuOpen(false);
            if (openDropdown) setOpenDropdown(null);
          }}>
          TradingisEZ
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
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
            <SheetContent side="right" className={cn("w-[300px] sm:w-[350px] bg-card text-card-foreground p-6")}>
               <SheetTitle className="sr-only">Main Menu</SheetTitle>
              <div className="flex justify-between items-center mb-6">
                 <Link href="/" className={cn("text-2xl font-bold text-foreground")} onClick={() => setMobileMenuOpen(false)}>
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
