import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from "./TextScale";

export default StyleSheet.create({
    container: {
        flex: 1
    },
    textExample: {
        fontSize: moderateScale(20),

    },
    box1:{
        flex:1,
        backgroundColor: 'red',
    },
    box2:{
        flex:2,
        backgroundColor: 'green',
    }

})