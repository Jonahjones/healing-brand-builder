// Using ToastProvider instead of individual toasters
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Specialties from "./pages/Specialties";
import Approach from "./pages/Approach";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import OnlineTherapyWisconsin from "./pages/OnlineTherapyWisconsin";
import OnlineTherapyCalifornia from "./pages/OnlineTherapyCalifornia";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import SetHeaderVar from "./components/SetHeaderVar";
import ScrollToTop from "./components/ScrollToTop";
import { ToastProvider } from "./components/ToastProvider";
import SkipLink from "./components/SkipLink";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen">
          <SkipLink />
          <Navigation />
          <SetHeaderVar />
          <ToastProvider />
          <main id="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/specialties" element={<Specialties />} />
              <Route path="/approach" element={<Approach />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/online-therapy-wisconsin" element={<OnlineTherapyWisconsin />} />
              <Route path="/online-therapy-california" element={<OnlineTherapyCalifornia />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
