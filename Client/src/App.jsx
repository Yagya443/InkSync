import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar";
import Home from "./Pages/Dashboard/Home";
import AllOrders from "./Pages/AllOrders/AllOrders";
import PendingOrders from "./Pages/Pending Orders/PendingOrders";
import CompletedOrders from "./Pages/Completed Orders/CompletedOrders";
import Setting from "./Pages/Setting/Setting";
function App() {
    return (
        <>
            <div className="flex h-screen">
                <Navbar />

                <main className="flex-1 overflow-y-auto">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Orders" element={<AllOrders />} />
                        <Route
                            path="/PendingOrders"
                            element={<PendingOrders />}
                        />
                        <Route
                            path="/CompletedOrders"
                            element={<CompletedOrders />}
                        />
                        <Route path="/Settings" element={<Setting />} />
                    </Routes>
                </main>
            </div>
        </>
    );
}

export default App;
