import React, { Component } from 'react';
import styled from 'styled-components';
import { Actions } from 'react-native-router-flux';
import { TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
  onRowPress() {
    Actions.employeeEdit({ employee: this.props.employee });
  }

  render() {
    const { name } = this.props.employee;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <TitleStyle>{name}</TitleStyle>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const TitleStyle = styled.Text`
  font-size: 18;
  padding-left: 15;
`;

export default ListItem;
