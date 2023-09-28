const loginFields = [
    {
        labelText: "Email",
        labelFor: "email",
        id: "email",
        name: "email",
        type: "email",
        autoComplete: "email",
        isRequired: true,
        placeholder: "Email"
    },
    {
        labelText: "Password",
        labelFor: "password",
        id: "password",
        name: "password",
        type: "password",
        autoComplete: "current-password",
        isRequired: true,
        placeholder: "Password"
    }
]

const signupFields = [
    {
        labelText: "Email",
        labelFor: "email",
        id: "email",
        name: "email",
        type: "email",
        autoComplete: "email",
        isRequired: true,
        placeholder: "Email"
    },
    {
        labelText: "Name",
        labelFor: "name",
        id: "name",
        name: "name",
        type: "text",
        autoComplete: "name",
        isRequired: true,
        placeholder: "Name"
    },
    {
        labelText: "Password",
        labelFor: "password",
        id: "password",
        name: "password",
        type: "password",
        autoComplete: "current-password",
        isRequired: true,
        placeholder: "Password"
    },
]

const eventFields = [
    {
        labelText: "Title",
        labelFor: "title",
        id: "title",
        name: "title",
        type: "title",
        autoComplete: "title",
        isRequired: true,
        placeholder: "Título"
    },
    {
        labelText: "Description",
        labelFor: "description",
        id: "description",
        name: "description",
        type: "text",
        autoComplete: "description",
        isRequired: true,
        placeholder: "Descrição"
    },
]

export { loginFields, signupFields, eventFields }