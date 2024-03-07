import { Link } from 'react-router-dom';
import { CITIES } from '../const';
import { SyntheticEvent } from 'react';
import { City } from '../types/city';

type TLocationsListProps = {
  currentLocation: City;
  getCurrentLocation: (location: City) => void;
}

export default function LocationsList({currentLocation, getCurrentLocation}: TLocationsListProps) {
  const isActive = (city: string) => city === currentLocation.name ? 'tabs__item--active' : '';

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => {
          const handleOnLocationClick = (evt: SyntheticEvent): void => {
            evt.preventDefault();
            getCurrentLocation(city);
          };
          return (
            <li className="locations__item" key={city.name}>
              <Link className={`locations__item-link tabs__item ${isActive(city.name)}`} to="#" onClick={handleOnLocationClick}>
                <span>{city.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
