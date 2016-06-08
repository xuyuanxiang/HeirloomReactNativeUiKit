import {StyleSheet} from "react-native";
import {
  BUTTON_HEIGHT
  , BUTTON_TOP_BOTTOM_MARGING
  , BUTTON_LEFT_RIGHT_MARGING
  , BUTTON_LEFT_RIGHT_PADDING
  , BUTTON_BORDER_RADIUS
  , BUTTON_BORDER_WIDTH
  , BUTTON_DEFAULT_BACKGROUND_COLOR
  , BUTTON_DEFAULT_COLOR
  , BUTTON_DEFAULT_BORDER_COLOR
  , BUTTON_PRIMARY_BACKGROUND_COLOR
  , BUTTON_PRIMARY_COLOR
  , BUTTON_PRIMARY_BORDER_COLOR
  , SHADOW_2DP
  , DARK
} from "../../core/style/variables";

export const buttonStyleSheet = StyleSheet.create({
  buttonGroup: {

  },
  button: {
    height: BUTTON_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: BUTTON_LEFT_RIGHT_MARGING,
    marginVertical: BUTTON_TOP_BOTTOM_MARGING,
    paddingHorizontal: BUTTON_LEFT_RIGHT_PADDING,
    borderRadius: BUTTON_BORDER_RADIUS,
    borderWidth: BUTTON_BORDER_WIDTH,
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: SHADOW_2DP,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonDefault: {
    shadowColor: DARK,
    borderColor: BUTTON_DEFAULT_BORDER_COLOR,
    backgroundColor: BUTTON_DEFAULT_BACKGROUND_COLOR
  },
  buttonDefaultText: {
    color: BUTTON_DEFAULT_COLOR
  },
  buttonPrimary: {
    shadowColor: DARK,
    borderColor: BUTTON_PRIMARY_BORDER_COLOR,
    backgroundColor: BUTTON_PRIMARY_BACKGROUND_COLOR
  },
  buttonPrimaryText: {
    color: BUTTON_PRIMARY_COLOR
  }
});
