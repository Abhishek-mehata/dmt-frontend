import { Toaster } from "react-hot-toast";
import Router from "./routes";
import "./styles/swiper.css";

import { RootAppState } from "./redux/store";
import { useSelector } from "react-redux";
import { Loader } from "./components";
import { persistor } from "../src/redux/store"
import { useEffect } from "react";


function App() {
  const loading = useSelector((state: RootAppState) => state.ui.loading);
  const token = useSelector((state: RootAppState) => state.auth.token);
  // useEffect(() => {
  //   const storedToken = localStorage.getItem("token");
  
  //   if (!storedToken || storedToken === "undefined" || storedToken === "null") {
  //     persistor.purge(); // Purge only if no valid token
  //     localStorage.removeItem("persist:auth"); // Clear only auth state
  //   }
  // }, [token]);
  useEffect(() => {
    if (!token || token === "undefined" || token === "null") {
      persistor.purge(); // Purge auth state only
      localStorage.removeItem("persist:auth");
    }
  }, [token]);
  // useEffect(() => {
  //   if (!token||token==='') {
  //     persistor.purge(); // Purge only if no token
  //     localStorage.removeItem("persist:auth"); // Clear only auth state, not the entire persist
  //   }
  // }, [token]); // Run only when token changes
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{ duration: 5000 }}
        containerClassName="z-999999"
      />
      <Loader loading={loading} />
      <Router />
    </>
  );
}

export default App;
