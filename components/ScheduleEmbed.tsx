import { siteConfig } from "@/lib/content";

function getEmbeddedCalendarUrl(url: string) {
  try {
    const parsed = new URL(url);
    parsed.searchParams.set("embed", "1");
    return parsed.toString();
  } catch {
    return url;
  }
}

export function ScheduleEmbed() {
  const embedUrl = getEmbeddedCalendarUrl(siteConfig.calendarUrl);

  return (
    <section className="schedule-embed" aria-labelledby="schedule-title">
      <div className="schedule-copy">
        <p className="eyebrow">Calendrier integre</p>
        <h2 id="schedule-title">Choisissez directement votre creneau de demo</h2>
        <p>
          Le rendez-vous dure 30 minutes. Vous repartez avec une vision claire des priorites SEO,
          conversion et digitalisation a mettre en place pour votre entreprise du batiment.
        </p>
        <ul className="check-list">
          <li>Reservation immediate sans echange supplementaire</li>
          <li>Confirmation et rappel avant le rendez-vous</li>
          <li>Annulation possible jusqu'a 2 heures avant</li>
        </ul>
      </div>

      <div className="schedule-frame-wrap">
        <iframe
          src={embedUrl}
          title="Calendrier de reservation de demo"
          className="schedule-frame"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </section>
  );
}
