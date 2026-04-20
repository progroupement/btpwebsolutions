import Link from "next/link";
import { siteConfig } from "@/lib/content";

type CTAButtonsProps = {
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CTAButtons({
  primaryHref = "/diagnostic",
  primaryLabel = "Je veux plus de clients",
  secondaryHref = siteConfig.calendarUrl,
  secondaryLabel = "Voir une demo gratuite"
}: CTAButtonsProps) {
  return (
    <div className="cta-row">
      <Link href={primaryHref} className="button">
        {primaryLabel}
      </Link>
      <a href={secondaryHref} className="button button-secondary">
        {secondaryLabel}
      </a>
    </div>
  );
}
