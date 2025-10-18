import Link from "next/link";
import { Post } from "@jay-es/jsonplaceholder-client";
import { ChevronRightIcon } from "@/components/chevron-right-icon";

type Props = {
  posts: Post[];
};

export function UserPostsPresentation({ posts }: Props) {
  return (
    <div className="space-y-3">
      {posts.map((post) => (
        <article key={post.id}>
          <Link
            href={`/posts/${post.id}`}
            className="flex items-center justify-between bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-base font-medium text-gray-900">
              {post.title}
            </h3>
            <ChevronRightIcon />
          </Link>
        </article>
      ))}
    </div>
  );
}
