import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section className="neo-brutalism-blue p-6 mb-16">
      <div className="mb-8">
        <div className="neo-brutalism-white p-2">
          <CoverImage title={title} src={coverImage} slug={slug} />
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-8">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight font-bold">
            <Link
              href={`/posts/${slug}`}
              className="hover:underline text-black"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg font-mono bg-white px-2 py-1 inline-block border-2 border-black">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div className="neo-brutalism-white p-4">
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <div className="neo-brutalism-pink p-2 inline-block">
            <Avatar name={author.name} picture={author.picture} />
          </div>
        </div>
      </div>
    </section>
  );
}
