import { ClientData } from "@/types/client.types";

const ClientsListItem = ({
  id,
  fullName,
  email,
  phone,
  createdAt,
}: ClientData) => {
  return (
    <tr
      className={`border border-gray-300 p-y-4 hover:bg-gray-100 transition-colors duration-300 ${status === "sold" ? "bg-gray-200 text-gray-500" : ""}`}
    >
      <td className="py-4 px-3">{id}</td>
      <td className="py-4 px-3">{fullName}</td>
      <td className="py-4 px-3">{email}</td>
      <td className="py-4 px-3">{phone}</td>
      <td className="py-4 px-3">
    {new Date(createdAt).toLocaleString('pl-PL', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    })}
</td>
     
    </tr>
  );
};

export default ClientsListItem;
