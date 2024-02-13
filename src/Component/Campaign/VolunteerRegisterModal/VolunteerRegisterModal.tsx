import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

interface CampaignDetailsProps {
  closeModal: () => void;
}

const VolunteerRegisterModal: React.FC<CampaignDetailsProps> = ({
  closeModal,
}) => {
  const auth = useAuth();
  const location = useLocation();
  const modalBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (modalBtnRef.current) {
      modalBtnRef.current.click();
    }
  }, []);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [closeModal]);

  if (!auth) {
    return null;
  }

  const { user } = auth;

  if (!auth || !user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }

  const handleResister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const address = formData.get("address") as string;
    console.log(name, email, phone, address);

    Swal.fire({
      icon: "success",
      title: "Well done on becoming a volunteer!",
    });
    closeModal();
  };

  console.log("modal rendered");

  return (
    <div>
      <button
        ref={modalBtnRef}
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
              readOnly
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
              readOnly
              type="email"
              className="input input-bordered w-full"
            />
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              required
              name="phone"
              type="text"
              placeholder="+880 18XXXXXXXX"
              className="input input-bordered w-full"
              defaultValue={"+880"}
            />
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              required
              name="address"
              type="text"
              className="input input-bordered w-full"
              placeholder="Your Address"
            />
            <button className="w-full mt-5 btn btn-outline bg-[#DC0000] text-white hover:text-[#DC0000] hover:bg-white hover:border-[#DC0000] rounded-full">
              Register
            </button>
          </form>
          <form method="dialog">
            <button
              onClick={closeModal}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default VolunteerRegisterModal;
