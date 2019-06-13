import { createStackNavigator } from 'react-navigation';

import Main from './pages/main';

export default createStackNavigator({
    Main
}, {
    navigationOptions: {
        headerStyle:{
            backgroundColor: "#cd5c5c"
        },
        headerTintColor: "#FFF"
    },
});