import { Iproject } from '../common/Iproject'
export function Project({ image, title, subtitle, pos, projectLink }: Iproject) {

  const flexOrder = {
    order: pos
  }

  return (
    <div className='project'>
      <div className="container">
        <div className="project__content">
            <img className="project__img" src={image} alt="#" style={flexOrder}/>
            <div className="project__info">
              <h3 className="project__subtitle">{subtitle}</h3>
              <h1 className="project__title">{title}</h1>
              <a className="project__link" href={`${projectLink}`}>Узнать больше</a>
            </div>
        </div>
      </div>
    </div>
  )
}
