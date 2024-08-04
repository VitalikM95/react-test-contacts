import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ICreateForm } from "../types";
import { emailValidation } from "../utils/validation";

const CreateInput = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ICreateForm>();

  const onSubmit: SubmitHandler<ICreateForm> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-2">First Name *</div>
      <Controller
        name="first_name"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <input
            type="text"
            className="w-full rounded-lg border-2 border-gray-400 p-3 text-sm focus:ring-black"
            {...field}
          />
        )}
      />
      {errors.first_name && errors.first_name.type === "required" && (
        <span className="text-red-500">Field is required</span>
      )}

      <div className="p-2">Last Name</div>
      <Controller
        name="last_name"
        control={control}
        render={({ field }) => (
          <input
            type="text"
            className="w-full rounded-lg border-2 border-gray-400 p-3 text-sm focus:ring-black"
            {...field}
          />
        )}
      />

      <div className="p-2">Email *</div>
      <Controller
        name="email"
        control={control}
        rules={emailValidation}
        render={({ field }) => (
          <input
            type="email"
            className="w-full rounded-lg border-2 border-gray-400 p-3 text-sm focus:ring-black"
            {...field}
          />
        )}
      />
      {errors.email && errors.email.type === "required" && (
        <span className="text-red-500">Field is required</span>
      )}
      {errors.email && errors.email.type === "pattern" && (
        <span className="text-red-500">{errors.email.message}</span>
      )}

      <button
        type="submit"
        className="mt-5 h-12 w-full rounded-md border-2 border-gray-400 font-semibold transition-all duration-100 ease-in-out hover:bg-slate-100"
      >
        Add Contact
      </button>
    </form>
  );
};

export default CreateInput;
