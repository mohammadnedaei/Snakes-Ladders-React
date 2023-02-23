import {Route, Routes} from "react-router-dom";
import MainMenu from "../pages/MainMenu/MainMenu";
import Settings from "../pages/Settings/Settings";
import Board from "../pages/Board/Board";
const AppRoutes = () => {
    return (
        <Routes>
            <Route path={"/"} element={<MainMenu/>}/>
            <Route path={"/settings"} element={<Settings/>}/>
            <Route path={"/board"} element={<Board/>}/>
        </Routes>
    )
}
export default AppRoutes;
