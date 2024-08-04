import { CloseSvg, UserSvg } from "../assets/svg-data";
const ContactCard = () => {
  return (
    <div className="my-4 flex w-full rounded-sm bg-gray-200 p-4 text-lg font-semibold">
      <UserSvg size="74px" />
      <div className="flex flex-grow flex-col px-4">
        <div className="my-1 flex flex-wrap gap-3">
          <span>First Name</span>
          <span>Last Name</span>
        </div>
        <div>email@email.com</div>
        <div className="my-4 flex flex-wrap gap-2">
          <span className="text-md rounded-md bg-slate-400 px-3">Tag1</span>
        </div>
      </div>
      <button className="h-fit">
        <CloseSvg />
      </button>
    </div>
  );
};

export default ContactCard;
