import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function Project() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#f7f2ee] px-6 py-20 text-[#241d1a]">
        <div className="mx-auto max-w-4xl">
          <p className="text-lg">Progetto non trovato.</p>
          <Link
            to="/"
            className="mt-6 inline-block rounded-full bg-[#241d1a] px-6 py-3 text-sm font-medium text-white"
          >
            Torna alla home
          </Link>
        </div>
      </div>
    );
  }

  const mediaItems = project.media
    ? project.media
    : (project.images || []).map((src) => ({
        type: "image",
        src,
      }));

  return (
    <div className="min-h-screen bg-[#f7f2ee] text-[#241d1a]">
      <div className="mx-auto max-w-6xl px-6 py-10 lg:px-10">
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-full border border-[#d8c8bb] bg-white px-5 py-2 text-sm text-[#241d1a] no-underline transition hover:bg-[#f8f1eb]"
        >
          ← Torna alla home
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[32px] shadow-xl">
            <img
              src={project.cover}
              alt={project.title}
              className="h-full max-h-[520px] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-[#8e7462]">
              {project.category}
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#241d1a] sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-6 text-base leading-8 text-[#6f5a4c]">
              {project.description}
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[28px] border border-[#eadfd5] bg-white shadow-sm"
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  controls
                  muted
                  playsInline
                  className="w-full rounded-[28px]"
                />
              ) : (
                <img
                  src={item.src}
                  alt={`${project.title} ${index + 1}`}
                  className="w-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}