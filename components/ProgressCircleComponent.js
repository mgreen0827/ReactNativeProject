import React from 'react';
import { ProgressCircle }  from 'react-native-svg-charts';

export default class ProgressCircleComponent extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.rate);
    return (
      <ProgressCircle
        style={ { height: 200, width: 200 } }
        progress={ this.props.rate }
        progressColor={'rgb(134, 65, 244)'}
      />
    );
  }
}