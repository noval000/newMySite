import React from 'react';
import './section3.css';
import {Fade} from "react-awesome-reveal";
import Card from "./card/card";
import CardBottom from "./card/card_bottom";

const Section3 = (props) => {


    const cards = [
        {
            name: 'Создание корпоративных сайтов',
            description: 'Разработка сайтов для компаний, представляющих их услуги и продукты.'
        },
        {
            name: 'Создание лендингов',
            description: 'Разработка одностраничных сайтов для продвижения конкретного продукта или услуги.'
        },
        {
            name: 'Создание блогов',
            description: 'Разработка персональных или корпоративных блогов с удобной системой управления контентом.'
        },
        {
            name: 'Сайты-визитки',
            description: 'Простые сайты с базовой информацией о компании или человеке.'
        },
    ]
    const cardsBottom = [
        {
            name: 'Разработка уникального дизайна',
            description: 'Создание индивидуальных дизайнов для сайтов, соответствующих бренду и целям клиента.'
        },
        {
            name: 'Редизайн сайтов',
            description: 'Обновление внешнего вида и функционала существующих сайтов.'
        },
        {
            name: 'UI/UX-дизайн',
            description: 'Разработка интерфейсов, ориентированных на удобство использования и положительный пользовательский опыт.'
        },
        {
            name: 'Создание прототипов',
            description: 'Разработка интерактивных прототипов для визуализации структуры и функционала сайта до его полной реализации.'
        },
    ]


    return (
        <div className="block_three_section pt100" data-cursor-exclusion>
            <div className="title_three_section">
                <Fade delay={0} cascade damping={0.05}>
                    Услуги
                </Fade>
            </div>
            <div className="container pt160">
                <div className="block_about">
                    <Fade duration={2000}>
                        <div className="cards_about">
                            <Card cards={cards} setCursorUslugi={props.setCursorUslugi} />
                        </div>
                    </Fade>
                    <Fade duration={2000}>
                        <div className="cards_about">
                            <CardBottom cardsBottom={cardsBottom} setCursorUslugi={props.setCursorUslugi} />
                        </div>
                    </Fade>

                </div>
            </div>
        </div>
    );
};

export default Section3;