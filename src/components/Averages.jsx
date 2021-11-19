import React, {useContext} from 'react'
import {Context} from "../context/ContextHeroes"

const Averages = () => {
    const {team} = useContext(Context)
    const weightTeam = team.map(item => item.appearance.weight[1])
    .map(item => 
        { return Number(item.substring(0, item.indexOf(" ")))
    }) 
    const heightTeam = team.map(item => item.appearance.height[1])
    .map(item => 
        { return Number(item.substring(0, item.indexOf(" ")))
    }) 
    const totalWeight = weightTeam
    .reduce((acc, el) => acc + el ,0)
    const totalHeight = heightTeam
    .reduce((acc, el) => acc + el ,0)
    const average = [
        {name: "Height",
        value: Math.floor(totalHeight / weightTeam.length)},
        {name: "Weight",
        value:Math.floor(totalWeight / weightTeam.length)}
];
    return (
        <div>
            
        { team.length > 0 &&
           <>
           <h2>Team average</h2>
           { average.map(item => {
                return (
                    <div key={item.name} className="card border-primary mb-3" >
                        <div className="card-header fs-5">
                           Average team {item.name} : {item.value}
                        </div>
                    </div>
                )
            })}
            </>
            }
        </div>
    )
}

export default Averages
