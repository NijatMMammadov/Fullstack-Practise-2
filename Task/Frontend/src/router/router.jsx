import AddProduct from "../pages/AddProduct";
import Detail from "../pages/Details";
import Home from "../pages/Home";
import Root from "../pages/Root";

const ROUTER = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path:"/detail",
                element:<Detail/>
            },
            {
                path:"/addproduct",
                element:<AddProduct/>
            }
        ]
    }
]

export default ROUTER