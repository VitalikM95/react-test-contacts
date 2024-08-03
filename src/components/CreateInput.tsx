import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { ICreateForm } from '../models'
import { emailValidation } from '../utils/validation'

const CreateInput = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ICreateForm>()

  const onSubmit: SubmitHandler<ICreateForm> = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='p-2'>First Name *</div>
      <Controller
        name='first_name'
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <input
            type='text'
            className='w-full border-2 border-gray-400 text-sm rounded-lg focus:ring-black p-3'
            {...field}
          />
        )}
      />
      {errors.first_name && errors.first_name.type === 'required' && (
        <span className='text-red-500'>Field is required</span>
      )}

      <div className='p-2'>Last Name</div>
      <Controller
        name='last_name'
        control={control}
        render={({ field }) => (
          <input
            type='text'
            className='w-full border-2 border-gray-400 text-sm rounded-lg focus:ring-black p-3'
            {...field}
          />
        )}
      />

      <div className='p-2'>Email *</div>
      <Controller
        name='email'
        control={control}
        rules={emailValidation}
        render={({ field }) => (
          <input
            type='email'
            className='w-full border-2 border-gray-400 text-sm rounded-lg focus:ring-black p-3'
            {...field}
          />
        )}
      />
      {errors.email && errors.email.type === 'required' && (
        <span className='text-red-500'>Field is required</span>
      )}

      <button
        type='submit'
        className='w-full mt-5 h-12 border-2 border-gray-400 hover:bg-slate-100 font-semibold rounded-md transition-all ease-in-out duration-100'
      >
        Add Contact
      </button>
    </form>
  )
}

export default CreateInput
