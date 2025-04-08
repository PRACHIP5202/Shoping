import React, {useState} from 'react'
import { GoogleGenAI } from "@google/genai";
function Chatbot() {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const ai = new GoogleGenAI({ apiKey: "AIzaSyBzoo_A7JVIzLMOQ1YO0KmF_U15KPSkIoQ" });

    async function getdetails() {
        const data = await ai.models.generateContent({
          model: "gemini-2.0-flash",
          contents: prompt,
        });
        setResponse(data.text);
      }
  return (
    <div>
      <input type="text" placeholder='Enter your msg here' value={prompt} onChange={(e)=> setPrompt(e.target.value)} />
      <button onClick={getdetails}>send</button>
      {response}
    </div>
  )
}

export default Chatbot
