import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Welcome from '../pages/Welcome'
import Singin from '../pages/Singin'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Welcome"
                component={Welcome}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="SingIn"
                component={Singin}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}