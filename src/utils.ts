import { Cocktail, Meal } from "./types/types";

export const toCocktail = (data: any) => {
    const arrayIngredients: string[] = []
    const arrayMeasures: string[] = []
    let index = 1
    while (data["strIngredient" + index.toString()] != undefined) {
        if (data["strIngredient" + index.toString()] != "" || data["strIngredient" + index.toString()] != null) {
            arrayIngredients.push(data["strIngredient" + index.toString()])
            arrayMeasures.push("strMeasure" + index.toString())
        }
        index++
    }
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
        strIngredients: arrayIngredients,
        strMeasures: arrayMeasures,
        dateModified: data.dateModified,
    }
    return cocktail
}

export const toMeal = (data: any) => {
    const arrayIngredients: string[] = []
    const arrayMeasures: string[] = []
    let index = 1
    while (data["strIngredient" + index.toString()] != undefined) {
        if (data["strIngredient" + index.toString()] != "" || data["strIngredient" + index.toString()] != null) {
            arrayIngredients.push(data["strIngredient" + index.toString()])
            arrayMeasures.push("strMeasure" + index.toString())
        }
        index++
    }
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
        strIngredients: arrayIngredients,
        strMeasures: arrayMeasures,
        strSource: data.strSource,
        dateModified: data.dateModified,
    }
    return meal
}