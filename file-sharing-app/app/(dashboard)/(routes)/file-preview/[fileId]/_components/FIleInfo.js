import Image from 'next/image';

const FileInfo = ({ File, type }) => {
  
  return (
    <div className="file-info flex flex-col sm:w-auto items-center justify-center p-5 border border-gray-300 shadow-lg rounded-lg w-[50%] m-5 bg-white">
      <div className="flex flex-col items-center">
      <Image
          src={File?.fileUrl}
          alt={type} 
          width={300} 
          height={300}
          className="rounded-md"
          onError={(e) => console.error(File?.fileUrl)}
        />
        <div className="type mt-4 bg-gray-200 p-3 text-center rounded-md w-full">
          {type}
        </div>
      </div>
    </div>
  );
};

export default FileInfo;
