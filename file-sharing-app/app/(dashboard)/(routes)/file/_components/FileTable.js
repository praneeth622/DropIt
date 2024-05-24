import React from 'react';

const FileTable = ({ files , user }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
          <tr>
            <th scope="col" className="px-4 py-3">
              File Name
            </th>
            <th scope="col" className="px-4 py-3">
              File Type
            </th>
            <th scope="col" className="px-4 py-3">
              File Size
            </th>
            <th scope="col" className="px-4 py-3">
              <span className="sr-only">View</span>
            </th>
          </tr>
        </thead>
        <tbody>
        {files && files.map((file, index) => {
            if (file.userEmailId == user?.primaryEmailAddress.emailAddress) {
              
              return (
                <tr key={index} className="border-b ">
                  <td className="px-4 py-3 font-medium text-black whitespace-nowrap ">
                    {file.fileName || file.id}
                  </td>
                  <td className="px-4 py-3 text-black">{file.fileType}</td>
                  <td className="px-4 py-3 text-black">{file.fileSize}</td>
                  <td className="px-4 py-3 flex items-center justify-end text-black">
                    <a
                      href={file.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                    >
                      View
                    </a>
                  </td>
                </tr>
              );
            } else {
              return null;
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FileTable;
