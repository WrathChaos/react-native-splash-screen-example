import "react-native-gesture-handler";
import React from "react";
import Navigation from "./src/services/navigation";
import SplashScreen from "react-native-splash-screen";

const App = () => {
  React.useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 350);
  }, []);

  return (
    <>
      <Navigation />
    </>
  );
};

export default App;
