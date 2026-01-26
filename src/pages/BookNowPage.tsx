import { Eventplanners } from "../data/eventPlannersData";
import { useParams } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";

type FormData = {
  email: string;
  eventType: string;
  eventDate: string;
  guestCount: number;
  venue: string;
  additionalNotes?: string;
};

export const BookNowPage = () => {
  const { id } = useParams();
  const planner = Eventplanners.find((planner) => planner.id === Number(id));

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      email: "test@example.com",
      eventType: "",
      eventDate: "",
      guestCount: 1,
      venue: "",
      additionalNotes: "",
    },
  });

  if (!planner) {
    return <p className="text-center mt-20">Planner not found</p>;
  }

  // ✅ React Hook Form submit handler
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const res = await fetch("http://localhost:4000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          plannerId: planner.id,
          plannerName: planner.name,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to create booking");
      }

      const result = await res.json();
      console.log("Booking created:", result);
    } catch (error: unknown) {
      setError("root", {
        message: (error as Error).message || "Something went wrong",
      });
    }
  };

  return (
    <div className="min-h-screen py-10 bg-gray-50 mb-10">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <h1 className="text-3xl font-bold text-center mb-4">Book Now</h1>
        <p className="text-center text-gray-600">
          Complete your booking with the event planner.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 max-w-6xl mx-auto px-6">
        {/* Planner Image */}
        <div>
          <img
            className="w-full h-80 md:h-96 object-cover rounded-lg shadow-md"
            src={planner.image}
            alt={planner.name}
          />
        </div>

        {/* Form */}
        <div className="mt-8 md:mt-0">
          <h2 className="text-2xl font-semibold mb-4">{planner.name}</h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 p-6 border rounded-lg shadow-2xl bg-white"
          >
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <span>{errors.email.message}</span>}

            <select {...register("eventType", { required: true })}>
              <option value="">Select event type</option>
              <option value="wedding">Wedding</option>
              <option value="birthday">Birthday</option>
              <option value="corporate">Corporate</option>
            </select>

            <input type="date" {...register("eventDate", { required: true })} />

            <input type="number" {...register("guestCount", { min: 1 })} />

            <input
              type="text"
              placeholder="Venue"
              {...register("venue", { required: true })}
            />

            <textarea
              placeholder="Additional notes"
              {...register("additionalNotes")}
            />

            <button disabled={isSubmitting} type="submit">
              {isSubmitting ? "Booking..." : "Book Now"}
            </button>

            {errors.root && (
              <span className="text-red-500">{errors.root.message}</span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
