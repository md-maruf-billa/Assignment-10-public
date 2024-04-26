import React from 'react';

const Button = ({btnName,size}) => {
    return (
        <p className={`inline-flex ${size} items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-[#FF76CE] border border-[#FF76CE] rounded-md shadow-sm hover:bg-[#ffb1e4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f85cc1]`} data-rounded="rounded-md" data-primary="blue-600" data-primary-reset="{}">
            {btnName}
        </p>
    ); 
};

export default Button;