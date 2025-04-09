
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, User } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  // Toggle login status (for demonstration)
  const toggleLogin = () => {
    setIsUserLoggedIn(!isUserLoggedIn);
  };
  
  // Navigation links
  const navLinks = [
    { href: '/', label: t('navbar.home') },
    { href: '/entreprises', label: t('navbar.companies') },
    { href: '/apprenants', label: t('navbar.learners') },
    { href: '/webinaires', label: t('navbar.webinars') },
    { href: '/stagiaires', label: t('navbar.interns') },
    { href: '/a-propos', label: t('navbar.about') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-talentup-blue400 to-talentup-green text-transparent bg-clip-text">
              TalentUp
            </span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-talentup-blue400 ${
                location.pathname === link.href ? 'text-talentup-blue400' : 'text-foreground/80'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side - Auth buttons and language switcher */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher />

          {isUserLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/profil">{t('navbar.profile')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/parametres">{t('navbar.settings')}</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={toggleLogin}>
                  {t('navbar.logout')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={toggleLogin}
              >
                {t('navbar.login')}
              </Button>
              <Button 
                className="btn-gradient"
                size="sm"
              >
                {t('navbar.signup')}
              </Button>
            </div>
          )}

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 h-full">
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">TalentUp</span>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                </div>
                
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={`text-sm font-medium transition-colors hover:text-talentup-blue400 ${
                        location.pathname === link.href ? 'text-talentup-blue400' : 'text-foreground/80'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto flex flex-col gap-2">
                  {!isUserLoggedIn ? (
                    <>
                      <Button 
                        variant="outline" 
                        onClick={toggleLogin}
                        className="w-full"
                      >
                        {t('navbar.login')}
                      </Button>
                      <Button className="w-full btn-gradient">
                        {t('navbar.signup')}
                      </Button>
                    </>
                  ) : (
                    <Button 
                      variant="outline" 
                      onClick={toggleLogin}
                      className="w-full"
                    >
                      {t('navbar.logout')}
                    </Button>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
