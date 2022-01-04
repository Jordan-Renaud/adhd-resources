import "./Article.css";

export default function Article({ title, paragraphs }) {
  return (
    <article className="Article">
      <h2>{title}</h2>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </article>
  );
}
