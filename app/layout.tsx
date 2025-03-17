"use client";

import { FluentProvider, webLightTheme } from '@fluentui/react-components';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <FluentProvider theme={webLightTheme}>
          {children}
        </FluentProvider>
      </body>
    </html>
  );
}