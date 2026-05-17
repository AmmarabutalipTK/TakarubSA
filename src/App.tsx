import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Home from "@/pages/Home";
import MobileApplication from "@/pages/MobileApplication";
import IOSApplication from "@/pages/IOSApplication";
import AndroidApplication from "@/pages/AndroidApplication";
import WebApplication from "@/pages/WebApplication";
import BlockchainAppDevelopment from "@/pages/BlockchainAppDevelopment";
import BlockchainConsulting from "@/pages/BlockchainConsulting";
import CryptoWallet from "@/pages/CryptoWallet";
import SmartContractDevelopment from "@/pages/SmartContractDevelopment";
import ArtificialIntelligence from "@/pages/ArtificialIntelligence";
import About from "@/pages/About";
import IndustriesPage from "@/pages/Industries";
import Contact from "@/pages/Contact";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services/mobile-application" component={MobileApplication} />
      <Route path="/services/ios-application" component={IOSApplication} />
      <Route path="/services/android-application" component={AndroidApplication} />
      <Route path="/services/web-application" component={WebApplication} />
      <Route path="/services/blockchain-app-development" component={BlockchainAppDevelopment} />
      <Route path="/services/blockchain-consulting" component={BlockchainConsulting} />
      <Route path="/services/crypto-wallet" component={CryptoWallet} />
      <Route path="/services/smart-contract-development" component={SmartContractDevelopment} />
      <Route path="/services/artificial-intelligence" component={ArtificialIntelligence} />
      <Route path="/about" component={About} />
      <Route path="/industries" component={IndustriesPage} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </LanguageProvider>
  );
}

export default App;
