
import {
    StyleSheet
} from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eeeff0',
        padding: 20
    },
    title: {
        fontSize: 30,
        color: '#de5447',
        marginBottom: 50,
        fontWeight: '600'
    },
    // Buton style
    btnContainer: {
        // backgroundColor: '#d81111', red
        width: '100%',
    },
    btnBox: {
        alignItems: 'center',
        height: 50,
        width: '100%',
        marginBottom: 10,
        backgroundColor: '#ccc',

    },
    btnText: {
        color: '#ffffff',
        fontWeight: '600',
        textTransform: 'uppercase'
    },
    btn: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff'
    },

    btnPurple: {
        backgroundColor: '#8fd6cc',

    },
    btnBlue: {
        backgroundColor: '#99d3ea',
    },
    // Forms style
    formContainer: {
        width: '100%',
        marginBottom: 20
    },
    formInput: {
        height: 50,
        backgroundColor: '#ffffff',
        marginBottom: 8

    },
    errMsgBox: {
        backgroundColor: '#c5c5c5',
        marginTop: 8,
        width: '100%',
        alignItems: 'center',
        padding: 3
    },
    errMsg: {
        fontWeight: '600',
    },

    features: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    featuresItem: {
        // flex: 1,
        width: 150,
        height: 150,
        backgroundColor: 'red',
        margin: 5,
    },
    imgBox: {
        flex: 1,
        backgroundColor: '#c5c5c5',
        padding: 10
    },
    iconImg: {
        width: '100%',
        height: '100%',
        position: 'relative',

    },
    titleIcon: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        textAlign: 'center',
        backgroundColor: 'white',
        padding: 2
    }
},
)

export default style;