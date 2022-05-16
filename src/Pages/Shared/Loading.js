import React from 'react';
import ReactLoading from 'react-loading';
const Loading = ({ type, color }) => {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <ReactLoading type={type} color={color} height={200} width={100} />
        </div>
    );
};

export default Loading;