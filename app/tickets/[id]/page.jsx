import { notFound } from "next/navigation";

export const dynamicParams = true;

export async function generateStaticParams() {
  const resp = await fetch(`http://localhost:3000/api/fetchTickets`);

  const tickets = await resp.json();
  console.log(tickets);
  return tickets.map((ticket) => ({
    id: ticket._id,
  }));
}

async function getTicket(id) {
  const res = await fetch(`http://localhost:3000/api/fetchTicket/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

const TicketDetails = async ({ params }) => {
  const ticket = await getTicket(params.id);
  return (
    <>
      <main>
        <nav>
          <h2>Ticket Details</h2>
        </nav>

        <div className="card">
          <h3>{ticket.title}</h3>
          <small>Created by: {ticket.user_email}</small>
          <p>{ticket.body}</p>
          <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
          </div>
        </div>
      </main>
    </>
  );
};

export default TicketDetails;
