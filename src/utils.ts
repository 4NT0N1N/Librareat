import { Cocktail, Meal } from "./types/types";

export const toCocktail = (data: any) => {
    const cocktail: Cocktail = {
        idDrink: data.idDrink,
        strDrink: data.strDrink,
        strDrinkAlternate: data.strDrinkAlternate,
        strCategory: data.strCategory,
        strIBA: data.strIBA,
        strAlcoholic: data.strAlcoholic,
        strGlass: data.strGlass,
        strInstructions: data.strInstructions,
        strDrinkThumb: data.strDrinkThumb,
        strTags: data.strTags,
        strIngredients: data.strIngredient1,
        strMeasures: data.strMeasure1,
        dateModified: data.dateModified,
    }
    return cocktail
}

export const toMeal = (data: any) => {
    const meal: Meal = {
        idMeal: data.idMeal,
        strMeal: data.strMeal,
        strDrinkAlternate: data.strDrinkAlternate,
        strCategory: data.strCategory,
        strArea: data.strArea,
        strInstructions: data.strInstructions,
        strMealThumb: data.strMealThumb,
        strTags: data.strTags,
        strYoutube: data.strYoutube,
        strIngredients: data.strIngredient1,
        strMeasures: data.strMeasure1,
        strSource: data.strSource,
        dateModified: data.dateModified,
    }
    return meal
}