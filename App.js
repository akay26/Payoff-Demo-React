import React from 'react';
import { StyleSheet, Text, Alert, Image, View, TouchableOpacity, TextInput, Picker, FlatList, ActivityIndicator, Animated } from 'react-native';
import { Icon, Button, Input, Badge, Card, ListItem, FormValidationMessage } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';


class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { text: '', text2: '', text3: '', text4:'', isLoading: true };
  }

  componentDidMount() {
    let localApiUrl = 'http://192.168.0.8:3000/tasks'
    return fetch(localApiUrl)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(this.state.response)
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });


  }
  

  handlePress = async () => {
    fetch('http://192.168.0.8:3000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "name": this.state.text4,
        "amount": this.state.text2,
        "totaldebt": this.state.text,
        "months" :this.state.text3
        }
      )
    }).then((response) => response.json())
      .then((responseJson) => {
        Alert.alert("Confirm that" +' '+'Total Debt is'+' '+ responseJson.totaldebt+' '+'Payment Amount is'+' '+ responseJson.amount+' '+'for'+' '+responseJson.name);
      })
      .catch((error) => {
        console.error(error);
      });
  }


  // filter(name, myArray){
  //     for (var i=0; i<this.state.dataSource.length;)
  // }

  render() {
  
 
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>PayOff</Text>

        <Icon
          name='sc-telegram'
          type='evilicon'
          color='#517fa4'

        />

        <Text>Calculate your pay off pattern below</Text>

         <TextInput
          placeholder='Your Email!'
          placeholderTextColor="#000"
          errorStyle={{color:'red'}}
    
          style={{ height: 40, width: 120, borderColor: 'black' }}
          type='numeric'
          onChangeText={(text4) => this.setState({ text4 })}
          value={this.state.text4}
        />

        <TextInput
          placeholder='Total Debt'
          placeholderTextColor="#000"
          style={{ height: 40, width: 120, borderColor: 'gray' }}
          keyboardType='numeric'
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />

        <TextInput
          placeholder='Monthly Payments'
          placeholderTextColor="#000"
          style={{ height: 40, width: 120, borderColor: 'gray' }}
          keyboardType='numeric'
          onChangeText={(text2) => this.setState({ text2 })}
          value={this.state.text2}
        />

        <Text>Target PayOff Months</Text>
        <TextInput
          placeholder='Months'
          placeholderTextColor="#000"
          style={{ height: 40, width: 120, borderColor: 'gray' }}
          keyboardType='numeric'
          onChangeText={(text3) => this.setState({ text3 })}
          value={this.state.text3}
        />

        <Text>Please click link below to confirm before calculating</Text>
        <TouchableOpacity onPress={this.handlePress.bind(this)}><Text style={{paddingTop: 20, paddingBottom: 20, color: '#F08080'}}> Confirm Your payment plan </Text></TouchableOpacity>

        <Button disabled={false}
          title='CALCULATE'
          onPress={() =>
            this.props.navigation.navigate('Details', {name: this.state.text4})
          }
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true };
    this.countData = this.countData.bind(this);
  }

 async componentDidMount() {
    let localApiUrl = 'http://192.168.0.8:3000/tasks/'
    return fetch(localApiUrl+this.props.navigation.state.params.name)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(this.state.response)
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });

      this.countData()

  }
  
  countData() {
      console.log(item.dataSource)
  }
 

  handlePressDelete = async () => {
    fetch('http://192.168.0.8:3000/tasks', {
      method: 'DELETE',
      headers: 
   { 'Postman-Token': 'c3a534cf-e92b-43a7-89e0-61942c433bd7',
     'Cache-Control': 'no-cache',
     'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
  formData: {} })
  .then((response) => response.json())
  .then((responseJson) => {
    Alert.alert("Are you sure you want to remove summary?");
  })
  .catch((error) => {
    console.error(error);
  });
}

filterData(nameKey, myArray){

  for (var i=0; i<myArray.length; i++){
    if(myArray[i].name ===nameKey){
      return myArray[i]
    }
  }

}

  keyExtractor = (item, index) => index
  
  renderItem = ({ item }) => (
    
    <ListItem
      title={item.name+' '+'Your Monthly Payment Choice is $'+' '+item.amount}
      subtitle={item.name+' '+'You should pay $'+' '+(((item.totaldebt - (item.amount*item.months))/item.months))+' '+'more each month'}
      leftAvatar={{
        source: item.avatar_url && { uri: item.avatar_url },
        title: item.name[0]
      }}
    />
  )


  render() {

    var array= [{"status":["Credit Cards"],"_id":"5ba7fe01038e7542181c4a75","name":"Ankir","amount":"3000","totaldebt":"5000","months":"25","Created_date":"2018-09-23T20:56:33.704Z","__v":0},{"status":["Credit Cards"],"_id":"5ba8040c038e7542181c4a76","name":"New","amount":"500","totaldebt":"8000","months":"6","Created_date":"2018-09-23T21:22:20.282Z","__v":0},{"status":["Credit Cards"],"_id":"5ba8042d038e7542181c4a77","name":"New","amount":"500","totaldebt":"8000","months":"6","Created_date":"2018-09-23T21:22:53.400Z","__v":0}]
    var arrayData= this.state.dataSource;
    console.log(this.props.navigation.state.params.name)
    
    
  
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
      <Icon
          name='money-off'
          type='MaterialIcons'
          color='#517fa4'

        />

         <Button disabled={false}
          title='Remove My Summary'
          // onPress={() =>
          //   this.props.navigation.navigate('Home')
          // }
          onPress={this.handlePressDelete.bind(this)}
        />
    
    {/* <TouchableOpacity onPress={this.handlePressDelete.bind(this)}><Text style={{paddingTop: 20, paddingBottom: 20, color: '#FF0000'}}> Delete Your payment plan </Text></TouchableOpacity> */}

        <Text>                        Here is Your Choice Summary</Text>
        <FlatList
          // keyExtractor={this.keyExtractor}
          keyExtractor={(item, index)=> item._id}
          data={this.state.dataSource}
          renderItem={this.renderItem}
        />

        

      

      </View>
    );
  
  }
}

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
},
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    backgroundColor: '#00FF00',
    // alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'grey',

  },
});




















