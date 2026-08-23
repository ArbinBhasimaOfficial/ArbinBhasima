import "../../../styles/layout/main-layout/header.css"

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src="/" alt="logo" />
        </div>
        <div className="header__search">
          Search Button
        </div>
        <div className="header__user">
          login/signup
        </div>
      </div>
    </header>
  );
};
