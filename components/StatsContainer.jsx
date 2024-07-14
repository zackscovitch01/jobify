"use client";
import { useQuery } from "@tanstack/react-query";
import { getStatsAction } from "@/utils/actions";
import StatsCard from "./StatsCard";

function StatsContainer() {
  const { data } = useQuery({
    queryKey: ["stats"],
    queryFn: () => getStatsAction(),
  });

  return (
    <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3">
      <StatsCard title="Pas de Reponse" value={data?.["Pas de reponse"] || 0} />
      <StatsCard
        title="Entrevue Cédulée"
        value={data?.["Entrevue cédulée"] || 0}
      />
      <StatsCard title="Refusé" value={data?.Refusé || 0} />
    </div>
  );
}
export default StatsContainer;
