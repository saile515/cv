import "./index.css";

import { CV } from "./cv";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <CV />
    </StrictMode>
);
