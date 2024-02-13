import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

interface CampaignDetailsProps {
  closeModal: () => void;
}

const VolunteerRegisterModal: React.FC<CampaignDetailsProps> = ({
  closeModal,
}) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth) {
    return null;
  }

  const { user } = auth;

  if (!auth || !user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }

  const handleResister = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const address = form.address.value;
    console.log(name, email, phone, address);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Well done on becoming a volunteer!",
      showConfirmButton: false,
      timer: 1500,
    });
    closeModal();
  };

  console.log("modal rendered");

  return (
    <div className="">
      <button
        className="btn btn-outline bg-[#DC0000] text-white hover:text-[#DC0000] hover:bg-white hover:border-[#DC0000] rounded-full hidden"
        onClick={() => {
          const modal =
            (document.getElementById("my_modal_2") as HTMLDialogElement) ||
            null;
          if (modal) {
            modal.showModal();
          }
        }}
      >
        Register as Volunteer
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center mb-5">
            Volunteer Registration
          </h3>
          <form onSubmit={handleResister}>
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              name="name"
              required
              defaultValue={user?.displayName || ""}
              type="text"
              className="input input-bordered w-full"
            />
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              defaultValue={user?.email || ""}
              name="email"
              required
              type="email"
              className="input input-bordered w-full"
            />
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              required
              name="phone"
              type="number"
              placeholder="+880 18XXXXXXXX"
              className="input input-bordered w-full"
            />
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              required
              name="address"
              type="text"
              className="input input-bordered w-full"
            />
            <button className="w-full mt-5 btn btn-outline bg-[#DC0000] text-white hover:text-[#DC0000] hover:bg-white hover:border-[#DC0000] rounded-full">
              Register
            </button>
          </form>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default VolunteerRegisterModal;
