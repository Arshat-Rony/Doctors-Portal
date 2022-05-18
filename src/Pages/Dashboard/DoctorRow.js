import { fi } from 'date-fns/locale';
import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch, setDeleting }) => {
    const { name, speciality, image } = doctor;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img src={image} alt="doctor img" />
                    </div>
                </div>
            </td>
            <td>{speciality}</td>
            <th className='capitalize'>{name}</th>
            <td>
                <label onClick={() => setDeleting(doctor)} for="delete-modal" className="btn bg-red-600 border-none">Delete</label>

            </td>
        </tr>
    );
};

export default DoctorRow;