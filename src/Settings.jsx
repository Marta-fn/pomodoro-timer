import React from "react";

const Settings = ({
  open,
  setOpen,
  focusTime,
  setFocusTime,
  shortBreak,
  setShortBreak,
  longBreak,
  setLongBreak,
}) => {
  const handleFocusChange = (e) => setFocusTime(Number(e.target.value));
  const handleShortChange = (e) => setShortBreak(Number(e.target.value));
  const handleLongChange = (e) => setLongBreak(Number(e.target.value));

  return (
    <div>
      <dialog open={open} onClose={setOpen} className="relative z-10">
        <div className="fixed inset-0 bg-gray-500/75">
          <div className="flex min-h-full items-end justify-center p-4 sm:items-center sm:p-0">
            <div className="relative overflow-hidden rounded-lg text-left shadow-xl sm:w-2xs">
              <div className="bg-white px-4 p-6 pb-4">
                <p className="font-semibold text-gray-900 text-center sm:text-left sm:mt-0 ">
                  Time Settings
                </p>
                <div className="mt-2">
                  <form className="grid grid-cols-2 gap-1 items-center">
                    <label htmlFor="focusTime">Focus Time</label>
                    <input
                      type="number"
                      id="focusTime"
                      min={0}
                      value={focusTime}
                      onChange={handleFocusChange}
                      className="bg-gray-100 p-2 rounded-lg text-center"
                    />
                    <label htmlFor="short">Short Break</label>
                    <input
                      type="number"
                      id="short"
                      min={0}
                      value={shortBreak}
                      onChange={handleShortChange}
                      className="bg-gray-100 p-2 rounded-lg text-center"
                    />
                    <label htmlFor="long">Long Break</label>
                    <input
                      type="number"
                      id="long"
                      min={0}
                      value={longBreak}
                      onChange={handleLongChange}
                      className="bg-gray-100 p-2 rounded-lg text-center"
                    />
                  </form>
                </div>
              </div>
              <div className="bg-gray-100 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Settings;
