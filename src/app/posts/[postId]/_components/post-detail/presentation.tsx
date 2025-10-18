import { Post } from "@jay-es/jsonplaceholder-client";

type Props = {
  post: Post;
  authorElement: React.ReactNode;
};

export function PostDetailPresentation({ post, authorElement }: Props) {
  return (
    <article className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-1">{post.title}</h1>
      {authorElement}
      <p className="text-gray-700 leading-relaxed">{post.body}</p>
    </article>
  );
}
