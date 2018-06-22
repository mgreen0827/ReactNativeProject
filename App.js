import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ProgressCircleComponent from './components/ProgressCircleComponent.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      rate: 0
    };

  }

  componentDidMount() {
    //this.ticker = setInterval(() => this.decrease(), 50);
  }

  componentWillUnmount() {
    clearInterval(this.ticker);
  }

  decrease() {
    if (this.state.rate > 0) {
      this.setState({rate: this.state.rate -= .05});
    }
  }

  increase() {
    this.setState({rate: this.state.rate += .02});
  }

  clear() {
    if(this.state.rate) {
      this.setState({rate: this.state.rate = 0});
    }
  }

  render() {
    return (
      <View style={styles.container}>
          <Button onPress={this.increase.bind(this)} title="Pump it up!" style={styles.pumpButton}></Button>
          <ProgressCircleComponent rate={this.state.rate}/>
          <Button onPress={this.clear.bind(this)} title="Clear" style={styles.clearButton}></Button>
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
  },
  pumpButton: {
    paddingBottom: 5,
    color: 'blue'
  },
  clearButton: {
    marginTop: 5,
    color: 'red'
  }
});
