import { Link } from 'react-router-dom'
//import { AddNotes } from "../components/AddNotes/AddNotes";

import "./Home.scss"
import floure from "../img/floure.png"
import apleBook from "../img/aple-book.gif"
import table from '../img/table.png'

export const Home = () => {

  return (
    <div className="home-container">
      <div className="home-title">
        <h1>RS Lang</h1>
        <h2>ИЗУЧАЕМ ЯЗЫК ИГРАЯ</h2>
        <h3>Простой способ освоения</h3>
      </div>
        <Link to="/textbook" style={{textDecoration:"none"}}>
          <button className="btn-start">Начать</button>
        </Link>
      <div className="home-pict">
        <img src={floure} alt="floure"/>
        <img src={apleBook} alt="apple-on-book"/>
      </div>
      <img className="img-table" src={table} alt="table"/>
      {/* <div className="todo-notes">
        <h1 style={{color: "#fff"}}>Task "RS Lang" deadline: 21 feb. 2022</h1>
        <AddNotes />
      </div> */}
    </div>
  )
}
