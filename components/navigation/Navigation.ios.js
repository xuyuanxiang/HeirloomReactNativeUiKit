import NavigationBar from 'react-native-navbar';
import React, {Component, StyleSheet, Text} from 'react-native';
import {DARK, ENERGIZED, LIGHT, H1} from '../../common/variables';

const styles = StyleSheet.create({
    title: {
        fontSize: H1,
        color: ENERGIZED
    }
});

export default class HeaderIOS extends Component {

    render() {
        const {title, backButton, actions} = this.props;
        const options = {};

        if (title) {
            // options.title = (<Text style={styles.title}>{title}</Text>);
            options.title = {title: title, tintColor: ENERGIZED};
        }

        if (backButton) {
            options.leftButton = {title: backButton.title, tintColor: ENERGIZED, handler: backButton.onPress};
        }

        if (Array.isArray(actions)) {
            if (actions.length == 1) {
                let btn = actions[0];
                options.rightButton = {title: btn.title, tintColor: ENERGIZED, handler: btn.onPress};
            } else {
                // TODO acton sheet
                // props.rightButton = {title:'更多',tintColor: ENERGIZED,}
            }
        }

        return (
            <NavigationBar {...options}
                statusBar={{style:'light-content'}}
                tintColor={DARK}/>
        );
    }
}
