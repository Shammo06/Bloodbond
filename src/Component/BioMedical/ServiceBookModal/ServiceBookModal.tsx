const ServiceBookModal = () => {
  return (
    <div>
      <button
        className="mb-5 mx-5 btn btn-outline bg-[#EA062B] text-white"
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_4"
          ) as HTMLDialogElement | null;
          if (modal) {
            modal.showModal();
          }
        }}
      >
        Book Now
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Service Booking</h3>
          <p className="py-4">Click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ServiceBookModal;
