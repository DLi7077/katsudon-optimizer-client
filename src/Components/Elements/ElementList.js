import React, { useEffect, useState } from "react";
import { DAMAGE_ELEMENTS, ELEMENT_BORDER } from "../../Constants/elements";
import { get, map } from "lodash";
import ElementIcon from "./ElementIcon";

const classes = {
  horizontalList: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
};

export default function ElementList(props) {
  const ELEMENT_LIST = props.elementList ?? [...DAMAGE_ELEMENTS];
  const defaultIndex = props.element
    ? ELEMENT_LIST.findIndex((elementObj) => elementObj.value === props.element)
    : ELEMENT_LIST.length - 1;

  const [elementIndex, setElementIndex] = useState(defaultIndex);

  useEffect(() => {
    props.update( ELEMENT_LIST[elementIndex].value);
    // eslint-disable-next-line
  }, [elementIndex]);

  return (
    <div style={{ ...classes.horizontalList, ...props.style }}>
      {map(ELEMENT_LIST, (element, idx) => {
        const isCurrentElement = elementIndex === idx;
        const borderStyle = isCurrentElement
          ? { outline: `2px solid ${get(ELEMENT_BORDER, element.value)}` }
          : {};

        return (
          <ElementIcon
            key={element.value}
            src={element.source}
            style={borderStyle}
            onClick={() => {
              setElementIndex(idx);
            }}
          />
        );
      })}
    </div>
  );
}
