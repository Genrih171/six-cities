import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Header from '../../components/header/header';
import ReviewsList from '../../components/reviews-list/reviews-list';
import ReviewForm from '../../components/review-form/review-form';
import Map from '../../components/map/map';
import PlaceCardList from '../../components/place-card-list/place-card-list';

import { TOffer, TOffers } from '../../types/offer';
import { TReviews, TReviewsToOffer } from '../../types/review';

import { TypeCard, TypePage } from '../../const';

import { Reviews } from '../../mocks/reviews';

type OfferPageProps = {
  offers: TOffers;
  AllReviews?: TReviews;
}

function OfferPage({offers, AllReviews = Reviews}: OfferPageProps): React.JSX.Element {
  const offerId = useParams().offerId;
  const {
    images,
    isPremium,
    title,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description,
    location
  } = offers.find((offer) => offer.id === offerId) as TOffer;

  const {reviews} = AllReviews.find((el) => el.offerId === offerId) as TReviewsToOffer;

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>

      <Header/>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.map((image) =>
                (
                  <div key={image} className="offer__image-wrapper">
                    <img className="offer__image" src={image} alt="Photo studio"/>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">

              {isPremium &&
                <div className="offer__mark">
                  <span>Premium</span>
                </div>}

              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: '80%'}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {type.toUpperCase()[0] + type.slice(1)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((item) =>
                    (
                      <li key={item} className="offer__inside-item">
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="offer__user-name">
                    {host.name}
                  </span>
                  {host.isPro &&
                  <span className="offer__user-status">
                    Pro
                  </span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                {reviews.length ? <ReviewsList reviews={reviews}/> : ''}
                <ReviewForm/>
              </section>
            </div>
          </div>
          <Map
            mapAnchor={location}
            places={offers.map((offer) => offer.location)}
            typePage={TypePage.OFFER}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <PlaceCardList
                offers={offers.filter((offer) => offer.id !== offerId)}
                typeCard={TypeCard.NEAR_PLACES}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
