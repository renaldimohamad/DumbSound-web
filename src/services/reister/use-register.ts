import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IRegisterForm } from "../../types/register";

export const useRegister = () => {
    const schema = yup.object().shape({
        email: yup
            .string()
            .required("Email is required")
            .email("Email is invalid"),
        password: yup
            .string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters"),
        fullName: yup
            .string()
            .required("Full Name is required")
            .min(4, "Full Name must be at least 4 characters"),
        gender: yup
            .string()
            .required("Gender is required"),
        phone: yup
            .string()
            .required("Phone is required"),
        address: yup            
            .string()
            .required("Address is required"),
    });


    return useForm<IRegisterForm>({
        resolver: yupResolver(schema),
        defaultValues: {
            email: "",
            password: "",
            fullName: "",
            gender: "",
            phone: "",
            address: "",
        },
        reValidateMode: "onSubmit",
        mode: "all",
    });
}           