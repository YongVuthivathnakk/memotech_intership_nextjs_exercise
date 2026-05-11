export default function PostSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-12">

        {/* Back button skeleton */}
        <div className="w-16 h-4 bg-gray-200 rounded-md animate-pulse mb-8" />

        {/* Card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8">

          {/* Meta skeleton */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-12 h-5 bg-gray-200 rounded-md animate-pulse" />
            <div className="w-6 h-4 bg-gray-200 rounded-md animate-pulse" />
            <div className="w-16 h-4 bg-gray-200 rounded-md animate-pulse" />
          </div>

          {/* Title skeleton */}
          <div className="flex flex-col gap-2 mb-4">
            <div className="w-full h-6 bg-gray-200 rounded-md animate-pulse" />
            <div className="w-3/4 h-6 bg-gray-200 rounded-md animate-pulse" />
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 mb-6" />

          {/* Body skeleton */}
          <div className="flex flex-col gap-2">
            <div className="w-full h-4 bg-gray-200 rounded-md animate-pulse" />
            <div className="w-full h-4 bg-gray-200 rounded-md animate-pulse" />
            <div className="w-full h-4 bg-gray-200 rounded-md animate-pulse" />
            <div className="w-2/3 h-4 bg-gray-200 rounded-md animate-pulse" />
          </div>

        </div>
      </div>
    </div>
  );
}