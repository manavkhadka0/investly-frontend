'use client';

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Menu, Bell, MessageCircle, User } from 'lucide-react';
import { Sheet, SheetTitle, SheetHeader, SheetContent } from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export function InvestorNavbar() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navLinks = [
    {
      name: 'How It Works',
      children: [
        { name: 'For Investors', href: '/for-investor' },
        { name: 'For Startups', href: '/for-startup' },
        { name: 'How The Platform Works', href: '/how-the-platform-works' },
        { name: 'Investor Matching Program', href: '/investor-matching-program' },
      ],
    },
    {
      name: 'Find Investor',
      href: '/investors/find-investor',
    },
    {
      name: 'Articles',
      children: [
        { name: 'Academy', href: '/academy' },
        { name: 'News/Updates & Events', href: '/events' },
        { name: 'Blog', href: '/blog' },
      ],
    },
    { name: 'Startup Directory', href: '/startup-directory' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-primary flex items-center">
          <Image src="/logo.png" alt="Investify Logo" width={100} height={100} />
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-md mx-4 rounded-lg">
          <Input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((section) => (
                <NavigationMenuItem key={section.name}>
                  {section.children ? (
                    <>
                      <NavigationMenuTrigger>{section.name}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                          {section.children.map((item) => (
                            <li key={item.name}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={item.href}
                                  className={cn(
                                    'block px-4 py-2 text-sm',
                                    pathname === item.href ? 'bg-gray-200' : 'hover:bg-gray-100'
                                  )}
                                >
                                  {item.name}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        href={section.href}
                        className={cn(
                          'px-4 py-2 text-sm font-medium rounded-md transition-colors hover:text-primary',
                          pathname === section.href ? ' text-primary' : 'hover:bg-accent'
                        )}
                      >
                        {section.name}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Icons Section */}
          <div className="flex items-center space-x-4">
            {/* Message Icon */}
            <Button variant="ghost" size="icon">
              <MessageCircle className="h-7 w-7 text-gray-600 hover:text-primary" />
            </Button>

            {/* Notification Icon */}
            <Button variant="ghost" size="icon">
              <Bell className="h-7 w-7 text-gray-600 hover:text-primary" />
            </Button>

            {/* Profile Dropdown */}
            <div className="relative">
              <Button variant="ghost" size="icon" onClick={() => setIsProfileOpen(!isProfileOpen)}>
                <User className="h-7 w-7 text-gray-600 hover:text-primary" />
              </Button>
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md z-10">
                  <Link
                    href="/investors/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md"
                  >
                    My Profile
                  </Link>
                  <Link
                    href="/settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md"
                  >
                    Settings
                  </Link>
                  <Link
                    href="/"
                    className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-200 rounded-md"
                  >
                    Log Out
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsSheetOpen(true)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Sidebar Menu */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <ul className="flex flex-col space-y-2">
              {navLinks.map((section) => (
                <li key={section.name} className="text-gray-700">
                  {section.children ? (
                    <div>
                      <span>{section.name}</span>
                      <ul className="ml-4">
                        {section.children.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className={cn(
                                'block px-4 py-2',
                                pathname === item.href ? 'bg-gray-200' : 'hover:bg-gray-100'
                              )}
                              onClick={() => setIsSheetOpen(false)}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      href={section.href}
                      className={cn(
                        'block px-4 py-2',
                        pathname === section.href ? 'bg-gray-200' : 'hover:bg-gray-100'
                      )}
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {section.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
