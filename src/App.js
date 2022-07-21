import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';
import BasicAlert from './components/BasicAlert';
import BasicInput from './components/BasicInput';

function App() {
    const nameRef = useRef();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const { ref, ...rest } = register('name', {
        required: {
            value: true,
            message: 'This file is required',
        },
        minLength: {
            value: 5,
            message: 'Should be greater then 5 characters',
        },
        maxLength: {
            value: 10,
            message: 'Should be smaller then 10 characters',
        },
    });
    return (
        <div className='App'>
            {errors.name && (
                <div>
                    <BasicAlert color={'is-danger mb-3'}>
                        {errors.name.message}
                    </BasicAlert>
                </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
                <BasicInput
                    label={'your name'}
                    type='text'
                    error={errors.name ? true : false}
                    ref={(e) => {
                        ref(e);
                        nameRef.current = e;
                    }}
                    {...rest}
                />
                <button type='submit' className='button is-primary mt-3'>
                    send
                </button>
            </form>
        </div>
    );
}

export default App;
