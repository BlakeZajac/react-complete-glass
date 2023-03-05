import axios from "axios";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const adminApiKey = process.env.REACT_APP_CM_ADMIN_KEY;
  // const clientId = process.env.REACT_APP_CM_CLIENT_ID;
  const listId = process.env.REACT_APP_CM_LIST_ID;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { EmailAddress: email };

    try {
      const response = await axios.post(
        `https://crossorigin.me/https://api.createsend.com/api/v3.3/subscribers/${listId}.{xml|json}`,
        data,
        {
          auth: {
            username: adminApiKey,
            password: "",
          },
        }
      );

      if (response.status === 201) {
        setSuccess(true);
        setEmail("");
      } else {
        const errorData = response.data;
        setError(errorData.Message);
      }
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again later.");
    }
  };

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

            {success && <p>Thank you for subscribing!</p>}
            {error && <p>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
