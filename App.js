import React from 'react';
import { StyleSheet, Text, View, TextInput, Picker } from 'react-native';
import { Icon, Button, Input , Slider } from 'react-native-elements';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { text: '$'+'', text2:'$'+'', text3: '' };
  }
  

  render() {  
    return (
      <View style={styles.container}>
        <Text>PayOff</Text>

        <Icon
        name='sc-telegram'
        type='evilicon'
        color='#517fa4'
  
      />


      <Text>Calculate your pay off pattern below</Text>

      <TextInput
      placeholder='Total Debt'
        style={{height: 40, width:120, borderColor: 'gray'}}
        type='number'
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />

      <TextInput
      placeholder='Mothly Payments'
        style={{height: 40,width:120, borderColor: 'gray'}}
        type='number'
        onChangeText={(text2) => this.setState({text2})}
        value={this.state.text2}
      />
      
      {<Text>Target PayOff Months</Text>}
      {/* <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}> */}
      {/* <Slider
        value={this.state.value}
        onValueChange={(value) => this.setState({ value })} />
      <Text>Pay Off Months: {this.state.value}</Text> */}
      {/* </View> */}
      
      <Picker
        selectedValue={this.state.language}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
        <Picker.Item label="3" value="3" />
        <Picker.Item label="6" value="6" />
        <Picker.Item label="9" value="9" />
        <Picker.Item label="12" value="12" />
      </Picker>

       

      <Button
      title='CALCULATE'
      onPress= {this.calculatePayment}
      />
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'grey',
    
  },
});
