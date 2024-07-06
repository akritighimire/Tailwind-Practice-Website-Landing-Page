import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center justify-center gap-2">
          <img className="h-10 w-10 rounded-full" src="https://static.vecteezy.com/system/resources/previews/020/275/623/non_2x/beautiful-pink-butterfly-illustration-animal-nature-icon-concept-simple-modern-butterfly-logo-design-with-shadow-isolated-on-pink-background-free-vector.jpg" alt="logo" />
          <button className="bg-gradient-to-r from-pink-300 to-pink-400 p-2 rounded-xl text-xs text-white">
            New Products!
          </button>
        </div>

          <ul className="hidden lg:flex justify-between items-center font-lato text-md text-gray-600 gap-6">
            <li className=" hover:text-black hover:underline hover-font-bold">Home</li>
            <li className=" hover:text-black hover:underline hover-font-bold">Products</li>
            <li className=" hover:text-black hover:underline hover-font-bold">About Us</li>
          </ul>

          <div className="hidden lg:flex justify-center items-center font-lato gap-4">
            <a href="">Sign In</a>
            <button className=" text-sm rounded-lg px-4 py-2 bg-pink-500 hover:bg-pink-900 text-white">Join WishList</button>
          </div>

          <div className="lg:hidden">
            <FaBars />
          </div>
        
      </div>
    </>
  );
};
export default Header;
