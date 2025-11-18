import Routes from "./routes";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./query-client";

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </>
  );
}

export default App;
