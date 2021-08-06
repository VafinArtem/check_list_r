import React from 'react';
import PropTypes from 'prop-types';

const About = ({setShowAbout}) => {
  return (
    <div className="about-popup">
      <h2 className="about-popup__title">О проекте</h2>
      <p className="about-popup__text">
        Этот проект создан frontend-разработчиком, для прокачки скилов и решении проблемы с проверкой своих проектов по определенным
        критериям.<br /><br />
        Он продолжает развиваться, и в ближайших планах: личный кабинет пользователя, создание подкатегорий в проектах, фильтрация по выполненым и
        не выполенным, возможность делиться своими чек-листами и загрузка чеклистов из файлов.
      </p>
      <h3 className="about-popup__subtitle">О работе</h3>
      <p className="about-popup__text">
        Для не зарегистрированных пользователей доступно только пометить карточку выполненной/невыполненной, без сохранения прогресса.<br /><br />
        Для зарегестрированных пользователей дополнительно есть возможность создавать проекты и карточки, редактировать и удалять карточки, весь
        прогресс сохраняется.
      </p>
      <button className="about-popup__button button" onClick={() => {
        localStorage.confirmAbout = true;
        setShowAbout(false);
      }}>Приступим</button>
    </div>
  );
};

About.propTypes = {
  setShowAbout: PropTypes.func.isRequired,
};

export default About;
