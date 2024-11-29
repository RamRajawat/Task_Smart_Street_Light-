import React from "react";
import Routes from "./Routes";
import {useRoutes} from "react-router-dom";

import Website from "./pages/Website";
import NotFound from "./pages/NotFound";

const ProjectRoutes = () => {
    let element = useRoutes([
        {path:"/",element:<Website/>},
        {path:"*",element:<NotFound/>},
        
    ]);
    return element;
};
export default ProjectRoutes;