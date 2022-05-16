import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { GrGoogle } from 'react-icons/gr'
import { useForm } from "react-hook-form";
import auth from '../../../../firebaseinit';
import Loading from '../../Loading';
import { async } from '@firebase/util';
import useToken from '../../../../hooks/useToken';
const Signup = () => {
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();
    let signInError;
    const [createUserWithEmailAndPassword, emailUser, emailLoading, emailError,] = useCreateUserWithEmailAndPassword(auth);

    const [signInWithGoogle, guser, gLoading, gError] = useSignInWithGoogle(auth);

    const [updateProfile, updating, error] = useUpdateProfile(auth);


    const { token } = useToken(emailUser || guser)

    useEffect(() => {
        if (token) {
            navigate("/appointment")
        }
    }, [token, navigate])


    if (gLoading || emailLoading || updating) {
        return <Loading type={"spokes"} color="#3A4256"></Loading>
    }


    if (emailError || gError || error) {
        signInError = <p className='text-red-500 font-bold'>{emailError?.message || gError?.message}</p>
    }

    const Submit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })
            .then(() => {
                toast("Welcome to MediZone")
            })

        console.log(data)
    };
    return (
        <div className="card w-96 mx-auto  shadow-xl mt-10">
            <div className="card-body">
                <h2 className="text-center mb-8 font-bold text-xl">Sign Up</h2>
                <form onSubmit={handleSubmit(Submit)} className='space-y-5'>
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

                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text text-red-500 text-sm">{errors.name.message}</span>}
                            </label>

                        </div>
                        <label className="label">
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

                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text text-red-500 text-sm">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text text-red-500 text-sm">{errors.email.message}</span>}
                        </label>

                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-sm">Your Password</span>
                        </label>
                        <input id='password'
                            type="password" name='password' className="input input-bordered input-accent w-full max-w-xs"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password Required"
                                },
                                minLength: {
                                    value: '6',
                                    message: "Minimum 6 Character Required"
                                }
                            })}

                        />

                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text text-sm text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text text-sm text-red-500">{errors.password.message}</span>}
                        </label>

                    </div>
                    {signInError}
                    <input type="submit" value="Sign Up" className="btn btn-accent w-full max-w-xs" />
                </form>
                <p className='text-center'>Already Have Account ? <Link to='/login' className='text-primary'>Go to Login</Link></p>
                <div className="divider">OR</div>
                <div className="card-actions justify-end">
                    <button onClick={() => signInWithGoogle()} className=" input  border-2 border-accent w-full max-w-xs focus:outline-none font-bold flex items-center justify-center gap-4 hover:bg-accent hover:text-white">
                        <GrGoogle className='text-xl' />
                        Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;