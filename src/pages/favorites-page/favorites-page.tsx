import { Helmet } from 'react-helmet-async';

import Header from '../../components/header/header';

import { TOffers } from '../../types/offer';
import PlaceCard from '../../components/place-card/place-card';
import { TypePage, Cities } from '../../const';

type FavoritesPageProps = {
  offers: TOffers;
}

function FavoritesPage({offers}: FavoritesPageProps): React.JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>

      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">

              {Cities.map((city) => {
                if (offers.some((offer) => offer.isFavorite && offer.city.name === city)) {
                  return (
                    <li key={city} className="favorites__locations-items">
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link" href="#">
                            <span>{city}</span>
                          </a>
                        </div>
                      </div>
                      <div className="favorites__places">
                        {offers.filter((offer) => offer.isFavorite && offer.city.name === city).map((offer) => (
                          <PlaceCard
                            key={offer.id}
                            {...offer}
                            typePage={TypePage.FAVORITES}
                          />
                        ))}
                      </div>
                    </li>
                  );
                }
              })}

            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;
