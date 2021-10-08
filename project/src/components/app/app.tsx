import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../main/main';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import SignIn from '../sing-in/sign-in';
import FilmPage from '../film-page/film-page';
import NotFountScreen from '../not-found-screen/not-fount-screen';
import PrivateRoute from '../private-route/private-route';
import {films, promoInformation, myFilmsList, moreLikeThisFilms, reviews, AppRoute, AuthorizationStatus} from '../../constants/constants';

function App(): JSX.Element {
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
          render={() => <MyList films={myFilmsList}/>}
          authorizationStatus={AuthorizationStatus.NOAUTH}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.FILM}>
          <FilmPage
            films={moreLikeThisFilms}
            name={promoInformation.NAME}
            genre={promoInformation.GENRE}
            date={promoInformation.DATE}
            filmInfo
          />
        </Route>
        <Route exact path={AppRoute.ADD_REVIEW}>
          <FilmPage
            films={moreLikeThisFilms}
            name={promoInformation.NAME}
            date={promoInformation.DATE}
            genre={promoInformation.GENRE}
            reviews={reviews}
            filmInfo={false}
          />
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
