import { Link } from 'react-router-dom';

const Item = (props) => {
    const {strMeal, strMealThumb, idMeal} = props;

    return (
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                {
                    strMealThumb === 'N/A' ?
                    <img className="activator" src={'https://via.placeholder.com/300x450?text='+strMeal}  alt={strMeal}/>
                                    :
                    <img className="activator" src={strMealThumb}  alt={strMeal}/>                                    
                }
            </div>
            <div className="card-content" style={{minHeight:"150px"}}>
                <span className="card-title activator grey-text text-darken-4">{strMeal}</span>
            </div>
            <div className="card-action">
                <Link to={`/meal/${idMeal}`} className='btn'>Details</Link>
            </div>        
        </div>
    );
}

export { Item };