import { AreaChart, Layers, AppWindow } from "lucide-react";

type NavLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const links: NavLink[] = [
  {
    href: "/add-job",
    label: "ajouter un emploi",
    icon: <Layers />,
  },
  {
    href: "/jobs",
    label: "tes candidatures",
    icon: <AppWindow />,
  },
  {
    href: "/stats",
    label: "tes statistiques",
    icon: <AreaChart />,
  },
];

export default links;
