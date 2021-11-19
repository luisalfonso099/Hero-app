import React, {useContext} from 'react'
import { Context } from '../context/ContextHeroes'
import Averages from './Averages'

const heroeImages = require.context("../assets", true)

const TeamCumulative = () => {
    const {team} = useContext(Context)
    const powerTeam =
     team.reduce((acc, el)=> 
      el.powerstats.power === "null" ? JSON.parse(el.powerstats.power) + 0 + Number(acc) : Number(el.powerstats.power) + Number(acc) ,[])
    const combatTeam = 
    team.reduce((acc, el)=> 
    el.powerstats.combat === "null" ? JSON.parse(el.powerstats.combat) + 0 + Number(acc) : Number(el.powerstats.combat) + Number(acc) ,[])
    const durabilityTeam = 
    team.reduce((acc, el)=> 
      el.powerstats.durability === "null" ? JSON.parse(el.powerstats.durability) + 0 + Number(acc) : Number(el.powerstats.durability) + Number(acc) ,[])
    const intelligenceTeam = 
    team.reduce((acc, el)=> 
    el.powerstats.intelligence === "null" ? JSON.parse(el.powerstats.intelligence) + 0 + Number(acc) : Number(el.powerstats.intelligence) + Number(acc) ,[])
    const speedTeam = 
    team.reduce((acc, el)=> 
      el.powerstats.speed === "null" ? JSON.parse(el.powerstats.speed) + 0 + Number(acc) : Number(el.powerstats.speed) + Number(acc) ,[])
    const strengthTeam =
    team.reduce((acc, el)=> 
    el.powerstats.strength === "null" ? JSON.parse(el.powerstats.strength) + 0 + Number(acc) : Number(el.powerstats.strength) + Number(acc) ,[])
    const powerstats = [
        {name: 'Power',value:  powerTeam},
        {name:"Combat", value: combatTeam},
        {name: "Durability", value: durabilityTeam},
        {name:"Intelligence", value: intelligenceTeam},
        {name: "Speed", value: speedTeam},
        {name: "Strength", value: strengthTeam}]
    const orden = powerstats.sort((a,b) =>  a.value - b.value).reverse();
    return ( team.length > 0 &&
        <div className="row my-5 text-center fs-5 d-flex justify-content-evenly">
            <div className="col-md-7 ">
                <h2>This is a skillful team in {orden[0].name}</h2>
                <img className="icono-full shadow" alt={orden[0].name} src={heroeImages(`./${orden[0].name}.png`).default}/>
                  <Averages/>
            </div>
            <div className="col-md-5">
               {
                   orden.map((stat, index) => {
                       return (
                           <div key={stat.name} >
                           {
                            stat.value.length !== 0 &&
                           <div className="card ">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <div className="d-flex justify-content-between">
                                     
                                       <p>#{index + 1} {stat.name}</p>
                                       <div className="w-25">
                                       <img 
                                       alt={stat.name} 
                                       className="icono mx-3" 
                                       src={heroeImages(`./${stat.name}.png`).default}/>
                                        {stat.value}
                                        </div>
                                    </div>
                                </li>
                            </ul>
                           </div>
                           }
                    </div>
                       
                       ) 
                   })
               }
               </div>
               
            <hr/>
        </div>
    )
}

export default TeamCumulative
