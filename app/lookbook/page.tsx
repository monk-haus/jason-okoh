import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

function getLookbookImage(project: (typeof projects)[0]): string {
  if (/\.(webm|mp4|mov)$/i.test(project.hero)) {
    return project.images.find((img) => !/\.(webm|mp4|mov)$/i.test(img)) ?? project.hero;
  }
  return project.hero;
}

const textClass = "font-mono text-[9px] font-bold tracking-normal uppercase leading-none";

const rows = [projects.slice(0, 4), projects.slice(4)].filter((g) => g.length > 0);

export default function LookbookPage() {
  return (
    <main className="min-h-[100dvh] bg-background px-6 md:px-10 lg:px-16 pt-28 pb-16">

      {/* Mobile: standard cards */}
      <div className="grid grid-cols-2 gap-4 md:hidden">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`} className="group flex flex-col">
            <Image
              src={getLookbookImage(project)}
              alt={project.title}
              width={0}
              height={0}
              sizes="50vw"
              className="w-full h-auto transition-opacity duration-500 group-hover:opacity-80"
            />
            <span className={`${textClass} text-foreground mt-1`}>{project.title}</span>
            <span className={`${textClass} text-foreground/40`}>{project.client}</span>
          </Link>
        ))}
      </div>

      <div className="hidden md:flex flex-col gap-12">
        {rows.map((group, gi) => (
          <div key={gi} className="grid grid-cols-4 gap-x-6">
            {group.map((project) => (
              <Link key={`img-${project.id}`} href={`/projects/${project.id}`} className="group self-end row-start-1">
                <Image
                  src={getLookbookImage(project)}
                  alt={project.title}
                  width={0}
                  height={0}
                  sizes="25vw"
                  className="w-full h-auto transition-opacity duration-500 group-hover:opacity-80"
                />
              </Link>
            ))}
            {group.map((project) => (
              <div key={`text-${project.id}`} className="row-start-2 pt-4 flex flex-col">
                <span className={`${textClass} text-foreground`}>{project.title}</span>
                <span className={`${textClass} text-foreground/40`}>{project.client}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

    </main>
  );
}
