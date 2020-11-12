export type Meal = {
    idMeal: number;
    strMeal: string;
    strDrinkAlternate: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    strTags: string;
    strYoutube: string;
    strIngredients: string;
    strMeasures: string;
    strSource: string;
    dateModified: string;
}

export type Cocktail = {
    idDrink: number;
    strDrink: string;
    strDrinkAlternate: string;
    strCategory: string;
	strIBA: string;
	strAlcoholic: string;
	strGlass: string;
    strInstructions: string;
    strDrinkThumb: string;
    strTags: string;
    strIngredients: string[];
    strMeasures: string[];
    dateModified: string;
}