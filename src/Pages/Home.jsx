import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Categories from '../Components/Categories';
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import Heart from '../Components/Heart';

const Home = () => {
    const navigate = useNavigate();
    const [movieid, setMovieId] = useState("new");
    const [data, setData] = useState([]);
    const [heart,setHeart]=useState(<FaRegHeart />)
    //console.log(searchTerm)
    useEffect(() => {
        fetchData();
    }, []);

    const addHeart =()=>{
setHeart(<FaHeart />)
    }
    const removeHeart =()=>{
        setHeart(<FaRegHeart />)
    }

    const handleView = (id) => {
        setID(id)
        navigate(`/MovieDetails?id=${id}`)
    }
    const fetchData = async () => {
        await axios
            .get(`https://newsdata.io/api/1/latest?apikey=pub_64768fc0af985457096b71b484051a88e82bc&q=science`)
            .then((res) => setData(res.data.results))
            .catch((error) => console.log(error));
        //console.log(data)
    };

    return (
        <div className="mx-12 my-16 justify-center">
            <Categories />
            <div className="flex flex-1 flex-row flex-wrap gap-6 my-16 justify-center">
            {data.map((ele, index) => {
                return (
                        <div key={index} className="w-full my-2 bsis-1/1 md:basis-1/5 sm:basis-1/3 border border-gray-200 rounded-lg shadow hover:shadow-lg bg-white">
                             <Link to={ele.link} className='rounded-t-lg' target="_blank"
        rel="noreferrer">
                            <div className="basis-1/1 max-w-md rounded-t-lg md:h-50 md:shrink-0 bg-white dark:bg-gray-800 dark:border-gray-700">
                                {ele.image_url ?
                                    <img
                                        className="rounded-t-lg m-auto sm:h-52 sm:w-72 w-full object-cover md:w-72"
                                        src={ele.image_url}
                                        alt="product Image"
                                    /> :
                                    <img
                                        className="rounded-t-lg m-auto h-48 sm:h-52 w-full object-cover md:w-72"
                                        src="https://tse4.mm.bing.net/th?id=OIG1.NLfq2FOI2fUaLujNANrp&pid=ImgGn"
                                        alt="product Image"
                                    />
                                }
                            </div>
                            </Link>
                            <div className='basis-1/1 max-w-md'>
                                <div className="px-5 py-2">
                                    <h4 className='text-black text-sm font-bold'>{ele.source_name}</h4>
                                </div>
                                <div className="px-5">
                                    <h5 className="mb-2 text-sm font-normal tracking-tight text-gray-900 dark:text-gray-900">
                                        {ele.title}
                                    </h5>
                                    <p className="mb-1 font-thin text-xs text-gray-900 dark:text-gray-900">
                                        <span className="font-thin">category: {ele.category}</span>
                                    </p>
                                    <p className="flex justify-between mb-2 font-thin text-gray-900 dark:text-gray-900">
                                        <span className="font-thin text-xs">Date: {ele.pubDate} </span>
                                         { heart ?  <button onClick={()=>addHeart(ele.article_id)}>{heart}</button> : 
                                         <button onClick={()=>removeHeart(ele.article_id)}>{heart}</button> } 
                                         {/* <Heart heart={heart} setHeart={setHeart}/> */}
                                    </p>
                                </div>
                                <div className="text-center">
                                <Link to={ele.link} className='rounded-t-lg' target="_blank"
        rel="noreferrer">
                                    <div className="m-4">
                                    <div className="flex max-w-sm rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
                                    
  <button className="flex-1 font-bold text-sm bg-white px-2 py-2 rounded-xl text-gray-900">Read More..</button>
</div>
                                    </div>
                                    </Link>
                                </div>
                                
                                {/* </Navigate> */}
                            </div>
                      
                        </div>
                    
                );
                
            })}
            </div>
            {/* {Tdata > 10 ?
        <Pagination Page={Page} setPage={setPage} Tdata={Tdata} /> : ""} */}
        </div>
    );
};

export default Home;