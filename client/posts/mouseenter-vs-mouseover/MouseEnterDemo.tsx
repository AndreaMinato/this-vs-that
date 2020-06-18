import React, { useState } from 'react';

const MouseEnterDemo: React.FC<{}> = () => {
    const [count, setCount] = useState(0);

    return (
        <div className='my-8'>
            <div className='mb-4 italic'>
                mouseenter: The number is increased by 1 when you are over the biggest square only
            </div>
            <div
                className='w-64 h-64 border border-gray-400 p-8 cursor-pointer'
                onMouseEnter={() => setCount(c => c + 1)}
            >
                <div className='border border-gray-400 p-8 bg-gray-100 w-full h-full'>
                    <div className='border border-gray-400 p-8 bg-gray-300 w-full h-full'>
                        <div className='border border-gray-400 bg-gray-500 w-full h-full flex items-center justify-center text-3xl'>
                            {count}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MouseEnterDemo;
