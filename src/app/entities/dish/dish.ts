import { Cuisine } from '../cuisine/cuisine';
import { Ingredient } from '../ingredient/ingredient';
import { Tag } from '../tag/tag';

export interface Dish {
  id: string;
  name: string;
  price: number;
  description: string;
  weight: number;
  calories: number;
  images: string[];
  ingredients: Ingredient[];
  tags: Tag[];
  cuisines: Cuisine[];
}
