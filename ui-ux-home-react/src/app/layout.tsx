import React from "react";
import { Helmet } from "react-helmet"; // Import React Helmet for managing metadata
import { cn } from "../utils/classnames"; // Ensure the `cn` utility works as intended
import "../styles/globals.scss"; // Import global styles

// Metadata object to use for the title and description
const metadata = {
  title: "RICOBOT",
  description:
    "Charge into a brand-new supersized adventure with RICO across 50 exciting and diverse worlds, available now on PS5!",
};

// Define the component explicitly typing 'children' as React.ReactNode
const App: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={cn("bg-white")}>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>
      <div className={cn("pt-24 pad:pt-28 pad:pb-32")}>
        {children}
      </div>
    </div>
  );
};

export default App;
