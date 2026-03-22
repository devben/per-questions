/**
 * PER exam topic definitions.
 *
 * The official PER exam always contains 45 questions ordered by topic.
 * Distribution: 4+4+4+4+4+4+4+4+4+5+8 = 45
 *
 * `range` is the [start, end] index (inclusive, 0-based) of each topic's
 * questions within a standard 45-question exam array.
 */
const TEMAS = [
  {
    id: "nomenclatura",
    name: "Nomenclatura Náutica",
    icon: "⚓",
    range: [0, 3],
  },
  {
    id: "amarre",
    name: "Amarre y Fondeo",
    icon: "🪢",
    range: [4, 7],
  },
  {
    id: "seguridad",
    name: "Seguridad en el Mar",
    icon: "🛟",
    range: [8, 11],
  },
  {
    id: "legislacion",
    name: "Legislación",
    icon: "📋",
    range: [12, 15],
  },
  {
    id: "balizamiento",
    name: "Balizamiento",
    icon: "🚦",
    range: [16, 19],
  },
  {
    id: "abordaje",
    name: "Reglamento de Abordaje",
    icon: "🚢",
    range: [20, 23],
  },
  {
    id: "maniobras",
    name: "Maniobras y Navegación",
    icon: "🧭",
    range: [24, 27],
  },
  {
    id: "emergencias",
    name: "Emergencias en la Mar",
    icon: "🆘",
    range: [28, 31],
  },
  {
    id: "meteorologia",
    name: "Meteorología",
    icon: "🌦️",
    range: [32, 35],
  },
  {
    id: "teoria",
    name: "Teoría de Navegación",
    icon: "🗺️",
    range: [36, 40],
  },
  {
    id: "carta",
    name: "Carta de Navegación",
    icon: "📍",
    range: [41, 44],
  },
];

export default TEMAS;
