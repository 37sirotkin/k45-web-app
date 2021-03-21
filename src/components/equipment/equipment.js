import React from "react";
import "./equipment.scss";
import monoBlockImg from "../../img/equipment/monoblock png.png";
import monoBlockImg2 from "../../img/equipment/monoblock 2 png.png";
import softBoxImg from "../../img/equipment/softbox 1.png"
import stripBoxImg from "../../img/equipment/stripbox 1.png"
import reflectorImg from "../../img/equipment/reflertor.png"
import reflector2Img from "../../img/equipment/reflectors2.png"
import filtersImg from "../../img/equipment/filters.png"
import zontImg from "../../img/equipment/zont.png"
import radioImg from "../../img/equipment/radio.png"
import rackImg from "../../img/equipment/racl.png"
import backWhiteImg from "../../img/back/back-white.png"
import backBlackImg from "../../img/back/back-black.png"
import backYellowImg from "../../img/back/back-yellow.png"
import backBlueImg from "../../img/back/back-blue.png"
import backPinkImg from "../../img/back/back-pink.png"
import backGreyImg from "../../img/back/back-grey.png"
import backRedImg from "../../img/back/back-red.png"


const Equipment = () => {

    return (
        <div className="equipment-page">
            <div className="equipment-page__title">
                ОБОРУДОВАНИЕ
            </div>
            <div className="equipment-page__description">
                Комбинированный моноблок импульсного и пилотного света
                в комплекте с необходимой насадкой (софтбокс, стрипбокс,
                цветные фильтры) оплачивается отдельно от стоимости зала -
                5 р/час.
            </div>
            <div className="equipment-items">
                <div className="equipment-items--row">
                    <div className="mobile-block">
                        <div className="item-block">
                            <img className="eq-icon" src={monoBlockImg} alt="eq-icon"/>
                            <div className="title">
                                Монблок Godox Gemini GS 400II
                            </div>
                            <div className="description">
                                - 50 ступеней регулировки мощности 1/32.
                                <br/>
                                - Длительность импульса 1/2000-1/800.
                                <br/>
                                - Время перезарядки 0,3-1,5с.
                                <br/>
                                - Пилотная лампа 150 Вт.
                                <br/>
                                - Мощность 400 Дж.
                            </div>
                        </div>
                        <div className="item-block">
                            <img className="eq-icon" src={monoBlockImg2} alt="eq-icon"/>
                            <div className="title">
                                Монблок Godox SK300 II
                            </div>
                            <div className="description">
                                - 50 ступеней регулировки мощности 1/32.
                                <br/>
                                - Длительность импульса 1/2000-1/800.
                                <br/>
                                -Время перезарядки 0,3-1,5с.
                                <br/>
                                - Пилотная лампа 150 Вт.
                                <br/>
                                - Мощность 300 Дж.
                            </div>
                        </div>
                    </div>
                    <div className="mobile-block">
                        <div className="item-block">
                            <img className="eq-icon" src={softBoxImg} alt="eq-icon"/>
                            <div className="title">
                                Софтбоксы Godox 60×90 cm
                            </div>
                        </div>
                        <div className="item-block">
                            <img className="eq-icon" src={stripBoxImg} alt="eq-icon"/>
                            <div className="title">
                                Стрипбокс Godox 30×120 cm
                            </div>
                        </div>
                    </div>

                </div>
                <div className="equipment-items--row">
                    <div className="mobile-block">
                        <div className="item-block">
                            <img className="eq-icon" src={reflectorImg} alt="eq-icon"/>
                            <div className="title">
                                Рефлекторы 180 mm и 160 mm
                            </div>
                        </div>
                        <div className="item-block">
                            <img className="eq-icon" src={filtersImg} alt="eq-icon"/>
                            <div className="title">
                                Шторки с цветными фильтрами и соты
                            </div>
                        </div>
                    </div>
                    <div className="mobile-block">
                        <div className="item-block">
                            <img className="eq-icon" src={zontImg} alt="eq-icon"/>
                            <div className="title">
                                Зонт 83 cm???
                            </div>
                        </div>
                        <div className="item-block">
                            <img className="eq-icon" src={reflector2Img} alt="eq-icon"/>
                            <div className="title">
                                Отражатели 180 х 110 cm
                            </div>
                        </div>
                    </div>


                </div>
                <div className="equipment-items--row">
                    <div className="mobile-block">
                        <div className="item-block">
                            <img className="eq-icon" src={radioImg} alt="eq-icon"/>
                            <div className="title">
                                Радио синхронизаторы Godox
                            </div>
                        </div>
                        <div className="item-block">
                            <img className="eq-icon" src={rackImg} alt="eq-icon"/>
                            <div className="title">
                                Стойки Arsenal 2600
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="equipment-page__title">
                БУМАЖНЫЕ ФОНЫ
            </div>
            <div className="back-items">
                <div className="back-items--row">
                    <div className="back-mobile-block">
                        <div className="back-block">
                            <img className="eq-icon" src={backWhiteImg} alt="eq-icon"/>
                            <div className="title">
                                БЕЛЫЙ
                            </div>
                        </div>
                        <div className="back-block">
                            <img className="eq-icon" src={backBlackImg} alt="eq-icon"/>
                            <div className="title">
                                ЧЕРНЫЙ
                            </div>
                        </div>
                    </div>
                    <div className="back-mobile-block">
                        <div className="back-block">
                            <img className="eq-icon" src={backYellowImg} alt="eq-icon"/>
                            <div className="title">
                                ЖЕЛТЫЙ
                            </div>
                        </div>
                        <div className="back-block">
                            <img className="eq-icon" src={backBlueImg} alt="eq-icon"/>
                            <div className="title">
                                ГОЛУБОЙ
                            </div>
                        </div>
                    </div>
                </div>
                <div className="back-items--row">
                    <div className="back-mobile-block">
                        <div className="back-block">
                            <img className="eq-icon" src={backPinkImg} alt="eq-icon"/>
                            <div className="title">
                                РОЗОВЫЙ
                            </div>
                        </div>
                        <div className="back-block">
                            <img className="eq-icon" src={backGreyImg} alt="eq-icon"/>
                            <div className="title">
                                ГРАФИТ
                            </div>
                        </div>
                    </div>
                    <div className="back-mobile-block">
                        <div className="back-block">
                            <img className="eq-icon" src={backRedImg} alt="eq-icon"/>
                            <div className="title">
                                БОРДОВЫЙ
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Equipment;