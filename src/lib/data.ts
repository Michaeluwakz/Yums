
import type { LucideIcon } from "lucide-react";
import { Flame, Leaf } from "lucide-react";

export interface MenuItem {
  name: string;
  description: string;
  price: number;
  image: string;
  imageHint: string;
  tags?: {
    name: string;
    icon: LucideIcon;
    color: string;
  }[];
}

export interface MenuCategory {
  categoryName: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    categoryName: "African-Caribbean Specialties",
    items: [
      {
        name: "Fried Rice/ Jollof rice",
        description: "Jollof rice/Fried rice is prepared by sauteing with high-quality spices, served as a meal with a drink.",
        price: 5.00,
        image: "https://i0.wp.com/afrovitalityeats.com/wp-content/uploads/2017/07/Easy-Baked-Basmati-jollof-rice.jpg?resize=1200%2C1200&ssl=1",
        imageHint: "jollof rice",
        tags: [
          { name: "Spicy", icon: Flame, color: "text-primary" },
          { name: "Halal", icon: Leaf, color: "text-green-600" },
        ],
      },
      {
        name: "Grilled Goat Meat",
        description: "Savour our signature dish: Charcoal-grilled tender halal goat meat, infused with bold African spices, served with zesty onion salad, crispy plantains & fresh or chiquanga.",
        price: 10.00,
        image: "https://homesteading.com/wp-content/uploads/2020/07/grilled-goat-goat-recipes-px.jpg",
        imageHint: "grilled goat",
        tags: [
          { name: "Halal", icon: Leaf, color: "text-green-600" },
        ],
      },
      {
        name: "Chicken/Meat Halal Stew",
        description: "A delicious blend featuring carrots, tomatoes, mushrooms, and onions. Served as a complete meal with rice and a drink.",
        price: 9.50,
        image: "https://www.foodandwine.com/thmb/hJKqrZ-6S7NQJYadNnKi8zdLrio=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/creamy-chicken-stew-FT-RECIPE1021-24e3084b5c0b47ccba4e82272b68f0c7.jpg",
        imageHint: "chicken stew",
        tags: [
          { name: "Halal", icon: Leaf, color: "text-green-600" },
        ],
      },
      {
        name: "Chicken Halal Curry",
        description: "Tender soft bone chicken accompanied by rice and fresh vegetables. Served as a rice meal with a drink.",
        price: 9.50,
        image: "https://yellowchilis.com/wp-content/uploads/2023/08/jamaican-curry-chicken.jpg",
        imageHint: "chicken curry",
        tags: [
          { name: "Halal", icon: Leaf, color: "text-green-600" },
        ],
      },
      {
        name: "Kid Goat Stew",
        description: "A hearty kid goat halal meat stew with potatoes served alongside rice, complemented by a refreshing drink as a meal.",
        price: 9.50,
        image: "https://i.ibb.co/chqMMvwZ/image.png",
        imageHint: "goat stew",
        tags: [
           { name: "Halal", icon: Leaf, color: "text-green-600" },
        ],
      },
      {
        name: "Taste Central African roots:",
        description: "Makayabo - tender dried fish fried golden, accompanied by caramelised onions & tri-colour peppers or flavoured boldly with chiquanga.",
        price: 10.00,
        image: "https://boondockingrecipes.com/wp-content/uploads/2025/02/3.-Congolese-Makayabu-Recipe-1-600x600.jpg",
        imageHint: "salted cod",
        tags: [
           { name: "Halal", icon: Leaf, color: "text-green-600" },
        ],
      },
      {
        name: "Fried Sea Bass",
        description: "Served with sautéed onions, garlic, and a vibrant mix of green, yellow and red peppers, along with sweet banana plantain or baby potatoes as meal with drink.",
        price: 10.00,
        image: "https://img.hellofresh.com/w_3840,q_auto,f_auto,c_limit,fl_lossy/recipes/image/cajun-spiced-bass-8422e3ab-7cd368ae.jpg",
        imageHint: "fried fish",
        tags: [
           { name: "Halal", icon: Leaf, color: "text-green-600" },
        ],
      }
    ],
  },
  {
    categoryName: "Burger Squad",
    items: [
      {
        name: "Double Burger halal meal",
        description: "Our Classic Original Burger features a delicious beef patty, crispy pickles, a fried egg, sliced ham bacon, sautéed onions, and a touch of mustard, all embraced by a soft brioche bun.",
        price: 6.00,
        image: "https://static.wixstatic.com/media/f00cb0_a3acb8262716490783fd83dc1bd82516~mv2_d_4752_3168_s_4_2.jpeg/v1/fit/w_2500,h_1330,al_c/f00cb0_a3acb8262716490783fd83dc1bd82516~mv2_d_4752_3168_s_4_2.jpeg",
        imageHint: "double burger",
        tags: [
          { name: "Halal", icon: Leaf, color: "text-green-600" },
        ],
      },
      {
        name: "Original Burger halal meal",
        description: "Our Double Burger is a paradise for meat enthusiasts, featuring two juicy beef patties, Swiss cheese, caramelized onions, and a touch of garlic. Served alongside a vibrant carrot salad with bacon, egg, and ham, this burger is a must- try!",
        price: 6.00,
        image: "https://i.ibb.co/5gK1gTn0/image.png",
        imageHint: "beef burger",
        tags: [
          { name: "Halal", icon: Leaf, color: "text-green-600" },
        ],
      },
       {
        name: "Adult Burger",
        description: "A premium halal beef patty with mature cheddar, crispy lettuce, tomato, and our special house sauce in a brioche bun.",
        price: 6.50,
        image: "https://thumbs.dreamstime.com/b/close-up-standard-burger-adult-fast-food-restaurant-cafe-macro-photo-ingredients-meat-cheese-herbs-eco-burgers-232292512.jpg",
        imageHint: "gourmet burger",
        tags: [
          { name: "Halal", icon: Leaf, color: "text-green-600" },
        ],
      },
      {
        name: "Children's Menu",
        description: "A tasty halal chicken burger, served with fries and a drink. Perfect for our younger squad members!",
        price: 4.50,
        image: "https://www.thespicedchickpea.com/media/1863/img_2137.jpg",
        imageHint: "chicken burger meal",
        tags: [
          { name: "Halal", icon: Leaf, color: "text-green-600" },
        ],
      },
      {
        name: "Sanduba Yummy",
        description: "Enjoy a delightful sandwich made with French bread, filled with shredded roast chicken and grated cheese, and complemented by a refreshing salad of shredded cabbage, carrots, and cucumber, all seasoned with mayonnaise.",
        price: 6.00,
        image: "https://i.ibb.co/fYfTQNXb/image.png",
        imageHint: "chicken sandwich",
        tags: [
          { name: "Halal", icon: Leaf, color: "text-green-600" },
        ],
      },
    ],
  },
  {
    categoryName: "Sides & Extras",
    items: [
      {
        name: "French fries",
        description: "Crispy, golden French fries, perfectly salted.",
        price: 1.50,
        image: "https://staycreative.blog/wp-content/uploads/2020/11/image-1.jpg",
        imageHint: "french fries",
        tags: [
          { name: "Vegan", icon: Leaf, color: "text-green-600" },
        ],
      },
      {
        name: "Broccoli",
        description: "Steamed broccoli florets, lightly seasoned.",
        price: 1.50,
        image: "https://i.ibb.co/PZDG1sq6/image.png",
        imageHint: "steamed broccoli",
        tags: [
          { name: "Vegan", icon: Leaf, color: "text-green-600" },
        ],
      },
      {
        name: "Sweet Potato Fries",
        description: "Crispy sweet potato fries, perfectly seasoned.",
        price: 2.00,
        image: "https://upload.wikimedia.org/wikipedia/commons/8/83/French_Fries.JPG",
        imageHint: "sweet potato fries",
        tags: [
          { name: "Vegan", icon: Leaf, color: "text-green-600" },
        ],
      },
      {
        name: "Salad Box",
        description: "A fresh mix of greens, tomatoes, and cucumbers with a light vinaigrette.",
        price: 5.00,
        image: "https://i.ibb.co/vvLVz9jj/image.png",
        imageHint: "fresh salad",
        tags: [
          { name: "Vegan", icon: Leaf, color: "text-green-600" },
        ],
      },
    ],
  },
  {
    categoryName: "Desserts",
    items: [
      {
        name: "Lemon Pudding",
        description: "A zesty and refreshing lemon pudding to cleanse your palate.",
        price: 3.00,
        image: "https://i.ibb.co/d0ngGdJX/image.png",
        imageHint: "lemon pudding",
        tags: [
          { name: "Vegetarian", icon: Leaf, color: "text-green-600" },
        ],
      },
      {
        name: "Passion Fruit Pudding",
        description: "Creamy and exotic passion fruit pudding, a taste of the tropics.",
        price: 3.00,
        image: "https://i.ibb.co/5xRbn1DX/image.png",
        imageHint: "passion fruit pudding",
        tags: [
          { name: "Vegetarian", icon: Leaf, color: "text-green-600" },
        ],
      },
      {
        name: "Rice Pudding",
        description: "Classic, comforting rice pudding with a sprinkle of cinnamon.",
        price: 3.00,
        image: "https://i.ibb.co/1Y0MDDgP/image.png",
        imageHint: "rice pudding",
        tags: [
          { name: "Vegetarian", icon: Leaf, color: "text-green-600" },
        ],
      },
    ],
  },
  {
    categoryName: "Drinks",
    items: [
      {
        name: "Coca-cola",
        description: "Classic, refreshing Coca-cola.",
        price: 1.50,
        image: "https://i.ibb.co/dX9Hw1w/image.png",
        imageHint: "coca cola",
      },
      {
        name: "Fanta",
        description: "Bubbly and fruity Fanta.",
        price: 1.50,
        image: "https://i.ibb.co/bMkQ07GH/image.png",
        imageHint: "fanta can",
      },
      {
        name: "Sprite",
        description: "Crisp, lemon-lime Sprite.",
        price: 1.50,
        image: "https://i.ibb.co/gL0y6p73/image.png",
        imageHint: "sprite drink",
      },
      {
        name: "Rio",
        description: "A tropical blend of light, sparkling fruit juices.",
        price: 1.50,
        image: "https://i.ibb.co/Wvtf39Tr/image.png",
        imageHint: "rio drink",
      },
      {
        name: "Tango",
        description: "The distinctively tangy taste of Tango.",
        price: 1.50,
        image: "https://i.ibb.co/5Wp7RQS2/image.png",
        imageHint: "tango drink",
      },
      {
        name: "7up",
        description: "The original, refreshing 7up.",
        price: 1.50,
        image: "https://i.ibb.co/8gGWZtmW/image.png",
        imageHint: "7up drink",
      },
    ],
  }
];
