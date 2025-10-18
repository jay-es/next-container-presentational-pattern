export function UserDetailSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 animate-pulse">
      <div className="space-y-4">
        <div className="border-b pb-4">
          <div className="h-8 bg-gray-300 rounded w-48"></div>
          <div className="h-6 bg-gray-200 rounded w-32 mt-1"></div>
        </div>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="h-6 bg-gray-200 rounded w-24"></div>
            <div className="h-6 bg-gray-300 rounded w-56"></div>
          </div>
          <div className="flex items-start gap-3">
            <div className="h-6 bg-gray-200 rounded w-24"></div>
            <div className="h-6 bg-gray-300 rounded w-48"></div>
          </div>
          <div className="flex items-start gap-3">
            <div className="h-6 bg-gray-200 rounded w-24"></div>
            <div className="h-6 bg-gray-300 rounded w-52"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
