import React ,{useState,useEffect}from 'react'
import {Button, Modal, StyleSheet, Text, TextInput, View} from "react-native";


const GoalUpdate = (props)=> {
    // console.log(data)
     const [firstName,setFirstName]  = useState('')
     const [oldfirstName,setoldFirstName]  = useState('')
    // setFirstName(data[0])
     const [lastName,setLastName]  = useState('')
     const [oldlastName,setoldLastName]  = useState('')

    console.log(props.getDataForUpdate)


    let data = []
    let index
    // const [name, setName] = useState({
    //     firstName:  '',
    //     lastName:  ''
    // })
    useEffect(() => {

        if (Boolean(props.getDataForUpdate)) {

        // console.log(props.getDataForUpdate)
        data = props.getDataForUpdate.value.split(' ')
        console.log("data", data)
        index = props.getDataForUpdate.id
        // useEffect(() => {
        //     console.log("useEffect")
        // })
        // setName({firstName:data[0],lastName : data[1]})
        setoldFirstName(data[0])
        setoldLastName(data[1])

        // console.log('firstName', firstName, ' lastName', lastName)
        // setFirstName

    }
    })



    const firstNameInputHandler = (firstName)=> {
             setFirstName(firstName)

    }

    const lastNameInputHandler = (lastName)=>{
            setLastName(lastName)
    }


    const [errorMsg,setErrorMsg] = useState('')
    const errorHandler = ()=>{
        if(firstName==='' || firstName===null){
            // error_msg = 'please enter proper first_name'
            setErrorMsg('please enter first name')
        }else{
            setErrorMsg('')

        }

    }
    const addNameHandler=()=>{
        props.onGoalInput(firstName +' '+lastName,index)
        setFirstName('')
        setLastName('')

        setErrorMsg("");
    }
    const cancelHandler = ()=>{
        props.onCancel()
        setFirstName('')
        setLastName('')
    }


    return (

        <Modal visible={props.visible}>
            <View style={{flex : 1,justifyContent: "center",alignItems : 'center'}}>
                <TextInput placeholder="input first name" style={styles.textbox} onChangeText={firstNameInputHandler} onBlur={errorHandler} defaultValue={oldfirstName}/>
                <Text>{errorMsg}</Text>
                <TextInput placeholder="input last name" style={styles.textbox} onChangeText={lastNameInputHandler} defaultValue={oldlastName}/>
                <View style={{flexDirection: 'row',paddingTop:20}}>
                    <View style={{flex: 1,backgroundColor: 'blue', width : '50%',borderColor:'black',borderWidth:1,padding: 10,marginLeft:40}}>
                        <Button  title="update" color="white" onPress={addNameHandler}/>
                    </View>
                    <View style={{flex: 1,backgroundColor: 'red', width : '50%',borderColor:'black',borderWidth:1,padding: 10,marginRight:40}}>
                        <Button title="cancel" color="white" onPress={cancelHandler}/>
                    </View>
                </View>
                </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    textbox : {
        width : '80%',borderColor:'black',borderWidth:1,padding: 10,margin:10
    },

})
export default GoalUpdate


