import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import User from "../components/User";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <User />
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
