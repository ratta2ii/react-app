import React from "react";
import TicketList from "./TicketList";
import Header from "./Header";
import Navbar from "./Navbar";
import LeftBox from "./LeftBox";

function App() {
    return (
        <div>
            <Navbar />
            <LeftBox />
            <TicketList />
        </div>
    );
}

export default App;