import useAuth from "../../../hooks/useAuth";

const ServiceBookModal: React.FC = () => {
  const auth = useAuth();

  if (!auth) {
    return;
  }

  const { user } = auth;
  if (!user) {
    return null;
  }

  const { displayName, email } = user;

  const handleSubmit = () => {
    document.getElementById("submit")?.click();
  };

  const handleBookingForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userName = formData.get("name") as string;
    const userEmail = formData.get("email") as string;
    const date = formData.get("date") as string;
    console.log("Form submitted", userName, userEmail, date);
  };

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
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg">Service Booking</h3>
            <form method="dialog" className="">
              <button className="btn btn-sm btn-circle btn-ghost">✕</button>
            </form>
          </div>
          <div className="divider m-0"></div>
          {/* modal body */}
          <div>
            <form
              style={{ boxShadow: "0px 4px 10px 5px rgba(167,167,167,0.3)" }}
              onSubmit={handleBookingForm}
              className="p-4 rounded-lg my-5"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                  readOnly
                  value={displayName ?? ""}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  readOnly
                  value={email ?? ""}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  className="input input-bordered"
                  required
                />
              </div>
              <button id="submit" type="submit"></button>
            </form>
          </div>
          <div className="divider m-0"></div>
          {/* purchase button */}
          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              id="submit"
              className="btn btn-outline bg-[#EA062B] text-white"
            >
              Book This Service
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ServiceBookModal;
