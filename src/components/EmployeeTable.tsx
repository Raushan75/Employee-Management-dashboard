import type { Employee } from "../libs/types/employee";

export default function EmployeeTable({
  data,
  onEdit,
  onDelete,
}: {
  data: Employee[];
  onEdit: (emp: Employee) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <div className="overflow-x-auto shadow rounded-2xl">
      <table className="w-full overflow-hidden">
        <thead className="bg-gray-200 font-roboto text-base font-medium">
          <tr>
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-left">Gender</th>
            <th className="px-4 py-3 text-left">DOB</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((emp) => (
            <tr
              key={emp.name}
              className="hover:bg-gray-100 font-poppins font-medium text-sm text-gray-500"
            >
              <td className="px-4 py-3">{emp.name}</td>
              <td className="px-4 py-3">{emp.gender}</td>
              <td className="px-4 py-3">{emp.dob}</td>
              <td className="px-4 py-3">
                {emp.active ? "Active" : "Inactive"}
              </td>
              <td className="px-4 py-3 flex gap-2">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                  onClick={() => onEdit(emp)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  onClick={() => onDelete(emp.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
