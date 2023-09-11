import {useState, useEffect} from 'react';
import { Container } from "../../layouts/container";
import { ContactModal } from '../contact-modal';
import { Menu } from "../menu";

//images
import logo from "../../assets/icons/logo.svg";
import menu from "../../assets/icons/menu.svg";

//header styles
import "./header.scss";
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showMenu = () => {
    setIsModalVisible(true);
  };
  const hideMenu = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClass = isScrolled ? 'header scrolled' : 'header';
  
  return (
    <header className={headerClass}>
      <Container>
        <nav className="header__nav">
          <a href="#"><img className="logo" src={logo} alt="logo" /></a>
          <ul className="header__nav--list">
            <li>
              <a href="#service">Услуги</a>
            </li>
            <li>
              <a href="#work">Как мы работаем</a>
            </li>
            <li>
              <a href="#digital">Результат</a>
            </li>
            <li>
              <a href="#contact">Заказать</a>
            </li>
          </ul>
          <button onClick={showMenu} className="menu_btn">
            <img src={menu} alt="menu-icon" />
          </button>
        </nav>
      </Container>
		<Menu visible={isModalVisible} hideMenu={hideMenu}/>
      <ContactModal/>
    </header>
  );
};
