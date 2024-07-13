import * as z from "zod";

export type JobType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  clerkId: string;
  position: string;
  company: string;
  location: string;
  status: string;
  mode: string;
};

export enum JobStatus {
  Pending = "Pas de reponse",
  Interview = "Entrevue cédulée",
  Declined = "Refusé",
}

export enum JobMode {
  FullTime = "Temps Plein",
  PartTime = "Temps Partiel",
  Internship = "Stage",
}

export const createAndEditJobSchema = z.object({
  position: z.string().min(2, {
    message: "position doit avoir au moins 2 caractères.",
  }),
  company: z.string().min(2, {
    message: "company doit avoir au moins 2 caractères.",
  }),
  location: z.string().min(2, {
    message: "location doit avoir au moins 2 caractères.",
  }),
  status: z.nativeEnum(JobStatus),
  mode: z.nativeEnum(JobMode),
});

export type createAndEditJobType = z.infer<typeof createAndEditJobSchema>;
