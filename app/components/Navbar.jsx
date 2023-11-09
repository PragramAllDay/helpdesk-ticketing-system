import Image from "next/image";
import Link from "next/link";
import logo from "../../public/dojo-logo.png";
import LoginANDOut from "./SignInAndOut";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="flex justify-start items-center gap-5">
          <Image
            src={logo}
            alt="logo"
            width={70}
            quality={100}
            placeholder="blur"
          />
          <h1>Your Helpdesk</h1>
          <Link href="/">Dashboard</Link>
          <Link href="/tickets">Tickets</Link>
        </div>
        <div className="flex justify-start items-center gap-5">
          <Link href="/register">
            <button className="btn-primary">Register</button>
          </Link>
          <LoginANDOut />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
