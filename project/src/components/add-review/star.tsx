type StarProps = {
  index: number;
}

function Star({index}: StarProps): JSX.Element {
  return (
    <>
      <input className="rating__input" id={`star-${index}`} type="radio" name="rating" value={index}/>
      <label className="rating__label" htmlFor={`star-${index}`}>Rating {index}</label>
    </>
  );
}

export default Star;
