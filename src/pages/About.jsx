import { useState } from "react";
import surajImage from "../../asset/suraj.png";

export default function About() {
  const [activeTab, setActiveTab] = useState("address");

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

  const reviews = [
    {
      quote:
        "beMore understood how we wanted our home to feel, even before we had the words for it. Every room is thoughtful, warm and completely ours.",
      name: "Ananya & Rohan",
      project: "Residential Project · Bengaluru",
    },
    {
      quote:
        "The team brought clarity to every decision and made the entire process feel considered. The result is elegant, effortless and beautifully detailed.",
      name: "Meera S.",
      project: "Apartment Interior · Bengaluru",
    },
    {
      quote:
        "They balanced function and character perfectly. We now have a space that works for everyday life and still feels genuinely special.",
      name: "Karthik & Nisha",
      project: "Family Home · Mysuru",
    },
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
        </div>
        <div className="founder-portraits">
          <img
            src={surajImage}
            alt="Founder Suraj"
            className="founder-portrait"
          />
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
      <section className="reviews-section" aria-labelledby="reviews-title">
        <div className="reviews-heading">
          <div>
            <p className="eyebrow">KIND WORDS</p>
            <h2 id="reviews-title">
              What our clients
              <br />
              <em>say about us.</em>
            </h2>
          </div>
          <p>
            Spaces become meaningful through the people who live in them. Here
            are a few notes from clients we have had the pleasure of designing
            for.
          </p>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <article className="review-card" key={review.name}>
              <div className="review-card-top">
                <span className="review-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="review-mark" aria-hidden="true">
                  “
                </span>
              </div>
              <blockquote>{review.quote}</blockquote>
              <footer>
                <strong>{review.name}</strong>
                <span>{review.project}</span>
              </footer>
            </article>
          ))}
        </div>
      </section>
      <section className="address-section">
        <div className="address-header">
          <p className="eyebrow">GET IN TOUCH</p>
          <h2>Visit Us</h2>
        </div>
        <div className="address-container">
          <div className="address-tabs">
            <button
              className={`address-tab ${activeTab === "address" ? "active" : ""}`}
              onClick={() => setActiveTab("address")}
            >
              Address
            </button>
          </div>
          {activeTab === "address" && (
            <div className="address-content">
              <div className="address-info">
                <h3>beMore Design Studio</h3>
                <p>Bengaluru, India</p>
                <p>
                  <strong>Email:</strong> bemorearchitects@gmail.com
                </p>
                <p>
                  <strong>Phone:</strong> +91 96634 24256, +91 99454 76358
                </p>
              </div>
              <div className="address-map">
                <iframe
                  width="100%"
                  height="400"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.87954387819!2d77.61245!3d12.9167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17e0e0e0e0e1%3A0x0!2sbeMore%20Design%20Studio!5e0!3m2!1sen!2sin!4v1722333600000"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="beMore Design Studio Location"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
