import "cypress-real-events/support";
Cypress.on("uncaught:exception", (err) => {
  const msg = err?.message || "";
  if (msg.includes("Script error") || msg.includes("cross origin")) {
    return false; // don't fail test
  }
  return true;
});
Cypress.on("uncaught:exception", (err) => {
  const msg = err?.message || "";

  const is3pNoise =
    msg.includes("Script error") ||
    msg.includes("cross origin") ||
    msg.includes("[object Event]") ||
    msg.includes('"isTrusted":true');

  if (is3pNoise) {
    return false; // don't fail the test
  }

  return true; // fail on real errors you care about
});
Cypress.on("window:unhandledrejection", (event) => {
  const reason = event?.reason;
  const msg =
    typeof reason === "string"
      ? reason
      : reason?.message || JSON.stringify(reason || "");

  const is3pNoise =
    msg.includes("Script error") ||
    msg.includes("cross origin") ||
    msg.includes("[object Event]") ||
    msg.includes('"isTrusted":true');

  if (is3pNoise) {
    return false;
  }
});