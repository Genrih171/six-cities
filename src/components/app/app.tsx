import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  amountPlaces: number;
};

function App({amountPlaces}: AppScreenProps): JSX.Element {
  return (
    <MainScreen amountPlaces={amountPlaces}/>
  );
}

export default App;
