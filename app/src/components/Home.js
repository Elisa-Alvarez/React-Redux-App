import React, {useLocalStorage,useState} from 'react'
import History from './History'


function Home (props){
    return(
        <div>
         <History/>
         <button>Write Your Own History</button>
        </div>
    )
}

export default Home