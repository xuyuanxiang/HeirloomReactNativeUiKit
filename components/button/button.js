import React, {Component} from 'react';
import {TouchableHighlight, View, Text} from 'react-native';
import {buttonStyleSheet} from './button-style';
import {
  BUTTON_PRIMARY_BACKGROUND_COLOR_ACTIVE
  , BUTTON_DEFAULT_BACKGROUND_COLOR_ACTIVE
} from "../../core/style/variables";

export class ButtonGroup extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <View></View>
    )
  }
}

export class Button extends Component {

    constructor(props){
      super(props);
      let state = {style:[buttonStyleSheet.button]};
      const {onPress, style} = props;

      if (typeof onPress === 'function') {
        state.onPress = onPress;
      }

      switch (style) {
        case "primary":
          state.style.push(buttonStyleSheet['buttonPrimary']);
          state.textStyle = buttonStyleSheet['buttonPrimaryText'];
          state.underlayColor = BUTTON_PRIMARY_BACKGROUND_COLOR_ACTIVE;
          break;
        default:
          state.style.push(buttonStyleSheet['buttonDefault']);
          state.textStyle = buttonStyleSheet['buttonDefaultText'];
          state.underlayColor = BUTTON_DEFAULT_BACKGROUND_COLOR_ACTIVE;
      }

      this.state = state;
    }

    render() {
        return (
          <TouchableHighlight {...this.state}>
            <Text style={this.state.textStyle}>{this.props.children}</Text>
          </TouchableHighlight>
        );
    }
}
