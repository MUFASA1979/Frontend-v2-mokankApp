import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useQuery } from '@tanstack/react-query'

const ItemList = () => {
  useQuery({
    queryKey:["items"],
    queryFn:()=>{}
  })

  return (
    <View>
      <Text>ItemList</Text>
    </View>
  )
}

export default ItemList

