import { FaCheckCircle } from "react-icons/fa";

const Body = () => {
  return (
    <>
      <div className="-space-y-4 lg:flex items-center">
        <div className="flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end">
          <img
            src="https://st4.depositphotos.com/1500360/39147/i/450/depositphotos_391471896-stock-photo-set-cosmetic-products-face-skin.jpg"
            alt="image"
            className=" rounded-xl"
          />
        </div>
        <div className=" lg:flex-1 order-1 lg:justify-start">
          <h1 className="text-4xl font-bold font-poppins leading-tight pt-4">
          Love the Skin You're In
          </h1>
          <p className="font-lato text-gray-400">
            Revitalize your skin with our premium skincare range. Infused with
            potent botanicals, our products work harmoniously to restore balance
            and glow. Treat your skin to the care it deserves and see the
            difference
          </p>
          <form action="#" className="flex flex-col gap-4 md:flex-row pt-8">
            <input
              className="rounded-lg px-4 py-2 placeholder:text-gray-500"
              type="email"
              placeholder="Enter your email"
            />
            <button className="rounded-lg px-4 py-3 bg-pink-500 hover:bg-pink-900 text-white">
              Join our Newsletter
            </button>
          </form>
          <div className="flex items-center gap-2 pt-4">
            <FaCheckCircle />

            <p className="font-lato text-gray-400">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Body;
