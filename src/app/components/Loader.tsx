import { MagnifyingGlass } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className="w-full h-full flex absolute justify-center backdrop-blur-sm backdrop-brightness-75 items-center z-50">
      <p>
        <MagnifyingGlass
          height="80"
          width="80"
          color="#e15b64"
          ariaLabel="loading"
        />
      </p>
    </div>
  );
};
