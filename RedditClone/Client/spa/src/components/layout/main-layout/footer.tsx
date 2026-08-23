import "../../../styles/layout/main-layout/footer.css"
import Button from "../../core/button";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__copyright">
          <p>
            Zion, Inc. © 2026. All rights reserved.
          </p>
        </div>
        <div className="footer__nav">
          <p>Short Cut links: </p>
          <nav className="footer__nav__list">
            <ul className="footer__nav__list__items">
              <li className="footer__nav__list__items__item"><Button>Home</Button></li>
              <li className="footer__nav__list__items__item"><Button>Blog</Button></li>
              <li className="footer__nav__list__items__item"><Button>About</Button></li>
              <li className="footer__nav__list__items__item"><Button>Contact</Button></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
