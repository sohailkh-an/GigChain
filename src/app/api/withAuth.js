import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";

export default function withAuth(Component) {
  return function ProtectedRoute({ ...props }) {
    const { session, loading } = useSession();

    useEffect(() => {
      if (!loading && !session) {
        signIn();
      }
    }, [session, loading]);

    if (loading) {
      return <div>Loading...</div>;
    }

    return <Component {...props} />;
  };
}
