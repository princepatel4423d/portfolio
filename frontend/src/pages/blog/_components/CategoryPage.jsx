import React, { useEffect, useState } from "react";
import api from "@/utils/api";

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await api.get("/blogs/all");
      const allCategories = res.data.blogs.map(blog => blog.category);
      const uniqueCategories = [...new Set(allCategories)];
      setCategories(uniqueCategories);
    };

    fetchCategories();
  }, []);

  return (
    <div className="py-10">
      <h2 className="text-2xl font-bold mb-4">
        All Categories
      </h2>
      <ul className="flex flex-wrap gap-2">
        {categories.map((category, index) => (
          <li
            key={index}
            className="border px-4 py-2 rounded-xl"
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;