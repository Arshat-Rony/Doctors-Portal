import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteModal from './DeleteModal';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const [deleting, setDeleting] = useState(null)
    const { isLoading, data: doctors, refetch } = useQuery('doctors', () =>
        fetch(`http://localhost:5000/doctors`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading type="spokes" color="red"></Loading>
    }
    return (
        <div>
            <h2>This is ManageDoctors Page {doctors.length}</h2>


            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>S/L No</th>
                            <th className='capitalize'>Picture</th>
                            <th className='capitalize'>Speciality</th>
                            <th className='capitalize'>Name</th>
                            <th className='capitalize'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) =>
                                <DoctorRow
                                    key={doctor._id}
                                    doctor={doctor}
                                    index={index}
                                    refetch={refetch}
                                    setDeleting={setDeleting}
                                ></DoctorRow>
                            )
                        }
                    </tbody>
                </table>
            </div>

            {
                deleting && <DeleteModal
                    deleting={deleting}
                    refetch={refetch}
                    setDeleting={setDeleting}
                ></DeleteModal>
            }

        </div>
    );
};

export default ManageDoctors;