import React from "react";
import Dashboard from "./pages/Dashboad";
import GlobalStyles from "./styles/GlobalStyles";

const App: React.FC = () => {
    return (
        <>
            <GlobalStyles/>
            <Dashboard></Dashboard>
        </>
        
    )
}

export default App