import React, {Component, ToolbarAndroid, StyleSheet, Platform} from 'react-native';
import {DARK, ENERGIZED} from '../../common/variables';
var STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : 25;
var HEADER_HEIGHT = Platform.OS === 'ios' ? 44 + STATUS_BAR_HEIGHT : 56 + STATUS_BAR_HEIGHT;

const styles = StyleSheet.create({
    toolbarAndroid: {
        backgroundColor: DARK,
        height: HEADER_HEIGHT - STATUS_BAR_HEIGHT
    }
});

export default class NavigationAndroid extends Component {

    constructor(props) {
        super(props);
        const {title, backButton, actions} = props;
        let state = {};

        if (title) {
            state.title = title;
        }

        if (backButton) {
            state.navIcon = require('../../img/Left-24.png');
            if (typeof backButton.onPress === 'function') {
                state.onIconClicked = backButton.onPress;
            }
        }

        if (Array.isArray(actions)) {
            if (actions.length == 1) {
                state.actions = [{...actions[0], show: 'always',icon: require('../../img/Settings-24.png')}];
            } else {
                state.actions = actions;
            }
        }

        this.state = state;
    }

    _onActionSelected(position:Number) {
        let actions = this.state.actions;
        let action = actions[position];
        if (action && typeof action.onPress === 'function') {
            action.onPress();
        }
    }

    render() {
        return (
            <ToolbarAndroid {...this.state}
                titleColor={ENERGIZED}
                onActionSelected={this._onActionSelected.bind(this)}
                style={styles.toolbarAndroid}/>
        );
    }
}
