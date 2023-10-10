
import myPic from "./myPic.jpg"

const numOfColumns = 10;


export const headCells = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Dessert (100g serving)',
    },
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Dessert (100g serving)',
  },
    {
        id: 'calories',
        numeric: true,
        disablePadding: false,
        label: 'Calories',
      },
      {
        id: 'fat',
        numeric: true,
        disablePadding: false,
        label: 'Fat (g)',
      },
      {
        id: 'carbs',
        numeric: true,
        disablePadding: false,
        label: 'Carbs (g)',
      },
      {
        id: 'protein',
        numeric: true,
        disablePadding: false,
        label: 'Protein (g)',
      },
  
]
 
export const rows = [
    {
        name: "john" ,
        calories: 24,
        fat: 23,
        carbs: 43,
        protein: 65,
      },
      {
        name: "Samy" ,
        calories: 24,
        fat: 23,
        carbs: 43,
        protein: 65,
      },
      {
        name: "Elias" ,
        calories: 24,
        fat: 23,
        carbs: 43,
        protein: 65,
      },
      {
        name: "Debe" ,
        calories: 24,
        fat: 23,
        carbs: 43,
        protein: 65,
      },
      {
        name: "Gemechu" ,
        calories: 24,
        fat: 23,
        carbs: 43,
        protein: 65,
      },
      {
        name: "Hundessa" ,
        calories: 24,
        fat: 23,
        carbs: 43,
        protein: 65,
      }, 
      {
        name: "john" ,
        calories: 24,
        fat: 23,
        carbs: 43,
        protein: 65,
      },
      {
        name: "Samy" ,
        calories: 24,
        fat: 23,
        carbs: 43,
        protein: 65,
      },
      {
        name: "Elias" ,
        calories: 24,
        fat: 23,
        carbs: 43,
        protein: 65,
      },
      {
        name: "Debe" ,
        calories: 24,
        fat: 23,
        carbs: 43,
        protein: 65,
      },
      {
        name: "Gemechu" ,
        calories: 24,
        fat: 23,
        carbs: 43,
        protein: 65,
      },
    ]


export const inputElements = [
  {
    id: 1,
    name: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "first name",
    validationMethod: ()=>{

    }

  },
  {
    id: 2,
    name: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "last name",
    validationMethod: ()=>{
      
    }
  },
  {
    age: 3,
    name: "age",
    label: "Age",
    type: "number",
    placeholder: "age",
    validationMethod: ()=>{
      
    }
  },
  {
    id: 4,
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "test@g,ail.com",
    validationMethod: ()=>{
      
    }
  },
  {
    id: 5,
    name: "maritalStatus",
    label: "Marita status",
    type: "email",
    placeholder: "test@g,ail.com",
    validationMethod: ()=>{
      
    }
  },
  
]