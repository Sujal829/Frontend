import { createContext } from "react";
import type { AuthContextType } from "../types/authType";

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;