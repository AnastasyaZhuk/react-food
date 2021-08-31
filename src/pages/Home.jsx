import React, {useEffect, useState} from 'react';
import Preloader from "../components/common/Preloader";
import CategoryList from "../components/CategoryList";
import {getAllCategories} from "../api";
import Search from "../components/common/Search";
import {useHistory, useLocation} from "react-router-dom";

const Home = () => {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    const {pathname, search} = useLocation();
    const {push} = useHistory();

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase()))
        )
        push({
            pathname,
            search: `?search=${str}`
        });
    }

    useEffect(() => {
        getAllCategories().then((data) => {
            setCatalog(data.categories);
            setFilteredCatalog(
                search ? data.categories.filter(item => item.strCategory
                        .toLowerCase()
                        .includes(search.split('=')[1].toLowerCase()))
                    : data.categories
            );
        });
    }, [search])

    return (
        <>
            <Search cb={handleSearch}/>
            {!catalog.length ? <Preloader/> : (
                <CategoryList catalog={filteredCatalog}/>
            )}
        </>
    );
};

export default Home;