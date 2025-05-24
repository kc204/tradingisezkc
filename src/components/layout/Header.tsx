
'use client';

import Link from 'next/link';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

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
  { href: '/contact', label: 'Contact Us' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);


  const ThemeToggle = () => {
    if (!mounted) {
      return <Button variant="ghost" size="icon" className="w-9 h-9" disabled><Sun className="h-[1.2rem] w-[1.2rem]" /></Button>;
    }
    return (
      <Button
        variant="ghost"
        size="icon"
        className="text-header-foreground hover:bg-primary/80 hover:text-header-foreground w-9 h-9"
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


  const renderNavLinks = (isMobile: boolean) =>
    navLinks.map((link) =>
      link.dropdown ? (
        <DropdownMenu key={link.label}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className={`text-header-foreground hover:bg-primary/80 hover:text-header-foreground ${isMobile ? 'w-full justify-start text-foreground hover:text-foreground' : ''}`}>
              {link.label}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-card text-card-foreground">
            {link.dropdown.map((item) => (
              <DropdownMenuItem key={item.label} asChild className="hover:bg-accent hover:text-accent-foreground">
                <Link href={item.href} onClick={() => isMobile && setMobileMenuOpen(false)}>{item.label}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button key={link.label} variant="ghost" asChild className={`text-header-foreground hover:bg-primary/80 hover:text-header-foreground ${isMobile ? 'w-full justify-start text-foreground hover:text-foreground' : ''}`}>
          <Link href={link.href} onClick={() => isMobile && setMobileMenuOpen(false)}>{link.label}</Link>
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
              <Button variant="ghost" size="icon" className="ml-2 text-header-foreground hover:bg-primary/80 hover:text-header-foreground">
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
