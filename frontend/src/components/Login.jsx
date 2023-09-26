import { useState, useContext } from 'react';
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import { useAuth } from '../context/AuthContext';

const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function Login(){
    const { user, loginUser, error } = useAuth()

    const loginHandler = async (e) => {
        loginUser(e);
        }
    return(
        <form className="mt-8 space-y-6" onSubmit={loginHandler}>
        <div className="-space-y-px">
            {
                fields.map(field=>
                        <Input
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
        </div>
        {error && (
      <span className="text-red-500">{error}</span>
    )}
        <FormExtra/>
        <FormAction handleSubmit={user} text="Login"/>

      </form>
    )
}