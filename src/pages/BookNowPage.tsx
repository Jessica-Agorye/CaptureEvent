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
    <div>
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-center mb-8">Book Now</h1>
        <p className="text-center mb-8">
          Complete your booking with the event planner.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 max-w-6xl mx-auto px-6">
        <div>
          <img
            className="w-full h-80 object-cover"
            src={planner.image}
            alt={planner.name}
          />
        </div>

        <div>
          <h2>{planner.name}</h2>
          <br />

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <input
              type="text"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                validate: (value) =>
                  value.includes("@") || "Email must include @ symbol",
              })}
            />
            {errors.email && <span>{errors.email.message}</span>}

            <br />

            {/* Event Type */}
            <select
              {...register("eventType", {
                required: "Event type is required",
              })}
            >
              <option value="">Select event type</option>
              <option value="wedding">Wedding</option>
              <option value="birthday">Birthday</option>
              <option value="corporate">Corporate Event</option>
              <option value="conference">Conference</option>
              <option value="other">Other</option>
            </select>
            {errors.eventType && <span>{errors.eventType.message}</span>}

            <br />

            {/* Event Date */}
            <input
              type="date"
              {...register("eventDate", {
                required: "Event date is required",
              })}
            />
            {errors.eventDate && <span>{errors.eventDate.message}</span>}

            <br />

            {/* Guest Count */}
            <input
              type="number"
              {...register("guestCount", {
                required: "Guest count is required",
                min: { value: 1, message: "At least 1 guest required" },
              })}
            />
            {errors.guestCount && <span>{errors.guestCount.message}</span>}

            <br />

            {/* Venue */}
            <input
              type="text"
              placeholder="Event venue"
              {...register("venue", {
                required: "Venue is required",
              })}
            />
            {errors.venue && <span>{errors.venue.message}</span>}

            <br />

            {/* Additional Notes */}
            <textarea
              placeholder="Additional notes (optional)"
              {...register("additionalNotes")}
            />

            <br />

            <button disabled={isSubmitting} type="submit">
              {isSubmitting ? "Booking..." : "Book Now"}
            </button>

            {errors.root && <span>{errors.root.message}</span>}
          </form>
        </div>
      </div>
    </div>
  );
};
