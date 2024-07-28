import { MdReportGmailerrorred } from 'react-icons/md';

export const ErrorPage = () => {
  return (
    <p className="flex justify-center flex-col gap-4 items-center h-full text-2xl font-bold text-red-500">
      404 PAGE NOT FOUND <MdReportGmailerrorred size={75} />
    </p>
  );
};
