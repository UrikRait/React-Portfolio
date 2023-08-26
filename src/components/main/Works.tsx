import React from 'react'
import { Project } from '../Project'
export function Works() {
    return (
        <section className="works">
            <Project
                image="img/pizzaBg.webp"
                title="Данная пиццерийная является рабочим аналогом с корзиной и админ меню"
                subtitle='Пиццерийная'
                pos="0"
                projectLink='https://urikrait.github.io/pizza-site/' />
            <Project
                image="img/clicker.webp"
                title="Бесконечный кликер с возможностью прокачки"
                subtitle='Кликер'
                pos="1"
                projectLink='https://github.com/UrikRait/React-clicker' />
            <Project
                image="img/post.webp"
                title="Запросы к базе данных FAKE API JsonPlaceHolder"
                subtitle='Post-запрос'
                pos="0"
                projectLink='https://github.com/UrikRait/react-fetch' />
            <Project
                image="img/quiz.webp"
                title="Небольшая игра с выбором ответов и выводом результатов "
                subtitle='Quiz-game'
                pos="1"
                projectLink='https://github.com/UrikRait/react-quiz' />
        </section>
    )
}
