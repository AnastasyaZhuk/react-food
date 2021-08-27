import React, {useEffect, useState} from 'react';
import Preloader from "../components/common/Preloader";
import CategoryList from "../components/CategoryList";
import {getAllCategories} from "../api";

const Home = () => {
    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        getAllCategories().then((data) => {
            setCatalog(data.categories);
        });
    }, [])

    return (
        <>
            {!catalog.length ? <Preloader/> : (
                <CategoryList catalog={catalog}/>
            )}
        </>
    );
};

export default Home;