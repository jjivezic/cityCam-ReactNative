
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
        color: '#841584',
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
        backgroundColor: '#841584',

    },
    btnBlue: {
        backgroundColor: '#1e90ff',
    },
    // Forms style
    formContainer: {
        width:'100%',
        marginBottom:20
    },
    formInput: {
        height: 50,
        backgroundColor: '#ffffff',
        marginBottom:8

    }
},
)

export default style;