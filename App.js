import { StatusBar } from "expo-status-bar";

// React Navigator
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src//navigation/Navigation";

// Connect with back-end
import { Amplify } from "aws-amplify";
import config from "./src/aws-exports";

// import Authenticator
import { withAuthenticator } from "aws-amplify-react-native";

Amplify.configure({ ...config, Analytics: { disable: true } }); // this line help to connect with back-end + fixing error code 500
function App() {
  return (
    <NavigationContainer>
      <Navigation></Navigation>
    </NavigationContainer>
  );
}
export default withAuthenticator(App);
