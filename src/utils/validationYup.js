import { object, string, number } from "yup"

let userSchema = object({
    name: string().required(),
    address: string().required(),
    city: string().required(),
    state: string().required(),
    country: string().required(),
    phone: number().typeError('phone must contain a number').required().positive().integer(),
    email: string().email().required(),
    confirmEmail: string().email().required()
})

const validateForm = async (dataForm) => {
    try {
        await userSchema.validate(dataForm)
        return { status: "Success" }
    } catch (error) {
        return { status: "Error", error: error.message }
    }
}

export default validateForm