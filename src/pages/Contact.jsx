import { useState } from "react";
export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="page-hero split">
        <div>
          <p className="eyebrow">CONTACT US</p>
          <h1>
            We’re all
            <br />
            <em>ears.</em>
          </h1>
        </div>
        <div>
          <p>
            Have a project in mind? Tell us a little about it and our studio
            will get back to you.
          </p>
          <p>
            <strong>General:</strong> bemorearchitects@gmail.com
          </p>
        </div>
      </section>
      <section className="contact-section">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          {[
            ["Name", "text"],
            ["Email address", "email"],
            ["Contact number", "tel"],
            ["Location", "text"],
            ["Budget", "text"],
          ].map(([x, t]) => (
            <label key={x}>
              {x}
              <input
                required={x === "Name" || x === "Email address"}
                type={t}
              />
            </label>
          ))}
          <label className="full-field">
            Project category
            <select>
              <option>Residential remodel</option>
              <option>Residential new build</option>
              <option>Commercial</option>
              <option>Other</option>
            </select>
          </label>
          <label className="full-field">
            Tell us about your project
            <textarea rows="6" />
          </label>
          <button type="submit">Send enquiry</button>
          {sent && (
            <p className="form-success">
              Thank you. Your enquiry has been captured in this demo.
            </p>
          )}
        </form>
      </section>
    </>
  );
}
