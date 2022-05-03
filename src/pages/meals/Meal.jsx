import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from '../../api';
import { Preloader } from "../../components/Preloader";

const Meal = () => {
    const { idMeal } = useParams();
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        getMealById(idMeal)
            .then((res) => {
                if (res.meals.length) {
                    setDetails(res.meals[0]);
                };
                setLoading(false);
            });
    }, [idMeal]);

    return (
        loading && details.idMeal ?
            <Preloader />
                :
            <>
                <div className="meal">
                    <img src={details.strMealThumb} alt={details.strMeal}/>
                    <h1>{details.strMeal}</h1>
                    <h6>Category: {details.strCategory}</h6>
                    {details.strArea ? <h6>Area: {details.strArea}</h6> : null}

                    <table className="centered">
                        <thead>
                            <tr>
                                <th>Ingredien</th>
                                <th>Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(details).map(key => {
                                    if (key.includes('Ingredient') && details[key]) {
                                        return (
                                            <tr key={key}>
                                                <td>{details[key]}</td>
                                                <td>{details[`strMeasure${key.slice(13)}`]}</td>
                                            </tr>
                                        );
                                    }

                                    return null;
                                })
                            }
                        </tbody>
                    </table>

                    <p>{details.strInstructions}</p>
                    {details.strYoutube ? 
                        <div className="row">
                            <h5 style={{margin: '2rem 0 1.5rem'}}>Video recipe</h5>
                            <iframe title={idMeal} src={`https://www.youtube.com/embed/${details.strYoutube.slice(-11)}`}/>
                        </div>
                         
                        : null}
                </div>
                <button className="btn" onClick={() => navigate(-1)}>Go back</button>
            </>
    );
}

export { Meal };