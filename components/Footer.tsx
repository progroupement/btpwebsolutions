import Link from "next/link";
import { navItems, siteConfig } from "@/lib/content";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="eyebrow">Agence web spécialisée BTP</p>
          <h2>BTP Web Solutions</h2>
          <p>
            Nous aidons les artisans et les entreprises du bâtiment à gagner en visibilité, en
            demandes de devis et en efficacité interne grâce au digital.
          </p>
        </div>

        <div>
          <h3>Navigation</h3>
          <ul className="footer-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul className="footer-list">
            <li>
              <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li>{siteConfig.zone}</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 BTP Web Solutions. Site conçu pour performer en SEO et en conversion.</p>
      </div>
    </footer>
  );
}
