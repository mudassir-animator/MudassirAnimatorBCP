import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import React from "react";
import routes from "tempo-routes";

function App() {
  return (
    (<Suspense
      fallback={<p
        tempoelementid="tempo-3b8fc683-e0c6-5ede-975b-00cbf9c752d0"
        className="tempo-3b8fc683-e0c6-5ede-975b-00cbf9c752d0">Loading...</p>}
      tempoelementid="tempo-ba242f20-beab-5829-a15b-8f6c0c9bace5"
      className="tempo-ba242f20-beab-5829-a15b-8f6c0c9bace5">
      <>
        <Routes
          tempoelementid="tempo-92cb14b7-ccaa-5c3a-989e-93a8dd425285"
          className="tempo-92cb14b7-ccaa-5c3a-989e-93a8dd425285">
          <Route
            path="/"
            element={<Home
              tempoelementid="tempo-d550adbe-3b24-58ec-9116-98847cb036d1"
              className="tempo-d550adbe-3b24-58ec-9116-98847cb036d1" />}
            tempoelementid="tempo-87fb21d6-df9b-5b6c-a2ed-2908600528c8"
            className="tempo-87fb21d6-df9b-5b6c-a2ed-2908600528c8" />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>)
  );
}

export default App;
