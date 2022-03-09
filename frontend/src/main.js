import Dashboard from "./Dashboard";
import EmployerDashboard from "./employerDashboard";
import TdsDashboard from "./tdsDashboard";

export default function Main(){
const Employer = window.localStorage.getItem("employer")
const TDA = window.localStorage.getItem("tda")

return(
    <div>
        {Employer == "true" && <EmployerDashboard/>}
        {TDA == "true" && <TdsDashboard/>}
        {Employer == "undefined" && TDA == "undefined" &&<Dashboard/>}
    </div>
)

}