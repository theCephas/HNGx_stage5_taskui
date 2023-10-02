import WhiteLogo from "../assets/whitelogo.svg";

export default function Footer() {
  return (
    <div className="bg-[#120b48] text-white md:px-[80px] px-16 py-[70px] grid gap-10 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 ">
      <div>
        {" "}
        <img src={WhiteLogo} alt="" />
      </div>
      <div className="">
        <p className="cursor-pointer font-bold text-[14px] ">Menu</p>
        <p className="cursor-pointer py-4">Home</p>
        <p className="cursor-pointer">Converter</p>
        <p className="cursor-pointer py-4">How It Works</p>
      </div>
      <div>
        <p className="cursor-pointer font-bold text-[14px]">About Us</p>
        <p className="cursor-pointer py-4">About</p>
        <p className="cursor-pointer">Contact Us</p>
        <p className="cursor-pointer py-4">Privacy Policy</p>
      </div>
      <div>
        <p className="cursor-pointer font-bold text-[14px]">Screen Record</p>
        <p className="cursor-pointer py-4">Browser Window</p>
        <p className="cursor-pointer">Desktop</p>
        <p className="cursor-pointer py-4">Application</p>
      </div>
    </div>
  );
}
