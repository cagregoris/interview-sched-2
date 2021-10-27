import "./DayListItem.scss";

import React from "react";

const classNames = require('classnames');

export default function DayListItem(props) {

  const dayListitemClass = classNames('day-list__item', {
    'day-list__item--selected': props.selected === true,
    'day-list__item--full': props.spots === 0
  })

  const formatSpots = function(numberSpots) {
    if (numberSpots === 0) {
      return "no spots remaining"
    } else if (numberSpots === 1) {
      return "1 spot remaining"
    } else {
      return numberSpots + " spots remaining"
    }
  }

  return (
    <li onClick={() => props.setDay(props.name)}
      className={dayListitemClass}
    >
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}