const mongoose = require("mongoose");
const { Schema } = mongoose;

const consultationSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  astrologerId: {
    type: Schema.Types.ObjectId,
    ref: "Astrologer",
    required: true,
  },
  availabilitySlotId: {
    // Add availabilitySlotId field
    type: Schema.Types.ObjectId,
    ref: "AvailabilitySlot",
    required: true,
  },
  consultType: {
    type: String, // Chat, Call, Video call
    required: true,
  },
  astrologerName: String,
  astrologerImage: String,
  name: String,
  gender: String,
  dateOfBirth: Date,
  timeOfBirth: String,
  dontKnowTime: Boolean,
  placeOfBirth: String,
  enterPartnerDetails: Boolean,
  maritalStatus: String,
  occupation: String,
  concern: String,
  query: String,
  solution: String,
  remedies_suggested: String,
  concern: String,
  rating: Number,
  what_you_feel: String,
  description_to_client: String,
  status: String, // Active, Rescheduled, Canceled, Completed, etc.
  startTime: Date, // Add slot start time
  endTime: Date, // Add slot end time
  duration: Number, // Add slot duration
});

// Set defaults to null for all fields
consultationSchema.eachPath((path) => {
  if (!consultationSchema.path(path).isRequired) {
    consultationSchema.path(path).default(null);
  }
});

module.exports = mongoose.model("Consultation", consultationSchema);
