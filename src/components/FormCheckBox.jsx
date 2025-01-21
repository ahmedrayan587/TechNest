import React from 'react'

export default function FormCheckBox({id,name}) {
  return (
    <div className="-ml-2.5">
        <div className="inline-flex items-center">
            <label
            data-ripple-dark="true"
            htmlFor={id}
            className="relative flex cursor-pointer items-center rounded-full p-3"
            >
            <input
                id={id}
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-teal-500 checked:bg-teal-500 checked:before:bg-teal-500 hover:before:opacity-10"
                type="checkbox"
            />
            <span
                className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100"
            >
                <svg
                strokeWidth="1"
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 20 20"
                className="h-3.5 w-3.5"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    clipRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    fillRule="evenodd"
                ></path>
                </svg>
            </span>
            </label>
            <label
            htmlFor={id}
            className="mt-px cursor-pointer select-none font-light text-gray-700"
            >
            {name}
            </label>
        </div>
    </div>
  )
}
