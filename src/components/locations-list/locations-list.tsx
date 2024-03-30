import { Link } from 'react-router-dom';
import { CITIES } from '../../const';
import { SyntheticEvent } from 'react';
import { City } from '../../types/city';
import { offersActions } from '../../store/slices/offers';
import { useAppDispatch } from '../../hooks';

type TLocationsListProps = {
  currentLocation: City;
}

export default function LocationsList({currentLocation}: TLocationsListProps) {
  const isActive = (city: string) => city === currentLocation.name ? 'tabs__item--active' : '';
  const dispatch = useAppDispatch();

  const handleLocationClick = (location: City) => (evt: SyntheticEvent) => {
    evt.preventDefault();
    dispatch(offersActions.setLocation(location));
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => (
          <li className="locations__item" key={city.name}>
            <Link className={`locations__item-link tabs__item ${isActive(city.name)}`} to="#" onClick={handleLocationClick(city)}>
              <span>{city.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
