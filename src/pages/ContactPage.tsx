import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { UserSvg } from "../assets/svg-data";

const ContactPage = () => {
  const { handleSubmit, control } = useForm<any>();

  const onSubmit: SubmitHandler<any> = (data) => console.log(data);

  return (
    <div className="mx-auto max-w-[700px] text-lg font-semibold">
      <div className="flex flex-col">
        <div className="mb-6 flex items-center">
          <UserSvg size="96px" />
          <div className="flex flex-grow flex-col px-4">
            <div className="mb-2 flex flex-wrap gap-3">
              <span>First Name</span>
              <span>Last Name</span>
            </div>
            <div>email@email.com</div>
          </div>
        </div>
        <div>Tags</div>
        <div className="my-4 flex flex-wrap gap-2">
          <span className="text-md rounded-md bg-slate-400 px-3">Tag1</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="tags"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                placeholder="Add new Tag"
                className="mt-6 w-full rounded-lg border-2 border-gray-400 p-4 text-sm focus:ring-black"
                {...field}
              />
            )}
          />
          <button
            type="submit"
            className="mt-5 h-14 w-full rounded-md border-2 border-gray-400 font-semibold transition-all duration-100 ease-in-out hover:bg-slate-100"
          >
            Add Tag
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
