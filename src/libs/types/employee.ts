export type Employee = {
  id: string;
  name: string;
  gender: "Male" | "Female";
  dob: string;
  state: string;
  active: boolean;
  image?: string;
};