
'use client';

import Link from 'next/link';
import { Menu, X, ChevronDown, LogOut } from 'lucide-react';
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
import { useDegenMode } from '@/contexts/DegenModeContext';

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

const degenNavLinks = [
  { href: '/degen/trenches', label: 'The Trenches' },
  { href: '/degen/memewatch', label: 'Memewatch' },
  { href: '/degen/how-to-ape', label: 'How to Ape' },
  { href: '/degen/glossary', label: 'Glossary' },
];


const HEADER_ALWAYS_VISIBLE_THRESHOLD = 64;
const SCROLL_DELTA_THRESHOLD = 5;

const Header = () => {
  const { isDegenMode, setIsDegenMode } = useDegenMode();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const currentNavLinks = isDegenMode ? degenNavLinks : mainSiteNavLinks;
  const logoText = isDegenMode ? "TradingisEZ [DEGEN]" : "TradingisEZ";

  useEffect(() => {
    setMounted(true);
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    lastScrollY.current = window.scrollY;
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
          setIsVisible(true);
        }
        return;
      }

      if (currentScrollY < HEADER_ALWAYS_VISIBLE_THRESHOLD) {
        setIsVisible(true);
      } else {
        if (currentScrollY > localLastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScrollLogic, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollLogic);
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

  const renderNavLinks = (isMobileLink: boolean, linksToRender: typeof mainSiteNavLinks) =>
    linksToRender.map((link) =>
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
                "hover:bg-primary/80 data-[state=open]:bg-primary data-[state=open]:text-primary-foreground",
                isMobileLink ? 'w-full justify-start text-foreground hover:text-foreground' 
                             : 'text-header-foreground hover:text-white group',
                isDegenMode && !isMobileLink && "text-[hsl(var(--degen-text-main-hsl))] hover:bg-[hsl(var(--degen-electric-blue-hsl))] hover:text-[hsl(var(--degen-bg-main-hsl))] data-[state=open]:bg-[hsl(var(--degen-electric-blue-hsl))] data-[state=open]:text-[hsl(var(--degen-bg-main-hsl))]",
                isDegenMode && isMobileLink && "text-[hsl(var(--degen-text-main-hsl))] hover:text-[hsl(var(--degen-lime-green-hsl))]"
              )}
              onMouseEnter={() => handleMouseEnter(link.label, isMobileLink)}
              onMouseLeave={() => handleMouseLeave(isMobileLink)}
              onClick={() => {
                if (!isMobileLink) {
                  setOpenDropdown(openDropdown === link.label ? null : link.label);
                }
              }}
            >
              {link.label}
              {!isMobileLink && mounted && (
                <ChevronDown className={cn(
                  "ml-1 h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180",
                  isDegenMode ? "text-[hsl(var(--degen-text-main-hsl))]" : "text-header-foreground"
                )} />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className={cn(isDegenMode ? "bg-[hsl(var(--degen-bg-main-hsl))] border-[hsl(var(--degen-electric-blue-hsl))]" : "bg-popover")}
            onMouseEnter={() => handleMouseEnter(link.label, isMobileLink)}
            onMouseLeave={() => handleMouseLeave(isMobileLink)}
          >
            {link.dropdown.map((item) => (
              <DropdownMenuItem 
                key={item.label} 
                asChild 
                className={cn(
                  isDegenMode ? "text-[hsl(var(--degen-text-main-hsl))] hover:bg-[hsl(var(--degen-hot-pink-hsl))] hover:text-[hsl(var(--degen-bg-main-hsl))]" 
                              : "text-popover-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
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
            isMobileLink ? 'w-full justify-start text-foreground hover:text-foreground' 
                         : 'text-header-foreground hover:text-white hover:bg-primary/80',
             isDegenMode && !isMobileLink && "text-[hsl(var(--degen-text-main-hsl))] hover:bg-[hsl(var(--degen-electric-blue-hsl))] hover:text-[hsl(var(--degen-bg-main-hsl))]",
             isDegenMode && isMobileLink && "text-[hsl(var(--degen-text-main-hsl))] hover:text-[hsl(var(--degen-lime-green-hsl))]"
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
        "shadow-lg sticky z-40",
        "top-[2.25rem]",
        "transition-[transform,opacity] duration-300 ease-out",
        // Standard header background/text colors. Degen mode overrides these via global .degen-mode styles
        "bg-header-background text-header-foreground", 
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none"
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className={cn(
            "text-2xl font-bold",
            isDegenMode ? "font-press-start text-[hsl(var(--degen-lime-green-hsl))]" : "text-header-foreground"
          )}
          onClick={() => {
            if (mobileMenuOpen) setMobileMenuOpen(false);
            if (openDropdown) setOpenDropdown(null);
          }}
        >
          {logoText}
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {renderNavLinks(false, currentNavLinks)}
          {isDegenMode && (
            <Button
              onClick={() => setIsDegenMode(false)}
              variant="outline"
              size="sm"
              className={cn(
                "font-pixelify ml-4",
                "bg-transparent text-[hsl(var(--degen-electric-blue-hsl))]",
                "border-2 border-[hsl(var(--degen-electric-blue-hsl))] hover:bg-[hsl(var(--degen-electric-blue-hsl))] hover:text-[hsl(var(--degen-bg-main-hsl))]"
              )}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Return to Sanity
            </Button>
          )}
        </nav>

        <div className="md:hidden flex items-center">
          {isDegenMode && (
             <Button
              onClick={() => setIsDegenMode(false)}
              variant="ghost"
              size="icon"
              className={cn(
                "font-pixelify mr-2",
                "text-[hsl(var(--degen-electric-blue-hsl))] hover:text-[hsl(var(--degen-lime-green-hsl))]"
              )}
              aria-label="Return to Sanity"
            >
              <LogOut />
            </Button>
          )}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className={cn(
                  "ml-2",
                  isDegenMode ? "text-[hsl(var(--degen-electric-blue-hsl))] hover:bg-transparent hover:text-[hsl(var(--degen-lime-green-hsl))]" 
                              : "text-header-foreground hover:bg-primary/80 hover:text-white"
                )}
              >
                <Menu />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className={cn(
                "w-[300px] sm:w-[350px] p-6",
                isDegenMode ? "bg-[hsl(var(--degen-bg-main-hsl))] text-[hsl(var(--degen-text-main-hsl))] border-[hsl(var(--degen-electric-blue-hsl))]" 
                            : "bg-card text-card-foreground"
              )}
            >
              <SheetTitle className="sr-only">Main Menu</SheetTitle>
              <div className="flex justify-between items-center mb-6">
                 <Link 
                  href="/" 
                  className={cn(
                    "text-2xl font-bold",
                     isDegenMode ? "font-press-start text-[hsl(var(--degen-lime-green-hsl))]" : "text-foreground"
                    )} 
                  onClick={() => setMobileMenuOpen(false)}
                >
                    {logoText}
                  </Link>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setMobileMenuOpen(false)} 
                  aria-label="Close menu"
                  className={cn(isDegenMode ? "text-[hsl(var(--degen-electric-blue-hsl))]" : "text-card-foreground")}
                >
                  <X />
                </Button>
              </div>
              <nav className="flex flex-col space-y-3">
                {renderNavLinks(true, currentNavLinks)}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
