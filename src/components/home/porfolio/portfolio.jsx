import React, {useState} from 'react';
import {Fade} from "react-awesome-reveal";
import { Button, message, Steps } from 'antd';
import {CaretLeftFilled, CaretRightFilled} from "@ant-design/icons";
import './portfolio.css';

const Portfolio = (props) => {
    const steps = [
        {
            title: 'Интервью',
            content: 'Вам не придется готовить сложные ТЗ и заполнять километровые брифы. Мы умеем слышать и легко вникаем даже в самые сложные бизнес-процессы. Интервью можем провести в любом формате, удобном для Вас.',
        },
        {
            title: 'Подготовка текстов',
            content: 'Наши редакторы подготовят тексты для любой, даже самой искушенной аудитории.',
        },
        {
            title: 'Дизайн',
            content: 'Безупречный дизайн будет вызывать Вау-эффект и, как следствие, необратимое чувство оформить заказ.',
        },
        {
            title: 'Верстка',
            content: 'Адаптивная кроссбраузерная верстка, ваш сайт будет превосходно отображаться на любых устройствах и браузерах.',
        },
        {
            title: 'Тестирование',
            content: 'Каждая страница проверяется на наличие багов и ошибок. Работа без ошибок гарантирована.',
        },
        {
            title: 'SEO-оптимизация',
            content: 'Сайт получит хороший старт для продвижения в ТОП, а вы — экономию на рекламе.',
        },
    ];
    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));

    return (
        <div id='steps' className="block_thour_section pt100" data-cursor-exclusion>
            <div className="title_thour_section">
                <Fade delay={0} cascade damping={0.05}>
                    Этапы
                </Fade>
            </div>
            <div className="container pt160">
                <Steps current={current} items={items} />
                <Fade>
                <div style={{color:'#fff',
                    height: '300px',
                    display: 'flex',
                    alignItems: 'center',
                    background: '#010716',
                    justifyContent: 'center',
                    margin: '20px',
                    borderRadius: '20px',
                padding:'20px'}}>{steps[current].content}</div>
                <div
                    style={{
                        marginTop: 24,
                    }}
                >
                    {current > 0 && (
                        <Button
                            style={{
                                margin: '0 8px',
                            }}
                            icon={<CaretLeftFilled />}
                            onClick={() => prev()}
                        >
                        </Button>
                    )}
                    {current < steps.length - 1 && (
                        <Button icon={<CaretRightFilled />} onClick={() => next()}>
                        </Button>
                    )}
                </div>
                </Fade>
            </div>
        </div>
    );
};

export default Portfolio;