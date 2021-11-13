import {Router, Switch, Route} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import Main from '../main/main';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import SignIn from '../sing-in/sign-in';
import FilmPage from '../film-page/film-page';
import NotFountScreen from '../not-found-screen/not-fount-screen';
import PrivateRoute from '../private-route/private-route';
import {AppRoute, AuthorizationStatus} from '../../constants/constants';
import AddReview from '../add-review/add-review';
import {reviews} from '../../mocks/reviews';
import LoadingScreen from '../loading-screen/loading-screen';
import {State} from '../../types/state';
import browserHistory from '../../browser-history/browser-history';

const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.UNKNOWN;

const mapStateToProps = ({authorizationStatus, isDataLoaded, filmList, promoFilm}: State) => ({
  authorizationStatus,
  isDataLoaded,
  filmList,
  promoFilm,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App(props: PropsFromRedux): JSX.Element {
  const {authorizationStatus, isDataLoaded, filmList, promoFilm} = props;

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main promoFilm={promoFilm}/>
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <SignIn />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MY_LIST}
          render={() => <MyList />}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.FILM}>
          <FilmPage
            films={filmList}
            reviews={reviews}
          />
        </Route>
        <Route exact path={AppRoute.ADD_REVIEW}>
          <AddReview films={filmList} />
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <Player />
        </Route>
        <Route>
          <NotFountScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export {App};
export default connector(App);
