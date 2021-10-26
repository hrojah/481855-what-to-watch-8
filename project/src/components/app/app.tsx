import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../main/main';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import SignIn from '../sing-in/sign-in';
import FilmPage from '../film-page/film-page';
import NotFountScreen from '../not-found-screen/not-fount-screen';
import PrivateRoute from '../private-route/private-route';
import {promoInformation, AppRoute, AuthorizationStatus} from '../../constants/constants';
import {FilmTypes} from '../../types/film';
import AddReview from '../add-review/add-review';
import {reviews} from '../../mocks/reviews';

type AppProps = {
  films: FilmTypes[];
}

function App({films}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main
            films={films}
            name={promoInformation.NAME}
            date={promoInformation.DATE}
            genre={promoInformation.GENRE}
          />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <SignIn />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MY_LIST}
          render={() => <MyList films={films}/>}
          authorizationStatus={AuthorizationStatus.NOAUTH}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.FILM}>
          <FilmPage
            films={films}
            reviews={reviews}
          />
        </Route>
        <Route exact path={AppRoute.ADD_REVIEW}>
          <AddReview name={films[0].name} poster={films[0].poster} backgroundImage={films[0].backgroundImage} />
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <Player />
        </Route>
        <Route>
          <NotFountScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
