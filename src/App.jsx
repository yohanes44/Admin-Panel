
import Sidebar from "./garage/components/sidebar/Sidebar";

import Datatable from "./garage/components/datatable/Datatable";


import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import Form from "./garage/components/Form/Form";




export const headCells = [
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
    }
  ]

function App() {

  function doSomethingWithSelected(){

  }

  function search(data){
    return [{
        name: "Samy" ,
        calories: 24,
        fat: 23,
        carbs: 43,
        protein: 65,
      }]
  }

   const headCells = [
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
 
 const rows = [
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
      }
    ]

const inputElements = [
      {
        id: 1,
        label: "First Name",
        type: "text",
        placeholder: "first name",
        validationMethod: ()=>{
    
        }
    
      },
      {
        id: 2,
        label: "Last Name",
        type: "text",
        placeholder: "last name",
        validationMethod: ()=>{
          
        }
      },
      {
        age: 3,
        label: "Age",
        type: "number",
        placeholder: "age",
        validationMethod: ()=>{
          
        }
      },
      {
        id: 4,
        label: "Email",
        type: "email",
        placeholder: "test@g,ail.com",
        validationMethod: ()=>{
          
        }
      },
      {
        id: 5,
        label: "Marita status",
        type: "email",
        placeholder: "test@g,ail.com",
        validationMethod: ()=>{
          
        }
      },
      {
        id: 1,
        label: "First Name",
        type: "text",
        placeholder: "first name",
        validationMethod: ()=>{
    
        }
    
      },
      {
        id: 2,
        label: "Last Name",
        type: "text",
        placeholder: "last name",
        validationMethod: ()=>{
          
        }
      },
      {
        age: 3,
        label: "Age",
        type: "number",
        placeholder: "age",
        validationMethod: ()=>{
          
        }
      },
      {
        id: 4,
        label: "Email",
        type: "email",
        placeholder: "test@g,ail.com",
        validationMethod: ()=>{
          
        }
      },
      {
        id: 5,
        label: "Marita status",
        type: "email",
        placeholder: "test@g,ail.com",
        validationMethod: ()=>{
          
        }
      },
      {
        id: 2,
        label: "Last Name",
        type: "text",
        placeholder: "last name",
        validationMethod: ()=>{
          
        }
      },
      {
        age: 3,
        label: "Age",
        type: "number",
        placeholder: "age",
        validationMethod: ()=>{
          
        }
      },
      {
        id: 4,
        label: "Email",
        type: "email",
        placeholder: "test@g,ail.com",
        validationMethod: ()=>{
          
        }
      },
      {
        id: 5,
        label: "Marita status",
        type: "email",
        placeholder: "test@g,ail.com",
        validationMethod: ()=>{
          
        }
      },
      {
        id: 1,
        label: "First Name",
        type: "text",
        placeholder: "first name",
        validationMethod: ()=>{
    
        }
    
      },
      {
        id: 2,
        label: "Last Name",
        type: "text",
        placeholder: "last name",
        validationMethod: ()=>{
          
        }
      },
      {
        age: 3,
        label: "Age",
        type: "number",
        placeholder: "age",
        validationMethod: ()=>{
          
        }
      },
    ]

  return (
    
   <div>
      
    {/* <Datatable userColumns={[{   field: "email", headerName: "Email",width: 100},{field: "age", headerName: "Age",width: 100 
    }]} userRows={[  {   id: 1,username: "Snow", img: "myPic",status: "active",email: "jo@gmail.com",age: 35, },
    ]}/> */}

  
  {/* <Datatable doSomethingWithSelected={doSomethingWithSelected} search={search} headCells={headCells} rowsProps={rows} /> */}
     <BrowserRouter>
         <Routes>
           <Route path="/">
             <Route in  dex element={<Datatable doSomethingWithSelected={doSomethingWithSelected} search={search} headCells={headCells} rowsProps={rows} /> } /> }/>
             <Route path="form" element={<Form  title="Registration" columnSize={5} inputElements={inputElements}/>}/>
             <Route path="table" element={<Datatable doSomethingWithSelected={doSomethingWithSelected} search={search} headCells={headCells} rowsProps={rows} /> }/>
     
             </Route>
         </Routes>
       </BrowserRouter>

   </div>

  );
}

export default App;














// import React from "react";
// import {
//   BrowserRouter, Routes, Route
// } from "react-router-dom";
// import Home from "./pages/home/Home";
// import List from "./pages/list/List";
// import  Login  from "./pages/login/Login";
// import Single from "./pages/single/Single";
// import New from "./pages/new/New";
// import { productInputs, userInputs } from "./formSource";

// import "./style/dark.scss"

// function App() {
//   return (
    
//     <div className="app">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/">
//             <Route index element={<Home/>}/>
//             <Route path="login" element={<Login/>}/> 
//             <Route path="users">
//               <Route index element={<List/>}/>
//               <Route path=":userId" element={<Single/>}/> 
//               <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}/> 
//             </Route>
//             <Route path="products">
//               <Route index element={<List/>}/>
//               <Route path=":productId" element={<Single/>}/> 
//               <Route path="new" element={<New inputs={productInputs} title="Add New Product"/>}/> 
//             </Route>
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>

//   );
// }

// export default App;
