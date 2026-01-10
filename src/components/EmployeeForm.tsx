import { useForm } from "react-hook-form";
import type { Employee } from "../libs/types/employee";
import { useEffect, useState } from "react";

export default function EmployeeForm({
  onSubmit,
  initial,
}: {
  onSubmit: (data: Employee) => void;
  initial?: Employee;
}) {
  const { register, handleSubmit, watch, reset } = useForm<Employee>();
  const [preview, setPreview] = useState<string | undefined>(initial?.image);

  useEffect(() => {
    if (initial) {
      const { image, ...rest } = initial;
      reset(rest);
      setPreview(image);
    } else {
      reset({
        name: "",
        gender: "Male",
        dob: "",
        state: "",
        active: false,
      });
      setPreview(undefined);
    }
  }, [initial, reset]);

  const imageFile = watch("image" as any);

  useEffect(() => {
    if (imageFile?.[0]) {
      const url = URL.createObjectURL(imageFile[0]);
      setPreview(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [imageFile]);

  const submit = (data: any) => {
    if (data.image?.[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        onSubmit({ ...data, image: reader.result as string });
      };
      reader.readAsDataURL(data.image[0]);
    } else {
      onSubmit({ ...data, image: initial?.image });
    }
    reset();
  };

  return (
    <div className="w-full max-w-md mx-auto border border-gray-300 p-6 rounded">
      <form onSubmit={handleSubmit(submit)} className="grid grid-cols-2 gap-4">
        <input
          {...register("name", { required: true })}
          placeholder="Full Name"
          className="border p-1 border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-200"
        />
        <select
          {...register("gender")}
          className="border p-1 border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-200"
        >
          <option>Male</option>
          <option>Female</option>
        </select>
        <input
          type="date"
          {...register("dob")}
          className="border p-1 border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-200"
        />
        <input
          {...register("state")}
          placeholder="State"
          className="border p-1 border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-200"
        />
        <input
          type="file"
          {...register("image" as any)}
          className="col-span-2 border p-1 border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-200"
        />
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="h-20 col-span-2 rounded border"
          />
        )}
        
        <label className="flex items-center gap-2 col-span-2">
          <input type="checkbox" {...register("active")} /> Active
        </label>
        <button className="bg-black text-white py-2 col-span-2">
          {initial ? "Update Employee" : "Add Employee"}
        </button>
      </form>
    </div>
  );
}
