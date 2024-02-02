import Modal from "./Modal";
import ModalOragnization from "./ModalForOrganization";
export default function Donate() {



  return (
    <>
      <div className=" w-full h-screen flex justify-center items-center gap-7 ">
        <Modal />
        <ModalOragnization />
      </div>
    </>
  );
}
