import Modal from "./Modal";
import ModalOragnization from "./ModalForOrganization";
export default function Donate() {
  return (
    <>
      {/* TODO: update the design of donate us page */}

      <div className="container mx-auto">
        {/* overlay div */}
        <div className="py-32">
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
