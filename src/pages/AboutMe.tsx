import { Header } from '../components/main/Header'

export function AboutMe() {
  return (

    <>
      <Header />
      <section className="aboutme">
        <div className="container">
          <p className="hello__text">Обо мне</p>
          <div className="aboutme__box">
            <div className="aboutme__text">
              <p className="aboutme__title">
                Меня зовут Константин, мне 19 лет, изучаю frontend разработку 1.5 года
              </p>
              <p className="aboutme__subtitle">
                На моем счету больше 10 лендингов, <br /> 1 многостраничный сайт <br /> 1 проект с полным рабочим функционалом <br /> А так же несколько проектов демонстрирующие мои знания в React
              </p>
            </div>
            <div className="aboutme__photo">
              <img src="img/myphoto.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
