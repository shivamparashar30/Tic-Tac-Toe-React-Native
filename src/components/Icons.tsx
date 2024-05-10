import { StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

type IconProps = PropsWithChildren<{
    name:string;
}>

 const Icons =({name}:IconProps)=> {
  switch (name) {
    case 'circle':
        return <Icon name='circle-thin' size={38} color='green'/>  
        break;
    case 'cross':
        return <Icon name='times' size={38} color='red'/>  
        break;
  
    default:
        return <Icon name='pencil' size={38} color='gray'/>  
  }
}

const styles = StyleSheet.create({})

export default Icons