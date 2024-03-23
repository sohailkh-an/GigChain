import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import SignInForm from "../../components/signInForm/signInForm";

export default async function SignIn() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/home");
  }
  return <SignInForm />;
}
