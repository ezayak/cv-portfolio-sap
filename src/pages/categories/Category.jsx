import { Link } from 'react-router-dom';

const Category = (props) => {
    const {strCategory, strCategoryThumb, strCategoryDescription} = props;

    return (
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                {
                    strCategoryThumb === 'N/A' ?
                    <img className="activator" src={'https://via.placeholder.com/300x450?text='+strCategory}  alt={strCategory}/>
                                    :
                    <img className="activator" src={strCategoryThumb}  alt={strCategory}/>                                    
                }
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{strCategory}</span>
                <p>{strCategoryDescription.slice(0, 60)}...</p>
            </div>
            <div className="card-action">
                <Link to={`/category/${strCategory}`} className='btn'>Open category</Link>
            </div>        
        </div>
    );
}

export { Category };