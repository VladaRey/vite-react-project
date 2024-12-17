import { useState } from "react";
import Cinema from "../cinema/component"
import CinemaTabs from "../cinema-tabs/component";

export default function Cinemas({cinemas}) {
  const [activeCinemaIndex, SetActiveCinemaIndex] = useState(0);
  const cinema = cinemas[activeCinemaIndex];
    return (
      <div>
        <CinemaTabs cinemas={cinemas} onClick={SetActiveCinemaIndex} activeIndex={activeCinemaIndex}/>
        <Cinema key={cinema.id} cinema={cinema}/>
      </div>
    );
}