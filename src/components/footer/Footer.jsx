import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const apiKey =
      "pAMyMOnWi9NmNx+P3OfC4PqfAs16wkIhyFa5+y91sGSD5/MlaNlWBp2IoE9LSWFZzL7JysijwUcWbg2S4uXadPm9djJ7KJtt87uMvNgOgyayVWx5BsxrIzLwOQQYjh6WzVtfFN1aBjQ+U6HJ8CMLlw==";
    const listId = "676535965eb0653ba2b362978845003d";
    const url =
      "https://api.createsend.com/api/v3.3/subscribers/676535965eb0653ba2b362978845003d.json";
    const data = { EmailAddress: email };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa(`apikey:${apiKey}`)}`,
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, options);
    if (response.ok) {
      setEmail("");
      setStatus("success");
    } else {
      setStatus("error");
    }
  }

  const footerItems = [
    {
      heading: "Services",
      items: [
        {
          label: "24/7 Emergency Repairs",
          href: "/emergency-repairs/",
        },

        {
          label: "Commercial Glazier",
          href: "/commercial-glazier/",
        },

        {
          label: "Glass Repair",
          href: "/glass-repair",
        },
      ],
    },

    {
      heading: "About",
      items: [
        {
          label: "About",
          href: "/about/",
        },

        {
          label: "Contact",
          href: "/contact/",
        },

        {
          label: "Projects",
          href: "/projects/",
        },

        {
          label: "News",
          href: "/news/",
        },
      ],
    },

    {
      heading: "Links",
      items: [
        {
          label: "Privacy",
          href: "/privacy/",
        },

        {
          label: "Terms",
          href: "/terms/",
        },
      ],
    },
  ];
  return (
    <div className="footer section">
      <div className="footer__row row">
        <div className="footer__newsletter">
          <p className="footer__newsletter__content">Join our mailing list</p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              placeholder="Your email address"
              onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit">Subscribe</button>
          </form>

          {status === "success" && <p>Thank you for subscribing!</p>}
          {status === "error" && (
            <p>There was an error subscribing. Please try again later.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
