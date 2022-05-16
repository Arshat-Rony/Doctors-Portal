import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GrGoogle } from 'react-icons/gr'
import { useForm } from "react-hook-form";
import auth from '../../../../firebaseinit';
import Loading from '../../Loading';
import useToken from '../../../../hooks/useToken';

const Login = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const { register, formState: { errors }, handleSubmit } = useForm();

    let signInError;

    const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, guser, gLoading, gError] = useSignInWithGoogle(auth);

    const { token } = useToken(emailUser || guser)
    console.log(guser)
    useEffect(() => {
        if (token) {
            console.log(token)
            navigate(from, { replace: true })
        }
    }, [token, from, navigate])


    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth)


    if (gLoading || emailLoading) {
        return <Loading type={"spokes"} color="#3A4256"></Loading>
    }




    if (emailError || gError) {
        signInError = <p className='text-red-500 font-bold'>{emailError?.message || gError?.message}</p>
    }




    const Submit = data => {
        signInWithEmailAndPassword(data.email, data.password)
        console.log(data)
    };

    return (
        <div className="card w-96 mx-auto  shadow-xl mt-10">
            <div className="card-body">
                <h2 className="text-center mb-8 font-bold text-xl">Log in</h2>
                <form onSubmit={handleSubmit(Submit)} className='space-y-5'>
                    <div>
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
                    <input type="submit" value="Log in" className="btn btn-accent w-full max-w-xs" />
                </form>
                <p onClick={() => {
                }}>New to MediZone ? <Link to='/signup' className='text-primary'>Create New Account</Link></p>
                <div className="divider">OR</div>
                <div className="card-actions justify-end">
                    <button onClick={() => signInWithGoogle()} className=" input  border-2 border-accent w-full max-w-xs focus:outline-none font-bold flex items-center justify-center gap-4">
                        <GrGoogle className='text-xl' />
                        Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;