import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({ deleting, refetch, setDeleting }) => {
    const { name, _id } = deleting;
    const handleDeleteBtn = (id) => {
        const url = `http://localhost:5000/doctors/${id}`
        fetch(url, {
            method: "DELETE",
            headers: {
                'content-type': "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success("You have deleted one doctor")
                    refetch()
                    setDeleting(null)
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Do You want to delete <span className='text-secondary'>{name.toLocaleLowerCase()}</span></h3>
                    <p className="py-4 text-center">If you delete then it will be deleted permanenetly and You will never get him back.</p>
                    <div className="modal-action">
                        <button onClick={() => handleDeleteBtn(_id)} className="btn bg-red-600 border-none">X</button>
                        <label htmlFor="delete-modal" className="btn">cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;