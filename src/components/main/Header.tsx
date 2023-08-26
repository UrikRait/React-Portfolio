export function  Header () {
  return (
    <header className="header">
        <div className="container">
            <nav className="header__nav">
                <p className="header__name">Мое портфолио</p>
                <ul className="header__list">
                    <li className="header__item">
                        <a className="header__link" href="./">Работы</a>
                    </li>
                    <li className="header__item">
                        <a className="header__link" href="./aboutme">Обо мне</a>
                    </li>
                    <li className="header__item">
                        <a className="header__link" href="./skills">Мои навыки</a>
                    </li>
                    <li className="header__item">
                        <a className="header__link" href="./feedback">Обратная связь</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}
