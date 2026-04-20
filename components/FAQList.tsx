type FAQEntry = {
  question: string;
  answer: string;
};

type FAQListProps = {
  entries: FAQEntry[];
};

export function FAQList({ entries }: FAQListProps) {
  return (
    <div className="faq-list">
      {entries.map((item) => (
        <details key={item.question} className="faq-item">
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
