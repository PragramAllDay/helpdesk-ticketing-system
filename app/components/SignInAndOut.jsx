"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const LoginANDOut = () => {
  const router = useRouter();
  const { data: session } = useSession();
  console.log(session);
  if (!session) {
    return (
      <button onClick={() => router.push("/signIn")} className="btn-secondary">
        Sign In
      </button>
    );
  } else
    return (
      <>
        <button className="btn-secondary" onClick={() => signOut()}>
          Sign Out
        </button>
      </>
    );
};

export default LoginANDOut;
