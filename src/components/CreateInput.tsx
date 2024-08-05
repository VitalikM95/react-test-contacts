import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ICreateForm } from "../utils/types";
import { emailValidation } from "../utils/validation";
import { mainApi } from "../redux/main.api";

const CreateInput = () => {
  const [createContact, { isLoading }] = mainApi.useCreateContactMutation();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ICreateForm>();

  const onSubmit: SubmitHandler<ICreateForm> = (data) => {
    createContact({
      record_type: "person",
      fields: {
        email: [
          {
            label: "email",
            modifier: "other",
            value: data.email,
            is_primary: true,
          },
        ],
        "first name": [
          {
            label: "first name",
            modifier: "",
            value: data["first name"],
            is_primary: true,
          },
        ],
        "last name": [
          {
            label: "last name",
            modifier: "",
            value: data["last name"] || null,
            is_primary: true,
          },
        ],
      },
      privacy: {
        read: null,
        edit: null,
      },
      owner_id: null,
    });
  };

  return (
    <form className="sticky top-0" onSubmit={handleSubmit(onSubmit)}>
      <div className="p-2">First Name *</div>
      <Controller
        name="first name"
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
      {errors["first name"] && errors["first name"].type === "required" && (
        <span className="text-red-500">Field is required</span>
      )}

      <div className="p-2">Last Name</div>
      <Controller
        name="last name"
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
        disabled={isLoading}
        type="submit"
        className={`mt-5 h-12 w-full rounded-md border-2 border-gray-400 font-semibold transition-all duration-100 ease-in-out ${
          isLoading ? "cursor-not-allowed bg-gray-300" : "hover:bg-slate-100"
        }`}
      >
        Add Contact
      </button>
    </form>
  );
};

export default CreateInput;
