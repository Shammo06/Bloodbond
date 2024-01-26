import { useEffect, useRef, useState } from "react";
import ModalForPayment from "./ModalForPayment";
import fakeData from "../../../public/campaignFakeData.json"

export default function Modal() {
  const amount = useRef<HTMLInputElement>(null);



  return (
    <>
      <button
        className="btn"
        onClick={() => document?.getElementById("my_modal_1")?.showModal()}
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

                {fakeData.map((campaign, index) => (
                <tr key={index}>
                  <td>{campaign.title}</td>
                  <td>
                    <ModalForPayment name= {campaign.title} />
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
