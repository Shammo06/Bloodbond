import StripeComponent from "./StripeComonent";

export default function ModalOragnization() {

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
            {/* @ts-ignore */}
            <StripeComponent />
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
