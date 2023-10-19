import { Fragment } from 'react';
import { Cities } from '../../const';

type LocationsListProps = {
  currentCity: string;
}

function LocationsList({currentCity}: LocationsListProps) {
  return (
    <ul className="locations__list tabs__list">
      {Object.values(Cities).map((city) => (
        <Fragment key={city}>
          <li className="locations__item">
            <a className={`locations__item-link tabs__item ${city === currentCity ? 'tabs__item--active' : ''}`} href="#">
              <span>{city}</span>
            </a>
          </li>
        </Fragment>
      ))}
    </ul>
  );
}

export default LocationsList;
