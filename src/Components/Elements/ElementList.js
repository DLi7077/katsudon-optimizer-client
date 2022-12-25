import React, { useEffect, useState } from "react";
import { ELEMENTS, ELEMENT_BORDER } from "../../Constants/elements";
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
  const ELEMENT_LIST = [...ELEMENTS];
  const [elementIndex, setElementIndex] = useState(ELEMENT_LIST.length - 1);

  useEffect(() => {
    props.update(ELEMENT_LIST[elementIndex].value);
    // eslint-disable-next-line
  }, [elementIndex]);

  return (
    <div style={classes.horizontalList}>
      {map(ELEMENT_LIST, (element, idx) => {
        const isCurrentElement = elementIndex === idx;
        const borderStyle = isCurrentElement
          ? { outline: `1px solid ${get(ELEMENT_BORDER, element.value)}` }
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
