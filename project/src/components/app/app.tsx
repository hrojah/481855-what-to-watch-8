import Main from '../main/main';
import {filmCount, promoInformation} from '../../constants/constants';

function App(): JSX.Element {
  return (
    <Main
      filmsCount={filmCount}
      name={promoInformation.NAME}
      date={promoInformation.DATE}
      genre={promoInformation.GENRE}
    />
  );
}

export default App;
