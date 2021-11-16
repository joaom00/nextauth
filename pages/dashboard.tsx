import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useCan } from "../hooks/useCan";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  const userCanSeeMetrics = useCan({ permissions: ["metrics.list"] });

  return (
    <>
      <h1>Dashboard: {user?.email}</h1>

      {userCanSeeMetrics && <div>Métricas</div>}
    </>
  );
}

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  };
});
