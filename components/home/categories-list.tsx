import { categories } from "@/utils/categories";
import Link from "next/link";

const CategoriesList = ({
  search,
  category,
}: {
  search?: string;
  category?: string;
}) => {
  const searchTerm = search ? `&search=${search}` : "";
  return (
    <div>
      <div className="flex justify-center my-4 font-bold gap-x-4">
        {categories.map((items) => {
          const isActive = items.label === category;
          return (
            <Link
              href={`/?category=${items.label}${searchTerm}`}
              key={items.label}
            >
              <article
                className={`p-3 flex flex-col justify-center hover:text-primary hover:scale-110 hover:duration-300 items-center ${
                  isActive ? "text-primary" : ""
                }`}
              >
                <items.icon />
                {items.label}
              </article>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default CategoriesList;
