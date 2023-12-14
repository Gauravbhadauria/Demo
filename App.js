import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import Demo from './Demo'
class App extends React.Component {
    constructor() {
        super()
        console.log("constructor called")

        this.state = {
            count: 0
        }

    }
    componentDidMount() {
        console.log("componentDidMount called")
    }

    ///
    componentDidUpdate() {
        console.log("componentDidUpdate called")
    }
    //
    //mounting
    //   getDrivedStateFromProps(props,state){
    //     //object 
    //     return object
    //   }

    getSnapshotBeforeUpdate(prevProps, prevState) {

        console.log(prevState)
    }

    render() {
        console.log("render called")
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{this.state.count}</Text>
                <TouchableOpacity style={{ padding: 10, borderWidth: 1, marginTop: 20 }}
                    onPress={() => {
                        this.setState({ count: this.state.count + 1 })
                    }}>
                    <Text>Increase Count</Text>
                </TouchableOpacity>
            {this.state.count<10 && <Demo name={"gaurav"}/>} 


                {/* {this.state.count == 2 ? <Demo name={"gaurav"} /> : null} */}



            </View>
        )
    }

}

export default App;


// Mounting ( birth)
//1- constructor
//2- getDrivedStateFromProps
//3- render
//34- componentDidMount()

//Updating 
//1-getDrivedStateFromProps
//2-shouldComponentUpdate
//3- render
//4-getSnapshotBeforeUpdate
//5-componentDidUpdate

//Unmounting 

//1- componentWillUnmount




