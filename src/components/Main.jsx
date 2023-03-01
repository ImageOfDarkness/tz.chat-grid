import React from "react";
import Card from "./Card";
import background from "../images/mountein.png";
import original from "../images/original.png";
import { NavLink } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <div className="conteiner" >
        <div style={{ gridArea: "container1" }} className="grid grid--big">
          <Card gridArea="big" color="silver" rect big>
            Гений непредвзято понимает под собой конфликт. Закон внешнего мира,
            очевидно, реально подчеркивает аксиоматичный здравый смысл. Культ
            джайнизма включает в себя поклонение Махавире и другим тиртханкарам,
            поэтому закон исключённого третьего индуцирует изоморфный ротор.
          </Card>
          <Card gridArea="smallTop" color="silver" rect>
            Чувство однократно
          </Card>
          <Card gridArea="smallBottom" color="silver" rect>
            <NavLink to="/chat">Chat</NavLink>
          </Card>
        </div>
        <div style={{ gridArea: "container2" }} className="grid grid--middle">
          <Card gridArea="area1" color="white">
            Наши сотрудники
          </Card>
          <Card gridArea="area2" color="white">
            Просветляет понимающий тест
          </Card>
          <Card gridArea="area3" color="white">
            Конформизм
          </Card>
          <Card gridArea="area4" color="blue">
            Интроекция
          </Card>
          <Card gridArea="area5" color="yellow">
            Наши сотрудники
          </Card>
        </div>
        <div style={{ gridArea: "container3" }} className="grid grid--rightBig">
          <Card gridArea="smallTop" color="green" rect>
            Понятие модернизации понимает механизм власти
          </Card>
          <Card gridArea="smallBottom" color="green" rect image={original}>
            Наши сотрудники
          </Card>
          <Card gridArea="big" color="green" rect big>
            <div className="characteristic">
              <div className="characteristic__item">
                <div className="">Фамилия</div>
                <div className="characteristic__dots"></div>
                <div className="">Мамай</div>
              </div>
              <div className="characteristic__item">
                <div className="characteristic__name">Имя и отчество</div>
                <div className="characteristic__dots"></div>
                Станиславаленина Владимировна
              </div>
              <div className="characteristic__item">
                <div className="characteristic__name">Номер полиса выдан заведомо ложный</div>
                <div className="characteristic__dots"></div>
                <div className="">01354879</div>
              </div>
              <div className="characteristic__item">
                <div className="characteristic__name">Дата рождения</div>
                <div className="characteristic__dots"></div>
                01.12.1976
              </div>
              <div className="characteristic__item">
              Телефон
                <div className="characteristic__dots"></div>
                +79254218069
              </div>
            </div>
          </Card>
        </div>
        <div
          style={{ gridArea: "container4" }}
          className="grid grid--rightMidle"
        >
          <Card gridArea="area1" color="yellow-pink">
            Лидерство
          </Card>
          <Card gridArea="area2" color="yellow-pink">
            Однако
          </Card>
          <Card gridArea="area3" color="red">
            Невероятный гений
          </Card>
          <Card gridArea="area4" color="yellow-pink">
            Точка перегиба
          </Card>
          <Card gridArea="area5" color="purple">
            Длина вектора
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Main;
