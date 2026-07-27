import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import NotFound from '@/pages/not-found';
import { Layout } from '@/components/layout';
import Home from '@/pages/home';
import Services from '@/pages/services';
import ServiceDetail from '@/pages/service-detail';
import ObjektschutzHamburg from '@/pages/objektschutz-hamburg';
import ObjektschutzNorddeutschland from '@/pages/objektschutz-norddeutschland';
import References from '@/pages/references';
import Contact from '@/pages/contact';
import Imprint from '@/pages/imprint';
import Privacy from '@/pages/privacy';
import Karriere from '@/pages/karriere';
import Galerie from '@/pages/galerie';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/dienstleistungen" component={Services} />
        <Route path="/dienstleistungen/objektschutz" component={ObjektschutzNorddeutschland} />
        <Route path="/dienstleistungen/objektschutz-hamburg" component={ObjektschutzHamburg} />
        <Route path="/dienstleistungen/:slug" component={ServiceDetail} />
        <Route path="/referenzen" component={References} />
        <Route path="/kontakt" component={Contact} />
        <Route path="/impressum" component={Imprint} />
        <Route path="/datenschutz" component={Privacy} />
        <Route path="/galerie" component={Galerie} />
        <Route path="/karriere" component={Karriere} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
