import express from "express";
import "dotenv/config";
import cors from "cors";

import { submitContactForm } from "./controllers/contactController.js";
import { submitCertificationForm } from "./controllers/certificationController.js";
import { submitConsultationForm } from "./controllers/consultationController.js";
import { submitNetworkForm } from "./controllers/networkController.js";
import { submitTrainingEventsForm } from "./controllers/trainingEventsController.js";

import { formLimiter } from "./middleware/rateLimiter.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://business2excel.surge.sh"
  ]
}));

app.use(express.json());

app.post("/api/contact", formLimiter, submitContactForm);
app.post("/api/certification", formLimiter, submitCertificationForm);
app.post("/api/consultation", formLimiter, submitConsultationForm);
app.post("/api/network", formLimiter, submitNetworkForm);
app.post("/api/training-events", formLimiter, submitTrainingEventsForm);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Express server listening on port ${PORT}`);
});