import { useEffect, useState } from 'react';
import { eventFields } from "../constants/formFields";
import InputTest from "./Input";
import {
    Datetimepicker,
    Input,
    initTE,
} from "tw-elements";
import { createEvent } from '../api/eventApi'

import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom'

const fields = eventFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

export default function EventAdd() {
    const { error, setError } = useAuth()
    const navigate = useNavigate();

    const createEventHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await createEvent(e);
            console.log(response)
            if (response && response.status === 201) {
                navigate('/');
            }
        } catch (error) {
            setError(error.response.data.error)
        }
    }

    useEffect(() => {
        setError('')
        initTE({ Datetimepicker, Input });
        console.log(1233444)
    }, [navigate]);

    return (
        <form className="mt-8 space-y-8" onSubmit={createEventHandler}>
            <div className="">
                {
                    fields.map(field =>
                        <InputTest
                            key={field.id}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                        />
                    )
                }
                <div
                    className="relative mb-3"
                    data-te-date-timepicker-init
                    data-te-input-wrapper-init>
                    <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="startDatetime"
                        name="startDatetime"
                        required={true} />
                    <label
                        htmlFor="starDate"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                        Início
                    </label>
                </div>
                <div
                    className="relative mb-3"
                    data-te-date-timepicker-init
                    data-te-input-wrapper-init>
                    <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="endDatetime"
                        name="endDatetime"
                        required={true} />
                    <label
                        htmlFor="endDate"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                        Fim
                    </label>
                </div>
            </div>
            {error && (
                <span className="text-white">{error}</span>
            )}
            <div className="text-center">
                <button
                    type="submit"
                    className="group relative w-1/2 justify-center py-2 px-4 border text-sm font-medium rounded-md text-white bg-malibu-400 hover:bg-malibu-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-malibu-500">
                    Create
                </button>
            </div>

        </form>
    )
}