

const Header = (props) => (
  <header className="u-pad-t-md header--store">
    <div className="container container__row container--space-between">
      <h1 className="h3 u-pad-b-md">Product Listing</h1>
      <nav className="col-8 u-flex-self--end">
        <ul className="o-nav o-nav--store container container__row">
          <li className="u-pad-h-md o-nav__link">Mens</li>
          <li className="u-pad-h-md o-nav__link">Womens</li>
          <li className="u-pad-h-md o-nav__link">Other</li>
          <li className="u-pad-h-md">Cart</li>
          <li className="u-pad-h-md">Checkout</li>
        </ul>
      </nav>
    </div>
  </header>
);
  
export default Header;