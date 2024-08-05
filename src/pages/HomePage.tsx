import CreateInput from "../components/CreateInput";
import ContactCard from "../components/ContactCard";
import { mainApi } from "../redux/main.api";

const HomePage = () => {
  const { data, isLoading } = mainApi.useGetAllContactsQuery();

  return (
    <div className="flex flex-col md:flex-row">
      <div className="mx-auto mb-6 bg-white px-4 sm:w-[500px] md:w-[30%]">
        <h2 className="text-center text-2xl font-semibold md:text-left">
          Create Contact
        </h2>
        <CreateInput />
      </div>
      <div className="w-full px-4 md:w-[70%]">
        {isLoading ? (
          <>Loading...</>
        ) : (
          <>
            <h2 className="text-center text-2xl font-semibold md:text-left">
              Contacts
            </h2>
            {data?.resources?.map((item) => (
              <ContactCard key={item.id} contact={item} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
