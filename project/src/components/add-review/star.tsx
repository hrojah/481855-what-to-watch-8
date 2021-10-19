type StarProps = {
  index: number;
  setUserReview: any,
}

function Star({index, setUserReview}: StarProps): JSX.Element {
  return (
    <>
      <input onClick={setUserReview} className="rating__input" id={`star-${index}`} type="radio" name="rating" value={index}/>
      <label className="rating__label" htmlFor={`star-${index}`}>Rating {index}</label>
    </>
  );
}

export default Star;
