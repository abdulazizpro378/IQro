import { Fragment, useEffect, useState } from "react";
import { Container } from "../layouts/container";
import { Section } from "../components/section";
import { Button } from "../components/button";
import { ContactData, digitalData, serviceData, workData } from "../data";
import { ServiceCard } from "../components/service-card";
import { DigitalCard } from "../components/digital-card";
import Slider from "react-slick";
import useModalStore from "../state/modalStore";

//images
import right_bg from "../assets/images/hero-bg.png";
import left_bg from "../assets/images/hero-bg-left.png";
import phone from "../assets/images/phone.png";
import main_bg from '../assets/images/main-bg.png';


//Home styles
import "./home.scss";
export const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const {openModal} = useModalStore();
  const {title, info, sub_info, message_info, message_title} = ContactData;

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 703);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  
  return (
    <Fragment>  
      <img className="main__bg" src={main_bg} alt="bg" />
      <Section id="development" className="development">
        <Container>
          <div
            className="development__info "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1 className="title">Разаработка сайтов и мобильных приложений</h1>
            <p className="description">
              Помогаем бизнесу увеличить прибыль с помощью digital-инструментов
            </p>
            <Button  text="Обсудить проект" />
          </div>
          <img
            data-aos="fade-down"
            data-aos-duration="1000"
            className="hero_img"
            src={phone}
            alt="hero image"
          />
        </Container>
        <img className="right_bg" src={right_bg} alt="bg-light" />
        <img className="left_bg" src={left_bg} alt="" />
      </Section>
      <Section id="service" className="service">
        <Container>
          <h1 className="service__title" data-aos="zoom-in">Услуги</h1>
          <div
            className="service__card--row"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            {!isMobile ? (
              serviceData.map((res, id) => (
                <ServiceCard key={id} text={res.name} />
              ))
            ) : (
              <Slider {...settings}>
                {serviceData.map((res, id) => (
                  <ServiceCard key={id} text={res.name} />
                ))}
              </Slider>
            )}
          </div>
        </Container>
      </Section>
      <Section id="work" className="work">
        <Container>
          <h1
            className="work__title"
            data-aos="zoom-in"
          >
            Как мы работаем
          </h1>
          <div
            className="work__wrapper"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            {workData.map((res, id) => (
              <div
                className="content"
                key={id}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="img__wrapper">
                  <img src={res.img} alt="icon" />
                </div>
                <h4>{res.desc}</h4>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <Section id="digital" className="digital">
        <Container>
          <h4 className="digital__title" data-aos="zoom-in">
            <span>Что даст вашему бизнесу </span>
            внедрение Digital-инструментов
          </h4>
          <div className="digital__card__row">
            {digitalData.map((res) => (
              <DigitalCard key={res.id} text={res.text} />
            ))}
          </div>
        </Container>
      </Section>
      <Section id="contact" className="contact">
        <Container>
          <div className="contact__wrapper">
            <div className="contact__info">
              <h1 className="title" data-aos="zoom-in">{title}</h1>
              <p data-aos="zoom-in">{info}</p> 
              <p data-aos="zoom-in">{sub_info}</p>
            </div>
            <div className="contact__message" data-aos="zoom-in">
              <h1 data-aos="zoom-in">{message_title}</h1>
              <p data-aos="zoom-in">{message_info}</p>
              <button data-aos="zoom-in" onClick={openModal} className="contact__message__btn">Получить</button>
            </div>
          </div>
        </Container>
      </Section>
    </Fragment>
  );
};
