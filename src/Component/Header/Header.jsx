import PropTypes from "prop-types";

const Header = ({ search, filteredsearch, searchItemCardHandeler }) => {
  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    // console.log(searchTerm);
    search(searchTerm);
  };

  let results = filteredsearch;
  return (
    <div>
      <div className="navbar bg-[#687EFF]">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl text-black font-bold">Task</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control dropdown dropdown-bottom">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 text-black bg-[#80B3FF] placeholder:italic placeholder:font-medium placeholder:text-blue-800 md:w-auto"
              onChange={handleInputChange}
            />
            {results.length > 0 && (
              <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                {results.map((result) => (
                  <li key={result.name}>
                    <button
                      onClick={() => searchItemCardHandeler(result)}
                      className="hover:border-b-4 border-sky-500">
                      {result.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
Header.propTypes = {
  search: PropTypes.string.isRequired,
  filteredsearch: PropTypes.func.isRequired,
  searchItemCardHandeler: PropTypes.func.isRequired,
};
export default Header;
