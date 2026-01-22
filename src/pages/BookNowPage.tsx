import { Eventplanners } from "../data/eventPlannersData";
import { useParams } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

export const BookNowPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      email: "test@example.com",
      password: "example123",
    },
  });
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // for asynchronous operations like API calls convert to async function
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error("Email already taken");
      console.log(data);
    } catch {
      setError("root", { message: "This email is already taken" });
    }
  };
  //makes data properly typed

  const { id } = useParams();
  const planner = Eventplanners.find((planner) => planner.id === Number(id));

  if (!planner) {
    return <p className="text-center mt-20">Planner not found</p>;
  }

  return (
    <div>
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Book Now
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Complete your booking with the event planner.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 max-w-6xl mx-auto px-6">
        <div>
          {" "}
          <img
            className=" w-full h-80 object-cover rounded-lg mb-6 md:mb-0"
            src={planner.image}
            alt=""
          />
        </div>

        <div>
          <div>
            <h2>{planner.name}</h2>
          </div>
          <br />
          <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("email", {
                  required: "Email is required",
                  validate: (value) => {
                    if (!value.includes("@")) {
                      return "Email must include @ symbol";
                    }
                    return true;
                  },
                })}
                type="text"
                placeholder="Email"
              />
              {errors.email && <span>{errors.email.message}</span>}
              <br />
              <input
                {...register("password", {
                  required: "Password is required",
                  pattern: /^[A-Za-z0-9]+$/,
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                })}
                type="password"
                placeholder="Password"
              />
              {errors.password && <span>{errors.password.message}</span>}
              <br />
              <button
                disabled={isSubmitting}
                className="border border-amber-600 p-2"
                type="submit"
              >
                {isSubmitting ? " ....Booking" : "Book Now"}
              </button>

              {errors.root && <span>{errors.root.message}</span>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
