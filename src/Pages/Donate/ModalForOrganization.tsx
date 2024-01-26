import { useRef } from "react";
import ModalForPayment from "./ModalForPayment";

export default function ModalOragnization() {
  const organizationName = useRef<HTMLInputElement>(null);

  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_3"
          ) as HTMLDialogElement | null;
          if (modal) {
            modal.showModal();
          }
        }}
      >
        Donate for organization
      </button>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <div className="flex flex-col gap-6">
            <input
              type="text"
              ref={organizationName}
              placeholder="Organization name"
              className="input input-bordered w-full max-w-xs"
            />

            <ModalForPayment name={organizationName?.current?.value ?? ""} />

            <div className="flex w-full justify-between">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
