import { Suspense } from "react";
import TicketLists from "./ticketLists";
import Loading from "../loading";
import Link from "next/link";

const Tickets = () => {
  return (
    <main>
      <nav>
        <div className="flex justify-between items-center w-[100%]">
          <div>
            <h2>Tickets</h2>
            <p>
              <small>Currently open tickets.</small>
            </p>
          </div>
          <div>
            <Link href={"/tickets/create"}>
              <button className="btn-secondary">Create Ticket</button>
            </Link>
          </div>
        </div>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketLists />
      </Suspense>
    </main>
  );
};

export default Tickets;
