"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const initialState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  trade: "",
  area: "",
  team: "",
  pain: ""
};

type ContactFormProps = {
  journey?: {
    trade?: string;
    area?: string;
    team?: string;
    pain?: string;
  };
};

export function ContactForm({ journey }: ContactFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const trade = journey?.trade || "";
  const area = journey?.area || "";
  const team = journey?.team || "";
  const pain = journey?.pain || "";

  function syncField(field: keyof typeof initialState, value: string) {
    setFormData((current) => ({
      ...current,
      [field]: value,
      trade,
      area,
      team,
      pain
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const subject = encodeURIComponent(
        `Demande de demo BTP Web Solutions - ${formData.company || "Entreprise"}`
      );
      const body = encodeURIComponent(
        [
          `Nom : ${formData.name}`,
          `Entreprise : ${formData.company}`,
          `Email : ${formData.email}`,
          `Telephone : ${formData.phone}`,
          `Besoin principal : ${formData.service}`,
          `Metier : ${trade || "Non precise"}`,
          `Zone : ${area || "Non precisee"}`,
          `Taille d'equipe : ${team || "Non precisee"}`,
          `Probleme principal : ${pain || "Non precise"}`,
          "",
          "Projet :",
          formData.message
        ].join("\n")
      );

      window.location.href = `mailto:progroupement@gmail.com?subject=${subject}&body=${body}`;

      setStatus("success");
      setFeedback("Votre logiciel email s'ouvre avec votre demande pre-remplie.");
      setFormData(initialState);
      router.push("/merci");
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Impossible de preparer l'email. Utilisez le telephone ou le lien calendrier."
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="hidden" name="trade" value={trade} readOnly />
      <input type="hidden" name="area" value={area} readOnly />
      <input type="hidden" name="team" value={team} readOnly />
      <input type="hidden" name="pain" value={pain} readOnly />
      <div className="form-grid">
        <label>
          Nom et prenom
          <input
            required
            value={formData.name}
            onChange={(event) => syncField("name", event.target.value)}
            name="name"
            autoComplete="name"
          />
        </label>
        <label>
          Entreprise
          <input
            required
            value={formData.company}
            onChange={(event) => syncField("company", event.target.value)}
            name="company"
            autoComplete="organization"
          />
        </label>
        <label>
          Email
          <input
            required
            type="email"
            value={formData.email}
            onChange={(event) => syncField("email", event.target.value)}
            name="email"
            autoComplete="email"
          />
        </label>
        <label>
          Telephone
          <input
            required
            type="tel"
            value={formData.phone}
            onChange={(event) => syncField("phone", event.target.value)}
            name="phone"
            autoComplete="tel"
          />
        </label>
      </div>

      <label>
        Besoin principal
        <select
          required
          value={formData.service}
          onChange={(event) => syncField("service", event.target.value)}
          name="service"
        >
          <option value="">Selectionnez un sujet</option>
          <option value="site-artisan">Creation de site internet pour artisan</option>
          <option value="site-btp">Site internet entreprise du batiment</option>
          <option value="seo-local">Referencement SEO local</option>
          <option value="google-ads">Campagnes Google Ads</option>
          <option value="application-metier">Application metier BTP</option>
          <option value="automatisation">Automatisation administrative</option>
        </select>
      </label>

      <label>
        Votre projet
        <textarea
          required
          rows={6}
          value={formData.message}
          onChange={(event) => syncField("message", event.target.value)}
          name="message"
          placeholder="Expliquez votre activite, vos objectifs et la zone geographique a cibler."
        />
      </label>

      <button type="submit" className="button" disabled={status === "loading"}>
        {status === "loading" ? "Envoi en cours..." : "Envoyer ma demande"}
      </button>

      {feedback ? <p className={`form-feedback ${status}`}>{feedback}</p> : null}
    </form>
  );
}
