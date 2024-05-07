import { useForm } from "react-hook-form";

export default function UseFormExample() {

    const { register, handleSubmit ,formState:{errors}} = useForm();
    const onSubmit = (data) => console.log(data);
    const requiers={
        name: {
                    required: "Name is required",
                    minLength: {
                        value: 3,
                        message: "Name must be at least 3 characters"
                    }
                },
        password: {
            required: "Password is required",
            minLength: {
                value: 6,
                message: "Password must be at least 6 characters"
            }
        }

    };
return(
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
        <input name="name" {...register("name",requiers.name)} type="text" placeholder="name"></input>
        <br></br>
        <small style={{color: "red"}}>{errors?.name && errors.name.message}</small>
        <br></br>
        <input name="email" {...register("email")} type="email" placeholder="email"></input>
        <br></br>
        <small style={{color: "red"}}>{errors?.email && errors.email.message}</small>
        <br></br>
        <input name="password" {...register("password",requiers.password)} type="password" placeholder="password"></input>
        <br></br>
        <small style={{color: "red"}}>{errors?.password && errors.password.message}</small>
        <br></br>
        <button type="submit">submit</button>
    </form>
    </>
)
}