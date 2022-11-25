function ModalContainer({ onHideModal, children }) {
    return (
      <div className="h-screen w-screen left-0 top-0 fixed backdrop-blur-sm z-10">
        <div className=" w-auto h-auto mx-[500px] my-[150px] outline-none focus:outline-none  bg-white rounded-lg shadow-md">
          <div
            className="flex justify-end py-3 px-6 lg:px-8
                           text-white bg-white rounded-t-lg h-1/5 items-center"
          >
            <button
              className="w-[30px] h-[30px] bg-red-600 hover:bg-red-600 
                              rounded-full text-sm text-center active:translate-y-[2px] p-1"
              onClick={() => onHideModal()}
            >
              X
            </button>
          </div>
          {children}
        </div>
      </div>
    );
  }
  
  export default ModalContainer;
  