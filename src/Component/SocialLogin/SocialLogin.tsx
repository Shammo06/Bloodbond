const SocialLogin = () => {
  return (
    <div className="mt-5">
      <div className="h-[1px] bg-[#a7a8a5] w-full"></div>
      <div className="flex justify-center items-center">
        <button
          type="button"
          className="flex btn items-center border px-8 py-3 text-xl rounded-lg mt-5 bg-transparent"
        >
          <img
            className="w-6 mr-2"
            src="https://i.ibb.co/kyggTTw/Logo-google-icon-PNG.png"
            alt=""
          />
          <span className="font-medium">Login With Google</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
