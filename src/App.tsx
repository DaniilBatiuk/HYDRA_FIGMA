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
import VectorBig from "./images/main/VectorBig.svg";
import Mask from "./images/main/Mask.svg";
import Vector7 from "./images/main/Vector7.svg";
import Vector8 from "./images/main/Vector8.svg";
import Card1 from "./images/main/Card1.png";
import Card2 from "./images/main/Card2.png";
import Card3 from "./images/main/Card3.png";
import Card4 from "./images/main/Card4.png";
import Vector12 from "./images/main/Vector12.svg";
import Vector14 from "./images/main/Vector14.svg";
import Tech1 from "./images/main/Hydra-Tech1.svg";
import Tech2 from "./images/main/Hydra-Tech2.svg";
import Tech3 from "./images/main/Hydra-Tech3.svg";
import Tech4 from "./images/main/Hydra-Tech4.svg";
import Vector15 from "./images/main/Vector15.svg";
import Facebook from "./images/footer/facebook.svg";
import Instagram from "./images/footer/instagram.svg";
import Linkedin from "./images/footer/linkedin.svg";
import Pinterest from "./images/footer/pinterest.svg";
import Twitter from "./images/footer/twitter.svg";
import Youtube from "./images/footer/youtube.svg";
import Vector19 from "./images/footer/Vector19.svg";
import Vector19_2 from "./images/footer/Vector19-2.svg";
import Vector18 from "./images/footer/Vector18.svg";
import Vector18_2 from "./images/footer/Vector18-2.svg";
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
                <h1 className="main-page__main-title">
                  <span>Dive</span> Into The Depths
                </h1>
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
                919: {
                  slidesPerView: 3,
                },
                694: {
                  slidesPerView: 2,
                },
                0: {
                  slidesPerView: 1,
                }
              }}
            >
              <SwiperSlide>
                <div className="contacts__item">
                  <img src={Location} alt="Photo" className="contacts__icon" />
                  <div className="contacts__info">
                    <div className="contacts__title">Pay Us a Visit</div>
                    <div className="contacts__text">Union St, Seattle, WA 98101, United States</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="contacts__item contacts__phone">
                  <img src={Phone} alt="Photo" className="contacts__icon" />
                  <div className="contacts__info">
                    <div className="contacts__title">Give Us a Call</div>
                    <div className="contacts__text">(110) 1111-1010</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="contacts__item">
                  <img src={Mail} alt="Photo" className="contacts__icon" />
                  <div className="contacts__info">
                    <div className="contacts__title">Send Us a Message</div>
                    <div className="contacts__text">Contact@HydraVTech.com</div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </section>
          <section className="main-section introduce">
            <div className="introduce__title">
              <div className="introduce__main-text">INTRODUCTION</div>
              <div className="introduce__second-text-arrow">
                <div className="introduce__second-text">TO HYDRA VR</div>
                <img src={VectorBig} alt="Arrow" className="introduce__icon" /></div>
            </div>
            <div className="introduce__text">Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
              nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
              quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
              lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</div>
          </section>
          <section className="main-section about">
            <div className="about__img">
              <img src={Mask} alt="Photo" className="about__photo" />
              <img src={Vector7} alt="Photo" className="about__vector vector07" />
              <img src={Vector8} alt="Photo" className="about__vector vector08" />
            </div>
            <div className="about__info">
              <div className="about__title">ABOUT</div>
              <div className="about__subtitle">HYDRA VR</div>
              <div className="about__text">Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus
                urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida
                dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in.
                Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet
                sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
                etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet
                cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
                retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
                n tempor.</div>
              <button className="about__button">LET’S GET IN TOUCH</button>
            </div>
          </section>
          <section className="main-section introduce">
            <div className="introduce__title">
              <div className="introduce__main-text">WHY BUILD</div>
              <div className="introduce__second-text-arrow">
                <div className="introduce__second-text">WITH HYDRA?</div>
                <img src={VectorBig} alt="Arrow" className="introduce__icon" /></div>
            </div>
            <div className="introduce__text">Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
              nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
              quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
              lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</div>
          </section>
          <section className="main-section cards">
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={5}
              slidesPerView={4}
              breakpoints={{
                1012: {
                  slidesPerView: 4,
                },
                779: {
                  slidesPerView: 3,
                }
                ,
                525: {
                  slidesPerView: 2,
                },
                0: {
                  slidesPerView: 1,
                }
              }}
            >
              <SwiperSlide>
                <article className="cards__card card">
                  <div className="card__img">
                    <img src={Card1} alt="Photo" className="card__photo" />
                  </div>
                  <div className="card__title">SIMULATION</div>
                  <img src={Vector12} alt="Arrow" className="card__icon" />
                  <div className="card__text">Vitae sapien pellentesque habitant morbi
                    nunc. Viverra aliquet  porttitor rhoncus
                    libero justo laoreet sit amet vitae.</div>
                  <button className="card__button">TRY IT NOW</button>
                </article>
              </SwiperSlide>
              <SwiperSlide>
                <article className="cards__card card">
                  <div className="card__img">
                    <img src={Card2} alt="Photo" className="card__photo" />
                  </div>
                  <div className="card__title">EDUCATION</div>
                  <img src={Vector12} alt="Arrow" className="card__icon" />
                  <div className="card__text">Vitae sapien pellentesque habitant morbi
                    nunc. Viverra aliquet  porttitor rhoncus
                    libero justo laoreet sit amet vitae.</div>
                  <button className="card__button">TRY IT NOW</button>
                </article>
              </SwiperSlide>
              <SwiperSlide>
                <article className="cards__card card">
                  <div className="card__img">
                    <img src={Card3} alt="Photo" className="card__photo" />
                  </div>
                  <div className="card__title">SELF-CARE</div>
                  <img src={Vector12} alt="Arrow" className="card__icon" />
                  <div className="card__text">Vitae sapien pellentesque habitant morbi
                    nunc. Viverra aliquet  porttitor rhoncus
                    libero justo laoreet sit amet vitae.</div>
                  <button className="card__button">TRY IT NOW</button>
                </article>
              </SwiperSlide>
              <SwiperSlide>
                <article className="cards__card card">
                  <div className="card__img">
                    <img src={Card4} alt="Photo" className="card__photo" />
                  </div>
                  <div className="card__title">OUTDOOR</div>
                  <img src={Vector12} alt="Arrow" className="card__icon" />
                  <div className="card__text">Vitae sapien pellentesque habitant morbi
                    nunc. Viverra aliquet  porttitor rhoncus
                    libero justo laoreet sit amet vitae.</div>
                  <button className="card__button">TRY IT NOW</button>
                </article>
              </SwiperSlide>
            </Swiper>
            <img src={Vector14} alt="Photo" className="card__vector vector14" />
          </section>
          <section className="main-section propose">
            <div className="propose__title">TECHNOLOGIES & HARDWARE</div>
            <div className="propose__subtitle">USED BY HYDRA VR.</div>
          </section>
          <section className="main-section companies">
            <Swiper
              modules={[Navigation]}
              navigation
              slidesPerView={4}
              breakpoints={{
                1105: {
                  slidesPerView: 4,
                },
                832: {
                  slidesPerView: 3,
                }
                ,
                525: {
                  slidesPerView: 2,
                },
                0: {
                  slidesPerView: 1,
                }
              }}
            >
              <SwiperSlide>
                <img src={Tech1} alt="Photo" className="companies__photo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Tech2} alt="Photo" className="companies__photo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Tech3} alt="Photo" className="companies__photo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Tech4} alt="Photo" className="companies__photo" />
              </SwiperSlide>
            </Swiper>
          </section>
          <section className="main-section introduce low-margin">
            <div className="introduce__title">
              <div className="introduce__main-text">HOW WE BUILD</div>
              <div className="introduce__second-text-arrow">
                <div className="introduce__second-text">WITH HYDRA VR?</div>
                <img src={VectorBig} alt="Arrow" className="introduce__icon" /></div>
            </div>
            <div className="introduce__text">Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
              nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
              quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
              lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</div>
          </section>
          <section className="main-section steps">
            <Swiper
              modules={[Navigation]}
              navigation
              slidesPerView={4}
              breakpoints={{
                1105: {
                  slidesPerView: 4,
                },
                832: {
                  slidesPerView: 3,
                }
                ,
                525: {
                  slidesPerView: 2,
                },
                0: {
                  slidesPerView: 1,
                }
              }}
            >
              <SwiperSlide>
                <div className="steps__step step">
                  <div className="step__number">01</div>
                  <div className="step__title">3D Conception & Design</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="steps__step step">
                  <div className="step__number">02</div>
                  <div className="step__title">Interaction Design</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="steps__step step">
                  <div className="step__number">03</div>
                  <div className="step__title">VR World User Testing</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="steps__step step">
                  <div className="step__number">04</div>
                  <div className="step__title">Hydra VR Deploy</div>
                </div>
              </SwiperSlide>
            </Swiper>
            <img src={Vector15} alt="Arrow" className="steps__icon" />
          </section>
          <section className="main-section form-section">
            <div className="form-section__title">JOIN HYDRA</div>
            <div className="form-section__subtitle">Let’s Build Your VR Experience</div>
            <form action="" className="form-section__form form">
              <div className="form__half">
                <input type="text" className="form__input" placeholder="First Name" />
                <input type="text" className="form__input" placeholder="Email" />
              </div>
              <div className="form__half">
                <input type="text" className="form__input" placeholder="Last Name" />
                <input type="text" className="form__input" placeholder="Phone Number" />
              </div>
              <input type="text" className="form__input" placeholder="Subject" />
              <textarea className="form__textarea" placeholder="Tell Us Something..." />

              <button type="submit" className="form__button">SEND TO HYDRA</button>
            </form>
          </section>
        </div>
      </main >
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__head">
            <img src={Logo} alt="Logo" className="footer__logo" />
            <ul className="footer__list">
              <li className="footer__item"> <a href="/" className="footer__link">ABOUT</a></li>
              <li className="footer__item"><a href="/" className="footer__link"> SERVICES</a></li>
              <li className="footer__item"><a href="/" className="footer__link">TECHNOLOGIES</a></li>
              <li className="footer__item"><a href="/" className="footer__link">HOW TO</a></li>
              <li className="footer__item"><a href="/" className="footer__link">JOIN HYDRA</a></li>
            </ul>
            <ul className="footer__list footer__list-2">
              <li className="footer__item"><a href="/" className="footer__link">F.A.Q</a></li>
              <li className="footer__item"><a href="/" className="footer__link">SITEMAP</a></li>
              <li className="footer__item"><a href="/" className="footer__link">CONDITIONS</a></li>
              <li className="footer__item"><a href="/" className="footer__link">LICENSES</a></li>
            </ul>
            <div className="footer__contacts">
              <div className="footer__text">SOCIALIZE WITH HYDRA</div>
              <ul className="footer__list-icon">
                <li className="footer__item"><a href="/" className="footer__link"><img src={Facebook} alt="Icon" className="footer__icon" /></a></li>
                <li className="footer__item"><a href="/" className="footer__link"><img src={Instagram} alt="Icon" className="footer__icon" /></a></li>
                <li className="footer__item"><a href="/" className="footer__link"><img src={Linkedin} alt="Icon" className="footer__icon" /></a></li>
                <li className="footer__item"><a href="/" className="footer__link"><img src={Pinterest} alt="Icon" className="footer__icon" /></a></li>
                <li className="footer__item"><a href="/" className="footer__link"><img src={Twitter} alt="Icon" className="footer__icon" /></a></li>
                <li className="footer__item"><a href="/" className="footer__link"><img src={Youtube} alt="Icon" className="footer__icon" /></a></li>
              </ul>
              <button className="footer__button">BUILD YOUR WORLD</button>
            </div>
            <img src={Vector19} alt="Photo" className="footer__vector vector19" />
            <img src={Vector19_2} alt="Photo" className="footer__vector vector19_2" />
            <img src={Vector18} alt="Photo" className="footer__vector vector18" />
            <img src={Vector18_2} alt="Photo" className="footer__vector vector18_2" />
          </div>
          <div className="footer__under">
            <div className="footer__under-text">2023 © HYDRA LANDING PAGE</div>
            <div className="footer__under-text">BY ZINE. E. FALOUTI</div>
            <div className="footer__under-text">ALL RIGHTS RESERVED </div>
          </div>
        </div>
      </footer>
    </div >
  )
}

export default App;
