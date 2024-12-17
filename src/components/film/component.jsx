import { useUserContext } from "../../contexts/user";
import useCount from "../../hooks/use-count";

export default function Film({ film }) {
  const { count, increment, decrement } = useCount();
  const {user} = useUserContext();

  return (
    <div>
      <div>{film.name}</div>
      {user && (
        <div>
          <button onClick={decrement} disabled={count === 0}>
            -
          </button>
          {count}
          <button onClick={increment} disabled={count === 6}>
            +
          </button>
        </div>
      )}
    </div>
  );
}
