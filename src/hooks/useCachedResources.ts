import * as React from 'react';
import * as Font from 'expo-font';

const useCachedResources = () => {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Load fonts
        await Font.loadAsync({
		"Hind-Bold": require("@fonts/Hind-Bold.ttf"),
		"Hind-SemiBold": require("@fonts/Hind-SemiBold.ttf"),
		"Hind-Regular": require("@fonts/Hind-Regular.ttf"),
		"Hind-Medium": require("@fonts/Hind-Medium.ttf"),
		"Hind-Light": require("@fonts/Hind-Light.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
};

export default useCachedResources;
