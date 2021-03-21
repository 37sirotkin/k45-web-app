import React from "react";
import locationIcon from "../../img/location-icon.svg";
import equipmentIcon from "../../img/equipment-icon.svg";
import windowIcon from "../../img/window-icon.svg";
import brushIcon from "../../img/brush-icon.svg";
import "./main-page.scss"

const MainPage = () => {
    return (

        <div className="main-page">
            <div className="main-page__content">
                <div className="text-about">
                    <h2 className="title">
                        ФОТОСТУДИЯ <div>
                    </div>
                        K45 STUDIO
                    </h2>
                    <div className="description">
                        Профессиональная фотостудия K45 STUDIO расположена в центре Минска. Студия имеет 3 зала, общей
                        площадью 124 м2, высота потолков более 5 метров, профессиональное оборудование для съемки.
                    </div>
                </div>

                <div className="icons-about">
                    <div className="icons-about__row">
                        <div className="box-icon">
                            <div className="icon-about">
                                <img src={locationIcon} alt="location-item"/>
                            </div>
                            <div className="text-box">Удобное <br/>расположение</div>
                        </div>
                        <div className="box-icon">
                            <div className="icon-about">
                                <img src={equipmentIcon} alt="location-icon"/>
                            </div>
                            <div className="text-box">Проф. <br/>оборудование</div>
                        </div>
                    </div>
                    <div className="icons-about__row">
                        <div className="box-icon">
                            <div className="icon-about">
                                <img src={windowIcon} alt="location-icon"/>
                            </div>
                            <div className="text-box">Панорамные <br/>окна</div>
                        </div>
                        <div className="box-icon">
                            <div className="icon-about">
                                <img src={brushIcon} alt="location-icon"/>
                            </div>
                            <div className="text-box">Уникальный <br/>интерьер</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default MainPage;