const WelcomeTab = () => {
    return (
        <div className="welcome-page container p-2 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4">
            Welcome to Your Visual Studio
          </h1>
          <p className="text-sm md:text-base lg:text-lg mb-8 text-gray-400 font-medium">
            Start by opening a file.
          </p>
        </div>
      );
}

export default WelcomeTab