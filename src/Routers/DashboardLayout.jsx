import DashboardHeader from '../Components/DashboardHeader';
import { Outlet } from 'react-router';
import Sidebar from '../Components/Sidebar';
const DashboardLayout = () => {
    return(
        
    <div className="overflow-hidden pb-2.5 bg-gray-100">
      <div className="flex  max-md:flex-col">
        <aside className="w-[19%] max-md:ml-0 max-md:w-full">
          <Sidebar />
        </aside>
        <main className=" w-[81%] max-md:ml-0 max-md:w-full">
          <div className="w-full max-md:max-w-full">
            <DashboardHeader />
            <Outlet/>
          </div>
        </main>
      </div>
    </div>


    );
};

export default DashboardLayout;


