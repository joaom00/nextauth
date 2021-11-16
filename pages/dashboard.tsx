import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { withSSRAuth } from "../utils/withSSRAuth";
import { Can } from "../components/Can";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <h1>Dashboard: {user?.email}</h1>

      <Can permissions={["metrics.list"]}>
        <div>Métricas</div>
      </Can>
    </>
  );
}

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  };
});
