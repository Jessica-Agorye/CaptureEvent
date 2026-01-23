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

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch {
      setError("root", { message: "Booking failed. Please try again." });
    }
  };

  const { id } = useParams();
  const planner = Eventplanners.find((planner) => planner.id === Number(id));

  if (!planner) {
    return <p className="text-center mt-20">Planner not found</p>;
  }

  return (
    <div className="min-h-screen py-10 bg-gray-50 mb-10">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <h1 className="text-3xl font-bold text-center mb-4">Book Now</h1>
        <p className="text-center text-gray-600">
          Complete your booking with the event planner.
        </p>
      </div>

      {/* Grid: Image + Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 max-w-6xl mx-auto px-6">
        {/* Planner Image */}
        <div>
          <img
            className="w-full h-80 md:h-96 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
            src={planner.image}
            alt={planner.name}
          />
        </div>

        {/* Form */}
        <div className="mt-8 md:mt-0">
          <h2 className="text-2xl font-semibold mb-4">{planner.name}</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 p-6 border border-gray-200 rounded-lg shadow-2xl bg-white"
          >
            {/* Email */}
            <input
              type="text"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                validate: (value) =>
                  value.includes("@") || "Email must include @ symbol",
              })}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}

            {/* Event Type */}
            <select
              {...register("eventType", { required: "Event type is required" })}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <option value="">Select event type</option>
              <option value="wedding">Wedding</option>
              <option value="birthday">Birthday</option>
              <option value="corporate">Corporate Event</option>
              <option value="conference">Conference</option>
              <option value="other">Other</option>
            </select>
            {errors.eventType && (
              <span className="text-red-500">{errors.eventType.message}</span>
            )}

            {/* Event Date */}
            <input
              type="date"
              {...register("eventDate", { required: "Event date is required" })}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            {errors.eventDate && (
              <span className="text-red-500">{errors.eventDate.message}</span>
            )}

            {/* Guest Count */}
            <input
              type="number"
              {...register("guestCount", {
                required: "Guest count is required",
                min: { value: 1, message: "At least 1 guest required" },
              })}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            {errors.guestCount && (
              <span className="text-red-500">{errors.guestCount.message}</span>
            )}

            {/* Venue */}
            <input
              type="text"
              placeholder="Event venue"
              {...register("venue", { required: "Venue is required" })}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            {errors.venue && (
              <span className="text-red-500">{errors.venue.message}</span>
            )}

            {/* Additional Notes */}
            <textarea
              placeholder="Additional notes (optional)"
              {...register("additionalNotes")}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
              rows={4}
            />

            {/* Submit Button */}
            <div className="flex justify-center mt-4">
              <button
                className="w-40 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 disabled:bg-gray-400 transition-colors duration-200"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? "Booking..." : "Book Now"}
              </button>
            </div>

            {errors.root && (
              <span className="text-red-500">{errors.root.message}</span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
