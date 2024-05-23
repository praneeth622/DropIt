import Image from 'next/image';

const FileInfo = ({ imageUrl, type }) => {
  return (
    <div className="file-info flex flex-col items-center justify-center p-5 border border-gray-300 shadow-lg rounded-lg w-[40%] m-5 bg-white">
      <div className="flex flex-col items-center">
        <Image
          src={imageUrl}
          alt={type} 
          width={200} 
          height={200}
          className="rounded-md"
        />
        <div className="type mt-4 bg-gray-200 p-3 text-center rounded-md w-full">
          {type}
        </div>
      </div>
    </div>
  );
};

export default FileInfo;
