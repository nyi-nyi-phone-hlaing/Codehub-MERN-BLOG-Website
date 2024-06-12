import { Triangle } from "react-loader-spinner";
const Loading = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <Triangle
        visible={true}
        height='80'
        width='80'
        color='#4fa94d'
        ariaLabel='triangle-loading'
      />
      <p className='mt-2 font-bold text-zinc-400 dark:text-zinc-600'>
        Please wait a few moment.
      </p>
    </div>
  );
};

export default Loading;
