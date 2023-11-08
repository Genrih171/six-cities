import { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import Header from '../../components/header/header';
import LocationsList from '../../components/locations-list/locations-list';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import Map from '../../components/map/map';

import { Cities, TypePage, TypeCard } from '../../const';
import { TOffers } from '../../types/offer';

type MainScreenProps = {
  offers: TOffers;
};

function MainPage({offers}: MainScreenProps): React.JSX.Element {
  const placesOption = useRef<HTMLUListElement | null>(null);
  const placesSort = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const placesSortButton = placesSort.current;

    const openPlacesOption = () => {
      placesOption.current?.classList.toggle('places__options--opened');
    };

    placesSortButton?.addEventListener('click', openPlacesOption);

    return () => placesSortButton?.removeEventListener('click', openPlacesOption);
  }, []);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>

      <Header/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList currentCity={Cities.AMSTERDAM}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by </span>
                <span ref={placesSort} className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul ref={placesOption} className="places__options places__options--custom">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <PlaceCardList
                  offers={offers}
                  typeCard={TypeCard.MAIN}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <Map
                mapAnchor={offers[0].city.location}
                places={offers.map((offer) => offer.location)}
                typePage={TypePage.MAIN}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
