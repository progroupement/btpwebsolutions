"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { funnelPainPoints, teamSizes, tradeOptions } from "@/lib/content";

const initialState = {
  trade: "",
  area: "",
  teamSize: "",
  pain: ""
};

export function QualificationForm() {
  const router = useRouter();
  const [formData, setFormData] = useState(initialState);

  const completion = useMemo(() => {
    const total = Object.values(formData).filter(Boolean).length;
    return Math.max(25, Math.round((total / 4) * 100));
  }, [formData]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const params = new URLSearchParams({
      trade: formData.trade,
      area: formData.area,
      team: formData.teamSize,
      pain: formData.pain
    });

    router.push(`/offre?${params.toString()}`);
  }

  return (
    <form className="qualification-card" onSubmit={handleSubmit}>
      <div className="progress-head">
        <div>
          <p className="eyebrow">Etape 1 sur 3</p>
          <h2>Recevez une offre plus pertinente pour votre metier</h2>
        </div>
        <div className="progress-box" aria-label={`Progression ${completion}%`}>
          <span style={{ width: `${completion}%` }} />
        </div>
      </div>

      <div className="form-grid">
        <label>
          Votre metier
          <select
            required
            value={formData.trade}
            onChange={(event) => setFormData({ ...formData, trade: event.target.value })}
          >
            <option value="">Selectionnez votre metier</option>
            {tradeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          Votre zone
          <input
            required
            value={formData.area}
            onChange={(event) => setFormData({ ...formData, area: event.target.value })}
            placeholder="Ville ou departement"
          />
        </label>

        <label>
          Taille de l'equipe
          <select
            required
            value={formData.teamSize}
            onChange={(event) => setFormData({ ...formData, teamSize: event.target.value })}
          >
            <option value="">Selectionnez votre structure</option>
            {teamSizes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          Probleme principal
          <select
            required
            value={formData.pain}
            onChange={(event) => setFormData({ ...formData, pain: event.target.value })}
          >
            <option value="">Choisissez la priorite</option>
            {funnelPainPoints.map((pain) => (
              <option key={pain} value={pain}>
                {pain}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="qualification-footer">
        <p className="microcopy">
          2 minutes suffisent. Pas d'appel commercial impose. Vous obtenez d'abord une offre
          adaptee a votre situation.
        </p>
        <button type="submit" className="button">
          Voir mon offre personnalisee
        </button>
      </div>
    </form>
  );
}
