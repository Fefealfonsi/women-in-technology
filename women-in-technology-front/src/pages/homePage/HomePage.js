import React, { useState, useEffect } from "react"
import ReviewCard from '../../components/card/Card'
import {HomeContainer} from './styled'
function HomePage (props){
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

    const getSearch = () => {
      return womenList.list && womenList.list
      .filter((woman) => props.search? woman.name.includes((props.search)) : true)
        
    }

    const searchInList = getSearch()

    const renderAllCards = searchInList.map((woman)=>{
        return(
            <ReviewCard 
                id={woman.id}
                woman={woman} 
                
                
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