/**
 * HAI3 Application Component
 *
 * Renders the Layout with AppRouter for screen navigation.
 * SidebarProvider wraps the app to enable sidebar state management.
 * StudioOverlay provides development tools (theme/screenset switching, etc.)
 */

import { AppRouter } from '@hai3/react';
import { SidebarProvider } from '@hai3/uikit';
import { StudioOverlay } from '@hai3/studio';
import { Layout } from '@/app/layout';

function App() {
  return (
    <SidebarProvider>
      <Layout>
        <AppRouter />
      </Layout>
      <StudioOverlay />
    </SidebarProvider>
  );
}

export default App;
