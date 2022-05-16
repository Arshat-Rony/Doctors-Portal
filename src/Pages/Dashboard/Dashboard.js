import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebaseinit';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const { admin } = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">

            <input id="sidebar-btn" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                {/* <!-- Page content here --> */}
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="sidebar-btn" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard/myappointments'>All Appointments</Link></li>
                    <li><Link to="/dashboard/review">Reviews</Link></li>
                    {
                        admin && <li><Link to="/dashboard/allusers">All Users</Link></li>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;