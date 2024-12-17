import Review from "../review/component"

export default function Reviews({reviews}){
    return (
      <div>
        <h3>Reviews</h3>
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    );
}