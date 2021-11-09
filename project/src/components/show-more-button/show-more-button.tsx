import {Actions} from '../../types/action';
import {bindActionCreators, Dispatch} from '@reduxjs/toolkit';
import {ShowMore} from '../../store/action';
import {connect, ConnectedProps} from 'react-redux';

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({
  onShowMore: ShowMore,
}, dispatch);

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function ShowMoreButton(props: PropsFromRedux): JSX.Element {
  const {onShowMore} = props;
  return (
    <div className="catalog__more">
      <button onClick={onShowMore} className="catalog__button" type="button">Show more</button>
    </div>
  );
}

export {ShowMoreButton};
export default connector(ShowMoreButton);
