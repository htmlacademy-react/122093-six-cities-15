import { Link } from 'react-router-dom';
import { CITIES } from '../const';
import { SyntheticEvent } from 'react';

type TLocationsListProps = {
  currentLocation: string;
  getCurrentLocation: (location: string) => void;
}

export default function LocationsList({currentLocation, getCurrentLocation}: TLocationsListProps) {
  const isActive = (city: string) => city === currentLocation ? 'tabs__item--active' : '';

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => {
          const handleOnLocationClick = (evt: SyntheticEvent): void => {
            evt.preventDefault();
            getCurrentLocation(city);
          };
          return (
            <li className="locations__item" key={city}>
              <Link className={`locations__item-link tabs__item ${isActive(city)}`} to="#" onClick={handleOnLocationClick}>
                <span>{city}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
