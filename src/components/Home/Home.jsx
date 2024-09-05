export default function Home() {
    return (
      <div className="text-white p-4">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-[32px]">All Available Jobs</h1>
          <div className="">
            <input 
              type="search" 
              className="p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    );
  }
  