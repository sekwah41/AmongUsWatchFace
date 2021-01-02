/*
 * Entry point for the watch app
 */
import clock from "clock";

clock.granularity = "minutes"; // seconds, minutes, or hours

clock.addEventListener("tick", (evt) => {
    // tick every minute
});
