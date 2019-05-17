import AsyncStorage from '@react-native-community/async-storage';

class sessionService {

    storeData = async (user) => {
        console.log('************************value in storage storeData', user)
        try {
            await AsyncStorage.multiSet([
                ['@storage_Token', user.token],
                ['@storage_UserId', user._id]])
        } catch (e) {
            console.log('***********************Error in storeData', e)
            return false;
        }
        return true;
    }
    getUser = async () => {
        try {
            const value = await AsyncStorage.multiGet(['@storage_Token', '@storage_UserId'])
            console.log('***********************getUser value', value)
            return value
        } catch (e) {
            console.log('***********************ERROR getUser value ', value)
        }
        console.log('Done')

    }
    getToken = async () => {
        try {
            const value = await AsyncStorage.getItem('@storage_Token')
            console.log('***********************getToken value', value)
            return value
        } catch (e) {
            console.log('***********************ERROR getUser value ', value)
        }
        console.log('Done')
    }
    getUserId = async () => {
        try {
            const value = await AsyncStorage.getItem('@storage_UserId')
            console.log('***********************@storage_UserId value', value)
            return value
        } catch (e) {
            console.log('***********************ERROR getUser value ', value)
        }
        console.log('Done')
    }
    logout = async () => {
        try {
            console.log('Logout called in storage')
            await AsyncStorage.multiRemove(['@storage_Token', '@storage_UserId'])
        } catch (e) {
            // remove error
        }

        console.log('Done logout')
    }
}

export default new sessionService()