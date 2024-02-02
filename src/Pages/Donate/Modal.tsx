import ModalForPayment from "./ModalForPayment";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Modal() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    axios
      .get("https://blood-bound.vercel.app/getallcampaigns")
      .then((res) => {
        setCampaigns(res.data.campaigns);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return (
    <>
      <button
        className="btn"
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_1"
          ) as HTMLDialogElement | null;
          if (modal) {
            modal.showModal();
          }
        }}
      >
        Donate for campaign
      </button>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Campaign list</h3>

          {/* map here to get all campaign */}
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Donate</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map((campaign, index) => (
                  <tr key={index}>
                    {/* @ts-ignore */}
                    <td>{campaign?.title}</td>
                    <td>
                      {/* @ts-ignore */}
                      <ModalForPayment  campaignId={campaign?._id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
