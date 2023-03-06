import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiOutlineArrowRight,
  AiOutlineClose,
} from "react-icons/ai";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import SyncLoader from "react-spinners/SyncLoader";
import logo from "../../assets/logos/logo-light.svg";
import "./footer.scss";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isTablet, setIsTablet] = useState(false);
  const [height, setHeight] = useState(0);
  const footerListRef = useRef(null);

  const adminApiKey = process.env.REACT_APP_CM_ADMIN_KEY;
  // const clientId = process.env.REACT_APP_CM_CLIENT_ID;
  const listId = process.env.REACT_APP_CM_LIST_ID;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

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

    setIsLoading(false);
  };

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 980);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

          <form onSubmit={handleSubmit} className="footer__newsletter__form">
            <input
              type="email"
              value={email}
              placeholder="Your email address"
              onChange={(e) => setEmail(e.target.value)}
              className="footer__newsletter__input"
            />

            <button
              type="submit"
              className="footer__newsletter__submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <SyncLoader
                  color="#09B3E8"
                  loading
                  margin={3}
                  size={6}
                  speedMultiplier={0.5}
                />
              ) : (
                <>
                  {" "}
                  Subscribe <AiOutlineArrowRight />
                </>
              )}
            </button>
          </form>

          <div className="footer__newsletter__form__message">
            {success && (
              <p className="footer__newsletter__form__message__success">
                <AiFillCheckCircle /> Thank you for subscribing!
                <span
                  className="footer__newsletter__form__message__close"
                  onClick={() => setSuccess(false)}
                >
                  <AiOutlineClose />
                </span>
              </p>
            )}

            {error && (
              <p className="footer__newsletter__form__message__error">
                <AiFillCloseCircle /> {error}
                <span
                  className="footer__newsletter__form__message__close"
                  onClick={() => setError(false)}
                >
                  <AiOutlineClose />
                </span>
              </p>
            )}
          </div>
        </div>

        <div className="footer__items">
          <div className="footer__items__col footer__items__col--details">
            <div className="footer__items__logo">
              <img src={logo} alt="" />
            </div>

            <ul className="footer__items__list">
              <li>
                <a href="tel:1300147247" className="footer__items__list__item">
                  1300 147 247
                </a>
              </li>

              <li>
                <p className="footer__items__list__item">
                  PO Box 960
                  <br />
                  Pennant Hills NSW 1715
                </p>
              </li>
            </ul>

            <div className="footer__items__social">
              <a
                href="https://www.facebook.com/completeglass1"
                target="_blank"
                className="footer__items__social__item footer__items__social__item--facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/completeglassprojects/"
                target="_blank"
                className="footer__items__social__item footer__items__social__item--instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {isTablet ? (
            footerItems.map((item, index) => (
              <div
                key={index}
                className={`footer__items__col ${
                  index === activeIndex ? "footer__items__col--active" : ""
                } `}
              >
                <h4
                  className="footer__items__heading"
                  onClick={() => handleAccordionClick(index)}
                >
                  {item.heading}
                </h4>
                <ul className="footer__items__list">
                  {item.items.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a
                        href={subItem.href}
                        className="footer__items__list__item"
                      >
                        {subItem.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <div className="footer__items__col-wrapper">
              {footerItems.map((item, index) => (
                <div key={index} className="footer__items__col">
                  <h4 className="footer__items__heading">{item.heading}</h4>
                  <ul className="footer__items__list">
                    {item.items.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href={subItem.href}
                          className="footer__items__list__item"
                        >
                          {subItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="footer__socket">
          <p className="footer__socket__content">
            © {new Date().getFullYear()} Complete Glass
          </p>
          <p className="footer__socket__content">
            Website by{" "}
            <a href="https://blakezajac.com" target="_blank">
              Blake Zajac
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
