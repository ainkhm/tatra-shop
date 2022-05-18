import React from 'react'
import { Formik, Field, Form } from 'formik'

const RegistrationForm = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={() => {
        alert('Form is validated! Submitting the form...')
        // setSubmitting(false)
      }}
    >
      {() => (
        <Form className="flex flex-col gap-4">
          <div className="form-group flex flex-col gap-4">
            <Field
              type="email"
              name="email"
              className="form-control w-[100%] h-[40px] text-[12px] border-[1px] border-[#C9C9C9] pl-4  "
              placeholder="First name*"
            />
            <Field
              type="email"
              name="email"
              className="form-control w-[100%] h-[40px] text-[12px] border-[1px] border-[#C9C9C9] pl-4  "
              placeholder="Last name*"
            />
          </div>
          <div className="form-group flex flex-col lg:flex-row  gap-3">
            <Field
              type="email"
              name="email"
              className="form-control w-[100%] lg:w-[50%] h-[40px] text-[12px] border-[1px] border-[#C9C9C9] pl-4  "
              placeholder="STREET*"
            />
            <Field
              type="email"
              name="email"
              className="form-control w-[100%] lg:w-[50%] h-[40px] text-[12px] border-[1px] border-[#C9C9C9] pl-4  "
              placeholder="HOUSE NUMBER*"
            />
          </div>
          <div className="form-group">
            <Field
              type="email"
              name="email"
              className="form-control w-[100%] h-[40px] text-[12px] border-[1px] border-[#C9C9C9] pl-4  "
              placeholder="ADDRESS 2/DHL POST NUMBER"
            />
          </div>
          <div className="form-group flex flex-col lg:flex-row  gap-3">
            <Field
              type="email"
              name="email"
              className="form-control w-[100%] lg:w-[50%] h-[40px] text-[12px] border-[1px] border-[#C9C9C9] pl-4  "
              placeholder="POST CODE* "
            />
            <Field
              type="email"
              name="email"
              className="form-control w-[100%] lg:w-[50%] h-[40px] text-[12px] border-[1px] border-[#C9C9C9] pl-4  "
              placeholder="CITY*"
            />
          </div>
          <div className="form-group">
            <Field
              as="select"
              name="color"
              className="form-control w-[100%] text-[#aeaaaa] h-[40px] text-[12px] border-[1px] border-[#C9C9C9] pl-4"
            >
              <option value="red" className="text-red">
                Red
              </option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </Field>
          </div>
          {/* RadioButtons */}
          <div className="flex flex-col gap-2">
            <h1 className="text-[#161616] text-[1rem] font-semibold">
              Select a Shipping Method
            </h1>
            <div className="flex flex-col gap-1">
              <div className="form-group flex items-center gap-3">
                <Field name="acceptTerms" type="radio" checked={true} />
                <h1 className="text-[#161616] text-[0.8rem] font-medium">
                  Lorem ipsum
                </h1>
              </div>
              <div className="form-group flex items-center gap-3">
                <Field name="acceptTerms" type="radio" checked={true} />
                <h1 className="text-[#161616] text-[0.8rem] font-medium">
                  Lorem ipsum
                </h1>
              </div>
            </div>
          </div>
          {/* Input fields */}
          <h1 className="text-[#161616] text-[1rem] font-semibold">
            Enter Contact Info (for Order Invoice)
          </h1>
          <div className="form-group flex flex-col gap-3">
            <Field
              type="email"
              name="email"
              className="form-control w-[100%]  h-[40px] text-[12px]  border-[1px] border-[#C9C9C9] pl-4  "
              placeholder="EMAIL"
            />
            <Field
              type="email"
              name="email"
              className="form-control w-[100%]  h-[40px] text-[12px]  border-[1px] border-[#C9C9C9] pl-4  "
              placeholder="CONFIRM EMAIL"
            />{' '}
            <Field
              type="email"
              name="email"
              className="form-control w-[100%] h-[50px] border-[1px] border-[#C9C9C9] pl-4  "
              placeholder="Phone number"
            />
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default RegistrationForm