import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Index from "../Pages/Home/Index";
import List from "../Pages/List/List";

const AppRoutes = () => {
    return <Router>
        <Routes>
            <Route path="/" exact element={<Index/>}/>
            <Route path="/list" element={<List/>}/>
        </Routes>
    </Router>
}
export default AppRoutes;