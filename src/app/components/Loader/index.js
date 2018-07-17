import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Animated, Easing } from 'react-native';
import FontAwesome, {Icons} from 'react-native-fontawesome';
import defaultStyles from './styles';

class LoaderComponent extends Component {
  constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.spin();
  }

  spin() {
    this.spinValue.setValue(0);

    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true
    }).start(() => this.spin());
  }
  
  render() {
    const rotate = this.spinValue.interpolate({inputRange: [0, 1], outputRange: ['0deg', '360deg']});
    let iconStyles = [defaultStyles.icon];
    const {style: moreStyles} = this.props;

    if (moreStyles) {
      iconStyles = iconStyles.concat(moreStyles); 
    }

    return (
      <Animated.View style={{transform: [{rotate}]}}>
        <FontAwesome style={iconStyles}>
          {Icons.circleONotch}
        </FontAwesome>
      </Animated.View>
    );
  }
}

LoaderComponent.propTypes = {
  style: PropTypes.any
};

export default LoaderComponent;
