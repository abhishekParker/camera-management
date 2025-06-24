import React, { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Loader } from "./components/Loader";
import Header from "./components/Header";
const CameraManagement = React.lazy(() =>
  import("./components/CameraManagement")
);
function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <CameraManagement />
      </Suspense>
    </>
  );
}

export default App;
