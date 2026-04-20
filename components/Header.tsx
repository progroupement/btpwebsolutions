"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navItems, siteConfig } from "@/lib/content";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container navbar">
        <Link href="/" className="brand" aria-label="Accueil BTP Web Solutions">
          <span className="brand-logo">
            <Image
              src="/logo-btp-web-solutions.png"
              alt="Logo BTP Web Solutions"
              width={150}
              height={48}
              priority
            />
          </span>
          <span>
            <strong>BTP Web Solutions</strong>
            <small>Marketing et applications pour le BTP</small>
          </span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={isOpen}
          aria-label="Ouvrir le menu"
          onClick={() => setIsOpen((value) => !value)}
        >
          Menu
        </button>

        <nav className={`nav-links ${isOpen ? "open" : ""}`} aria-label="Navigation principale">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          ))}
          <a href={siteConfig.phoneHref} className="nav-cta secondary">
            {siteConfig.phone}
          </a>
          <Link href="/diagnostic" className="nav-cta">
            Je veux plus de clients
          </Link>
        </nav>
      </div>
    </header>
  );
}
