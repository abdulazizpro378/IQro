import useModalStore from "../../state/modalStore";

import close from '../../assets/icons/close.svg';

//modal styles
import "./contact-modal.scss";
export const ContactModal = () => {
  const { isModalOpen, closeModal } = useModalStore();
    
  return (
    <div className={`modal__wrapper ${isModalOpen ? 'open' : 'close'}`} >
      <div className="modal">
        <button className="close_btn" onClick={closeModal}><img src={close} alt="" /></button>
        <h1>Получить бесплатную консультацию</h1>
        <p>
          В рамках консультации уточним необходимую информацию для анализа
          вашего проекта
        </p>
        <form className="form">
          <div className="form__group">
            <input type="text" placeholder="Ваше имя" />
            <input type="text" placeholder="номер телефона" />
            <input
              type="text"
              placeholder="какая из услуг вас заинтересовала ?"
            />
          </div>
          <button type="submit" className="sent_btn">отправить</button>
        </form>
      </div>
    </div>
  );
};
