import axios from "axios";

export const sendingData = async (
  zweck,
  energieverbrauch,
  dachForm,
  dachdatum,
  verfugbare,
  adresse,
  userData
) => {
  if (userData !== null) {
    try {
      const JSONdata = JSON.stringify({
        data: {
          zweck,
          energieverbrauch,
          dachForm,
          dachdatum,
          verfugbare,
          adresse,
          userData,
          heirkunft: "Illereiden",
          user_id: 13079890,
        },
      });

      const strapiApiRequest = axios.post(
        "https://api.work-set.eu/api/lead-generators",
        {
          data: {
            zweck,
            energieverbrauch,
            dachForm,
            dachdatum,
            verfugbare,
            adresse,
            userData,
          },
        }
      );

      const mailerApiRequest = await axios.post(
        "https://mailer.work-set.eu/lead",
        JSONdata,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );

      const [strapiResponse, mailerResponse] = await Promise.all([
        strapiApiRequest,
        mailerApiRequest,
      ]);

      console.log("Strapi Response:", strapiResponse);
      console.log("mailer Response:", mailerResponse);
    } catch (error) {
      console.log(error);
    }
  }
};
