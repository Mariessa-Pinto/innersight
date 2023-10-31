import { View, Text } from 'react-native'

const axios = require("axios").default;

const options = {
  method: "POST",
  url: "https://api.edenai.run/v2/text/sentiment_analysis",
  headers: {
    authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNDJmZjk3N2QtYzQ1Yy00YmM4LTg2NWItZThmZDMwZGNiNjA5IiwidHlwZSI6ImFwaV90b2tlbiJ9.nChLtfSMydyG8r7dyuPrK7ZXa95p-V6OcyhhRNump3U",
  },
  data: {
    show_original_response: false,
    fallback_providers: "",
    providers: "ibm, lettria",
    text: "i am so happy ",
    language: "en",
  },
};

axios
  .request(options)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });

export default function Sentiment() {
    return(
        <View>

        </View>
    )
}