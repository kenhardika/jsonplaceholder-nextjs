import { useState } from "react";

export default function FormsModal({
  selectedData,
  onChangeEvent,
  onChangeCompany,
  onHandleSubmit,
  onHideModal,
  onShowAddButton,
  onHandleEdit,
}) {
  const [loading, setLoading] = useState(false);
  return (
    <form
      className="flex flex-col w-full h-4/5 p-5 gap-2 items-center space-y-4"
      id="formInput"
      onSubmit={(e) => {
        if (onShowAddButton) {
          onHandleSubmit(e);
        } else {
          onHandleEdit(e);
        }
        setLoading(true);
      }}
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-row w-full justify-end px-3 gap-14 ">
          <label htmlFor="name" className="">
            Name:{" "}
          </label>
          <input
            className="px-2 rounded-lg w-[300px] bg-gray-100 focus:outline outline-red-300"
            type="text"
            name="name"
            placeholder="name"
            onChange={(e) => onChangeEvent(e)}
            value={selectedData?.name}
          />
        </div>
        <div className="flex flex-row w-full justify-end px-3 gap-14 ">
          <label htmlFor="email" className="">
            Email:{" "}
          </label>
          <input
            className="px-2 rounded-lg w-[300px] bg-gray-100 focus:outline outline-red-300"
            type="text"
            name="email"
            placeholder="email"
            onChange={(e) => onChangeEvent(e)}
            value={selectedData?.email}
          />
        </div>
        <div className="flex flex-row w-full justify-end px-3 gap-14 ">
          <label htmlFor="phone" className="">
            Phone:{" "}
          </label>
          <input
            className="px-2 rounded-lg w-[300px] bg-gray-100 focus:outline outline-red-300 "
            type="text"
            name="phone"
            placeholder="phone"
            onChange={(e) => onChangeEvent(e)}
            value={selectedData?.phone}
          />
        </div>
        <div className="flex flex-row w-full justify-end px-3 gap-14 ">
          <label htmlFor="website" className="">
            Website:{" "}
          </label>
          <input
            className="px-2 rounded-lg w-[300px] bg-gray-100 focus:outline outline-red-300"
            type="text"
            name="website"
            placeholder="website"
            onChange={(e) => onChangeEvent(e)}
            value={selectedData?.website}
          />
        </div>
        <div className="flex flex-row w-full justify-end px-3 gap-14 ">
          <label htmlFor="companyname" className="">
            Company&apos;s Name:{" "}
          </label>
          <input
            className="px-2 rounded-lg w-[300px] bg-gray-100 focus:outline outline-red-300"
            type="text"
            name="name"
            placeholder="company's name"
            onChange={(e) => onChangeCompany(e)}
            value={selectedData?.company.name}
          />
        </div>
        <div className="flex flex-row w-full justify-end px-3 gap-14">
          <label htmlFor="companyBs">Company&apos;s BS: </label>
          <input
            className="px-2 rounded-lg w-[300px] bg-gray-100 focus:outline outline-red-300"
            type="text"
            name="bs"
            placeholder="company's bs"
            onChange={(e) => onChangeCompany(e)}
            value={selectedData?.company.bs}
          />
        </div>
        <div className="flex flex-row w-full justify-end px-3 gap-14">
          <label htmlFor="catchPhrase">Catch Phrase: </label>
          <input
            className="px-2 rounded-lg w-[300px] bg-gray-100 focus:outline outline-red-300"
            type="text"
            name="catchPhrase"
            placeholder="catch phrase"
            onChange={(e) => onChangeCompany(e)}
            value={selectedData?.company.catchPhrase}
          />
        </div>
      </div>
      <div className="flex flex-col w-[200px] h-[70px] items-center gap-2 justify-center text-white">
        <button
          className="rounded-lg px-2 w-40 bg-red-300 
                        text-sm active:translate-y-[2px] p-1"
          type="submit"
          form="formInput"
        >
          {loading ? "loading..." : onShowAddButton ? "Add" : "Save"}
        </button>
        <button
          className="rounded-lg px-2 w-40 bg-red-600 
                        text-sm active:translate-y-[2px] p-1"
          form="formInput"
          onClick={() => {
            onHideModal();
          }}
        >
          {" "}
          Cancel{" "}
        </button>
      </div>
    </form>
  );
}
