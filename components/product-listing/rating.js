import Star from '../svg/star'

const Ratings = (props) => {
  let maxStars = props.maxStars
  let rating = props.productRating
  // className=
  return (
    <div>
      <div className="container container__row container--center u-mar-b-sm">
        { Array.from(Array(maxStars)).map((star, i) => { 
          return <div className={`c-star ${i < rating ? 'c-star--active' : ''}`}><Star /></div>
        })}
      </div>
    </div>
  );
}

  
export default Ratings;