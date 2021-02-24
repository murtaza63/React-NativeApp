import React from 'react'
import {Text, View , Pressable} from 'react-native'
import styles from './styles';



const StyledButton =(props)=>{
// declare multline props
 //const type = props.type;
 //const content = props.content
 //const onPress = props.onPress

 // Same thing declare single line props
 const {type, content, onPress} = props
 const backgroundColor = type === 'primary'? '#171A20CC':'#FFFFFFA6'
 const textColor = type === 'primary'? '#FFFFFF':'#171A20'
 console.log(type)   
    return(
        <View style={styles.container}>
           <Pressable style={[styles.button, {backgroundColor:backgroundColor}]} onPress={()=>{
               onPress()
           }}>
          <Text style={[styles.text, {color:textColor}]}>{content}</Text>
           </Pressable>
        </View>
    )
}



export default StyledButton;