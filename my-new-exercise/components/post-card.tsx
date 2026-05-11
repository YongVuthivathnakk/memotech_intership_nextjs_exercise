import { Post } from "@/types/post";


interface PostProps {
    handleClick: () => void
    post: Post
}




export function PostCard({ post, handleClick }: PostProps) {
  return (
    <div onClick={handleClick} className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-3 hover:border-gray-300 transition-colors hover:bg-gray-100 cursor-pointer">
      <div className="flex items-center gap-2">
        <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-blue-50 text-blue-600">
          Post
        </span>
        <span className="text-xs text-gray-400">#{post.id}</span>
      </div>

      <p className="text-sm font-medium text-gray-900 leading-snug line-clamp-2">
        {post.title}
      </p>

      <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
        {post.body}
      </p>

      <div className="flex items-center justify-between pt-3 mt-auto border-t border-gray-100">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <div className="w-6 h-6 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-[10px] font-medium">
            U{post.userId}
          </div>
          <span>User {post.userId}</span>
        </div>
      </div>
    </div>
  );
}


