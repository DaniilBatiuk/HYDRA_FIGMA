import "./styles/App.scss";
import Logo from "./images/header/Logo.svg";
import Hydra from "./images/header/Hydra.svg";
import HamburgerButton from "./images/header/Hamburger-Button.svg";

function App() {

  const menuOpen = () => {
    document.documentElement.classList.toggle('menu-open');
  }

  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__container">
          <div className="header__logo-elements">
            <img src={Logo} alt="Logo" className="header__logo" />
            <a href="/">
              <img src={Hydra} alt="Hydra" className="header__hydra" />
            </a>
          </div>
          <nav className="header__nav">
            <div className="header__body">
              <ul className="header__list">
                <li className="header__item"><a href="/">ABOUT</a></li>
                <li className="header__item"><a href="/">SERVICES</a></li>
                <li className="header__item"><a href="/">TECHNOLOGIES</a></li>
                <li className="header__item"><a href="/">HOW TO</a></li>
                <li className="header__item"><a href="/">CONTACT US</a></li>
                <li className="header__item"><a href="/">JOIN HYDRA</a></li>
              </ul>
            </div>
          </nav>
          <div className="header__buttons">
            <button className="header__contact">CONTACT US</button>
            <button className="header__join">JOIN HYDRA</button>
          </div>
          <button className="icon-menu" type="button" onClick={menuOpen}>
            <img src={HamburgerButton} alt="HamburgerButton" className="header__hamburger-button" />
          </button>
        </div>
      </header>
      <main className="main">main</main>
      <footer className="footer">footer</footer>
    </div>
  )
}

export default App;
