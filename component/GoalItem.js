import React ,{useState,useEffect}from 'react'
import {StyleSheet, Text, View,TouchableOpacity,Modal,Button} from "react-native";

const GoalItem = (props)=>{



    const onData = ()=>{
        // useEffect(() => {
        //     console.log("useEffect")
        // })
        props.onGet(props.id)

    }
//props.onGet(props.id)
return (
    <View style={{flexDirection:'row'}}>
        <View  style={{ flex: 3 }}>

                <TouchableOpacity>
                <View style={styles.listItem}>
                <Text>{props.title}</Text>
                </View>
                </TouchableOpacity>
        </View>

        <View style={{ flex: 1 }}>
            <TouchableOpacity  style={styles.appButtonContainer} onPress={onData} >
                <View style={styles.buttone_container}>
                    <Text style={{color:'white'}}>UPDATE</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
            <TouchableOpacity   style={styles.appButtonContainer} onPress={()=>props.onDelete(props.id)} >
                <View style={styles.buttone_container_delete}>
                    <Text style={{color:'white'}}>DELETE</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
)
}

const styles = StyleSheet.create({
    appButtonContainer : {
        paddingLeft :5,

        fontSize: 18,
        color: "#fff",
        // fontWeight: "bold",
        alignContent : 'center',

        textTransform: "uppercase"
    },

    listItem : {
        padding :5,
        height: 40,
        alignContent : 'center',
        justifyContent:'center',alignItems:'center',

        // padding  : 10,
        marginVertical : 5,
        backgroundColor : '#ccc',
        borderColor:  'black',
        borderWidth: 1
    },
    buttone_container : {


        height: 40,
        justifyContent:'center',alignItems:'center',

        marginVertical : 5,
        backgroundColor : 'blue',
        borderColor:  'black',
        borderWidth: 1
    },
    buttone_container_delete : {


        height: 40,
        justifyContent:'center',alignItems:'center',
        marginVertical : 5,
        backgroundColor : 'red',
        borderColor:  'black',
        borderWidth: 1
    }
})
export default GoalItem

