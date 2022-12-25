import { useState } from "react";
import { reduce } from "lodash";

function initializeObject(fields) {
  return reduce(
    fields,
    (result, field) => {
      result[field] = 0;
      return result;
    },
    {}
  );
}

export default function useObjectForm(fields) {
  const [formStats, setFormStats] = useState(initializeObject(fields));
  return [formStats, setFormStats];
}
