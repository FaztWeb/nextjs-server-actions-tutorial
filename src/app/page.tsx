import { createProduct } from "@/actions/products-actions";

export default function HomePage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <form action={createProduct}>
        <input type="text" placeholder="name" 
          className="border border-gray-300 rounded-md p-2 block mb-2"
          name="productName"
        />
        <input type="text" placeholder="price" 
          className="border border-gray-300 rounded-md p-2 block"
          name="productPrice"
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-md mt-2 block w-full"
        >Save</button>
      </form>
    </div>
  );
}
