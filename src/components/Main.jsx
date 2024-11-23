import button from "../assets/button.svg";
import person from "../assets/person.png";
import bag from "../assets/bag.svg";
import phone from "../assets/phone.svg";
import map from "../assets/Map.svg";
import active from "../assets/status.svg";
function Main() {
  return (
    <div className="text-white">
      <div className=" pt-20 px-7 pb-7 mt-20 bg-[#0B1739] relative rounded-lg ">
        <div className=" absolute right-11  top-6">
          <img src={button} />
        </div>
        <div>
          <img width={130} src={person} />
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-bold text-3xl pt-3">Bahaa Ehab</h2>
              <p className=" text-sm text-[#AEB9E1] ">Admin</p>
            </div>
            <div className="flex text-xs gap-2">
              <button className="w-[64px] h-[34px] p-3 flex items-center justify-center rounded bg-[#C92B5F]">
                Delete
              </button>
              <button className="w-[98px] h-[34px]   flex items-center justify-center rounded bg-[#CB3CFF]">
                Change Data
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0B1739] mt-4 px-7 py-5 rounded-lg border border-[#333643] flex gap-14 items-center flex-col md:flex-row">
        <div>
          <img src={bag} className="inline-block " />
          <span className="text-xs ml-1">mail</span>
          <p className="text-sm text-[#AEB9E1]">john@google.com</p>
        </div>
        <div>
          <img src={phone} className="inline-block " />
          <span className="text-xs ml-1">Phone</span>
          <p className="text-sm text-[#AEB9E1]">+20 1111664236</p>
        </div>
        <div>
          <img src={map} className="inline-block " />
          <span className="text-xs ml-1">Location</span>
          <p className="text-sm text-[#AEB9E1]">john@google.com</p>
        </div>
        <div>
          <img src={active} alt="active" />
        </div>
      </div>
    </div>
  );
}

export default Main;
