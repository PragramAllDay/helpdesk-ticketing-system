import Link from "next/link";

async function getTickets() {
  const res = await fetch("http://localhost:3000/api/fetchTickets", {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch tickets");
  }

  const data = await res.json();
  return data;
}

const TicketLists = async () => {
  const tickets = await getTickets();

  return (
    <>
      {tickets.map((ticket) => (
        <>
          <div key={ticket.id} className="card my-5">
            <Link href={`/tickets/${ticket._id}`}>
              <h3>{ticket.title}</h3>
              <p>
                {ticket.body && ticket.body.length > 200
                  ? ticket.body.slice(0, 200)
                  : ticket.body}
                ...
              </p>
              <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
              </div>
            </Link>
          </div>
        </>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets.</p>
      )}
    </>
  );
};

export default TicketLists;
