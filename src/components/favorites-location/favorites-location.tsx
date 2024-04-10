import { ReactNode } from 'react';

type TFavoritesLocationProps = {
  children: ReactNode;
  cityName: string;
}

function FavoritesLocation({ children, cityName }: TFavoritesLocationProps) {
  return (
    <li className="favorites__locations-items" data-testid='favorites-location'>
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span data-testid='city-name'>{cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {children}
      </div>
    </li>
  );
}

export default FavoritesLocation;
