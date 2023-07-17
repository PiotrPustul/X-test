import heroBanner from "./../../../public/assets/hero.jpg";
import phoneIcon from "./../../../public/assets/telephone.png";
import flagIcon from "./../../../public/assets/flag.png";
import logo from "./../../../public/assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__bar wrapper">
        <div className="header__bar--container">
          <img
            src={phoneIcon}
            alt="phone-icon"
            className="header__bar--container__icon"
          />
          <span>1337 1337 1337</span>
        </div>
        <div className="header__bar--container">
          <img
            src={flagIcon}
            alt="flag-icon"
            className="header__bar--container__icon"
          />
          <span>Try another Castle</span>
        </div>
        <div className="header__logo">
          <img src={logo} alt="logo" className="header__logo--baner" />
        </div>
      </div>
      <div className="header__hero">
        <img
          src={heroBanner}
          alt="hero-banner"
          className="header__hero--banner"
        />
      </div>
    </header>
  );
};

export default Header;
