import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import '../styles/hook-form.css'

export default function () {
  const [data, setData] = useState()
  const { register, errors, handleSubmit } = useForm({
    mode: 'onChange',
  })
  const onSubmit = data => {
    setData(data)
  }

  return (
    <div className="hook-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Validation On Change</h1>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" placeholder="bill" ref={register({ required: true })} />
          {errors.firstName && <p>This is required</p>}
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" placeholder="luo" ref={register({ required: true })} />
          {errors.lastName && <p>This is required</p>}
        </div>

        <div>
          <label htmlFor="email" placeholder="bluebill1049@hotmail.com">
            Email
          </label>
          <input type="text" id="email" name="email" ref={register({ required: true })} />
          {errors.email && <p>This is required</p>}
        </div>
        <input type="submit" />

        {data && Object.keys(data).length > 0 && (
          <div className="pre">
            <pre style={{ color: 'white' }}>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </form>
    </div>
  )
}
