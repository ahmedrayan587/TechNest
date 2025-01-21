import React from 'react'
import { Link } from 'react-router-dom'

export default function Form({name,children}) {
  return (
    <div className="flex justify-center items-center min-h-[75vh]">
        <div
            className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md m-auto"
            >
            <div
                className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-teal-600 to-teal-400 bg-clip-border text-white shadow-lg shadow-teal-500/40"
            >
                <h3
                className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased"
                >
                {name}
                </h3>
            </div>
            <div className="flex flex-col gap-4 p-6">
                {children}
            </div>
            <div className="p-6 pt-0">
                <button
                data-ripple-light="true"
                type="button"
                className="block w-full select-none rounded-lg bg-gradient-to-tr from-teal-600 to-teal-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-teal-500/20 transition-all hover:shadow-lg hover:shadow-teal-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                {name}
                </button>
                {name=="Log In"||name=="Sign Up"?<p
                className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased"
                >
                Don't have an account?
                <Link
                    className="ml-1 block font-sans text-sm font-bold leading-normal text-teal-500 antialiased"
                    to={name=="Log In"?"/signup":"/login"}
                >
                    {name=="Log In"?"Sign Up":"Log In"}
                </Link>
                </p>:""}
            </div>
        </div>
    </div>
  )
}
