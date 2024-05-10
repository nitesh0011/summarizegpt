'use client'
import React, { ChangeEvent, useState } from 'react';
import axios from 'axios';

const Hero = () => {
    const [article, setArticle] = useState({
        url: "",
        summary: ""
    });

    const [data,setData] = useState('')
    const [isLoading, setIsLoading] = useState(false);


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setArticle({
            ...article,
            url: e.target.value
        });
    };

    const handleSubmit: React.FormEventHandler<HTMLFormElement>  = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const options = {
            method: 'GET',
            url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
            params: {
                url: article.url,
                length: '2'
            },
            headers: {
                'X-RapidAPI-Key':  process.env.NEXT_PUBLIC_API_KEY ? `&#34;${process.env.NEXT_PUBLIC_API_KEY}&#34;` : '',
                'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
            }
        };
        
        try {
            const response = await axios.request(options);
            console.log(response.data);
            setData(response.data.summary);
        } catch (error) {
            console.error(error);
        }
    finally {
        setIsLoading(false); // Set loading state back to false after fetching data
    }
    };

    return (
        <div  className="min-h-screen bg-gradient-to-r from-blue-100 to-green-100 flex justify-center ">
            <div className="w-2/3 text-center pt-12">
                <div className="flex flex-col items-center">
                    <h1 className="text-5xl font-extrabold">Summarize Articles with</h1>
                    <h1 className="text-5xl font-extrabold text-orange-400">OpenAI GPT-4</h1>
                    <p className="py-6 w-2/3">
                        "Unlock article insights effortlessly with Summarize Articles. Get concise summaries tailored to your needs, saving time. Simplify your reading and stay informed with ease."
                    </p>
                    <form
                        className='relative w-full'
                        onSubmit={handleSubmit}
                    >
                        <input
                            required
                            value={article.url}
                            onChange={handleChange}
                            type='url'
                            placeholder="Paste the article link"
                            className="input border-none shadow-md focus:outline-none w-full max-w-lg"
                        />
                        <button className="btn ml-3 bg-orange-400 font-extrabold hover:bg-orange-300">Generate</button>
                    </form>
                </div>
                {isLoading && <p className=" mt-5">Loading...</p>} 
                <p className='mt-5'>{!isLoading && data} </p>
            </div>
        </div>
    );
};

export default Hero;
