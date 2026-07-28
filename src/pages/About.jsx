export default function About() {
  const ethos = [
    [
      "01",
      "Radical Trust",
      "Open communication and honest collaboration sit at the centre of every relationship.",
    ],
    [
      "02",
      "Impeccable Standards",
      "We care deeply about craft, proportion, materiality and the quiet details that make a room complete.",
    ],
    [
      "03",
      "Commitment to Time",
      "Clear milestones and thoughtful coordination keep design and execution moving with purpose.",
    ],
    [
      "04",
      "Think Big",
      "We look beyond surfaces to shape meaningful environments that improve everyday life.",
    ],
    [
      "05",
      "Make It Count",
      "Every contributor brings a distinct point of view, making the work richer and more human.",
    ],
  ];
  return (
    <>
      <section className="page-hero split">
        <div>
          <p className="eyebrow">ABOUT US</p>
          <h1>
            We design.
            <br />
            <em>You dwell.</em>
          </h1>
        </div>
        <p>
          The way we feel and experience spaces transcends four walls. Our
          studio creates deeply personal environments through intuition,
          collaboration and refined craft.
        </p>
      </section>
      <section className="about-image">
        <img
          src="https://images.unsplash.com/photo-1600607688960-e095ff83135c?auto=format&fit=crop&w=2200&q=90"
          alt="Design studio interior"
        />
      </section>
      <section className="founder">
        <div>
          <p className="eyebrow">FROM THE FOUNDER'S DESK</p>
          <h2>
            Unique spaces
            <br />
            and all heart.
          </h2>
        </div>
        <div>
          <p>
            We believe the most memorable interiors are not built around trends,
            but around the lives unfolding inside them.
          </p>
          <p>
            Our role is to listen closely, edit carefully and create rooms that
            feel grounded, expressive and unmistakably yours.
          </p>
          <strong>Founders : Suraj Diwate, Kavya Sreenivas</strong>
        </div>
        <div className="founder-portraits">
          <div
            className="founder-portrait"
            role="img"
            aria-label="Placeholder for the first founder portrait"
          >
            <span>Founder portrait 01 · 1080 × 1400</span>
          </div>
          <div
            className="founder-portrait"
            role="img"
            aria-label="Placeholder for the second founder portrait"
          >
            <span>Founder portrait 02 · 1080 × 1400</span>
          </div>
        </div>
      </section>
      <section className="ethos">
        <p className="eyebrow">WHAT WE STAND FOR</p>
        <h2>Our Ethos</h2>
        {ethos.map((e) => (
          <div className="ethos-row" key={e[0]}>
            <span>{e[0]}</span>
            <h3>{e[1]}</h3>
            <p>{e[2]}</p>
          </div>
        ))}
      </section>
      <section className="stats">
        <div>
          <strong>70+</strong>
          <p>Projects delivered</p>
        </div>
        <div>
          <strong>8+</strong>
          <p>Years of expertise</p>
        </div>
        <div>
          <strong>60+</strong>
          <p>Happy clients</p>
        </div>
      </section>
    </>
  );
}
