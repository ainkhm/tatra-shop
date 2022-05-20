import React from 'react'
import { Container } from '@components/ui'
import FormButton  from '@components/common/checkout/formbutton'


import RegistrationForm from '@components/registrationform'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup';

import { Layout } from '@components/common'

export default function Checkout() {
    const [showProduct, setShowProduct] = React.useState(true)
    return (
        <Container className="min-w-full xl:gap-16 font-sans gap-4 flex flex-col-reverse lg:flex-row flex-start pt-4 overflow-hidden bg-[#FFFFFF]">
            {/* <div className="flex flex-row gap-2"> */}
            {/* LeftSide */}
            <RegistrationForm/>
                
            {/* Right Side */}
            <div className="w-[100%] lg:w-[50%] flex flex-col gap-4 ">
                <div>
                    <div className="flex justify-between pr-1">
                        <h1 className="flex w-[500px] h-[40px] text-[#161616] text-[1rem] pl-4 items-center font-semibold ">
                            Order details (2)
                        </h1>
                        {showProduct ? (
                            <img
                                className="cursor-pointer"
                                src="assets/upperarrow.svg"
                                onClick={() => {
                                    setShowProduct(!showProduct)
                                }}
                            ></img>
                        ) : (
                            <>
                                <img
                                    className="cursor-pointer"
                                    src="assets/downarrow.svg"
                                    onClick={() => {
                                        setShowProduct(!showProduct)
                                    }}
                                ></img>
                            </>
                        )}
                    </div>
                    <div className="w-[100%] h-[2px] bg-[#C9C9C9]"></div>
                </div>
                {showProduct ? (
                    <>
                        <div className="flex flex-col gap-4 lg:h-[300px] h-[260px] overflow-y-auto  ">
                            <ProductItem
                                image="/assets/image 40.png"
                                heading="FJALLRAVEN | SKOGSO JACKET MEN'S JACKET"
                                size="S"
                                price="105 €"
                            />
                            <ProductItem
                                image="/assets/image 40.png"
                                heading="FJALLRAVEN | SKOGSO JACKET MEN'S JACKET"
                                size="M"
                                price="90 €"
                            />
                            <ProductItem
                                image="/assets/image 40.png"
                                heading="FJALLRAVEN | SKOGSO JACKET MEN'S JACKET"
                                size="M"
                                price="90 €"
                            />
                        </div>
                        <div className="w-[100%] h-[2px] bg-[#C9C9C9]"></div>
                        {/* Total */}
                        <PriceCalc text="SubTotal:" price="195 €" active={false} />
                        <PriceCalc text="Shipping costs:" price="5 €" active={false} />
                        <PriceCalc text="Estimated total:" price="200 €" active={true} />
                        {/* InputApplyButton */}
                        <div className="flex flex-col gap-2">
                            <input
                                type="text"
                                name="promo"
                                className="form-control w-[97%] bg-[#ffffff] outline-none text-[#C9C9C9]  h-[40px] text-[12px]  border-[1px] border-[#C9C9C9] pl-4  "
                                placeholder="Enter your promo code"
                            />
                            <div className="w-[97%]">
                                <FormButton text="APPLY" />
                            </div>
                        </div>
                    </>
                ) : (
                    <></>
                )}
            </div>
        </Container>
    )
}


interface ProductItemProps {
    image: string
    heading: string
    size: string
    price: string
}

const ProductItem = (props: ProductItemProps) => {
    return (
        <div className=" flex gap-8 lg:h-[140px] h-[120px] ">
            <img
                className="lg:w-[148px] w-[130px] object-cover "
                src={props.image}
            ></img>
            <div className="w-[100%] flex flex-col ">
                <h1 className="text-[#161616] text-[0.5rem] sm:text-[0.8rem] lg:text-[1.5rem] font-medium ">
                    {props.heading}
                </h1>
                <div className="flex text-[0.5rem] sm:text-[1.2rem] gap-2 text-[#c2c6c4] font-medium items-center">
                    <p className="">Select a size: </p>
                    <span className="text-[0.6rem] sm:text-[1.2rem] text-[#161616]">
                        {' '}
                        {props.size}
                    </span>
                </div>

                <p className="text-[1rem] sm:text-[1.5rem] text-[#70877B] font-semibold">
                    {props.price}
                </p>
            </div>
        </div>
    )
}

interface PriceCalcProps {
    text: string
    price: string
    active: boolean
}

const PriceCalc = (props: PriceCalcProps) => {
    return (
        <div
            style={{ fontWeight: props.active ? '600' : '400' }}
            className="flex w-[98%] text-[1rem] font-medium  justify-between"
        >
            <p className=" text-[#161616] ">{props.text}</p>
            <p className=" text-[#70877B] ">{props.price}</p>
        </div>
    )
}


Checkout.Layout = Layout
