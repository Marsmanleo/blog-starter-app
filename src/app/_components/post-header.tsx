import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

export function PostHeader({ title, coverImage, date, author }: Props) {
  return (
    <div className="neo-brutalism-blue p-6">
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <div className="neo-brutalism-pink p-2 inline-block">
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <div className="neo-brutalism-white p-2">
          <CoverImage title={title} src={coverImage} />
        </div>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <div className="neo-brutalism-pink p-2 inline-block">
            <Avatar name={author.name} picture={author.picture} />
          </div>
        </div>
        <div className="mb-6 text-lg font-mono bg-white px-4 py-2 inline-block border-2 border-black neo-brutalism-shadow">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </div>
  );
}
