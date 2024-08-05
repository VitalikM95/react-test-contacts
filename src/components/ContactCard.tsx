import { FC } from "react";
import { CloseSvg, UserSvg } from "../assets/svg-data";
import { IContact } from "../utils/ContactApi.types";
import { Link } from "react-router-dom";
import { mainApi } from "../redux/main.api";

type ContactCardProps = {
  contact: IContact;
};

const ContactCard: FC<ContactCardProps> = ({ contact }) => {
  const [deleteContact, { isLoading }] = mainApi.useDeleteContactMutation();

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    deleteContact(contact.id);
  };
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isLoading) {
      e.preventDefault();
    }
  };

  return (
    <Link
      to={`/contact/${contact.id}`}
      onClick={handleClick}
      className="my-4 flex w-full rounded-sm bg-gray-200 p-4 text-lg font-semibold"
    >
      {(
        <img
          className="h-fit"
          width="125px"
          src={`${contact.avatar_url}`}
          alt="avatar"
        />
      ) || <UserSvg size="75px" />}
      <div className="flex flex-grow flex-col overflow-hidden px-4">
        <div className="my-1 flex flex-wrap gap-3">
          <span>{contact?.fields["first name"]?.[0].value || "Unknown"}</span>
          <span>{contact?.fields["last name"]?.[0].value || "Unknown"}</span>
        </div>
        <div>{contact?.fields.email?.[0].value || "Unknown"}</div>
        <div className="my-4 flex flex-wrap gap-2">
          {contact?.tags2.length ? (
            contact?.tags2.map((tag) => (
              <span key={tag} className="text-md rounded-md bg-slate-400 px-3">
                {tag}
              </span>
            ))
          ) : (
            <span className="font-light">no tags</span>
          )}
        </div>
      </div>
      {isLoading ? (
        <>loading...</>
      ) : (
        <button onClick={handleButtonClick} className="h-fit">
          <CloseSvg />
        </button>
      )}
    </Link>
  );
};

export default ContactCard;
