import { useContext } from "react"
import { AuthContext } from "../contexts/AuthProvder"

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;