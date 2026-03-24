const SignUpForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-2">
          Create your account
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full name"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-black outline-none"
          />

          <input
            type="email"
            placeholder="Email address"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-black outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-black outline-none"
          />

          <input
            type="password"
            placeholder="Confirm password"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-black outline-none"
          />

          <label className="flex items-center text-sm gap-2">
            <input type="checkbox" />I agree to the Terms and Conditions
          </label>

          <button className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800">
            Sign Up
          </button>
        </form>

        <div className="text-center text-sm mt-6">
          Already have an account?
          <span className="text-black font-medium cursor-pointer">Login</span>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
