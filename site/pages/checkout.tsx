import React from 'react'
import { Container } from '@components/ui'
import RegistrationForm from '@components/registrationform'
import { Layout } from '@components/common'

export default function Checkout() {
  const [showProduct, setShowProduct] = React.useState(true)
  const [showAddress, setShowAddress] = React.useState(true)
  const [showPay, setShowPay] = React.useState(false)
  const [showReview, setShowReview] = React.useState(false)
  return (
    <Container className="min-w-full xl:gap-16 font-sans gap-4 flex flex-col-reverse lg:flex-row flex-start pt-4 overflow-hidden bg-[#FFFFFF]">
      {/* <div className="flex flex-row gap-2"> */}
      {/* LeftSide */}
      <div className="w-[100%] lg:w-[50%] flex flex-col gap-6 ">
        {/* formik */}

        <Button
          text={'1. ADDRESSES'}
          onClick={() => setShowAddress(!showAddress)}
        />
        {showAddress ? <RegistrationForm /> : <></>}

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
                className="form-control w-[97%] bg-[#fffff] text-[#C9C9C9]  h-[40px] text-[12px]  border-[1px] border-[#C9C9C9] pl-4  "
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

interface ButtonProps {
  text: string
  onClick: React.MouseEventHandler<HTMLDivElement>
}

const Button = (props: ButtonProps) => {
  return (
    <div
      className="flex cursor-pointer  bg-[#F1F1F1] w-[100%] lg:w-[490px] h-[40px] text-[#161616] text-[1rem] pl-4 items-center font-semibold "
      onClick={props.onClick}
    >
      {props.text}
    </div>
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

interface FormButtonProps {
  text: string
}

const FormButton = (props: FormButtonProps) => {
  return (
    <div className="flex cursor-pointer bg-[#70877B] w-[100%] h-[40px] text-[#FFFFFF] text-[0.7rem] sm:text-[1rem] items-center justify-center font-semibold ">
      {props.text}
    </div>
  )
}

Checkout.Layout = Layout
