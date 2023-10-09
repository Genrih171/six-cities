import { Link } from 'react-router-dom';

import { AppRoutes, TypePage } from '../../const';

type PlaceCardProps = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  isFavorite: boolean;
  isPremium: boolean;
  handleMouseOver?: (offerId: string) => void;
  typePage?: string;
}

function PlaceCard(props: PlaceCardProps): React.JSX.Element {
  const {id, title, type, price, previewImage, isPremium, isFavorite, handleMouseOver,typePage = TypePage.MAIN} = props;

  return (
    <article className={`${typePage}__card place-card`} onMouseOver={handleMouseOver ? () => handleMouseOver(id) : undefined}>

      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}

      <div className={`${typePage}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoutes.OFFER}/${id}`}>
          <img className="place-card__image" src={previewImage}
            width={typePage === TypePage.FAVORITES ? '150' : '260'}
            height={typePage === TypePage.FAVORITES ? '200' : '110'} alt="Place image"
          />
        </Link>
      </div>
      <div className={`${typePage === TypePage.FAVORITES ? 'favorites__card-info' : ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoutes.OFFER}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type[0].toUpperCase() + type.slice(1)}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
