import React,{useContext, useState} from 'react'
import {Context} from "../context/ContextHeroes"

const SearchResults
 = () => {
    const {data,team,setTeam,} = useContext(Context)
    const [alert, setAlert] = useState("")
    const [error, setError] = useState(false)
    const bads = team.filter( b =>  b.biography.alignment === "bad")
    const goods = team.filter( b =>  b.biography.alignment === "good")
    const add = (heroe)=>{
        if(team.length >= 6){
            setError(true)
            setAlert("You cannot have more than 6 heroes in your team");
            return
        }
        if(heroe.biography.alignment === "bad" && bads.length >= 3){
            setAlert("You cannot choose more than three villains")
            setError(true)
            return
        }
        if(heroe.biography.alignment === "good" && goods.length >= 3){
            setAlert("You cannot choose more than three good Heroes")
            setError(true)
            return
        }
        if(!team.includes(heroe) ){
            setTeam([...team,heroe])
            setError(false)
            }else {
                setAlert("This hero has already been selected");
                setError(true)
            }
    }
    return (
        <div>
           { error ?
            <div 
            className="alert alert-danger text-center fs-3 mt-5" 
            role="alert">
                  {alert}
                  <br/>
                  <button 
                  className="btn btn-danger" 
                  onClick={()=> setError(false)}> ok</button>
            </div>
            :
        <div className="d-flex flex-wrap justify-content-evenly">
            {
                data.length > 0 && (
                data.map(heroe => {
                   return ( 
                 <div 
                    key={heroe.id}
                    className="card shadow my-5" 
                    style={{"width": "18rem"}}>
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
                        <div>
                        <button 
                        onClick={()=>add(heroe)}
                        className={`btn btn-outline-${!team.includes(heroe) ? "primary" : "danger"} w-100`}>
                            {
                                !team.includes(heroe) ?
                                "add to team" :
                                 <div>
                                     Selected 
                                     <i className="fas fa-check mx-3"></i>
                                 </div>
                            }
                        </button>
                        </div>
                       
                     </div>
                     )
                })) 
            }
            
        </div>}
        </div>
    )
}

export default SearchResults

