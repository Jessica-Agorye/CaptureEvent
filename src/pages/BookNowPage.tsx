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
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
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
                  required: true,
                  validate: (value) => value.includes("@"),
                })}
                type="text"
                placeholder="Email"
              />
              {errors.email && <span>{errors.email.message}</span>}
              <br />
              <input
                {...register("password", {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                })}
                type="password"
                placeholder="Password"
                minLength={8}
              />
              {errors.password && <span>{errors.password.message}</span>}
              <br />
              <button className="border border-amber-600 p-2" type="submit">
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
