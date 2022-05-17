import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
    const formData = new FormData();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { isLoading, data: services } = useQuery('services', () =>
        fetch('http://localhost:5000/services').then(res =>
            res.json()
        )
    )

    const apiKey = "2f9adb8ce031998eaf3d21da3f852a9a"

    if (isLoading) {
        return <Loading type="spokes" color="red"></Loading>
    }
    const Submit = async (data) => {
        const image = data.file[0]
        formData.append('image', image)
        // send image to the third party server 
        const url = `https://api.imgbb.com/1/upload?key=${apiKey}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speciality: data.speciality,
                        image: img
                    }
                    //get the image and send to your database 
                    const newUrl = `http://localhost:5000/doctors`
                    fetch(newUrl, {
                        method: "POST",
                        headers: {
                            'content-type': "application/json",
                            authorization: `Bearer ${localStorage.getItem("accessToken")}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                toast("You have added a doctor successfully")
                                reset()
                            }
                        })

                }
            })

    };


    return (
        <div className='w-8/12 mx-auto'>
            <h2 className='text-2xl font-mono font-bold mt-12'>Add Your Doctor</h2>
            <form onSubmit={handleSubmit(Submit)} className='space-y-5 mt-12'>
                <div>
                    <div>
                        <label className="label">
                            <span className="label-text text-sm">Your name</span>
                        </label>
                        <input id='name'
                            type="name" name='name' className="input input-bordered input-accent w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name Required"
                                }
                            })}

                        />

                        <label className="label ">
                            {errors.name?.type === 'required' && <span className="label-text text-red-500 text-sm">{errors.name.message}</span>}
                        </label>

                    </div>
                    <label className="label ">
                        <span className="label-text text-sm">Your Email</span>
                    </label>
                    <input id='email'
                        type="email" name='email' className="input input-bordered input-accent w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Email Required"
                            },
                            pattern: {
                                value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                                message: "Your email should be someone@gmail.com"
                            }
                        })}

                    />

                    <label className="label ">
                        {errors.email?.type === 'required' && <span className="label-text text-red-500 text-sm">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text text-red-500 text-sm">{errors.email.message}</span>}
                    </label>

                </div>



                <div>
                    <label className="label">
                        <span className="label-text text-sm">Your Speciality</span>
                    </label>
                    <select  {...register("speciality")} class="select w-full max-w-xs input input-bordered">
                        {
                            services.map(service => <option
                                key={service._id}
                            >{service.name}</option>)
                        }
                    </select>

                    <label className="label">
                        {errors.speciality?.type === 'required' && <span className="label-text text-sm text-red-500">{errors.speciality.message}</span>}
                        {errors.speciality?.type === 'minLength' && <span className="label-text text-sm text-red-500">{errors.speciality.message}</span>}
                    </label>

                </div>


                <div>
                    <label className="label">
                        <span className="label-text text-sm">Your Image</span>
                    </label>
                    <input id='image'
                        type="file" name='image' className="input input-bordered input-accent w-full max-w-xs"
                        {...register("file", {
                            required: {
                                value: true,
                                message: "Name Required"
                            }
                        })}

                    />

                    <label className="label ">
                        {errors.image?.type === 'required' && <span className="label-text text-red-500 text-sm">{errors.image?.message}</span>}
                    </label>

                </div>




                <input type="submit" value="Add" className="btn btn-accent w-full max-w-xs" />
            </form>
        </div>
    );
};

export default AddDoctor;