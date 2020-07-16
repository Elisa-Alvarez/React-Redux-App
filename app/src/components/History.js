import React from 'react'
import { connect } from 'react-redux'
import {fetchApi} from '../actions/fetchApi'


const History = (props) =>{
    return(
        <div>
            {!props.today ? (
            <div>
                    <h1>This Day In History</h1>
                    <button onClick={()=>props.fetchApi(props.event)}>Learn about Today</button>
                    
                <h2>
                    {props.date}
                </h2>
                
                <div>
                
                    <p>{props.event}</p>
                    
                    <button>Learn more</button>
                
                </div>
            </div>
            ) :(
                <hi>Loading....</hi>
        
            
        
            )}
       </div>
            )
        }

        export default connect(null, { fetchApi })(History);