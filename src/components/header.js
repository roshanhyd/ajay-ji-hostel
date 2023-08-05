import { useSelector } from "react-redux";
import NavigationLink from "../navigation-link";

const Header = () => {
    const counter = useSelector((state) => state);
    console.log("Counter Value ",counter.counterReducer);
    return(
        <header>
        <p>
          Welcome to Ajay Ji's
        </p>
        <NavigationLink/>
        </header>
    )
}

export default Header;