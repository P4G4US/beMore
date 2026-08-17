import { useRef, useState } from "react";
import surajImage from "../../asset/suraj.png";

export default function About() {
  const [activeTab, setActiveTab] = useState("address");
  const [showReviewsBack, setShowReviewsBack] = useState(false);
  const reviewsGridRef = useRef(null);

  const scrollReviews = () => {
    const grid = reviewsGridRef.current;

    if (grid) {
      grid.scrollBy({ left: grid.clientWidth * 0.8, behavior: "smooth" });
      setShowReviewsBack(true);
    }
  };

  const scrollReviewsToStart = () => {
    const grid = reviewsGridRef.current;

    if (grid) {
      grid.scrollTo({ left: 0, behavior: "smooth" });
      setShowReviewsBack(false);
    }
  };

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
        'Exceptional Interior Execution And designs for Our Dream Home! 🌟\n\nThe most critical part of the journey was the execution, and the team at Bemore design earned my absolute trust.\n\nComing in with past experiences from colleagues with other interior firms, I was prepared for delays in the carpentry work. Instead, Suraj and Kavya demonstrated flawless professionalism, performing "magic" to conclude the entire execution phase on time and with uncompromising quality. They made the impossible happen.\n\nKavya, deserves high praise for his meticulous supervision of both the creative design and the production process.\n\nI was especially impressed by the final Quality Control prior to handover. Suraj provided comments on usability and ergonomics that were insightful and are actively enhancing our living experience now.\n\nHowever, the brilliant finish delivered by the team Kavya and Suraj.',
      name: "Vijaykumar ",
      project: "7 months ago",
    },
    {
      quote:
        "Outstanding Work by beMore Design Studio – Highly Recommended!\n\nWe hired beMore Design Studio for our 3BHK apartment interior project, and they delivered an exceptional home transformation over three months.\n\nThe quality of work was truly outstanding – every element was executed with precision using premium materials and impeccable finishing touches.\n\nSpecial mention to Suraj and Kavya, who are incredibly talented and dedicated; their creativity, passion, and meticulous attention to detail made the entire process seamless and truly inspiring.\n\nTheir team of carpenters was wonderful – highly skilled, professional, and meticulous in every aspect of the craftsmanship.\n\nThe selection of designs was fantastic – modern, elegant, and perfectly customized to match our vision and lifestyle.\n\nWe are absolutely thrilled with the stunning results and would wholeheartedly recommend beMore Design Studio to anyone looking for top-notch interior design!\n\n5 stars – thank you for an amazing job!\n\n-Narayan",
      name: "Narayan Vaster",
      project: "7 months ago",
    },
    {
      quote:
        "Amazing work! Professional team, great communication, and stunning designs. They understood our vision and delivered on time. Highly recommended for quality interiors. 😊 ...",
      name: "Rahul Naidu",
      project: "6 months ago",
    },
    {
      quote:
        "Walking into my cousin’s home in Anandnagar, Rajananda, designed by BeMore Interiors by Kavya, feels like stepping into a living piece of art. The house is a seamless blend of stone textures and modern elegance, where tradition meets contemporary design in the most graceful way.\n\nThe triplex layout is breathtaking, with each level flowing naturally into the next, creating both intimacy and openness. What truly sets this home apart are the water bodies open to the sky, designed to welcome rainwater and weave nature into everyday living. It’s not just architecture—it’s poetry in stone, light, and water.\n\nEvery corner reflects Kavya’s thoughtful vision: spaces that are functional yet soulful, luxurious yet rooted in simplicity. The interiors don’t just impress; they invite you to feel, to pause, and to belong.\n\nBeMore has proven that great design is not about excess, but about harmony. Kavya’s work here is a testament to how interiors can elevate life itself.",
      name: "Sandeep Srinivas",
      project: "7 months ago",
    },
    {
      quote:
        "We had our 3BHK handed over by Suraj and the team at beMore Design Studio, and we couldn't be happier with the results! From the very beginning, Suraj was incredibly professional, attentive, and receptive to our ideas.\n\nThe scope of work was extensive, but the team executed everything flawlessly:\n\nCarpentry & Woodwork: The quality of the carpentry is exceptional. The modular kitchen, wardrobes, and custom storage units are not only beautiful but also highly functional with flawless finishes.\n\nBathroom Fittings & Plumbing: The bathroom transformations were smooth and hassle-free. All the fittings were installed precisely, ensuring both aesthetic appeal and great functionality.\n\nAttention to Detail: What impressed us most was Suraj's eye for detail and commitment to delivering quality work without cutting corners.\n\nPrice assessment\nReasonable price\n\nServices\nSite master planning, 3D architectural renderings",
      name: "Prashanth Ba",
      project: "a month ago",
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

        <div className="reviews-carousel">
          <button
            type="button"
            className={`reviews-back${showReviewsBack ? " is-visible" : ""}`}
            onClick={scrollReviewsToStart}
            aria-label="Return to the first client review"
            aria-hidden={!showReviewsBack}
            tabIndex={showReviewsBack ? 0 : -1}
          >
            <span aria-hidden="true">←</span>
          </button>
          <div className="reviews-grid" ref={reviewsGridRef}>
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
          <button
            type="button"
            className="reviews-more"
            onClick={scrollReviews}
            aria-label="Scroll to more client reviews"
          >
            <span aria-hidden="true">→</span>
          </button>
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
                  <strong>Email:</strong> info@bemorestudio.com
                </p>
                <p>
                  <strong>Phone:</strong> +91 96634 24256, +91 99454 76358
                </p>
                <a
                  className="address-instagram"
                  href="https://www.instagram.com/bemoredesignstudio/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit beMore Design Studio on Instagram"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      className="instagram-dot"
                      cx="17.5"
                      cy="6.5"
                      r="1"
                    />
                  </svg>
                  <span>@bemoredesignstudio</span>
                </a>
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
