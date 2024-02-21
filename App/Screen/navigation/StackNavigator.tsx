import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Loginscreen/Login';
import SignScreen from '../Signinscreen/SignScreen';
import SingupScreen from '../SingupScreen/SingupScreen';
import Tabnavigation from '../../Navigation/Tabnavigation';
import Test from '../Loginscreen/Test';
import Homescreen from '../Homescreen/Homescreen';
import Test2 from '../Signinscreen/Test2';
import Test3 from '../SingupScreen/Test3';
// import Homescreen from '../Homescreen/Homescreen';

const Stack = createStackNavigator();

 export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
       <Stack.Screen name="Login" component={Test} />   
       <Stack.Screen name="SignScreen" component={Test2} /> 
       <Stack.Screen name="SingupScreen" component={Test3} />              
       <Stack.Screen name="Homescreen" component={Homescreen} />               
    </Stack.Navigator>
  );
} 