import { Post } from "@jay-es/jsonplaceholder-client";

type Props = {
  post: Post;
};

export function PostDetailPresentation({ post }: Props) {
  return (
    <article className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h1>
      <p className="text-gray-700 leading-relaxed">{post.body}</p>
    </article>
  );
}
