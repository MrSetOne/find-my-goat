import "./Index.scss";
import Actions from "../../components/Actions/Actions";
import Map from "../../components/Map/Map";
import { AppProvider } from "../../context/app.context";

const Index = () => {
  return (
    <main className="main-container">
      <AppProvider>
        <Actions />
        <Map />
      </AppProvider>
    </main>
  );
};

export default Index;
