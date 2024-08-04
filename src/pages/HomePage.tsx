import CreateInput from "../components/CreateInput";
import ContactCard from "../components/ContactCard";
import { mainApi } from "../redux/main.api";

const HomePage = () => {
  const { data, isLoading } = mainApi.useGetAllContactsQuery();

  console.log("Data:", data);
  return (
    <div className="flex">
      <div className="w-[30%] px-4">
        <h2 className="text-2xl font-semibold">Create Contact</h2>
        <CreateInput />
      </div>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <div className="w-[70%] px-4">
          <h2 className="text-2xl font-semibold">Contacts</h2>
          {data?.resources?.map((item) => (
            <ContactCard key={item.id} contact={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
