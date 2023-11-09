import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <h2>Dashboard</h2>
      <p>
        In the dynamic world of <b>HelpDesk</b> empowering users is our
        priority. Seamlessly integrating authentication and authorization
        ensures a secure environment. Create and manage tickets effortlessly,
        assigning priorities for swift issue resolution. With <b>HelpDesk</b>{" "}
        experience a user-friendly haven where your needs take center stage.
        Welcome to a world where support meets simplicity.
      </p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2>Company Updates</h2>

      <div className="card">
        <h3>New member of the web dev team...</h3>
        <p>
          Thrilled to welcome the newest addition to our web dev team! Bringing
          fresh perspectives and expertise, Jacob is set to elevate our
          projects. Together, we are poised to innovate and create exceptional
          web experiences. Exciting times ahead!
        </p>
      </div>
      <div className="card">
        <h3>New website live!</h3>
        <p>
          Exciting news! Our new website is now live, a digital canvas
          reflecting innovation and user-centric design. Navigate seamlessly,
          explore our offerings, and dive into an immersive online experience.
          Welcome to the future of our virtual home!
        </p>
      </div>
    </main>
  );
}
