import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <aside className="w-72 bg-gray-800 p-4">
        <div className="text-white text-xl font-bold mb-8">Logo</div>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="text-gray-200 hover:bg-gray-700 px-4 py-2 rounded">HomePage</Link>
            </li>
            <li>
              <Link to="/add-job" className="text-gray-200 hover:bg-gray-700 px-4 py-2 rounded">Add New Job</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex justify-center items-start p-8">
        <main className="bg-gray-800 text-white p-6 rounded-lg shadow-lg border border-gray-700">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
