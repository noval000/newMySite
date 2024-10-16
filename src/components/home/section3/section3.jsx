import React from 'react';
import './section3.css';
import {Fade} from "react-awesome-reveal";
import Card from "./card/card";
import CardBottom from "./card/card_bottom";
import cardWebDevCorp from '../../../videos/card_web_dev.mp4'
import cardWebDesign from '../../../videos/card_web_design.mp4'

const Section3 = (props) => {


    const cards = [
        {
            name: 'Создание корпоративных сайтов',
            description: 'Разработка сайтов для компаний, представляющих их услуги и продукты.',
            id: 'card1',
            video: cardWebDevCorp,
        },
        {
            name: 'Создание лендингов',
            description: 'Разработка одностраничных сайтов для продвижения конкретного продукта или услуги.',
            id: 'card2'
        },
        {
            name: 'Создание блогов',
            description: 'Разработка персональных или корпоративных блогов с удобной системой управления контентом.',
            id: 'card3'
        },
        {
            name: 'Сайты-визитки',
            description: 'Простые сайты с базовой информацией о компании или человеке.',
            id: 'card4'
        },
    ]
    const cardsBottom = [
        {
            name: 'Разработка уникального дизайна',
            description: 'Создание индивидуальных дизайнов для сайтов, соответствующих бренду и целям клиента.',
            id: 'card5',
            video: cardWebDesign,
        },
        {
            name: 'Редизайн сайтов',
            description: 'Обновление внешнего вида и функционала существующих сайтов.',
            id: 'card6'
        },
        {
            name: 'UI/UX-дизайн',
            description: 'Разработка интерфейсов, ориентированных на удобство использования и положительный пользовательский опыт.',
            id: 'card7'
        },
        {
            name: 'Создание прототипов',
            description: 'Разработка интерактивных прототипов для визуализации структуры и функционала сайта до его полной реализации.',
            id: 'card8'
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