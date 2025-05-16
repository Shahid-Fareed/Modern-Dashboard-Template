import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import HorizentalWizard from "@/components/AddProduct";

function page() {
  return (
    <>
      <div className="wrapper grid grid-cols-6">
        <SideBar />
        <div className="col-start-2 col-span-5">
          <TopBar />
          <main className="grid grid-cols-1 lg:grid-cols-2 p-10">
            <h2 className="w-full p-3 bg-[#F9FAFB] text-[16px] font-medium col-span-2 flex items-center">
              <button className="mr-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                  <path d="M10.656 1.34399L2.688 9.31199L10.656 17.28L9.312 18.624L0 9.31199L9.312 -7.62939e-06L10.656 1.34399Z" fill="#272727"/>
                  <path d="M1.34375 10.2724L1.34375 8.35243L17.6637 8.35243V10.2724L1.34375 10.2724Z" fill="#272727"/>
                </svg>
              </button>
              Add Product
            </h2>
            <div className="col-span-2">
              <HorizentalWizard />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default page;
