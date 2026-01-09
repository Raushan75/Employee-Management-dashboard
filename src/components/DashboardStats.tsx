import { User, UserCheck, UserX } from "lucide-react";

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
      <div className="border w-full max-w-82 p-4 rounded-lg border-gray-300 shadow ">
        <h1 className="flex justify-between font-roboto font-medium text-xl">
          Total
          <span>
            <User />
          </span>
        </h1>
        <p className="text-4xl">500</p>
      </div>
      <div className="border w-full max-w-80 p-4 rounded-lg border-gray-300 shadow ">
        <h1 className="flex justify-between font-roboto font-medium text-xl">
          Active
          <span>
            <UserCheck />
          </span>
        </h1>
        <p className="text-4xl">500</p>
      </div>
      <div className="border w-full max-w-80 p-4 rounded-lg border-gray-300 shadow ">
        <h1 className="flex justify-between font-roboto font-medium text-xl">
          Inactive
          <span>
            {" "}
            <UserX />
          </span>
        </h1>
        <p className="text-4xl">500</p>
      </div>
    </div>
  );
}
