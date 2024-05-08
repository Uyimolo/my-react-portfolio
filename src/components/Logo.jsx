import logo from "../images/logo-white.png";
const Logo = () => {
  return (
    <div className=" w-16 h-16 self-center p-2 bg-indigo-800/25 relative rounded-full backdrop-blur-sm shadow-md shadow-black">
      <img src={logo} alt="logo" className="w-20 absolute -left-2 top-[50%] -translate-y-[50%]"  />
    </div>
  );
};

export default Logo;
