import { Header } from '../components/main/Header'

export function Skills() {
    return (
        <>
            <Header />
            <section className="skills">
                <div className="container">
                    <p className='skills__text hello__text'>Мои навыки</p>
                    <div className="skills__box">
                        <img className='skills__img' src="img/skills/react.svg" alt="react" />
                        <img className='skills__img' src="img/skills/TS.svg" alt="TypeScript" />
                        <img className='skills__img' src="img/skills/JS.svg" alt="JavaScript" />
                        <img className='skills__img' src="img/skills/sass.svg" alt="Sass" />
                        <img className='skills__img' src="img/skills/Tailwind.svg" alt="Tailwind" />
                        <img className='skills__img' src="img/skills/BEM.svg" alt="Bem" />
                        <img className='skills__img' src="img/skills/Gulp.svg" alt="Gulp" />
                        <img className='skills__img' src="img/skills/HTML.svg" alt="Html" />
                    </div>
                </div>
            </section>
        </>
    )
}
