import React, {useContext} from 'react'
import { Context } from "../context/ContextHeroes.js";
import { useParams,Link } from "react-router-dom";


const Details = () => {
  const {id} = useParams();
  const {team} = useContext(Context);
  const heroeDetalles = team.filter(hr => hr.id === id);
  
    return (
        <div className="mt-5">
            {
            heroeDetalles.map(heroe => {
              return (
                <div key={heroe.id} className="card mb-3 shadow  mt-5  fs-5" >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={heroe.image.url} className="img-fluid rounded-start" alt={heroe.name}/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{heroe.biography['full-name']}</h5>
                      <p className="card-text">Height: {heroe.appearance.height[1]}</p>
                      <p className="card-text">Weight: {heroe.appearance.weight[1]}</p>
                      <p className="card-text">Alias: {heroe.biography.aliases.map(n => <li key={n}>{n}</li>)}</p>
                      <p className="card-text">Eye color: {heroe.appearance["eye-color"]}</p>
                      <p className="card-text">Hair color: {heroe.appearance["hair-color"]}</p>
                      <p className="card-text">Workplace: {heroe.work.base}</p>
                    </div>
                  <Link to="/" className="mx-5 btn btn-dark">Back</Link>

                  </div>
                </div>
              </div>
              )
            })
            }
        </div>
    )
}

export default Details
