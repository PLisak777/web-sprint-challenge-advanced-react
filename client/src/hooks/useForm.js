// write your custom hook here to control your checkout form
import React, { useState } from 'react';

const useForm = (key, initialValues, cb) => {
    const [values, setValues] = useState(key, initialValues);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

const handleChanges = (e) => {
    setValues({
        ...values,
        [e.target.name]: e.target.value
    })
}

const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true)
}

return [values, showSuccessMessage, handleChanges, handleSubmit]
}

export default useForm;