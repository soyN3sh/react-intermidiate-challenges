import { FaStickyNote, FaArchive } from "react-icons/fa";

const routesList = [
  {
    name: "Notes",
    path: "/notes",
    icon: <FaStickyNote />,
    listed: true,
  },
  {
    name: "Archived Notes",
    path: "/archived-notes",
    icon: <FaArchive />,
    listed: true,
  },
];

export default routesList;
