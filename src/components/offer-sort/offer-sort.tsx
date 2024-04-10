import { SORT_TYPES } from '@const';
import useBoolean from '@hooks/use-boolean';
import useEscapeKeydown from '@hooks/use-escape-keydown';
import useOutsideClick from '@hooks/use-outside-click';
import { useRef } from 'react';

type TOfferSortType = {
  onSortTypeClick: (sortType: string) => void;
  activeSortType: string;
};

function OfferSort({activeSortType, onSortTypeClick}: TOfferSortType) {
  const {isOn, off, toggle} = useBoolean(false);
  const isSortOpened = () => isOn ? 'places__options--opened' : '';
  const isSortActive = (sortType: string) => activeSortType === sortType ? 'places__option--active' : '';

  const handleSortTypeClick = (sortType: string) => {
    onSortTypeClick(sortType);
    toggle();
  };

  useEscapeKeydown(isOn, off);

  const sortContainerRef = useRef(null);
  useOutsideClick(isOn, off, sortContainerRef);

  return (
    <form className="places__sorting" action="#" method="get" ref={sortContainerRef} data-testid='offer-sort'>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => toggle()}>
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

export default OfferSort;
