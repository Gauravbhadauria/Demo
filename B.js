import { Text } from "react-native"
import C from "./C"
import { useContext } from "react"
import { MyContext } from "./Main"


const B=({name,onClick})=>{
    const myname=useContext(MyContext)
    return(
       <>
        <Text>B{myname}</Text>
        <C name={name} onClick={x=>onClick(x)}/>
       </>
    )
}

export default B