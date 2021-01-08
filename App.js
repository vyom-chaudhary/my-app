import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View ,Button,TextInput,ScrollView,FlatList} from 'react-native';
import GoalInput from './component/GoalInput'
import GoalItem from './component/GoalItem'
import GoalUpdate from './component/GoalUpdate'


export default function App() {
    const [state, setState] = useState({isUpdate:null, isUpdateMode:false})
  const [courseGoal,setCourseGoal] = useState([])
  const [updateCourseGoal,setUpdateCourseGoal] = useState([])
    const [isAddMode,setIsAddMode] = useState('false')
    const [isUpdateMode,setIsUpdateMode] = useState(false)
    const [isUpdate,setUpdate] = useState('')

    // const goalInputHandler= (enteredGoal)=>{setEnteredGoal(enteredGoal);
  // }
  const addGlobalHandler = (goalTitle) =>{
   setCourseGoal(currentGoals=>[...currentGoals, {id : Math.random().toString(),value : goalTitle}])
    setIsAddMode('false')
    setIsUpdateMode('false')
  }
    const updateGlobalHandler = (goalTitle,GoalId) =>{
        const index = courseGoal.findIndex((obj)=>obj.id===GoalId)
         courseGoal[index].value = goalTitle
        setCourseGoal(courseGoal)
        setIsAddMode('false')
        setState({ ...
        {
            isUpdateMode:false
        }})

        setIsUpdateMode('false')
    }
  // let getData = null
    const getGoalHandler = (goalId)=>{

      const updateGoal = courseGoal.filter(data=>{
          return data.id===goalId
      })
        console.log("getGoalHandler",updateGoal)
        setState({ isUpdate:updateGoal[0], isUpdateMode:true})

// console.log(updateGoal)
        //setUpdate(updateGoal[0])
        //setIsUpdateMode(true)
         // console.log(getData)
    }

  const removeGoalHandler = (goalId)=>{
      setCourseGoal(currentGoals=>{
          return currentGoals.filter((data)=> {
              return data.id != goalId
          })
      })

  }
  const cancelGoalAdditionHandler = ()=>{
      // setIsAddMode('false')
      // setIsUpdateMode('false')
      setState({ ...{ isUpdateMode:false}})
      setIsAddMode(false)

  }

  return (
    <View style={{paddingTop :80,padding : 30}}>
    <Button title="add new one" onPress={()=>setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onGoalInput={addGlobalHandler} onCancel={cancelGoalAdditionHandler}/>
      <GoalUpdate visible={state.isUpdateMode} onGoalInput={updateGlobalHandler} onCancel={cancelGoalAdditionHandler} getDataForUpdate={state.isUpdate}/>
      <FlatList keyExtracter={(item,index)=>item.id} data={courseGoal} renderItem={itemData=><GoalItem id={itemData.item.id} onDelete={removeGoalHandler} onGet={getGoalHandler} title={itemData.item.value}/>}/>
    </View>
  );
}

