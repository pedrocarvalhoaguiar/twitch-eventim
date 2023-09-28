import { useEffect } from 'react';
import { loginFields } from "../constants/formFields";
import Input from "./Input";
import { useAuth } from '../context/AuthContext';

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

export default function Login() {
    const { user, loginUser, error, setError } = useAuth()

    useEffect(() => {
        setError('')
    }, []);

    const loginHandler = async (e) => {
        loginUser(e);
    }
    return (
        <form className="mt-8 space-y-8" onSubmit={loginHandler}>
            <div className="-space-y-px">
                {
                    fields.map(field =>
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
                <span className="text-white">{error}</span>
            )}
            <div className="text-center">
            <button
                type="submit"
                className="group relative w-1/2 justify-center py-2 px-4 border text-sm font-medium rounded-md text-white bg-malibu-400 hover:bg-malibu-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-malibu-500">
                Login
            </button>
            </div>

        </form>
    )
}