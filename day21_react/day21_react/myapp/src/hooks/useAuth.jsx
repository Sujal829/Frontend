import { useContext } from "react";
import AuthContext from "../context/Context";

export const useAuth = useContext(AuthContext);