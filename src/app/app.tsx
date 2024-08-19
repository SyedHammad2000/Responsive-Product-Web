"use client";
import Navbar from "@/components/Navbar";
import { store } from "@/Redux/store";
import React, { useState } from "react";
import { Provider } from "react-redux";

const App = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [showcart, setshowcart] = useState(false);
  return (
    <>
      <Provider store={store}>
        <Navbar setshowcart={setshowcart} />
        {children}
      </Provider>
    </>
  );
};

export default App;
