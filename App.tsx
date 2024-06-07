import React, { useEffect,useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
const App=()=> {
  const [data,setData]=useState([])
  const getAPIData= async() => {
    const url='https://jsonplaceholder.typicode.com/posts';
    let result=await fetch(url);
    result= await result.json()
    setData(result)

  }
  useEffect(() => {
    getAPIData();
  },[]);

  return (
    <ScrollView>
<View>
  <Text style={{fontSize:30}}>List with API call</Text>
  {data.length?data.map((item) =>
 
    <View style={{padding:10,borderBottomColor:'grey',borderBottomWidth:2}}>
      <Text style={{fontSize:20}}>ID:{item.id}</Text>
      <Text style={{fontSize:20}}>Title:{item.title}</Text>
      <Text style={{fontSize:20}}>Body:{item.body}</Text>
    </View>
   
  )
  :null}
</View>
</ScrollView>
  );
}



export default App;
