import { ChangeEvent, Fragment, useState } from 'react';
import { Rating } from '../../const';

function ReviewForm() {
  const [formState, setFormState] = useState({
    rating: '',
    review: '',
  });

  const changeReviewHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormState({...formState, review: evt.target.value});
  };

  const changeRatingHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormState({...formState, rating: evt.target.value});
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Rating.map(([value, title]) => (
          <Fragment key={value}>
            <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio" onChange={changeRatingHandler}/>
            <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" value={formState.review} onChange={changeReviewHandler} placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
