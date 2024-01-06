import { useForm } from "react-hook-form";
import OnlyProduct from "../../components/cart/OnlyProduct";
import { DetailTypes } from "../../types/Types";
import { useState } from "react";
import Delivery from "../../icons/icon-cash-on-delivery.svg";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PopUp from "../../components/checkout/PopUp";
import { motion } from "framer-motion";

const Form = ({
  productData,
  setProductData,
}: {
  productData: DetailTypes[] | undefined;
  setProductData: React.Dispatch<React.SetStateAction<DetailTypes[]>>;
}) => {
  const [selected, setSelected] = useState("money");
  const [popUp, setPopUp] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string().required("Phone is required"),
    address: Yup.string().required("Address is required"),
    zip: Yup.string().required("ZIP Code is required"),
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = () => {
    setPopUp(true);
  };

  const total = productData?.reduce((acc, product) => {
    return (acc += product.price * product.quantity);
  }, 0);

  const granTotal = total && total + 50 + 75; // this is maybe incorrect calculation

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-[65px] mb-[97px] mx-6 flex flex-col gap-8 md:items-center lg:flex-row lg:items-start lg:justify-center"
      noValidate
    >
      <div className="shadow-lg rounded-[8px] p-6 md:max-w-[730px] w-full">
        <h2 className="text-[28px] tracking-[1px] md:text-[32px]">CHECKOUT</h2>
        <div>
          <h3 className="text-skinColorBold text-[13px] uppercase tracking-[0.929px] mt-8 mb-4 md:mt-[41px]">
            Billing details
          </h3>
          <div className="flex flex-col gap-6 md:flex-row md:gap-4">
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-full"
            >
              <div className="flex justify-between">
                <label
                  className={errors.name?.message && "text-red"}
                  htmlFor="name"
                >
                  Name
                </label>
                <p className="text-red text-xs tracking-[0.214px]">
                  {errors.name?.message}
                </p>
              </div>
              <input
                {...register("name")}
                type="text"
                placeholder="Alexei Ward"
                id="name"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-full"
            >
              <div className="flex justify-between">
                <label
                  className={errors.email?.message && "text-red"}
                  htmlFor="email"
                >
                  Email Address
                </label>
                <p className="text-red text-xs tracking-[0.214px]">
                  {errors.email?.message}
                </p>
              </div>
              <input
                {...register("email")}
                type="email"
                placeholder="alexeiward@mail.com"
                id="email"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="mt-6 md:w-1/2"
          >
            <div className="flex justify-between">
              <label
                className={errors.phoneNumber?.message && "text-red"}
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <p className="text-red text-xs tracking-[0.214px]">
                {errors.phoneNumber?.message}
              </p>
            </div>
            <input
              {...register("phoneNumber")}
              type="number"
              placeholder="+1 202-555-0136"
              id="phoneNumber"
            />
          </motion.div>
        </div>

        <div>
          <h3 className="text-skinColorBold text-[13px] uppercase tracking-[0.929px] mt-8 mb-4 md:mt-[53px]">
            shipping info
          </h3>
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="mb-6"
          >
            <div className="flex justify-between">
              <label
                className={errors.address?.message && "text-red"}
                htmlFor="address"
              >
                Your Address
              </label>
              <p className="text-red text-xs tracking-[0.214px]">
                {errors.address?.message}
              </p>
            </div>
            <input
              {...register("address")}
              type="text"
              placeholder="1137 Williams Avenue"
              id="address"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-6 md:flex-row md:gap-4 mb-6"
          >
            <div className="w-full">
              <div className="flex justify-between">
                <label
                  className={errors.zip?.message && "text-red"}
                  htmlFor="zip"
                >
                  ZIP Code
                </label>
                <p className="text-red text-xs tracking-[0.214px]">
                  {errors.zip?.message}
                </p>
              </div>
              <input
                {...register("zip")}
                type="number"
                placeholder="10001"
                id="zip"
              />
            </div>
            <div className="w-full">
              <div className="flex justify-between">
                <label
                  className={errors.city?.message && "text-red"}
                  htmlFor="city"
                >
                  City
                </label>
                <p className="text-red text-xs tracking-[0.214px]">
                  {errors.city?.message}
                </p>
              </div>
              <input
                {...register("city")}
                type="text"
                placeholder="New York"
                id="city"
              />
            </div>
          </motion.div>
          <div className="w-full md:w-1/2">
            <div className="flex justify-between">
              <label
                className={errors.country?.message && "text-red"}
                htmlFor="country"
              >
                Country
              </label>
              <p className="text-red text-xs tracking-[0.214px]">
                {errors.country?.message}
              </p>
            </div>
            <input
              {...register("country")}
              type="text"
              placeholder="United States"
              id="country"
            />
          </div>
        </div>
        <div>
          <h3 className="text-skinColorBold text-[13px] uppercase tracking-[0.929px] mt-8 mb-4 md:mt-[61px]">
            payment details
          </h3>
          <div className="flex flex-col gap-4 md:flex-row md:justify-between">
            <label>Payment Method</label>
            <div>
              <div
                className={`flex items-center gap-4 px-4 py-[18px] ${
                  selected === "money"
                    ? "border-skinColorBold"
                    : "border-borderGrey"
                } border-[1px] rounded-[8px] mb-4 md:w-[309px]`}
              >
                <input
                  onChange={() => setSelected("money")}
                  type="radio"
                  id="e-Money"
                  name="paymentMethod"
                  checked={selected === "money"}
                />
                <label className="text-sm" htmlFor="e-Money">
                  e-Money
                </label>
              </div>
              <div
                className={`flex items-center gap-4 px-4 py-[18px] ${
                  selected === "delivery"
                    ? "border-skinColorBold"
                    : "border-borderGrey"
                } border-[1px] rounded-[8px] md:w-[309px]`}
              >
                <input
                  onChange={() => setSelected("delivery")}
                  type="radio"
                  id="cash on Delivery"
                  name="paymentMethod"
                  checked={selected === "delivery"}
                />
                <label className="text-sm" htmlFor="cash on Delivery">
                  Cash on Delivery
                </label>
              </div>
            </div>
          </div>

          {selected === "money" ? (
            <div className="mt-8 flex flex-col gap-6 md:flex-row md:gap-4">
              <div className="w-full">
                <label htmlFor="money">e-Money Number</label>
                <input type="text" placeholder="238521993" id="money" />
              </div>
              <div className="w-full">
                <label htmlFor="pin">e-Money PIN</label>
                <input type="text" placeholder="6891" id="pin" />
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4 md:gap-8 mt-8">
              <img src={Delivery} alt="cash on delivery icon" />
              <p className="text-sm opacity-50 font-medium">
                The 'Cash on Delivery' option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            </div>
          )}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="shadow-lg rounded-[8px] p-6 w-full md:max-w-[730px] lg:max-w-[350px] lg:sticky lg:top-24"
      >
        <h2 className="text-lg text-mediumBlack tracking-[1.286px] uppercase mb-8">
          summary
        </h2>
        <OnlyProduct
          howMany={productData?.length || 1}
          productData={productData}
          setProductData={setProductData}
          bool={true}
        />
        <div className="mt-8 flex justify-between">
          <h3 className="text-[15px] opacity-50 font-medium ">TOTAL</h3>
          <p className="text-lg ">$ {total?.toLocaleString()}</p>
        </div>
        <div className="flex justify-between mt-2">
          <h3 className="text-[15px] opacity-50 font-medium ">SHIPPING</h3>
          <p className="text-lg ">$ 50</p>
        </div>
        <div className="flex justify-between mt-2">
          <h3 className="text-[15px] opacity-50 font-medium ">
            VAT (INCLUDED)
          </h3>
          <p className="text-lg ">$ 75</p>
        </div>
        <div className="flex justify-between mt-6">
          <h3 className="text-[15px] opacity-50 font-medium ">GRAND TOTAL</h3>
          <p className="text-lg text-skinColorBold">
            $ {granTotal?.toLocaleString()}
          </p>
        </div>
        <button
          className="w-full text-white text-[13px] tracking-[1px] bg-skinColorBold py-[15px] mt-12 lg:hover:bg-skinColor"
          type="submit"
        >
          CONTINUE & PAY
        </button>
      </motion.div>
      {popUp && (
        <PopUp productData={productData} setProductData={setProductData} />
      )}
    </form>
  );
};

export default Form;
