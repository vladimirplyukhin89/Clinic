import { useState, useEffect } from 'react';

export const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [formValid, setFormValid] = useState(false);
    const [error, setError] = useState({
        password: '',
        lengthForUser: '',
        lengthForPassword: ''
    });

    useEffect(() => {
        for (let validation in validations) {
            switch (validation) {
                case 'minLength':
                    if (value.length < validations[validation]) {
                        setMinLengthError(true);
                        setError({
                            ...error,
                            password: `Пароль минимум должен быть ${validations[validation]} символов`
                        });
                        if (!value) {
                            setError({
                                ...error,
                                lengthForUser: 'Поле не может быть пустым',
                                lengthForPassword: 'Поле не может быть пустым'
                            });
                        }
                    } else {
                        setMinLengthError(false);
                        setError('');
                    }
                    break;
                case 'isEmpty':
                    if (!value) {
                        setEmpty(true);
                        setError({
                            ...error,
                            lengthForUser: 'Поле не может быть пустым',
                            lengthForPassword: 'Поле не может быть пустым'
                        });
                    } else {
                        setEmpty(false);
                        setError('');
                    }
                    break;
            }
        }
    }, [value]);

    useEffect(() => {
        if (isEmpty || minLengthError || error) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [isEmpty, minLengthError, error])

    return {
        isEmpty,
        minLengthError,
        error,
        formValid
    }
};

export const useInput = (initialState, validations) => {
    const [value, setValue] = useState(initialState);
    const [isDirty, setDirty] = useState(false);
    const valid = useValidation(value, validations)

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onBlur = (e) => {
        setDirty(true);
    }

    return {
        value,
        isDirty,
        onChange,
        onBlur,
        ...valid
    }
};

