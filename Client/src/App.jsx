import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/ShopPartner/Dashboard/Home";
import AllOrders from "./Pages/ShopPartner/AllOrders/AllOrders";
import PendingOrders from "./Pages/ShopPartner/Pending Orders/PendingOrders";
import CompletedOrders from "./Pages/ShopPartner/Completed Orders/CompletedOrders";
import Setting from "./Pages/ShopPartner/Setting/Setting";
import Layout from "./Components/ShopPartner/Layout";
import Home2 from "./Pages/Customer/Home2";
import UploadDocuments from "./Pages/Customer/UploadDocuments";
import PrintingOption from "./Pages/Customer/PrintingOption";
function App() {
    return (
        <>
            <Routes>
                <Route path="/ShopPartner" element={<Layout />}>
                    <Route index  element={<Home />} />
                    <Route path="Orders" element={<AllOrders />} />
                    <Route path="PendingOrders" element={<PendingOrders />} />
                    <Route
                        path="CompletedOrders"
                        element={<CompletedOrders />}
                    />
                    <Route path="Settings" element={<Setting />} />
                </Route>
                <Route path="/" element={<Home2/>}/>
                <Route path="/upload" element={<UploadDocuments/>}/>
                <Route path="/options" element={<PrintingOption />}/>

            </Routes>
        </>
    );
}

export default App;
