import react, { useState } from "react"
import Card from '../../components/card/Card'
function HomePage (){
    const [women, setWomen]=useState(undefined)

    return(
        <div>
            <Card/>
        </div>
    )
}
export default HomePage 