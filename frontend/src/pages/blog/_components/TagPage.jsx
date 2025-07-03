import React, { useEffect, useState } from "react";
import api from "@/utils/api";

const TagPage = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const res = await api.get("/blogs/tags");
        if (res.data.success) {
          setTags(res.data.tags);
        }
      } catch (err) {
        console.error("Failed to fetch tags:", err);
      }
    };

    fetchTags();
  }, []);

  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-4">
        All Tags
      </h2>

      <div className="flex flex-wrap gap-3">
        {tags.length > 0 ? (
          tags.map((tag, idx) => (
            <span
              key={idx}
              className="border gap-2 px-4 py-2 rounded-xl"
            >
              {tag}
            </span>
          ))
        ) : (
          <p>No tags available.</p>
        )}
      </div>
    </section>
  );
};

export default TagPage;