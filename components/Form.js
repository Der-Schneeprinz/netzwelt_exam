import React from 'react'

const Form = ({ action, method, children}) => {
    return (
        <form action={action}
            method={method}
            className="space-y-3">
                {children}
        </form>
    )
}

export default Form