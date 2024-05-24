import React, { useState } from 'react'

const Stepper = () => {
    const stepsLength = Array(5).fill(null)
    const [currentStep, setCurrentStep] = useState(0);
    const progressWidth = ((currentStep) / stepsLength.length) * 100;

    return (
        <>
            <div className="flex items-center justify-between relative pl-4">
                {Array(5).fill(null).map((_, index) => <div onClick={() => setCurrentStep(index)} class="w-6 h-6 z-10 bg-blue-400 rounded-full flex items-center justify-center text-white text-xl">
                    {index + 1}
                </div>
                )}
                <div className='w-full bg-gray-300 h-0.5 absolute left-0' >
                    <div style={{ width: progressWidth + '%' }} className={` bg-blue-600 h-0.5`}></div>
                </div>
            </div>
            <button onClick={() => setCurrentStep(prev => prev === stepsLength.length ? prev : prev + 1)}>next</button>
            {progressWidth}
        </>
    )
}

export default Stepper