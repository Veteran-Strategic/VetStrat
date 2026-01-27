import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import InsightsPage from "./pages/InsightsPage";
import RegulatedSMBsPage from "./pages/sectors/RegulatedSMBsPage";
import GovernmentContractorsPage from "./pages/sectors/GovernmentContractorsPage";
import MeetPage from "./pages/MeetPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/insights" element={<InsightsPage />} />
              <Route path="/sectors/regulated-smbs" element={<RegulatedSMBsPage />} />
              <Route path="/sectors/government-contractors" element={<GovernmentContractorsPage />} />
              <Route path="/meet" element={<MeetPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
