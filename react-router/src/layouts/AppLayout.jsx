import { Outlet,  useNavigation } from "react-router-dom";
import Header from "../components/Header";

export default function AppLayout() {

    const navigation = useNavigation()
    const isLoading = navigation.state === "loading"
  return (
    <div>
        <h3>React Router Dom tutorial</h3>
        <Header />

{isLoading  && <div> loading... </div>}
        <Outlet />
    </div>
  )
}
