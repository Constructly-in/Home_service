import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Loginscreen/Login';
import SignScreen from '../Signinscreen/SignScreen';
import SingupScreen from '../SingupScreen/SingupScreen';
import Tabnavigation from '../../Navigation/Tabnavigation';
import AuthProvider from '../../Contexts/AuthContext';
// import Homescreen from '../Homescreen/Homescreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <AuthProvider>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignScreen" component={SignScreen} />
        <Stack.Screen name="SingupScreen" component={SingupScreen} />
        {/* <Stack.Screen name="Homescreen" component={Tabnavigation} />               */}
      </Stack.Navigator>
    </AuthProvider>
  );
}
