import { createBrowserRouter } from "react-router-dom";

import Form from "./src/pages/Form";
import ThankYou from "./src/pages/thankYou";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <Form />,
      },
      {
        path: "thanks",
        element: <ThankYou />,
      },
    ],
  },
]);

export default router;
