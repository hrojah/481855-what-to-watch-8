type BreadcrumbsProps = {
  name: string,
}

function Breadcrumbs({name}: BreadcrumbsProps): JSX.Element {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <a href="film-page.html" className="breadcrumbs__link">{name}</a>
        </li>
        <li className="breadcrumbs__item">
          <a href='/' className="breadcrumbs__link">Add review</a>
        </li>
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
