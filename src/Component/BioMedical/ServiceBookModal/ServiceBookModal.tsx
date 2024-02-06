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

  const time = [
    "12:00 AM",
    "01:00 AM",
    "02:00 AM",
    "03:00 AM",
    "04:00 AM",
    "05:00 AM",
    "06:00 AM",
    "07:00 AM",
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
    "09:00 PM",
    "10:00 PM",
    "11:00 PM",
  ];

  const handleSubmit = () => {
    document.getElementById("submit")?.click();
  };

  const handleBookingForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userName = formData.get("name") as string;
    const userEmail = formData.get("email") as string;
    const date = formData.get("date") as string;
    const time = formData.get("time") as string;
    const phone = formData.get("phone") as string;
    console.log("Form submitted", userName, userEmail, date, time, phone);
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
                  <span className="label-text">Test Name</span>
                </label>
                <input
                  type="text"
                  name="testName"
                  placeholder="Test Name"
                  className="input input-bordered"
                  required
                  readOnly
                />
              </div>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Time</span>
                </label>
                <select name="time" className="select select-bordered" required>
                  <option value="">Select Service Taking Time</option>
                  {time.map((hour, idx) => (
                    <option key={idx} value={hour}>
                      {hour}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone Number(+880-xxxx-xxxx)"
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
