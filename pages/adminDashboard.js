
import {useState, useEffect} from 'react';

function AdminDashboard() {

      const [players, setPlayers] = useState([]);

      useEffect(() => {
        loadPlayers();
      }, []);

      const loadPlayers = async () => {
        const res = await fetch('https://redeemfc.onrender.com/api/users');
        const data = await res.json();
        setPlayers(data);
      };
  return (
    <div>
      {/* Navbar */}
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <a className='navbar-brand' href='#'>
          Admin Dashboard
        </a>
        {/* Add your navbar content here */}
      </nav>

      <div className='container-fluid'>
        <div className='row'>
          {/* Sidebar */}
          <nav className='col-md-2  d-md-block bg-light sidebar'>
            <div className='sidebar-sticky'>
              <ul className='nav flex-column'>
                <li className='nav-item'>
                  <a className='nav-link active' href='#'>
                    <span className='feather' data-feather='home'></span>
                    Dashboard <span className='sr-only'>(current)</span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <span className='feather' data-feather='users'></span>
                    Users
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <span className='feather' data-feather='file'></span>
                    Reports
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <span className='feather' data-feather='settings'></span>
                    Settings
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          {/* Content */}
          <main role='main' className='col-md-9 ml-sm-auto col-lg-10 px-4'>
            <h2>Dashboard</h2>
            <div className='table-responsive'>
              <table className='table table-striped table-sm'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>johndoe@example.com</td>
                    <td>Admin</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jane Smith</td>
                    <td>janesmith@example.com</td>
                    <td>User</td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
