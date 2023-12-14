import { Text } from "react-native"
import B from "./B"


const A=({name,onClick})=>{
    return(
       <>
        <Text>A</Text>
        <B name={name} onClick={x=>onClick(x)}/>
       </>
    )
}

export default A