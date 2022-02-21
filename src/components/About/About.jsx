import "./About.scss"
import cv from "../../img/cv.jpg"

export const About = () => {
  return (
    <div className="about-container">
      <h1>О команде</h1>
      <div className="team">
        <div className="team-member">
          <img src="https://siarheitamkovich.github.io/rsschool-cv/img/pict.png" alt="team-member" />
          <div className="description">
            <div className="description-wrapper">
              <h3>Сергей</h3>
              <a href="https://github.com/SiarheiTamkovich" target="_blank" rel="noreferrer">
                <i className="bi bi-github"></i>
              </a>
            </div>
            <p>Team lead. Разработал архитектуру, дизайн, главную страницу приложения, авторизацию</p>
          </div>
        </div>
        <div className="team-member">
          <img src={cv} alt="team-member" />
          <div className="description">
            <div className="description-wrapper">
              <h3>Евгений</h3>
              <a href="https://github.com/Gosujmen" target="_blank" rel="noreferrer">
                <i className="bi bi-github"></i>
              </a>
            </div>           
            <p>Реализовал мини-игры "Аудиовызов" и "Спринт"</p>
          </div>
        </div>
        <div className="team-member">
          <img src="https://veru44ia.github.io/rsschool-cv/img/photo.png" alt="team-member" />
          <div className="description">
            <div className="description-wrapper">
              <h3>Вера</h3>
              <a href="https://github.com/Veru44ia" target="_blank" rel="noreferrer">
                <i className="bi bi-github"></i>
              </a>
            </div>           
            <p>Разработала электронный учебник, страницу "О команде"</p>
          </div>
        </div>
      </div>
    </div>
  )
}