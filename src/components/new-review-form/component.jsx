import { useReducer } from "react";
import Rating from "../rating/component";


const initialValue = {
  name: "Vlada",
  text: "Clean",
  rating: 4,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "setName":
      return { ...state, name: payload };

    case "setText":
      return { ...state, text: payload };

    case "setRating":
      return { ...state, rating: payload };

    default:
      return state;
  }
};

export default function NewReviewForm() {
  const [form, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={(event) =>
            dispatch({ type: "setName", payload: event.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="text">Text:</label>
        <input
          type="text"
          id="text"
          name="text"
          value={form.text}
          onChange={(event) =>
            dispatch({ type: "setText", payload: event.target.value })
          }
        />
      </div>
      <div>
        <Rating
          maxRating={10}
          value={form.rating}
          onChange={(rating) =>
            dispatch({ type: "setRating", payload: rating })
          }
        />
      </div>
    </div>
  );
}
