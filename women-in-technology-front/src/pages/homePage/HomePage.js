import React, { useState, useEffect } from "react"
import ReviewCard from '../../components/card/Card'
import {HomeContainer} from './styled'
function HomePage (){
    const [womenList, setWomenList]=useState([])
    


    useEffect(() => {
      getInfos();
    }, []);
   
  
  
    const getInfos = () => {
      const url = "women.json";
      fetch(url)
        .then((response) => response.json())
        .then((cards) => {
          setWomenList(cards);
          
        })
        .catch((err) => {
          alert("Error Reading data " + err);
        });
    };

    

    let renderAllCards = womenList.list && womenList.list.map((women)=>{
        return(
            <ReviewCard 
                id={women.id}
                women={women} 
                list={womenList.list} 
                // handleExpandClick={()=>handleExpandClick(women.id)}
                // handleFavoriteClick ={()=>handleFavoriteClick(women.id)}
                // favorite={favorite}
            />
        )
    })
    return(
        <HomeContainer>
            {renderAllCards}
        </HomeContainer>
    )
}
export default HomePage 