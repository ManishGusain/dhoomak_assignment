import GlobalInfoProvider from "./src/context/GlobalContext";
import RootNavigator from "./src/navigator/RootNavigator";

export default function App() {
  return (
    <GlobalInfoProvider>
      <RootNavigator />
    </GlobalInfoProvider>
  );
}