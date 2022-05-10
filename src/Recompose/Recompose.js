import React from 'react';
import toast from 'react-hot-toast';
import '../Recompose/Recompose.css';

const Recompose = () => {
    const handleRecompose = e => {
        e.preventDefault()
        const recompose = e.target.recompose.value
        if (!recompose) {
            toast.error('Please write something', { id: 'success' })
        }
        else {
            toast.success('Thanks for your recompose', { id: 'success' })
        }
        e.target.reset()
    }
    return (
        <div className='mx-auto d-block h-15 w-[400px]'>
            <label htmlFor="text-center" className="">Your Recompose</label>
            <form className='relative' onSubmit={handleRecompose}>
                
                <textarea name='recompose' id="message" rows="4" className="comment-box" placeholder="Please type your recompose"></textarea>
                <button type="submit" className=" submit-btn">Submit</button>
            </form>

        </div>
    );
};

export default Recompose;