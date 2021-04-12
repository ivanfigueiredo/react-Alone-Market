import { createStackNavigator } from 'react-navigation-stack';
import Welcome from '../screams/Welcome';
import Login from '../screams/Login';


const MainNavigator = createStackNavigator({
    Welcome:{
        screen:Welcome
    },
    Login:{
        screen:Login
    }
});

export default MainNavigator;