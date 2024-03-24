import { SORT_TYPES } from '../../const';
import { useEffect, useRef, useState } from 'react';

type TOfferSortType = {
  onSortTypeClick: (sortType: string) => void;
  activeSortType: string;
};

export default function OfferSort({activeSortType, onSortTypeClick}: TOfferSortType) {
  const [isSortBarOpened, setSortBarOpened] = useState(false);
  const isSortOpened = () => isSortBarOpened ? 'places__options--opened' : '';
  const isSortActive = (sortType: string) => activeSortType === sortType ? 'places__option--active' : '';

  const handleSortTypeClick = (sortType: string) => {
    onSortTypeClick(sortType);
    setSortBarOpened(!isSortBarOpened);
  };

  useEffect(() => {
    if (isSortBarOpened) {
      const onEscKeyDown = (evt: KeyboardEvent) => {
        if (evt.key === 'Escape') {
          evt.preventDefault();
          setSortBarOpened(!isSortBarOpened);
        }
      };

      document.addEventListener('keydown', onEscKeyDown);
      return () => {
        document.removeEventListener('keydown', onEscKeyDown);
      };
    }
  });

  const sortContainerRef = useRef<HTMLFormElement | null>(null);
  useEffect(() => {
    if (isSortBarOpened) {
      const handleOutsideClick = (evt: MouseEvent) => {
        if (sortContainerRef.current && !sortContainerRef.current.contains(evt.target as Node)) {
          setSortBarOpened(!isSortBarOpened);
        }
      };

      document.addEventListener('mousedown', handleOutsideClick);
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }
  });

  return (
    <form className="places__sorting" action="#" method="get" ref={sortContainerRef}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setSortBarOpened(!isSortBarOpened)}>
        {activeSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isSortOpened()}`}>
        {Object.values(SORT_TYPES).map((sortType) => (
          <li className={`places__option ${isSortActive(sortType)}`} tabIndex={0} key={sortType} onClick={() => handleSortTypeClick(sortType)}>{sortType}</li>
        ))}
      </ul>
    </form>
  );
}
