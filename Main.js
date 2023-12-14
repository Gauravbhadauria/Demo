import { Alert, Text, View } from "react-native"

import React, { createContext, useEffect, useState } from 'react'
import CommonButton from "./CommonButton";
import A from "./A";
export const MyContext = createContext()
const Main = () => {

    const [count, setCount] = useState(0)

    //1st time and again on condition 
    useEffect(() => {
        console.log("1rd useEffect")
    }, [count])


    // every time
    useEffect(() => {
        console.log("2st useEffect")
    })



    //only one time
    useEffect(() => {
        console.log("3rd useEffect")
    }, [])

    //update



    return (
        <MyContext.Provider value={"saurav"}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 30 }}>{count}</Text>
                <Text style={{ fontSize: 30, marginTop: 40, borderWidth: 1, padding: 10 }}
                    onPress={() => {
                        setCount(count + 1)
                    }}>{"Change Count"}</Text>

                <A name={"gaurav"} onClick={x => {
                    Alert.alert(x)
                }} />

            </View>
        </MyContext.Provider>
    )

}

export default Main;
//useState
//useEffect
//useContext

//useReducer
//useRef
//useMemo
//useCallback
//useWindoDimesions
//useColorTheme



