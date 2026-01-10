export type AuthUser = {
  name: string;
  photo?: string;
};

export const login = (user: AuthUser) => {
  localStorage.setItem("auth", "true");
  localStorage.setItem("user", JSON.stringify(user));
};

export const logout = () => {
  localStorage.removeItem("auth");
  localStorage.removeItem("user");
};

export const isAuthenticated = () => {
  return localStorage.getItem("auth") === "true";
};

export const getUser = (): AuthUser | null => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};
