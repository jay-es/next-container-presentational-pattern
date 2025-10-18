import { Comment } from "@jay-es/jsonplaceholder-client";

type Props = {
  comments: Comment[];
};

export function PostCommentsPresentation({ comments }: Props) {
  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <article key={comment.id} className="bg-white rounded-lg shadow-md p-5">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-gray-900">{comment.name}</h3>
            <span className="text-xs text-gray-500">{comment.email}</span>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            {comment.body}
          </p>
        </article>
      ))}
    </div>
  );
}
