import dotenv from 'dotenv';

dotenv.config();
const getOpenAIResponse = async (message) => {
     const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':` Bearer ${process.env.OPENROUTER_API_KEY}`
        },
        body: JSON.stringify({ 
            model: 'nvidia/nemotron-3-super-120b-a12b:free',
            messages: [
                {   "role": "user",
        "content": message 
      }
    ],
        })
    };
try {
let response = await fetch("https://openrouter.ai/api/v1/chat/completions",options);
const data = await response.json();
// console.log(data.choices[0].message.content);
return ( data.choices[0].message.content);
}catch (err) {
    console.log(err);
}
};
export default getOpenAIResponse;