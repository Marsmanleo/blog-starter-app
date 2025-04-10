import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <div className={`${markdownStyles["markdown"]} neo-brutalism-white p-8`}>
        <div
          className="prose-headings:bg-white prose-headings:px-4 prose-headings:py-2 prose-headings:border-2 prose-headings:border-black prose-headings:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] prose-headings:inline-block
                     prose-p:bg-yellow-50 prose-p:p-4 prose-p:border-2 prose-p:border-black prose-p:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
                     prose-blockquote:bg-blue-200 prose-blockquote:p-4 prose-blockquote:border-2 prose-blockquote:border-black prose-blockquote:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
                     prose-ul:bg-yellow-50 prose-ul:p-4 prose-ul:border-2 prose-ul:border-black prose-ul:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
                     prose-ol:bg-yellow-50 prose-ol:p-4 prose-ol:border-2 prose-ol:border-black prose-ol:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
                     prose-a:text-blue-600 prose-a:underline prose-a:font-bold"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
}
