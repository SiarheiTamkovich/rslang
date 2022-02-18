//import { AddNotes } from "../components/AddNotes/AddNotes";
import "./Home.scss"
import floure from "../img/floure.png"

export const Home = () => {

  return (
    <div className="home-container">
      <div className="home-title">
        <h1>RS Lang</h1>
        <h2>ИЗУЧАЕМ ЯЗЫК ИГРАЯ</h2>
        <h3>Простой способ освоения</h3>
      </div>
      <div className="home-pict">
        <img src={floure} alt="floure"/>
      </div>
      {/* <div className="todo-notes">
        <h1 style={{color: "#fff"}}>Task "RS Lang" deadline: 21 feb. 2022</h1>
        <AddNotes />
      </div> */}
    </div>
  )
}
