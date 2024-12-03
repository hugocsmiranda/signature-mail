import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  job: z
    .string()
    .min(2, { message: "Le poste doit contenir au moins 2 caractères." }),
  phoneNumber: z.string().regex(/^\+?\d(\d|\s)*$/, {
    message:
      "Le numéro de téléphone peut commencer par un '+', et doit contenir uniquement des chiffres et des espaces.",
  }),
  email: z
    .string()
    .email({ message: "Veuillez entrer une adresse email valide." }),
  address: z
    .string()
    .min(5, { message: "L'adresse doit contenir au moins 5 caractères." }),
  url: z.string().url({ message: "Veuillez entrer une URL valide." }),
});
