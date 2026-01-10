import { useEffect, useMemo, useState } from "react";
import DashboardStats from "../components/DashboardStats";
import EmployeeTable from "../components/EmployeeTable";
import DashboardLayout from "../layout/DashboardLayout";
import type { Employee } from "../libs/types/employee";
import { getEmployees, saveEmployees } from "../libs/auth/employeeData";
import { Search } from "lucide-react";
import EmployeeForm from "../components/EmployeeForm";

export default function Dashboard() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [editing, setEditing] = useState<Employee | undefined>();
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("All");
  const [status, setStatus] = useState("All");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setEmployees(getEmployees());
  }, []);

  const filtered = useMemo(() => {
    return employees.filter((e) => {
      return (
        e.name.toLowerCase().includes(search.toLowerCase()) &&
        (gender === "All" || e.gender === gender) &&
        (status === "All" || (status === "Active" ? e.active : !e.active))
      );
    });
  }, [employees, search, gender, status]);

  const save = (data: Employee) => {
    const updated = editing
      ? employees.map((e) =>
          e.id === editing.id ? { ...data, id: editing.id } : e
        )
      : [...employees, { ...data, id: Date.now().toString() }];

    setEmployees(updated);
    saveEmployees(updated);
    setEditing(undefined);
    setShowForm(false);
  };

  const remove = (id: string) => {
    if (!confirm("Delete employee?")) return;
    const updated = employees.filter((e) => e.id !== id);
    setEmployees(updated);
    saveEmployees(updated);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="print:hidden">
          <DashboardStats employees={employees} />
        </div>

        <div className="flex flex-wrap gap-4 print:hidden">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-1 border border-gray-300 rounded-md"
            />
          </div>

          <select
            onChange={(e) => setGender(e.target.value)}
            className="border p-1 rounded-md"
          >
            <option>All</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <select
            onChange={(e) => setStatus(e.target.value)}
            className="border p-1 rounded-md"
          >
            <option>All</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <button
            onClick={() => {
              setEditing(undefined);
              setShowForm(true);
            }}
            className=" bg-black text-white font-roboto font-medium px-4 py-1 rounded-md"
          >
            + Add Employee
          </button>

          <button
            onClick={() => window.print()}
            className="ml-auto border px-4 rounded-md"
          >
            Print
          </button>
        </div>

        {showForm && (
          <div className="print:hidden flex flex-col items-center justify-center">
            <EmployeeForm onSubmit={save} initial={editing} />

            <button
              onClick={() => {
                setShowForm(false);
                setEditing(undefined);
              }}
              className="mt-3 text-sm w-md  underline bg-black text-white font-roboto font-medium px-4 py-2 rounded-md"
            >
              Cancel
            </button>
          </div>
        )}

        <div className="print:block">
          <EmployeeTable
            data={filtered}
            onEdit={(emp) => {
              setEditing(emp);
              setShowForm(true);
            }}
            onDelete={remove}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}

