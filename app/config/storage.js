import AsyncStorage from '@react-native-community/async-storage';

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
    logout = async () => {
        try {
            console.log('Logout called in storage')
            await AsyncStorage.removeItem('@storage_Key')
        } catch (e) {
            // remove error
        }

        console.log('Done logout')
    }
}

export default new sessionService()