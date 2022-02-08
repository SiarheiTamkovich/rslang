import { AddNotes } from "../components/AddNotes/AddNotes";

export const Home = () => {

  return (
    <div className="home-container">
      <h1 style={{color: "#fff"}}>Task "RS Lang" deadline: 21 feb. 2022</h1>
      <AddNotes />
    </div>
  )
}
