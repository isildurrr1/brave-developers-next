import { Navigate } from "react-router-dom";
import Form from "./Form";
import { ProtectFormProps } from "../types/types";

const ProtectedForm: React.FC<ProtectFormProps> = ({ data, goHome }) => {
  return (
    data !== null ? <Form data={data} goHome={goHome} /> : <Navigate to="/" replace/>
)}

export default ProtectedForm; 