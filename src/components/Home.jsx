import React, {useContext} from 'react'
import { Context } from '../context/ContextHeroes'
import {Link} from "react-router-dom"
import TeamCumulative from './TeamCumulative';
import imgIron from '../assets/iron-man.jpg'

const Home = () => {
const {team, setTeam} = useContext(Context);
const deleteHeroe = (id) =>{
    const lista = team.filter(h => h.id !== id)
    setTeam(lista)
}
    return (
        <div>
            <TeamCumulative />
            <div className="d-flex flex-wrap justify-content-evenly">
            {
                team.length > 0 ? 
                team.map(heroe => {
                    return (
                        <div 
                         key={heroe.id} 
                         className="card shadow my-5 "
                          style={{"width": "18rem"}}
                         >
                                <img 
                                src={heroe.image.url} 
                                className="card-img-top" 
                                alt={`heroe ${heroe.name}`}/>
                                <div className="card-body">
                                    <h3 
                                    className="card-title">
                                        {heroe.name}
                                    </h3>
                                </div>
                                <div 
                                className="p-2 my-2 bg-light">
                                    <p>Combat</p>
                                <div className="progress" >
                                    <div 
                                    className="progress-bar bg-primary bg-gradient"
                                    role="progressbar" 
                                    style={{"width": `${heroe.powerstats.combat }%`}} 
                                    aria-valuenow="25" 
                                    aria-valuemin="0" 
                                    aria-valuemax="100"
                                    >
                                  {heroe.powerstats.combat === "null" ? 0  : heroe.powerstats.combat}%
                                    </div>
                                </div>
                                <p>Durability</p>
                                <div className="progress">
                                    <div 
                                    className="progress-bar bg-success bg-gradient"
                                    role="progressbar" 
                                    style={{"width": `${heroe.powerstats.durability}%`}} 
                                    aria-valuemin="0" 
                                    aria-valuemax="100"
                                    >
                                  {heroe.powerstats.durability === "null" ? 0 : heroe.powerstats.durability}%
                                    </div>
                                </div>
                                <p>Intelligence</p>
                                <div className="progress">
                                    <div 
                                    className="progress-bar bg-secondary bg-gradient"
                                    role="progressbar" 
                                    style={{"width": `${heroe.powerstats.intelligence}%`}} 
                                    aria-valuenow="25" 
                                    aria-valuemin="0" 
                                    aria-valuemax="100"
                                    >
                                  {heroe.powerstats.intelligence === "null" ? 0 : heroe.powerstats.intelligence}%
                                    </div>
                                </div>
                                <p>Power</p>
                                <div className="progress">
                                    <div 
                                    className="progress-bar bg-danger bg-gradient"
                                    role="progressbar" 
                                    style={{"width": `${heroe.powerstats.power}%`}} 
                                    aria-valuenow="25" 
                                    aria-valuemin="0" 
                                    aria-valuemax="100"
                                    >
                                  {heroe.powerstats.power === "null" ? 0 : heroe.powerstats.power}%
                                    </div>
                                </div>
                                <p>Speed</p>
                                <div className="progress">
                                    <div 
                                    className="progress-bar bg-info bg-gradient"
                                    role="progressbar" 
                                    style={{"width": `${heroe.powerstats.speed}%`}} 
                                    aria-valuenow="25" 
                                    aria-valuemin="0" 
                                    aria-valuemax="100"
                                    >
                                  {heroe.powerstats.speed === "null" ? 0 : heroe.powerstats.speed }%
                                    </div>
                                </div>
                                <p>Strength</p>
                                <div className="progress">
                                    <div 
                                    className="progress-bar bg-dark"
                                    role="progressbar" 
                                    style={{"width": `${heroe.powerstats.strength}%`}} 
                                    aria-valuenow="25" 
                                    aria-valuemin="0" 
                                    aria-valuemax="100"
                                    >
                                  {heroe.powerstats.strength === "null" ? 0 : heroe.powerstats.strength}%
                                    </div>
                                </div>
                                </div>
                                <div className="p-2">
                                <button
                                onClick={()=> deleteHeroe(heroe.id)}
                                 className="btn btn-outline-danger w-50">
                                     Delete  <i className="mx-2 fas fa-trash"></i>
                                </button>
                                <Link to={`/detalles/${heroe.id}`}
                                className="btn btn-outline-dark w-50">
                                    See more <i className="mx-2 fas fa-eye"></i>
                                </Link>
                                </div>
                            </div>
                    )
                })
                : <div className="mt-5">
                    <h2>Here you will see your team and its information, look for your team now <Link className="text-info" to="/search">Search</Link></h2>
                    
                    <hr/>
                   
                    <h3>Remember that </h3>
                    <h4>"Every man is a hero and an oracle to someone."</h4>
                    <img className="img-home" src={imgIron} alt="imagen de iron man"/>
                    
                  </div>
            }
            </div>
        </div>
    )
}

export default Home
