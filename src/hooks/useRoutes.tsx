import { HomePage } from "components/pages/HomePage";
import { ErrorPage } from "components/pages/ErrorPage";
export default function useRoutes() {
  const routes = [
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ];

  return { routes };
}
