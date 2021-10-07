import Main from '../main/main';
import {films, promoInformation} from '../../constants/constants';

function App(): JSX.Element {
  return (
    <Main
      films={films}
      name={promoInformation.NAME}
      date={promoInformation.DATE}
      genre={promoInformation.GENRE}
    />
  );
}

export default App;
