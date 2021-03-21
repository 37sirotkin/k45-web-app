import React from "react";
import "./halls.scss";
import {Carousel} from "antd";
import photoHall from "../../img/halls-photo.jpg"
import photoHall2 from "../../img/halls-photo2.jpg"
import photoHall3 from "../../img/halls-photo3.jpg"


const Halls = () => {

        const contentStyle = {
            height: window.matchMedia("(max-width: 768px)").matches ? "35%" : "360px",
            width: window.matchMedia("(max-width: 768px)").matches ? "100%" : "640px",
            color: '#fff',
            textAlign: 'center',
            background: '#364d79',
        };
    return (
        <div className="halls-page">
            <div className="hall-item">
                <div className="border-carousel">
                    <Carousel autoplay style={contentStyle}>
                        <div>
                            <img src={photoHall} alt="photo-hall1" style={contentStyle}/>
                        </div>
                        <div>
                            <img src={photoHall2} style={contentStyle}/>
                        </div>
                        <div>
                            <img src={photoHall3} style={contentStyle}/>
                        </div>
                    </Carousel>
                </div>
                <div className="border-box">

                </div>
                <div className="hall-description">
                    <div className="title">
                        ЗАЛ НЕОН
                    </div>
                    <div className="price">
                        ОТ 35 РУБЛЕЙ
                    </div>
                    <div className="main-text">
                        Зал Неон подходит как для фотосессий в стиле Cyberpunk так и для любого вида нестандартных
                        съемок.
                    </div>
                    <div className="more-text">
                        - Площадь зала 26 м2.<br/>
                        - 35 р/час - стоимость зала в будние и выходные дни (импульсный и постоянный свет
                        оплачивется отдельно).<br/>
                        - Весь реквизит, который присутствует на фото входит в стоимость зала (неоновые вывески,
                        прожектор, неоновые трубки).
                    </div>
                </div>
            </div>
            <div className="hall-item">
                <div className="border-carousel">
                    <Carousel autoplay style={contentStyle}>
                        <div>
                            <img src={photoHall} alt="photo-hall1" style={contentStyle}/>
                        </div>
                        <div>
                            <img src={photoHall2} style={contentStyle}/>
                        </div>
                        <div>
                            <img src={photoHall3} style={contentStyle}/>
                        </div>
                    </Carousel>
                </div>
                <div className="border-box">

                </div>
                <div className="hall-description">
                    <div className="title">
                        ЦИКЛОРАМА
                    </div>
                    <div className="price">
                        ОТ 35 РУБЛЕЙ
                    </div>
                    <div className="main-text">
                        Зал с белой угловой циклорамой идеально подойдёт
                        для любого вида съемок.
                    </div>
                    <div className="more-text">
                        - Площадь зала 36 м2.
                        <div></div>
                        - Размер циклорамы
                        <div></div>
                        - 35 р/час - стоимость зала в будние и выходные дни (импульсный и постоянный свет
                        оплачивется отдельно).
                    </div>
                </div>
            </div>
            <div className="hall-item">
                <div className="border-carousel">
                    <Carousel autoplay style={contentStyle}>
                        <div>
                            <img src={photoHall} alt="photo-hall1" style={contentStyle}/>
                        </div>
                        <div>
                            <img src={photoHall2} style={contentStyle}/>
                        </div>
                        <div>
                            <img src={photoHall3} style={contentStyle}/>
                        </div>
                    </Carousel>
                </div>
                <div className="border-box">

                </div>
                <div className="hall-description">
                    <div className="title">
                        МАЛЫЙ ЗАЛ
                    </div>
                    <div className="price">
                        ОТ 20 РУБЛЕЙ
                    </div>
                    <div className="main-text">
                        Малый зал совмещает в себе угол из фольги с диодным освещением и уютный подоконник, который
                        подойдет для разноплановых образов.
                    </div>
                    <div className="more-text">
                        - Площадь зала 17м2.
                        <div></div>
                        - 20 р/час - стоимость зала в будние и выходные дни (импульсный и постоянный свет
                        оплачивется отдельно).
                    </div>
                </div>
            </div>
            <div className="hall-item">
                <div className="border-carousel">
                    <Carousel autoplay style={contentStyle}>
                        <div>
                            <img src={photoHall} alt="photo-hall1" style={contentStyle}/>
                        </div>
                        <div>
                            <img src={photoHall2} style={contentStyle}/>
                        </div>
                        <div>
                            <img src={photoHall3} style={contentStyle}/>
                        </div>
                    </Carousel>
                </div>
                <div className="border-box">

                </div>
                <div className="hall-description">
                    <div className="title">
                        ГРИМЕРКА
                    </div>
                    <div className="price">
                        ОТ 5 РУБЛЕЙ
                    </div>
                    <div className="main-text">
                        Гримерка обрудована зеркалом с подсветкой и рабочим местом. Помимо этого можно воспользоваться
                        гладильной доской.
                    </div>
                    <div className="more-text">
                        - За час до съемки гримерка предоставляется бесплатно.
                        <div></div>
                        - О гримерке необходимо сообщать заранее.
                        <div></div>
                        - 5 р/час - стоимость гремерки во время съемки.
                    </div>
                </div>
            </div>


        </div>


    )
}

export default Halls;