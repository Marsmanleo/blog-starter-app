import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div className="neo-brutalism-white p-4">
      <div className="mb-5">
        <div className="neo-brutalism-blue p-2">
          <CoverImage slug={slug} title={title} src={coverImage} />
        </div>
      </div>
      <h3 className="text-3xl mb-3 leading-snug font-bold">
        <Link href={`/posts/${slug}`} className="hover:underline text-black">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4 font-mono bg-blue-200 px-2 py-1 inline-block border-2 border-black">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4 bg-yellow-50 p-3 border-2 border-black">
        {excerpt}
      </p>
      <div className="neo-brutalism-pink p-2 inline-block">
        <Avatar name={author.name} picture={author.picture} />
      </div>
    </div>
  );
}
