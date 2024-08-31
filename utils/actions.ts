"use server";

import { profileSchema } from "./schemes";

export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = profileSchema.parse(rawData);
    return { message: "Created Profile!" };
  } catch (error) {
    return { message: "there was an error..." };
  }
};
