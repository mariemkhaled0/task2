import searchIcon from "../assets/search.svg";

function Header() {
  return (
    <div className="text-[#AEB9E1] w-full ">
      <div className="flex items-center gap-6 flex-wrap">
        <h1 className="font-bold text-white text-[20px]">Users</h1>
        <div className="flex bg-[#0B1739] border  flex-grow border-[#343B4F]  rounded-md px-3 py-2  items-center ">
          <img width={15} src={searchIcon} alt="icon" />
          <input
            className="bg-transparent ml-2 outline-none text-[#AEB9E1] "
            placeholder="Search for..."
          />
        </div>
        <button className="bg-[#CB3CFF] text-white  text-sm w-[137px] h-[42px] rounded-md">
          Add User
        </button>
      </div>
    </div>
  );
}

export default Header;
