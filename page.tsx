"use client";

import { useState } from "react";

const finds = [
  {
    type: "Seating",
    title: "Moss green lounge chair",
    location: "Takoma Park · 3.2 mi",
    bid: "$86",
    time: "2h 14m",
    accent: "chair",
  },
  {
    type: "Tables",
    title: "Solid oak pedestal table",
    location: "Capitol Hill · 5.8 mi",
    bid: "$145",
    time: "5h 42m",
    accent: "table",
  },
  {
    type: "Lighting",
    title: "Pleated ceramic lamp",
    location: "Alexandria · 8.1 mi",
    bid: "$48",
    time: "1d 3h",
    accent: "lamp",
  },
];

const faqs = [
  {
    q: "When do auctions go live?",
    a: "We’re opening neighborhood by neighborhood. Join the list and we’ll send you an invite as soon as Nook reaches your area.",
  },
  {
    q: "How does pickup work?",
    a: "Winning bidders arrange a convenient handoff with the seller. Every listing includes the pickup neighborhood and item dimensions before you bid.",
  },
  {
    q: "What can I sell?",
    a: "Well-made furniture, lighting, decor, and outdoor pieces with plenty of life left. We’ll guide you through photos, pricing, and the story behind the piece.",
  },
  {
    q: "Is it free to join?",
    a: "Yes. Creating an account, browsing, saving finds, and placing bids are all free. A small buyer fee is shown clearly before every bid.",
  },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);
  const [saved, setSaved] = useState<number[]>([]);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  function join(event: React.FormEvent) {
    event.preventDefault();
    if (email.trim()) setJoined(true);
  }

  function toggleSave(index: number) {
    setSaved((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index],
    );
  }

  return (
    <main id="home">
      <header className="nav-shell">
        <a className="wordmark" href="#home" aria-label="Nook home">
          nook<span>·</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#browse">Browse</a>
          <a href="#how">How it works</a>
          <a href="#stories">Stories</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="nav-actions">
          <button className="text-button" onClick={() => setJoined(false)}>
            Log in
          </button>
          <a className="button dark small" href="#join">
            Join Nook ↗
          </a>
        </div>
      </header>

      <div className="announcement">
        <span>✦</span> Nook Auctions is coming soon. The first neighborhood
        drops are almost here.
      </div>

      <section className="hero">
        <p className="eyebrow">Furniture deserves another story</p>
        <h1>
          Great furniture
          <br />
          is <em>coming soon.</em>
        </h1>
        <p className="hero-copy">
          A better way to discover, bid on, and rehome furniture nearby—with
          character already built in.
        </p>
        <a className="button coral" href="#join">
          Join Nook →
        </a>
        <p className="microcopy">✦ Free to join. Local by design.</p>
      </section>

      <div className="category-row" aria-label="Furniture categories">
        {[
          ["⌁", "Seating"],
          ["□", "Tables"],
          ["▤", "Storage"],
          ["◔", "Lighting"],
          ["✦", "Decor"],
          ["⌇", "Outdoor"],
        ].map(([icon, label]) => (
          <a href="#browse" key={label}>
            <span>{icon}</span>
            {label}
          </a>
        ))}
      </div>

      <section className="auction-preview" id="browse">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow coral-text">A peek at what’s coming</p>
            <h2>
              Future favorites,
              <br />
              <em>already found.</em>
            </h2>
          </div>
          <p>
            Preview the kinds of one-off pieces you’ll find on Nook. Every item
            is local, useful, and ready for its next good home.
          </p>
        </div>

        <div className="find-grid">
          {finds.map((find, index) => (
            <article className="find-card" key={find.title}>
              <div className={`furniture-art ${find.accent}`}>
                <span className="lot-tag">Preview lot 0{index + 1}</span>
                <button
                  className={`save-button ${saved.includes(index) ? "saved" : ""}`}
                  onClick={() => toggleSave(index)}
                  aria-label={`${saved.includes(index) ? "Remove" : "Save"} ${find.title}`}
                  aria-pressed={saved.includes(index)}
                >
                  {saved.includes(index) ? "♥" : "♡"}
                </button>
                <div className="furniture-shape" aria-hidden="true" />
              </div>
              <div className="find-info">
                <div>
                  <p className="find-type">{find.type}</p>
                  <h3>{find.title}</h3>
                  <p className="location">{find.location}</p>
                </div>
                <div className="bid-info">
                  <span>Current bid</span>
                  <strong>{find.bid}</strong>
                  <small>{find.time} left</small>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="preview-note">
          Preview listings shown for illustration. The real finds land soon.
        </p>
      </section>

      <section className="how" id="how">
        <div className="section-heading">
          <p className="eyebrow lime-text">Simple by design</p>
          <h2>
            Less scrolling. More
            <br />
            <em>“where did you find that?”</em>
          </h2>
          <p className="lede">
            Nook keeps the whole handoff personal, local, and refreshingly
            straightforward.
          </p>
        </div>
        <div className="steps">
          {[
            [
              "01",
              "⌕",
              "Find the good ones",
              "Browse local pieces with history, personality, and plenty of life left.",
            ],
            [
              "02",
              "♧",
              "Bid without the guesswork",
              "See condition notes, dimensions, pickup details, and every bid in one place.",
            ],
            [
              "03",
              "⌂",
              "Bring it home",
              "Choose a pickup time, meet nearby, and start the piece’s next chapter.",
            ],
          ].map(([number, icon, title, copy]) => (
            <article key={number}>
              <span className="step-number">{number}</span>
              <span className="step-icon">{icon}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <div className="trust-strip">
          <div>
            <strong>Nearby first</strong>
            <span>Neighborhood finds, not warehouse inventory</span>
          </div>
          <div>
            <strong>Clear condition</strong>
            <span>Real photos and honest details before you bid</span>
          </div>
          <div>
            <strong>Human handoffs</strong>
            <span>Simple pickup plans between real people</span>
          </div>
        </div>
      </section>

      <section className="story" id="stories">
        <div className="story-art">
          <div className="sun" />
          <div className="sideboard">
            <span />
            <span />
            <span />
          </div>
          <div className="vase">✦</div>
        </div>
        <div className="story-copy">
          <p className="eyebrow">The story stays with it</p>
          <blockquote>
            “The cabinet was my grandmother’s. Now it holds records in a first
            apartment six blocks away.”
          </blockquote>
          <p>
            The best furniture doesn’t need to be new. It just needs someone
            who sees what it could become.
          </p>
          <span className="story-credit">A future Nook kind of story</span>
        </div>
      </section>

      <section className="faq" id="faq">
        <div>
          <p className="eyebrow coral-text">Good to know</p>
          <h2>
            A few answers
            <br />
            <em>before we open.</em>
          </h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <article key={faq.q}>
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <b>{isOpen ? "−" : "+"}</b>
                </button>
                {isOpen && <p>{faq.a}</p>}
              </article>
            );
          })}
        </div>
      </section>

      <section className="join" id="join">
        <p className="eyebrow">Your next favorite piece is nearby</p>
        <h2>
          Be first through
          <br />
          <em>the door.</em>
        </h2>
        <p>
          Get an invite when Nook opens in your neighborhood, plus a first look
          at the inaugural auction drop.
        </p>
        {joined ? (
          <div className="success" role="status">
            <span>✦</span>
            <div>
              <strong>You’re on the list.</strong>
              <p>We’ll save you a spot by the good furniture.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={join}>
            <label className="sr-only" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              required
            />
            <button className="button dark" type="submit">
              Join Nook →
            </button>
          </form>
        )}
        <p className="privacy">No spam. Just good finds and opening news.</p>
      </section>

      <footer>
        <a className="wordmark" href="#home">
          nook<span>·</span>
        </a>
        <p>Furniture finds, rehomed.</p>
        <div>
          <a href="#browse">Browse</a>
          <a href="#how">How it works</a>
          <a href="#faq">FAQ</a>
          <span>© 2026 Nook. Made for good homes.</span>
        </div>
      </footer>
    </main>
  );
}
