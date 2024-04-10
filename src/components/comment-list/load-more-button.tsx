import './load-more-button-style.css';

type LoadMoreButtonProps = {
  handleClick: () => void;
}

function LoadMoreButton ({handleClick}: LoadMoreButtonProps) {
  return <button onClick={handleClick} type="button" className="load-more" data-testid="load-more-button">Load more</button>;
}

export default LoadMoreButton;
