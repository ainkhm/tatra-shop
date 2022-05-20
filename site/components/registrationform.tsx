import React from 'react'
import { Formik, Field, Form } from 'formik'
import FormButton  from '@components/common/checkout/formbutton'
import Button  from '@components/common/checkout/button'

import * as Yup from 'yup';
const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('Required'),
    lastName: Yup.string()
      .required('Required'),
    street: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),

  });

const RegistrationForm = () => {
    const [showAddress, setShowAddress] = React.useState(true)
    const [showPay, setShowPay] = React.useState(false)
    const [showReview, setShowReview] = React.useState(false)

    return (
        <Formik
        initialValues={{
        firstName: '',
        lastName: '',
        street: '',
            }}
            validationSchema={SignupSchema}
                onSubmit={() => {
                    // alert('Form is validated! Submitting the form...')
                }}
>
{({ errors, touched }) => (
                                    // Form will come here
    <Form className="w-[100%] lg:w-[50%] flex flex-col text-[#C9C9C9] gap-4">


    <div className=" flex flex-col gap-6 ">

        <Button
            text={'1. ADDRESSES'}
            onClick={() => setShowAddress(!showAddress)}
        />
        {showAddress ? 
            <div className=" flex flex-col gap-6 w-[100%]">

                        <div className="form-group flex flex-col gap-4">
                            <div>
                                <Field
                                    type="text"
                                    name="firstName"
                                    style={{
                                        borderColor: (errors.firstName && touched.firstName) ? '#fc0000' : '',
                                    }}
                
                                    className="form-control w-[100%] h-[40px] bg-[#ffffff] outline-none  text-[12px] border-[1px] border-[#C9C9C9] pl-4  "
                                    placeholder="First name*"
                                />
                                {errors.firstName && touched.firstName ? (
                                    <h1 className="text-[#fc0000] mt-2 text-[0.8rem] font-medium">
                                        Please fill out this field.
                                    </h1>
                                
                                    //  <div className="form-group text-black bg-red">{errors.firstName}</div>
                                    ) : null}
    
                            </div>
                            <div>
                            <Field
                                type="text"
                                name="lastName"
                                style={{
                                    borderColor: (errors.lastName && touched.lastName) ? '#fc0000' : '',
                                }}

                                className="form-control w-[100%] h-[40px] outline-none text-[12px] bg-[#ffffff] border-[1px] border-[#C9C9C9] pl-4  "
                                placeholder="Last name*"
                            />

                            {errors.lastName && touched.lastName ? (
                                    <h1 className="text-[#fc0000] mt-2 text-[0.8rem] font-medium">
                                        Please fill out this field.
                                    </h1>
                                
                                    //  <div className="form-group text-black bg-red">{errors.firstName}</div>
                                    ) : null}

                            </div>
                        </div>
                        <div className="form-group flex flex-col lg:flex-row  gap-3">
                            <div className="form-group w-[100%] lg:w-[50%] flex flex-col">
                                <Field
                                    type="text"
                                    name="street"
                                    style={{
                                        borderColor: (errors.street && touched.lastName) ? '#fc0000' : '',
                                    }}

                                    className="form-control  bg-[#ffffff] h-[40px] outline-none text-[12px] border-[1px] border-[#C9C9C9] pl-4  "
                                    placeholder="STREET*"
                                />
                                
                                {errors.street && touched.street ? (
                                        <h1 className="text-[#fc0000] mt-2 text-[0.8rem] font-medium">
                                            Please match the requested format.
                                        </h1>
                                    
                                        //  <div className="form-group text-black bg-red">{errors.firstName}</div>
                                        ) : null}

                            </div>

                            <Field
                                type="text"
                                name="house"
                                className="form-control w-[100%] lg:w-[50%] outline-none bg-[#ffffff] h-[40px] text-[12px] border-[1px] border-[#C9C9C9] pl-4  "
                                placeholder="HOUSE NUMBER*"
                            />
                        </div>
                        <div className="form-group">
                            <Field
                                type="text"
                                name="address"
                                className="form-control w-[100%] h-[40px] outline-none bg-[#ffffff] text-[12px] border-[1px] border-[#C9C9C9] pl-4  "
                                placeholder="ADDRESS 2/DHL POST NUMBER"
                            />
                        </div>
                        <div className="form-group flex flex-col lg:flex-row  gap-3">
                            <Field
                                type="text"
                                name="postcode"
                                className="form-control w-[100%] lg:w-[50%] h-[40px] outline-none bg-[#ffffff] text-[12px] border-[1px] border-[#C9C9C9] pl-4  "
                                placeholder="POST CODE* "
                            />
                            <Field
                                type="text"
                                name="city"
                                className="form-control w-[100%] lg:w-[50%] bg-[#ffffff] outline-none h-[40px] text-[12px] border-[1px] border-[#C9C9C9] pl-4  "
                                placeholder="CITY*"
                            />
                        </div>
                        <div className="form-group">
                            <Field
                                as="select"
                                name="color"
                                className="form-control w-[100%] bg-[#ffffff] text-[#aeaaaa] outline-none h-[40px] text-[12px] border-[1px] border-[#C9C9C9] pl-4"
                            >
                                <option className='' value="red" >
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
                                className="form-control w-[100%] bg-[#ffffff] outline-none  h-[40px] text-[12px]  border-[1px] border-[#C9C9C9] pl-4  "
                                placeholder="EMAIL"
                            />
                            <Field
                                type="text"
                                name="confirmemail"
                                className="form-control w-[100%] outline-none   bg-[#ffffff] h-[40px] text-[12px]  border-[1px] border-[#C9C9C9] pl-4  "
                                placeholder="CONFIRM EMAIL"
                            />{' '}
                            <Field
                                type="text"
                                name="Phone"
                                className="form-control w-[100%] h-[50px] outline-none bg-[#ffffff] text-[12px]  border-[1px] border-[#C9C9C9] pl-4  "
                                placeholder="Phone number"
                            />
                        </div>
            </div>

                    // <RegistrationForm />

            : <></>}

        <Button text={'2. PAY'} onClick={() => setShowPay(!showPay)} />
        {showPay ? (
            <div className="">
                <h1 className="text-[#161616] text-[0.8rem] font-medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                    mollitia, molestiae quas vel sint commodi repudiandae consequuntur
                    voluptatum laborum numquam blanditiis harum quisquam eius sed odit
                    fugiat iusto fuga praesentium optio, eaque rerum! Provident
                    similique accusantium nemo autem. Veritatis obcaecati tenetur iure
                    eius earum ut molestias architecto voluptate aliquam nihil,
                    eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                    tenetur error, harum nesciunt ipsum debitis quas aliquid.
                    Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
                    laudantium molestias eos sapiente officiis modi at sunt excepturi
                    expedita sint? Sed quibusdam recusandae alias error harum maxime
                    adipisci amet laborum. Perspiciatis
                </h1>
            </div>
        ) : (
            <></>
        )}
        <Button text={'3. REVIEW'} onClick={() => setShowReview(!showReview)} />
        {showReview ? (
            <div className="">
                <h1 className="text-[#161616] text-[0.8rem] font-medium">
                    Review Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum numquam blanditiis harum quisquam
                    eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
                    Provident similique accusantium nemo autem. Veritatis obcaecati
                    tenetur iure eius earum ut molestias architecto voluptate aliquam
                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt
                    quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas
                    aliquid.
                </h1>
            </div>
        ) : (
            <></>
        )}

        <div className="w-[100%] lg:w-[490px] pb-24">
            <FormButton text="CONTINUE TO PAYMENT METHOD" />
        </div>
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
                className="flex w-max gap-3 cursor-pointer items-center font-medium"
                onClick={handleRadio1}
            >
                {/* RadioButton */}
                <div
                    style={{
                        backgroundColor: active1 ? '#70877B' : '#70877B',
                    }}
                    // borderColor: active1 ? '#6DE039' : '#70877B',

                    className="w-[14px] h-[14px] rounded-[50%] bg-[#70877B] border-[0.1px] border-black flex  items-center justify-center"
                >
                    <div
                        style={{ backgroundColor: active1 ? '#70877B' : '#ffffff' }}
                        className="w-[50%] h-[50%] rounded-[50%] bg-white"
                    ></div>
                </div>
                <h1 className="text-[#161616] text-[0.8rem] font-medium">
                    {props.text}
                </h1>
            </div>
            {/* // Second */}

            <div className="flex cursor-pointer w-max gap-3" onClick={handleRadio2}>
                {/* RadioButton */}
                <div
                    style={{
                        backgroundColor: active2 ? '#70877B' : '#70877B',
                    }}
                    className="w-[14px] h-[14px] rounded-[50%] bg-[#70877B] border-[0.1px] border-black flex  items-center justify-center"
                >
                    <div
                        style={{ backgroundColor: active2 ? '#70877B' : '#ffffff' }}
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
