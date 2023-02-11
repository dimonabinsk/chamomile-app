import React from "react";

const BasketPage = () => {
  return (
    <>
      <div className="mx-auto mt-4 flex max-w-[90%] flex-col ">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow-sm rounded-xl shadow-indigo-300">
              <table className="min-w-full ">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 text-sm font-medium text-left text-gray-900"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-sm font-medium text-left text-gray-900"
                    >
                      First
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-sm font-medium text-left text-gray-900"
                    >
                      Last
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-sm font-medium text-left text-gray-900"
                    >
                      Handle
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-100 border-b">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                      1
                    </td>
                    <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                      Mark
                    </td>
                    <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                      Otto
                    </td>
                    <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                      @mdo
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                      2
                    </td>
                    <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                      Jacob
                    </td>
                    <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                      Thornton
                    </td>
                    <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                      @fat
                    </td>
                  </tr>
                  <tr className="bg-gray-100 border-b">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                      3
                    </td>
                    <td
                      colspan="2"
                      className="px-6 py-4 text-sm font-light text-center text-gray-900 whitespace-nowrap"
                    >
                      Larry the Bird
                    </td>
                    <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                      @twitter
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasketPage;
