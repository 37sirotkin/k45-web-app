import React from "react";
import "./contacts.scss"
import instagramIcon from "../../img/sn-icon/instagram-icon.png"
import viberIcon from "../../img/sn-icon/viber-icon.png"
import telegramIcon from "../../img/sn-icon/telegram-icon.png"
import vkIcon from "../../img/sn-icon/vk-icon.png"

const Contacts = () => {

    return (
        <div className="contacts-page">
            <div className="main-row">
                <div className="yandex-map">
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A427096441a75eb6a960f0ec269fdb689839f295e0c0da50e1ea31baf2ab6b136&amp;source=constructor"
                        width="632" height="357" frameBorder="0">
                    </iframe>
                </div>
                <div className="text-info">
                    <div className="text-info--title">
                        КОНТАКТЫ
                    </div>
                    <div className="text-info--description">
                        г. Минск<br/>
                        ст. метро Площадь Победы<br/>
                        пр-т. Машерова, д. 11, 5 этаж<br/>
                        <br/>
                        + 375-44-722-02-55<br/>
                        + 375-29-179-17-91<br/>
                        <br/>
                        График работы: 09:00-23:00<br/>
                    </div>
                </div>
            </div>
            <div className="connection">
                ВЫ МОЖЕТЕ СВЯЗАТЬСЯ С НАМИ
                ДЛЯ ЗАПИСИ
            </div>
            <div className="row-sn">
                <div className="sn-item">
                    <a href="https://www.instagram.com/k45_studio" target="_blank">
                        <img src={instagramIcon} alt="sn-icon"/>
                    </a>
                </div>
                <div className="sn-item">
                    <a href="viber://chat?number=%2B37544722025" target="_blank">
                        <img src={viberIcon} alt="sn-icon"/>
                    </a>
                </div>
                <div className="sn-item">
                    <a href="https://telegram.me/pasha_truman" target="_blank">
                        <img src={telegramIcon} alt="sn-icon"/>
                    </a>
                </div>
                <div className="sn-item">
                    <a href="https://vk.com/k45_studio" target="_blank">
                        <img src={vkIcon} alt="sn-icon"/>
                    </a>
                </div>
            </div>
        </div>


    )
}
export default Contacts;