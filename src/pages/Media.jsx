import { mediaItems } from "../data";
export default function Media() {
  return (
    <>
      <section className="page-hero split">
        <div>
          <p className="eyebrow">MEDIA</p>
          <h1>
            In the
            <br />
            <em>spotlight.</em>
          </h1>
        </div>
        <p>
          Every project is a labour of love. We are grateful when thoughtful
          spaces become part of a wider design conversation.
        </p>
      </section>
      <section className="media-list">
        {mediaItems.map((m, i) => (
          <a href="#" className="media-card" key={i}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <div>
              <p>
                {m[0]} · {m[2]}
              </p>
              <h2>{m[1]}</h2>
            </div>
            <b aria-hidden="true"></b>
          </a>
        ))}
      </section>
    </>
  );
}
