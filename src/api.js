import { API_URL } from "./config";

const getMealById = async (id) => {
    console.log(API_URL + 'lookup.php?i=' + id);
    const response =  await fetch(API_URL + 'lookup.php?i=' + id);
    return await response.json();
};

const getAllCategories = async () => {
    const response =  await fetch(API_URL + 'categories.php');
    return await response.json();
}

const getFilteredByCategory = async (name) => {
    const response =  await fetch(API_URL + 'filter.php?c=' + name);
    return await response.json();
}

export { getMealById, getAllCategories, getFilteredByCategory };