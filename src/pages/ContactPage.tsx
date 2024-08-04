import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { UserSvg } from "../assets/svg-data";
import { mainApi } from "../redux/main.api";
import { useParams } from "react-router-dom";

const ContactPage = () => {
  const { contactId } = useParams<{ contactId: string }>();
  const { data, isLoading } = mainApi.useGetContactQuery(contactId || "");
  const contactData = data?.resources[0];

  const { handleSubmit, control } = useForm<any>();
  const onSubmit: SubmitHandler<any> = (data) => console.log(data);

  return (
    <div className="mx-auto max-w-[700px] text-lg font-semibold">
      {isLoading ? (
        <>Loading...</>
      ) : (
        <div className="flex flex-col">
          <div className="mb-6 flex items-center">
            {(
              <img
                width="150px"
                height="150px"
                src={`${data?.resources[0].avatar_url}`}
                alt="avatar"
              />
            ) || <UserSvg size="120px" />}
            <div className="flex flex-grow flex-col px-4">
              <div className="mb-2 flex flex-wrap gap-3">
                <span>
                  {data?.resources[0].fields["first name"]?.[0].value ||
                    "Unknown"}
                </span>
                <span>
                  {data?.resources[0].fields["last name"]?.[0].value ||
                    "Unknown"}
                </span>
              </div>
              <div>{data?.resources[0].fields.email[0].value || "Unknown"}</div>
            </div>
          </div>
          <div>Tags</div>
          <div className="my-4 flex flex-wrap gap-2">
            {data?.resources[0].tags2.length ? (
              data?.resources[0].tags2.map((tag) => (
                <span
                  key={tag}
                  className="text-md rounded-md bg-slate-400 px-3"
                >
                  {tag}
                </span>
              ))
            ) : (
              <span className="font-light">no tags</span>
            )}
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
      )}
    </div>
  );
};

export default ContactPage;
