import { Text } from "react-native"


const C=({name,onClick})=>{
    return(
        <Text onPress={()=>{
            onClick("say hello")
        }}>{name}</Text>
    )
}

export default C