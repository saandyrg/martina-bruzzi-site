import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const filters = [
  "Tutti",
  "Event Design",
  "Brand & Graphic Design",
  "Photography",
  "Travel",
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("Tutti");

  const filteredProjects =
    activeFilter === "Tutti"
      ? projects
      : projects.filter((project) =>
          project.category.toLowerCase().includes(activeFilter.toLowerCase())
        );

  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.32em] text-[#8e7462]">
          Portfolio
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#241d1a] sm:text-4xl">
          Selezione di progetti
        </h2>
      </div>

      <div className="mb-10 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              activeFilter === filter
                ? "bg-[#241d1a] text-white"
                : "border border-[#e5d6ca] bg-white text-[#241d1a] hover:bg-[#f8f1eb]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            to={`/project/${project.id}`}
            className="group block overflow-hidden rounded-[28px] border border-[#eadfd5] bg-white shadow-sm no-underline transition hover:-translate-y-[2px] hover:shadow-lg"
          >
            <div className="overflow-hidden">
              <img
                src={project.cover}
                alt={project.title}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-[#8e7462]">
                {project.category}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-[#241d1a]">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-[#6f5a4c]">
                {project.shortDescription}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}