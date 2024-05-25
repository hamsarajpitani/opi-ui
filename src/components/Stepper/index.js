import dayjs from 'dayjs';
import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa6';

const Step = ({ index, currentStep, onClick }) => {
    const isActive = index <= currentStep;

    return (
        <div
            onClick={() => onClick(index)}
            className={`w-8 h-8 z-10 rounded-full flex items-center justify-center text-white text-xl relative ${isActive ? 'bg-green-600' : 'bg-gray-400'
                }`}
        >
            <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {isActive && <FaCheck className='p-0.5' />}
            </span>
            <h5 className='mt-4 text-primary text-base font-semibold absolute top-full text-center'>Bidding Start
                <span className='inline-block whitespace-nowrap text-gray'>
                    {dayjs(new Date()).format('DD MMM YYYY')}
                </span>
            </h5>
        </div>
    );
};

const ProgressBar = ({ currentStep, stepsLength }) => {
    const progressWidth = currentStep ? (currentStep / (stepsLength.length - 1)) * 100 : 0;

    return (
        <div className="w-full bg-gray-300 h-0.5 absolute left-0 right-0 flex justify-between">
            <div
                style={{ width: `${progressWidth}%` }}
                className={`bg-green-600 h-0.5 ${currentStep === 0 ? 'ml-4' : ''}`}
            ></div>
        </div>
    );
};

const Stepper = () => {
    const stepsLength = [...Array(5)];
    const [currentStep, setCurrentStep] = useState(0);

    const handleClick = (index) => {
        setCurrentStep(index);
    };

    const handleNext = () => {
        setCurrentStep((prev) => (prev === stepsLength.length - 1 ? prev : prev + 1));
    };

    return (
        <section className="w-11/12 h-32 mx-auto">
            <div className="flex items-center justify-between relative" >
                {
                    stepsLength.map((_, index) => (
                        <Step
                            key={index}
                            index={index}
                            currentStep={currentStep}
                            onClick={handleClick}
                        />
                    ))
                }
                <ProgressBar currentStep={currentStep} stepsLength={stepsLength} />
            </div>
            <button onClick={handleNext} className="absolute -top-4 btn btn--primary">
                Next
            </button>
        </section >
    );
};

export default Stepper;