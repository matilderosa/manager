import React, { Component } from 'react';
import { CardSection, Input } from "./common";
import { Picker, Text, View} from "react-native";
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-555"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value})}
          >
            <Picker label="Monday" value="Monday" />
            <Picker label="Tuesday" value="Tuesday" />
            <Picker label="Wednesday" value="Wednesday" />
            <Picker label="Thursday" value="Thursday" />
            <Picker label="Friday" value="Friday" />
            <Picker label="Saturday" value="Saturday" />
            <Picker label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
      </View>
    )
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
  },
  shiftContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);