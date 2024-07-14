"use client";
import JobCard from "./JobCard";
import { useSearchParams } from "next/navigation";
import { getAllJobsAction } from "@/utils/actions";
import { useQuery } from "@tanstack/react-query";
import ButtonContainer from "./ButtonContainer";
import ComplexButtonContainer from "./ComplexButtonContainer";

function JobsList() {
  const searchParams = useSearchParams();

  const search = searchParams.get("search") || "";
  const jobStatus = searchParams.get("jobStatus") || "Tous";

  const pageNumber = Number(searchParams.get("page")) || 1;

  const { data, isPending } = useQuery({
    queryKey: ["jobs", search, jobStatus, pageNumber],
    queryFn: () => getAllJobsAction({ search, jobStatus, page: pageNumber }),
  });

  const jobs = data?.jobs || [];

  const count = data?.count || 0;
  const page = data?.page || 0;
  const totalPages = data?.totalPages || 0;

  if (isPending)
    return <h2 className="text-xl">Un moment s'il vous plaît...</h2>;
  if (jobs.length < 1)
    return <h2 className="text-xl">Aucun emplois trouvés...</h2>;
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold capitalize">
          {count} emplois trouvés
        </h2>
        {totalPages < 2 ? null : (
          <ComplexButtonContainer currentPage={page} totalPages={totalPages} />
        )}
      </div>
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {jobs.map((job) => {
          return <JobCard key={job.id} job={job} />;
        })}
      </div>
    </>
  );
}
export default JobsList;
