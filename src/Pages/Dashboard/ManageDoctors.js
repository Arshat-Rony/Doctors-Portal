import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const ManageDoctors = () => {
    const { isLoading, data: doctors } = useQuery('doctors', () =>
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

        </div>
    );
};

export default ManageDoctors;