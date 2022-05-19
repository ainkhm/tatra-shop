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
        <Form className="flex flex-col text-[#C9C9C9] gap-4">
          <div className="form-group flex flex-col gap-4">
            <Field
              type="text"
              name="firstname"
              className="form-control w-[100%] h-[40px]  text-[12px] border-[1px] border-[#C9C9C9] pl-4  "
              placeholder="First name*"
            />
            <Field
              type="text"
              name="lastname"
              className="form-control w-[100%] h-[40px] text-[12px] border-[1px] border-[#C9C9C9] pl-4  "
              placeholder="Last name*"
            />
          </div>
          <div className="form-group flex flex-col lg:flex-row  gap-3">
            <Field
              type="text"
              name="street"
              className="form-control w-[100%] lg:w-[50%] h-[40px] text-[12px] border-[1px] border-[#C9C9C9] pl-4  "
              placeholder="STREET*"
            />
            <Field
              type="text"
              name="house"
              className="form-control w-[100%] lg:w-[50%] h-[40px] text-[12px] border-[1px] border-[#C9C9C9] pl-4  "
              placeholder="HOUSE NUMBER*"
            />
          </div>
          <div className="form-group">
            <Field
              type="text"
              name="address"
              className="form-control w-[100%] h-[40px] text-[12px] border-[1px] border-[#C9C9C9] pl-4  "
              placeholder="ADDRESS 2/DHL POST NUMBER"
            />
          </div>
          <div className="form-group flex flex-col lg:flex-row  gap-3">
            <Field
              type="text"
              name="postcode"
              className="form-control w-[100%] lg:w-[50%] h-[40px] text-[12px] border-[1px] border-[#C9C9C9] pl-4  "
              placeholder="POST CODE* "
            />
            <Field
              type="text"
              name="city"
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
              <option value="red" className="">
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
              {/* CustomRadioButton */}
              <Radio text="Lorem ipsum" />
            </div>
          </div>
          {/* Input fields */}
          <h1 className="text-[#161616] text-[1rem] font-semibold">
            Enter Contact Info (for Order Invoice)
          </h1>
          <div className="form-group flex flex-col gap-3">
            <Field
              type="text"
              name="email"
              className="form-control w-[100%]  h-[40px] text-[12px]  border-[1px] border-[#C9C9C9] pl-4  "
              placeholder="EMAIL"
            />
            <Field
              type="text"
              name="confirmemail"
              className="form-control w-[100%]  h-[40px] text-[12px]  border-[1px] border-[#C9C9C9] pl-4  "
              placeholder="CONFIRM EMAIL"
            />{' '}
            <Field
              type="text"
              name="Phone"
              className="form-control w-[100%] h-[50px] text-[12px]  border-[1px] border-[#C9C9C9] pl-4  "
              placeholder="Phone number"
            />
          </div>
        </Form>
      )}
    </Formik>
  )
}

interface RadioButtonProps {
  text: string
}

const Radio = (props: RadioButtonProps) => {
  const [active1, setActive1] = React.useState(false)
  const [active2, setActive2] = React.useState(false)
  const handleRadio1 = () => {
    setActive1(true)
    setActive2(false)
  }
  const handleRadio2 = () => {
    setActive2(true)
    setActive1(false)
  }

  return (
    <div className="flex flex-col gap-1">
      <div
        className="flex w-max gap-3 items-center font-medium"
        onClick={handleRadio1}
      >
        {/* RadioButton */}
        <div className="w-[14px] h-[14px] rounded-[50%] bg-[#70877B] border-[0.1px] border-black flex  items-center justify-center">
          <div
            style={{ backgroundColor: active1 ? '#0f7ff0' : '#ffffff' }}
            className="w-[50%] h-[50%] rounded-[50%] bg-white"
          ></div>
        </div>
        <h1 className="text-[#161616] text-[0.8rem] font-medium">
          {props.text}
        </h1>
      </div>
      {/* // Second */}

      <div className="flex w-max gap-3" onClick={handleRadio2}>
        {/* RadioButton */}
        <div className="w-[14px] h-[14px] rounded-[50%] bg-[#70877B] border-[0.1px] border-black flex  items-center justify-center">
          <div
            style={{ backgroundColor: active2 ? '#0f7ff0' : '#ffffff' }}
            className="w-[50%] h-[50%] rounded-[50%] bg-white"
          ></div>
        </div>
        <h1 className="text-[#161616] text-[0.8rem] font-medium">
          {props.text}
        </h1>
      </div>
    </div>
  )
}

export default RegistrationForm
