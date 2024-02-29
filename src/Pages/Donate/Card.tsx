// volunteer
// donationAmount
// title
// startDate

import ModalForPayment from "./ModalForPayment";

// endDate
type donationAmountType = {
  amount: number;
};
interface CardType {
  campaign: {
    _id: string;
    title: string;
    donationAmount: donationAmountType[];
    startDate: string;
    endDate: string;
    volunteer: [object];
  };
}

export default function Card({ campaign }: CardType) {
  const totalDonationAmount = campaign.donationAmount.reduce(
    (prev, curr) => prev + curr.amount,
    0
  );


const id = campaign._id

  return (
    <div className="card w-96 bg-base-100 shadow-xl h-[18rem]">
      <div className="card-body">
        <h2 className="card-title">{campaign.title}</h2>
        <p>
          From {campaign.startDate} to {campaign.endDate}
        </p>
        <p>Total donation gathered ${totalDonationAmount}</p>
        <p>Total volunteer registered {campaign.volunteer.length}</p>
        <div className="card-actions justify-end">
          <ModalForPayment campaignId={id}  />
        </div>
      </div>
    </div>
  );
}
