import React from 'react';
import toast from 'react-hot-toast';

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
            <form className='relative' onSubmit={handleRecompose}>
                <label htmlFor="message" className="text-2xl font-bold block mb-2 text-gray-900 dark:text-gray-400">Your Recompose</label>
                <textarea name='recompose' id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Please type your recompose"></textarea>
                <button type="submit" className="text-dark absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </div>
    );
};

export default Recompose;