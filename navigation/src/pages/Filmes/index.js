import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Filmes () {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1, backgroundColor: '#1D1D27' }}>
      <Text>Filmes</Text>

      <Button
        title='Pesquisar Filmes'
        onPress={() => navigation.navigate('FilmesSearch')}
      />
    </View>
  )
}
