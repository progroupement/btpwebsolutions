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
          <p className="eyebrow">Étape 1 sur 3</p>
          <h2>Recevez une recommandation plus pertinente pour votre activité</h2>
        </div>
        <div className="progress-box" aria-label={`Progression ${completion}%`}>
          <span style={{ width: `${completion}%` }} />
        </div>
      </div>

      <div className="form-grid">
        <label>
          Votre métier
          <select
            required
            value={formData.trade}
            onChange={(event) => setFormData({ ...formData, trade: event.target.value })}
          >
            <option value="">Sélectionnez votre métier</option>
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
            placeholder="Ville ou département"
          />
        </label>

        <label>
          Taille de l'équipe
          <select
            required
            value={formData.teamSize}
            onChange={(event) => setFormData({ ...formData, teamSize: event.target.value })}
          >
            <option value="">Sélectionnez votre structure</option>
            {teamSizes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          Problème principal
          <select
            required
            value={formData.pain}
            onChange={(event) => setFormData({ ...formData, pain: event.target.value })}
          >
            <option value="">Choisissez la priorité</option>
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
          2 minutes suffisent. Pas d'appel commercial imposé. Vous obtenez d'abord une
          recommandation adaptée à votre situation.
        </p>
        <button type="submit" className="button">
          Voir ma recommandation
        </button>
      </div>
    </form>
  );
}
