import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFilteredByCategory } from '../../api';
import { Item } from './Item';
import { Preloader } from '../../components/Preloader';

const Items = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { name } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getFilteredByCategory(name)
            .then(res => {
                setItems(res.meals);
                setLoading(false);
            });
    }, []);

    const style = {
        'display': 'flex',
        'justifyContent': 'center',
        'minHeight': '200px',
        'alignItems': 'center'
    };
    
    return (
        loading   
        ? 
            <Preloader />
        :
            !items 
            ?
                <div style={style}>No items found</div>
            :
                <>
                    <button className='btn' onClick={() => navigate(-1)}>Go back</button>
                    <div className="list">
                        {items.map((item, index) => (
                            <Item key={item.idMeal} {...item} />
                        ))}
                    </div>
                </>
    );    
}

export { Items };