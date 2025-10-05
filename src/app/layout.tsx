"use server";
import "reflect-metadata";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material";
import theme from "@/theme/theme";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { getDataSource } from "@/backend/database/DataSource";

export async function initApp() {
  // Init database
  await getDataSource();
    
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await initApp();

  return (
    <html lang="en">
      <body
        style={{
          height: "100%",
          // backgroundColor: "#eceefd",
          overflowY: "scroll",
          padding: 0,
          margin: 0,
        }}
      >
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
