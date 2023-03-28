console.log(fetch_a_random_meal())

async function get_meal_by_id(id){
    const meal_by_id = await fetch('www.themealdb.com/api/json/v1/1/lookup.php?i='+id)
}

async function get_meal_by_search(term){
    const meals_after_search = await fetch('www.themealdb.com/api/json/v1/1/search.php?s='+term)
}

function write_meal(meal){
    console.log('the meal is ',meal)
    return meal
}

function fetch_a_random_meal(){
    fetch('https://www.themealdb.com/api/json/v1/1/random.php').then((response) => {
        return response.json()
     }).then((data) => {
        let ingredients = []
        let measures = []
        let name = data.meals[0].strMeal
        let image_src = data.meals[0].strMealThumb
        new_meal = new Meal(name, image_src)
        new_meal.istruction = data.meals[0].strInstructions
        new_meal.area = data.meals[0].strArea
        new_meal.category = data.meals[0].strCategory
        new_meal.tag = data.meals[0].strTags
        
        ingredients.push(data.meals[0].strIngredient1)
        ingredients.push(data.meals[0].strIngredient2)
        ingredients.push(data.meals[0].strIngredient3)
        ingredients.push(data.meals[0].strIngredient4)
        ingredients.push(data.meals[0].strIngredient5)
        ingredients.push(data.meals[0].strIngredient6)
        ingredients.push(data.meals[0].strIngredient7)
        ingredients.push(data.meals[0].strIngredient8)
        ingredients.push(data.meals[0].strIngredient9)
        ingredients.push(data.meals[0].strIngredient10)
        ingredients.push(data.meals[0].strIngredient11)
        ingredients.push(data.meals[0].strIngredient12)
        ingredients.push(data.meals[0].strIngredient13)
        ingredients.push(data.meals[0].strIngredient14)
        ingredients.push(data.meals[0].strIngredient15)
        ingredients.push(data.meals[0].strIngredient16)
        ingredients.push(data.meals[0].strIngredient17)
        ingredients.push(data.meals[0].strIngredient18)
        ingredients.push(data.meals[0].strIngredient19)
        ingredients.push(data.meals[0].strIngredient20)

        measures.push(data.meals[0].strMeasure1)
        measures.push(data.meals[0].strMeasure2)
        measures.push(data.meals[0].strMeasure3)
        measures.push(data.meals[0].strMeasure4)
        measures.push(data.meals[0].strMeasure5)
        measures.push(data.meals[0].strMeasure6)
        measures.push(data.meals[0].strMeasure7)
        measures.push(data.meals[0].strMeasure8)
        measures.push(data.meals[0].strMeasure9)
        measures.push(data.meals[0].strMeasure10)
        measures.push(data.meals[0].strMeasure11)
        measures.push(data.meals[0].strMeasure12)
        measures.push(data.meals[0].strMeasure13)
        measures.push(data.meals[0].strMeasure14)
        measures.push(data.meals[0].strMeasure15)
        measures.push(data.meals[0].strMeasure16)
        measures.push(data.meals[0].strMeasure17)
        measures.push(data.meals[0].strMeasure18)
        measures.push(data.meals[0].strMeasure19)
        measures.push(data.meals[0].strMeasure20)

        new_meal.measures = measures
        new_meal.ingredients = ingredients
        console.log('here',new_meal) 
        //return data.meals[0]
        write_meal(new_meal)
     })
     
}

class Meal{
    constructor(name, image_src){
        this.name = name
        this.image_src = image_src
    }
    
    measuress = []
    ingredients = []
    istruction
    area
    category
    tag
}

/*
console.log('areee',fetch_ingredients())
function fetch_ingredients(){
    let ingredients = []
    fetch('https://www.themealdb.com/api/json/v1/1/random.php').then((response) => {
        return response.json()
     }).then((data) => {
        ingredients.push(data.meals[0].strIngredient1)
        ingredients.push(data.meals[0].strIngredient2)
        ingredients.push(data.meals[0].strIngredient3)
        ingredients.push(data.meals[0].strIngredient4)
        ingredients.push(data.meals[0].strIngredient5)
        ingredients.push(data.meals[0].strIngredient6)
        ingredients.push(data.meals[0].strIngredient7)
        ingredients.push(data.meals[0].strIngredient8)
        ingredients.push(data.meals[0].strIngredient9)
        ingredients.push(data.meals[0].strIngredient10)
        ingredients.push(data.meals[0].strIngredient11)
        ingredients.push(data.meals[0].strIngredient12)
        ingredients.push(data.meals[0].strIngredient13)
        ingredients.push(data.meals[0].strIngredient14)
        ingredients.push(data.meals[0].strIngredient15)
        ingredients.push(data.meals[0].strIngredient16)
        ingredients.push(data.meals[0].strIngredient17)
        ingredients.push(data.meals[0].strIngredient18)
        ingredients.push(data.meals[0].strIngredient19)
        ingredients.push(data.meals[0].strIngredient20)
     })
     delete ingredients[19]
    return ingredients
}

console.log('naaaaa',fetch_measures())
function fetch_measures(){
    let measures = []
    fetch('https://www.themealdb.com/api/json/v1/1/random.php').then((response) => {
        return response.json()
     }).then((data) => {
        measures.push(data.meals[0].strMeasure1)
        measures.push(data.meals[0].strMeasure2)
        measures.push(data.meals[0].strMeasure3)
        measures.push(data.meals[0].strMeasure4)
        measures.push(data.meals[0].strMeasure5)
        measures.push(data.meals[0].strMeasure6)
        measures.push(data.meals[0].strMeasure7)
        measures.push(data.meals[0].strMeasure8)
        measures.push(data.meals[0].strMeasure9)
        measures.push(data.meals[0].strMeasure10)
        measures.push(data.meals[0].strMeasure11)
        measures.push(data.meals[0].strMeasure12)
        measures.push(data.meals[0].strMeasure13)
        measures.push(data.meals[0].strMeasure14)
        measures.push(data.meals[0].strMeasure15)
        measures.push(data.meals[0].strMeasure16)
        measures.push(data.meals[0].strMeasure17)
        measures.push(data.meals[0].strMeasure18)
        measures.push(data.meals[0].strMeasure19)
        measures.push(data.meals[0].strMeasure20)
     })
     delete measures[19]
    return measures
}

*/





























