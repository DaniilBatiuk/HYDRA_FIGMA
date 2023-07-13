import "./styles/App.scss";
import Logo from "./images/header/Logo.svg";
import Hydra from "./images/header/Hydra.svg";
import HamburgerButton from "./images/header/Hamburger-Button.svg";
import MainPhoto from "./images/main/MainPhoto.jpg";
import MainArrow from "./images/main/arrow-small-right.svg";
import Vector1 from "./images/main/Vector1.svg";
import Vector2 from "./images/main/Vector2.svg";
import Vector3 from "./images/main/Vector3.svg";
import Vector4 from "./images/main/Vector4.svg";
import Location from "./images/main/Location-Icon.svg";
import Phone from "./images/main/phone-call.svg";
import Mail from "./images/main/mail.svg";
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function App() {
  const menuOpen = () => {
    document.documentElement.classList.toggle('menu-open');
  }

  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__container">
          <div className="header__logo-elements">
            <a href="/">
              <img src={Logo} alt="Logo" className="header__logo" />
            </a>
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
      <main className="main">
        <div className="main__container">
          <section className="main-section main-page">
            <div className="main-page__info">
              <div className="main-page__title">
                <div className="main-page__main-title">
                  <span>Dive</span> Into The Depths
                </div>
                <h2 className="main-page__under-title">Of <span>Virtual Reality</span></h2>
              </div>
              <p className="main-page__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore
                nisl tincidunt eget. Lectus mauris eros in vitae.</p>
              <div className="main-page__button-arrow">
                <button className="main-page__button">BUILD YOUR WORLD</button>
                <img src={MainArrow} alt="Arrow" className="main-page__arrow" />
              </div>
              <img src={Vector4} alt="Photo" className="main-page__vector vector04" />
            </div>
            <div className="main-page__img-box">
              <img src={MainPhoto} alt="Photo" className="main-page__photo" />
              <img src={Vector1} alt="Photo" className="main-page__vector vector01" />
              <img src={Vector2} alt="Photo" className="main-page__vector vector02" />
              <img src={Vector3} alt="Photo" className="main-page__vector vector03" />
            </div>
          </section>
          <section className="main-section contacts">
            <Swiper
              modules={[Navigation]}
              navigation
              slidesPerView={3}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                620: {
                  slidesPerView: 2,
                },
                920: {
                  slidesPerView: 3,
                }
              }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide><div className="contacts__item">
                <img src={Location} alt="Photo" className="contacts__icon" />
                <div className="contacts__info">
                  <div className="contacts__title">Pay Us a Visit</div>
                  <div className="contacts__text">Union St, Seattle, WA 98101, United States</div>
                </div>
              </div></SwiperSlide>
              <SwiperSlide><div className="contacts__item contacts__phone">
                <img src={Phone} alt="Photo" className="contacts__icon" />
                <div className="contacts__info">
                  <div className="contacts__title">Give Us a Call</div>
                  <div className="contacts__text">(110) 1111-1010</div>
                </div>
              </div></SwiperSlide>
              <SwiperSlide><div className="contacts__item">
                <img src={Mail} alt="Photo" className="contacts__icon" />
                <div className="contacts__info">
                  <div className="contacts__title">Send Us a Message</div>
                  <div className="contacts__text">Contact@HydraVTech.com</div>
                </div>
              </div></SwiperSlide>
            </Swiper>
          </section>
        </div>
      </main >
      <footer className="footer">footer</footer>
    </div >
  )
}

export default App;
