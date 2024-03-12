import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './stack.navigator';

export default function Routes(){
    return(
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}