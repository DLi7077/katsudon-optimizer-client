import Anemo from "../Assets/Elements/Anemo.svg";
import Cryo from "../Assets/Elements/Cryo.svg";
import Dendro from "../Assets/Elements/Dendro.svg";
import Electro from "../Assets/Elements/Electro.svg";
import Geo from "../Assets/Elements/Geo.svg";
import Hydro from "../Assets/Elements/Hydro.svg";
import Physical from "../Assets/Elements/Physical.svg";
import Pyro from "../Assets/Elements/Pyro.svg";
import None from "../Assets/Elements/None.svg";

export const ELEMENTS = [
  {
    label: "Pyro",
    value: "Pyro",
    source: Pyro,
  },
  {
    label: "Hydro",
    value: "Hydro",
    source: Hydro,
  },
  {
    label: "Anemo",
    value: "Anemo",
    source: Anemo,
  },
  {
    label: "Electro",
    value: "Electro",
    source: Electro,
  },
  {
    label: "Dendro",
    value: "Dendro",
    source: Dendro,
  },
  {
    label: "Cryo",
    value: "Cryo",
    source: Cryo,
  },
  {
    label: "Geo",
    value: "Geo",
    source: Geo,
  },
];

export const DAMAGE_ELEMENTS = [
  ...ELEMENTS,
  {
    label: "Physical",
    value: "Physical",
    source: Physical,
  },
];

export const AFFECTED_ELEMENTS = [
  ...ELEMENTS,
  {
    label: "None",
    value: "None",
    source: None,
  },
];

export const ELEMENT_BORDER = {
  Anemo: "#84FFAE",
  Pyro: "#FFB084",
  Cryo: "#84FFF0",
  Dendro: "#A4FF84",
  Electro: "#C884FF",
  Geo: "#FFCE84",
  Hydro: "#46BCFE",
  Physical: "#FFFFFF",
  None: "#FFFFFF",
};

export const ELEMENT_BACKGROUND = {
  Anemo: "#4F9B69",
  Pyro: "#9B6A4F",
  Cryo: "#4F9B9B",
  Dendro: "#639B4F",
  Electro: "#7C4A85",
  Geo: "#A68A44",
  Hydro: "#4F809B",
  Physical: "#6F6F6F",
  None: "#6F6F6F",
};
