import { Copy, Mail } from 'lucide-react';
import { useState } from 'react';
import { useParams } from 'next/navigation'
import GlobalApi from '../../../../../_utlis/GlobalApi';
import { useUser } from '@clerk/nextjs';

const FIleShare = ({ File, savePassword ,shortUrl}) => {
  const user = useUser();

  const [enablePassword, setEnablePassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl || '');
  };

  const handleSendEmail = () => {
    const data = {
      emailToSend : email,
      userName : user,
      fileName:File?.fileName,
      fileType:File?.fileType,
      fileSize:File?.fileSize,
      shortURL:File?.shortURL,
    };
    GlobalApi.SendEmail(data).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.error(err);
    });
  };
  

  return (
    <div>
      <div className="fireshare space-y-4 sm:w-auto border-gray-300 shadow-lg rounded-lg mb-5 mr-5 mt-5 bg-white pt-5 p-4 gap-3">
        <div className="flex items-center">
          <label htmlFor="shorturl" className="mr-2 text-sm font-medium">
            Short URL
          </label>
          <span className="inline-flex items-center rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">
            <span className="truncate text-wrap">{shortUrl}</span>
            <button type="button" onClick={handleCopy} className="ml-4 focus:outline-none">
              <Copy className="h-5 w-5 text-gray-400" />
            </button>
          </span>
        </div>
        <div className="flex items-center">
          <label htmlFor="enable-password" className="mr-4 text-sm font-medium flex items-center align-middle">
            <input
              id="enable-password"
              type="checkbox"
              className="focus:ring-indigo-500  h-5 w-5 m-5 text-indigo-600 border-gray-300 rounded"
              checked={enablePassword}
              onChange={(e) => setEnablePassword(e.target.checked)}
            />
            <div>
            Enable password
            </div>
            
          </label>
        </div>
        {enablePassword && (
          <div className="flex items-center">
            <label htmlFor="password" className="mr-2 text-sm font-medium">
              Enter password
            </label>
            <input
              id="password"
              type="password"
              className="rounded-md w-[50%] border border-gray-300 bg-gray-50 px-3 py-2 text-base font-medium text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
            type="button"
            onClick={()=>savePassword(password)}
            className="ml-4 inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50"
            disabled={!password}
            >
            <Mail className="mr-2 -ml-1 h-5 w-5" />
            Set Password
            </button>
          </div>
        )}
        <div className="flex items-center">
          <label htmlFor="email" className="mr-2 text-sm font-medium">
            Send file via email
          </label>
          <input
            id="email"
            type="email"
            className="rounded-md border w-[50%] border-gray-300 bg-gray-50 px-3 py-2 text-base font-medium text-gray-700 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="button"
            onClick={handleSendEmail}
            className="ml-4 inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50"
            disabled={!email}
          >
            <Mail className="mr-2 -ml-1 h-5 w-5" />
            Send Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default FIleShare;
