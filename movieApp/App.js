import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
  Image
} from 'react-native'

import axios from 'axios'

const App = () => {
  const apiSearch = 'https://api.themoviedb.org/3/search/movie?language=pt-BR&api_key=4a967f81fac3caef839b965dc2c8888b&query='
  const [state, setState] = useState({
    searchText: '',
    results: [],
    selected: {}
  })

  const search = () => {
    axios(apiSearch + state.searchText).then(({ data }) => {
      const results = data.results
      setState(prevState => {
        return { ...prevState, results: results, searchText: '' }
      })
    })
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchbox}
        placeholder='Pesquise um Filme ou Seriado...'
        onChangeText={text => setState(prevState => {
          return { ...prevState, searchText: text }
        })}
        onSubmitEditing={search}
        value={state.searchText}
      />

      <FlatList
        style={styles.results}
        data={state.results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.results}>
            <Text style={styles.heading}>{item.title}</Text>

            {item.poster_path
              ? <Image
                source={{ uri: `https://image.tmdb.org/t/p/w300${item.poster_path}` }}
                style={{
                  height: 450
                }}
                resizeMode="cover"
              />
              : <View style={{
                width: '100%',
                height: 200,
                backgroundColor: '#445565',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Text style={{
                  fontSize: 24
                }}>Sem Imagem</Text>
              </View> }

            <Text style={{
              color: '#FFF',
              fontSize: 16
            }}>{item.overview}</Text>
            <Text>Nota: {item.vote_average}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#223343',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20
  },
  searchbox: {
    fontSize: 20,
    fontWeight: '300',
    padding: 20,
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 10
  },
  results: {
    flex: 1
  },
  movie: {
    flex: 1,
    width: '100%',
    marginBottom: 20
  },
  heading: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: '700',
    padding: 20
    // backgroundColor: '#445565'
  }
})

export default App
