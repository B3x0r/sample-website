import { useState } from "react";
import cn from "classnames";

function FlipCard({ card }) {
  const [showBack, setShowBack] = useState(false);

  function handleClick() {
    if (card.variant === "click") {
      setShowBack(!showBack);
    }
  }

  return (
    <div
      tabIndex={card.id}
      className={cn("flip-card-outer", {
        "click-trigger": card.variant === "click",
      })}
      onClick={handleClick}
    >
      <div
        className={cn("flip-card-inner", {
          showBack,
          "click-trigger": card.variant === "click",
        })}
      >
        <div className="card front">
          <div className="card-body d-flex justify-content-center align-items-center">
            <p className="card-text fs-2 fw-bold">{card.front}</p>
          </div>
        </div>
        <div className="card back">
          <div className="card-body d-flex justify-content-center align-items-center">
            <p className="card-text">{card.back}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
