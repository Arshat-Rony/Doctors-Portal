import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebaseinit';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const { admin } = useAdmin(user)
    return (
        <div className="drawer drawer-mobile">

            <input id="sidebar-btn" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">

                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="sidebar-btn" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard/myappointments'>All Appointments</Link></li>
                    <li><Link to="/dashboard/review">Reviews</Link></li>
                    {
                        admin && <>
                            <li><Link to="/dashboard/allusers">All Users</Link></li>
                            <li><Link to="/dashboard/addoctor">Add Doctor</Link></li>
                            <li><Link to="/dashboard/managedoctor">Manage Doctor</Link></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;