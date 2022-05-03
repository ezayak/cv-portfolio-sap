import React from 'react';
import { getAllCategories } from '../../api';
import { Category } from './Category';
import { Preloader } from '../../components/Preloader';
import { Search } from '../../components/Search';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredCategories, setFilteredCategories] = useState([]);
    const [search, setSearch] = useSearchParams();
    let searchString = search.get('category');

    console.log('searchString', searchString);

    const style = {
        'display': 'flex',
        'justifyContent': 'center',
        'minHeight': '200px',
        'alignItems': 'center'
    };

    const handleSearch = (str) => {
        const newCategories = categories.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase()));
        setFilteredCategories(newCategories);

        if (str !== searchString) {
            setSearch({category: str});
        }
    }

    useEffect(() => {
        getAllCategories()
            .then(res => {
                setCategories(res.categories);
                setLoading(false);
                
                if (searchString) {
                    setFilteredCategories(res.categories.filter(item => item.strCategory.toLowerCase().includes(searchString.toLowerCase())));
                } else {
                    setFilteredCategories(res.categories);
                }
            })

    }, [searchString]);


    return (
        <>
            <Search cb={handleSearch}/>
            {loading   
            ? 
                <Preloader />
            :
                !filteredCategories 
                ?
                    <div style={style}>No categories found</div>
                :
                    <div className="list">
                        {filteredCategories.map((category, index) => (
                            <Category key={category.idCategory} {...category} />
                        ))}
                    </div>
            }
        </>

    );
}

export { Categories };