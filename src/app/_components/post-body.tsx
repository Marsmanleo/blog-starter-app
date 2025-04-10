import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <div
        className="neo-brutalism-white p-8 prose prose-lg prose-headings:neo-brutalism-blue prose-p:neo-brutalism-white prose-blockquote:neo-brutalism-pink prose-a:text-blue-600 prose-a:underline prose-a:font-bold"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
