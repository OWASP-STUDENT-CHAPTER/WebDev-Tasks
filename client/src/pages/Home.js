import { Route, Routes } from "react-router-dom";
import CurrentTask from "../components/common/CurrentTask";
import Links from "../components/common/Links";
import Yashvardhan from "./Yashvardhan";

const Home = () => {
  return (
    <>
      <CurrentTask />
      <Links />
    </>
  );
};

export default Home;
