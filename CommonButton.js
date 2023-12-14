import { Text, TouchableOpacity, View } from "react-native"


const CommonButton = ({ title, bg, w, h, r, color, onClick, isNext }) => {
   

    


    return (
        <TouchableOpacity style={{
            backgroundColor: bg, width: w,
            height: h, justifyContent: 'center', alignItems: 'center', borderRadius: r ? r : 10, flexDirection: 'row'
        }}
            onPress={() => {
                onClick()
            }}>
            <Text style={{ color }}>{title}</Text>
            {isNext && <Text style={{ color: color }}>{"=>"}</Text>}
        </TouchableOpacity>
    )
}

export default CommonButton