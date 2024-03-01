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

  return (
    <div className="card w-96 bg-base-100 shadow-xl h-[20rem]">
      <div className="card-body">
        <h2 className="card-title">{campaign.title}</h2>
        <p
          className={`${
            campaign._id === "65dfe98115d63327f373d13a" ? "hidden" : ""
          }`}
        >
          From {campaign.startDate} to {campaign.endDate}
        </p>
        <p>Total donation gathered ${totalDonationAmount}</p>
        <p
          className={`${
            campaign._id === "65dfe98115d63327f373d13a" ? "hidden" : ""
          }`}
        >
          Total volunteer registered {campaign.volunteer.length}
        </p>
        <p
          className={`${
            campaign._id === "65dfe98115d63327f373d13a" ? "" : "hidden"
          }`}
        >
          Our main goal is create smeless interaction between blood donor and
          requested person. People all over the world helping each others to
          make better world.
        </p>
        <p
          className={`${
            campaign._id === "65dfe98115d63327f373d13a" ? "" : "hidden"
          }`}
        >
          Help use to run this oranization
        </p>
        <div className="card-actions justify-end">
          <ModalForPayment campaignId={campaign._id} />
        </div>
      </div>
    </div>
  );
}
