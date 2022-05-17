import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user;

    const handleAdmin = () => {
        fetch(`https://doctors-potal-server-side.herokuapp.com/users/admin/${email}`, {
            method: "PUT",
            headers: {
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("Failed to make an admin")
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success("You are admin now")
                    console.log(data)
                }
            }
            )
    }



    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role === "admin" ? <span className='font-bold text-red-500'>Admin</span> : <button onClick={handleAdmin} className="btn btn-accent btn-sm">Make Admin</button>}</td>
            <td><button className="btn btn-accent btn-sm">X</button></td>
        </tr>
    );
};

export default UserRow;