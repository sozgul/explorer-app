import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, Button, Picker} from 'react-native';
import commonStyles from '../../common/styles';
import styles from './styles';
import FontAwesome, { Icons } from 'react-native-fontawesome';

class PickerInputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValue: props.selectedValue,
      selectedValue: props.selectedValue,
      pickerOpen: false,
    };
  }
  valueChanged(value) {
    const {onChange} = this.props;
    this.setState({selectedValue: value});
    onChange(value);
  }
  onFocusInput() {
    const {onFocus = () => {}} = this.props;
    this.setState({pickerOpen: true});
    onFocus();
  }
  onCancel() {
    const {onChange} = this.props;
    this.setState({selectedValue: this.state.initialValue, pickerOpen: false});
    onChange(this.state.initialValue);
  }

  onDone() {
    this.setState({pickerOpen: false});
  }

  blur() {
    this.setState({pickerOpen: false});
  }

  render() {
    const {options} = this.props;
    const {pickerOpen, selectedValue} = this.state;
    const selectedItem = options.find(item => item.value === selectedValue) || {};

    return (
      <View style={styles.wrapper}>
        <View style={styles.inputWrapper}>
          <TouchableOpacity
            style={[styles.textInput]}
            onPress={this.onFocusInput.bind(this)}
            caretHidden={true}
            editable={false}
          >
            <Text style={[commonStyles.text, styles.dropdown]}>{selectedItem.label}</Text>
          </TouchableOpacity>
          <FontAwesome style = {styles.dropdownIcon}>
            {Icons.caretDown}
          </FontAwesome>
        </View>
        {pickerOpen && (
          <View style={styles.pickerWrapper}>
            <View style={styles.pickerHeader}>
              <Button title="Cancel" onPress={this.onCancel.bind(this)} />
              <Button title="Done" onPress={this.onDone.bind(this)} />
            </View>
            <Picker
              mode="dialog"
              style={[styles.picker]}
              onValueChange={this.valueChanged.bind(this)}
              selectedValue={this.state.selectedValue}
              ref={ref => this._picker = ref}
            >
              {options.sort((option1, option2) => {
                const label1 = option1.label.toLowerCase();
                const label2 = option2.label.toLowerCase();
                if (label1 < label2) {return -1;}
                if (label1 > label2) {return 1;}
                return 0;
              }).map((option, idx) => (
                <Picker.Item label={option.label} value={option.value} key={`${option.value}-${idx}`} />
              ))}
            </Picker>
          </View>
        )}
      </View>
    );
  }
}

PickerInputComponent.propTypes = {
  options: PropTypes.array.isRequired,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func
};

export default PickerInputComponent;
