import { useEffect } from 'react';
import { signupFields } from "../constants/formFields";
import Input from "./Input";
import { useAuth } from '../context/AuthContext';

const fields = signupFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

export default function Register() {
  const { user, registerUser, error, setError } = useAuth()

  useEffect(() => {
    setError('')
  }, []);


  const registerHandler = async (e) => {
    registerUser(e);
  }

  return (
    <form className="mt-8 space-y-6" onSubmit={registerHandler}>
      <div className="">
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
        Registrar
      </button>
      </div>
    </form>
  )
}