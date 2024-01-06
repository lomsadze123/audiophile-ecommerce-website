import { useForm } from "react-hook-form";
import OnlyProduct from "../../components/cart/OnlyProduct";
import { DetailTypes } from "../../types/Types";
import { useState } from "react";
import Delivery from "../../icons/icon-cash-on-delivery.svg";

const Form = ({
  productData,
  setProductData,
}: {
  productData: DetailTypes[] | undefined;
  setProductData: React.Dispatch<React.SetStateAction<DetailTypes[]>>;
}) => {
  const [selected, setSelected] = useState("money");
  const {
    handleSubmit,
    register,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    console.log("good");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-[65px] mb-[97px] mx-6 md:max-w-[730px] md:mx-auto"
      noValidate
    >
      <div className="shadow-lg rounded-[8px] p-6">
        <h2 className="text-[28px] tracking-[1px] md:text-[32px]">CHECKOUT</h2>
        <div>
          <h3 className="text-skinColorBold text-[13px] uppercase tracking-[0.929px] mt-8 mb-4 md:mt-[41px]">
            Billing details
          </h3>
          <div className="flex flex-col gap-6 md:flex-row md:gap-4">
            <div className="w-full">
              <label htmlFor="">Name</label> <br />
              <input type="text" placeholder="Alexei Ward" />
            </div>
            <div className="w-full">
              <label htmlFor="">Email Address</label> <br />
              <input type="text" placeholder="alexeiward@mail.com" />
            </div>
          </div>
          <div className="mt-6 md:w-1/2">
            <label htmlFor="">Phone Number</label> <br />
            <input type="text" placeholder="+1 202-555-0136" />
          </div>
        </div>

        <div>
          <h3 className="text-skinColorBold text-[13px] uppercase tracking-[0.929px] mt-8 mb-4 md:mt-[53px]">
            shipping info
          </h3>
          <div className="mb-6">
            <label htmlFor="">Your Address</label> <br />
            <input type="text" placeholder="1137 Williams Avenue" />
          </div>
          <div className="flex flex-col gap-6 md:flex-row md:gap-4 mb-6">
            <div className="w-full">
              <label htmlFor="">ZIP Code</label> <br />
              <input type="text" placeholder="10001" />
            </div>
            <div className="w-full">
              <label htmlFor="">City</label> <br />
              <input type="text" placeholder="New York" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <label htmlFor="">Country</label> <br />
            <input type="text" placeholder="United States" />
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
                } border-skinColorBold border-[1px] rounded-[8px] md:w-[309px]`}
              >
                <input
                  onChange={() => setSelected("delivery")}
                  type="radio"
                  id="cash on Delivery"
                  name="paymentMethod"
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
                <label htmlFor="">e-Money Number</label>
                <input type="text" placeholder="238521993" />
              </div>
              <div className="w-full">
                <label htmlFor="">e-Money PIN</label>
                <input type="text" placeholder="6891" />
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
      <OnlyProduct productData={productData} setProductData={setProductData} />
    </form>
  );
};

export default Form;
