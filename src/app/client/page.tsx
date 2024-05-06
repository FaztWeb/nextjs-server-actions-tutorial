"use client";
import { createProduct } from "@/actions/products-actions";
import { useRef } from "react";
import { toast } from "sonner";

export default function ClientPage() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        ref={formRef}
        action={async (formData) => {
          const product = await createProduct(formData);
          console.log(product);
          toast.success("Product created");
          formRef.current?.reset();
        }}
      >
        <input
          type="text"
          placeholder="name"
          className="border border-gray-300 rounded-md p-2 block mb-2"
          name="productName"
        />
        <input
          type="text"
          placeholder="price"
          className="border border-gray-300 rounded-md p-2 block"
          name="productPrice"
        />
        <button className="bg-blue-500 text-white p-2 rounded-md mt-2 block w-full">
          Save
        </button>
      </form>
    </div>
  );
}
