import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, FlatList, Dimensions } from 'react-native';
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight

import { petTypes, cats, dogs } from './breeds';

export default function App() {
  return (
    // <ScrollView style={styles.scrollView}>
    //   {cats.map((item, index) => {
    //     return <Item title={`${index} ${item.breed}`} key={index} />
    //   })}
    // </ScrollView>
    <View style={styles.scrollView}>
      <FlatList
        data={cats}
        renderItem={({ item, index } ) => {
          return <Item breed={item} />
        }}
        keyExtractor={ item => item.breed }
        />
    </View>
  );
}

function Item(props) {
	return (
		<View style={styles.item}>
		  <Text style={styles.title}>{props.breed.breed}</Text>
      {Object.keys(props.breed).map((item, index) => {
        return <Text key={`animal-${index}`} style={styles.fields}>{item}: {props.breed[item]}</Text>
      })}
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    marginTop: statusBarHeight,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    width: Dimensions.get('window').width,
    padding: 5,
    paddingLeft: 20,
    backgroundColor: 'yellow',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 24,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    fontWeight: 'bold'
  },
  fields: {
    marginLeft: 20,
    fontWeight: '300',
    fontSize: 18,
  }
});
