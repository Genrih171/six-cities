import { Fragment, useState } from 'react';

import PlaceCard from '../place-card/place-card';

import { TOffers } from '../../types/offer';

type PlaceCardListProps = {
  offers: TOffers;
  typeCard: string;
}

function PlaceCardList({offers, typeCard}: PlaceCardListProps) {
  const [activeCard, setActiveCard] = useState({activeCardId: ''});

  const handleMouseOver = (offerId: string): void => {
    if (activeCard.activeCardId !== offerId) {
      setActiveCard({activeCardId: offerId});
    }
  };

  return (
    <Fragment>
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          {...offer}
          handleMouseOver={handleMouseOver}
          typeCard={typeCard}
        />))}
    </Fragment>
  );
}

export default PlaceCardList;
