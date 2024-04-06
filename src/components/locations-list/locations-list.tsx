import { Link } from 'react-router-dom';
import { SyntheticEvent, memo } from 'react';
import { City } from '@type/city';
import { useAppDispatch } from '@hooks/index';
import { offersActions } from '@store/slices/offers';
import { CITIES } from '@const';

type TLocationsListProps = {
  currentLocation: City;
}

function LocationsList({currentLocation}: TLocationsListProps) {
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

const MemoizedLocationsList = memo(LocationsList);
export default MemoizedLocationsList;
