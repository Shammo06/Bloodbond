import Modal from "./Modal";
import ModalOragnization from "./ModalForOrganization";
import bgPng from "../../assets/login-bg.png";
export default function Donate() {
  return (
    <>
      {/* <div className="w-full h-screen flex flex-col gap-3 pt-[5rem]" 
      style={{ backgroundImage: `url(${bgPng})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", }}
      >

<h1 className="text-center font-bold text-[2rem] text-black">Support Us And Make a Difference Today!</h1>



        <Modal />
        <ModalOragnization />
      </div> */}

      <div
        style={{
          backgroundImage: `url(${bgPng})`,
        }}
        className="container mx-auto bg-cover bg-no-repeat"
      >
        {/* overlay div */}
        <div className="bg-[rgba(0,0,0,0.4)] py-32">
          <div
            style={{ boxShadow: "0px 3px 14px 6px rgba(0,0,0,0.28)" }}
            className="card-body rounded-lg w-[95%] sm:w-3/4 2xl:w-3/5 mx-auto bg-white py-16"
          >
            <h3 className="text-center text-4xl font-bold mb-8">
              Support Us And Make a Difference Today!
            </h3>

            <Modal />
            <ModalOragnization />
          </div>
        </div>
      </div>
    </>
  );
}
