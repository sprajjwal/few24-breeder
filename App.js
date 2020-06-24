import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, SafeAreaView, FlatList, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight

import { petTypes, cats, dogs } from './breeds';


const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'yellow'
          }
        }}>
        <Stack.Screen name="Home" component={DataList} />
        <Stack.Screen name="Details" component={Item} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function DataList({ navigation }){
  return (
    <View style={styles.scrollView}>
      <FlatList
        data={cats}
        renderItem={({ item, index } ) => {
          return <Button
            title={item.breed}
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              navigation.navigate('Details', {
                breed: item
              });
            }}
          />
        }}
        keyExtractor={ item => item.breed }
        />
    </View>
  );
}

// function DetailsScreen({ route, navigation }) {
//   /* 2. Get the param */
//   const { itemId } = route.params;
//   const { otherParam } = route.params;
//   const { item } = route.params
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//       <Text>itemId: {JSON.stringify(itemId)}</Text>
//       <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() =>
//           navigation.push('Details', {
//             itemId: Math.floor(Math.random() * 100),
//           })
//         }
//       />
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

// function Item(props) {
function Item({ route, navigation }){
  const { breed } = route.params
	return (
		<View style={styles.item}>
		  <Text style={styles.title}>{breed.breed}</Text>
      {Object.keys(breed).map((item, index) => {
        return <Text key={`animal-${index}`} style={styles.fields}>{item}: {breed[item]}</Text>
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
    // marginTop: statusBarHeight,
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
