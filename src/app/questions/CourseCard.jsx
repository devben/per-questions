
  
  export default function CourseCard({ year, course, onClick}) {
    return (
        <div
            className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-3 py-3 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
            onClick={onClick}
        >
            <div className="min-w-0 flex-1">
                    <span aria-hidden="true" className="absolute inset-0" />
                    <p className="text-sm font-medium text-gray-900">{year}</p>
                    <p className="truncate text-sm text-gray-500">{course}</p>
            </div>
        </div>
    )
  }
  