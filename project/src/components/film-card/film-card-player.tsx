type FilmCardVideoProps = {
  src: string,
  poster?: string,
}

function FilmCardVideo({src, poster}: FilmCardVideoProps): JSX.Element {
  return (
    <div>
      <video src={src} autoPlay muted poster={poster} width="280" height="175" />
    </div>
  );
}

export default FilmCardVideo;
