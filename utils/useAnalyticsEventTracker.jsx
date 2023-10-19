import ReactGA from "react-ga4";

export const useAnalyticsEventTracker = (category="Step_7") => {
  const eventTracker = (action = "test action", label = "test label") => {
    ReactGA.event({category, action, label});
  }
  console.log('it`s working')
  return eventTracker;
}
