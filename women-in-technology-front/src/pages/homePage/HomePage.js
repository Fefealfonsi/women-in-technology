import React, { useState, useEffect } from "react"
import ReviewCard from '../../components/card/Card'
import {HomeContainer} from './styled'
function HomePage (){
    const [womenList, setWomenList]=useState([])
    const [expanded, setExpanded] = React.useState(false);
    const [favorite, setFavorite] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
       };
     const handleFavoriteClick = () => {
        setFavorite(!favorite);
       };

    useEffect(() => {
      getInfos();
    }, []);
    // console.log(womenList.list)
  
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
                women={women} 
                expanded={expanded} 
                handleExpandClick={handleExpandClick}
                handleFavoriteClick ={handleFavoriteClick}
                favorite={favorite}
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