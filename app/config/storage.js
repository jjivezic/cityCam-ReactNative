import AsyncStorage from '@react-native-community/async-storage';

// export const sessionService = {
//     result
// }

const storeData = async (user) => {
    console.log('value in storage storeData', user)
    // try {
    //     await AsyncStorage.setItem('@storage_Key', user)
    // } catch (e) {
    //     console.log('Error in storeData', e)
    //     return false;
    // }
    // return 'Heloooo';
}


// async getUser() =>{
//     try {
//         const value = await AsyncStorage.getItem('@storage_Key')
//         console.log('getUser returned', value)
//     } catch (e) {
//         // read error
//     }

//     console.log('Done getMyValue')

// }
// async removeValue() {
//     try {
//         await AsyncStorage.removeItem('@storage_Key')
//     } catch (e) {
//         console.log('Error in removeValue', e)
//     }

//     console.log('Done. removeValue')
// }

class sessionService {
    storeData = async (user) => {
        console.log('************************value in storage storeData', user)
        try {
            await AsyncStorage.setItem('@storage_Key', user)
        } catch (e) {
            console.log('***********************Error in storeData', e)
            return false;
        }
        return true;
    }
    getUser = async () => {
        try {
            const value = await AsyncStorage.getItem('@storage_Key')
            console.log('***********************getUser value', value)
            return value
        } catch (e) {
            console.log('***********************ERROR getUser value ', value)
        }
        console.log('Done')

    }
}

export default new sessionService()