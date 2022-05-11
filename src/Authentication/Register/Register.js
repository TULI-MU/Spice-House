
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import '../Register/Register.css';
import auth from '../../firebase.init';
import toast from 'react-hot-toast';
import { useState } from 'react';


const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }
    if(error){
        toast.error(error.message,{
            id:"test"
        })
    }
    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        console.log('user', user);
    }
    if (user) {
        navigate('/home');
    }
    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmpassword=e.target.confirmpassword.value;
        if(password!==confirmpassword){
            return toast.error("password did not match",{
                id:"error"
            })
        }

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        


        navigate('/home');
    }
    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Email Address' required />
                <input type="password" name="password" id="" placeholder='Password' />
                <input type="password" name="confirmpassword" id="" placeholder='Confirm password' />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className htmlFor="terms">Accept Spice House Terms and Conditions</label>
            <input className='w-50 mx-auto btn btn-secondary mt-2' type="submit" value="Register"/>
            </form>
            <p>Already have an account?<Link to={'/login'} className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;