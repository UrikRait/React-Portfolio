import React from 'react'
import { Header } from '../components/main/Header'

export function Feedback() {
    return (
        <>
            <Header />
            <section className="feedback">
                <div className="container">
                    <p className="feedback__title hello__text">Связь со мной</p>
                    <div className="feedback__img">
                        <a className="feedback__link" href="https://t.me/sodkiy17"><img src='img/feedback/telegram.svg' /></a>
                        <a className="feedback__link" href="mailto:solodkiy.konstantin@gmail.com"><img src="img/feedback/gmail.svg" alt="" /></a>
                    </div>
                </div>
            </section>
        </>
    )
}
