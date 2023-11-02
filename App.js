import React from "react";
import  ReactDOM from "react-dom/client";

//Nested Element

// const heading = React.createElement("div",{className:"title"},[
//     React.createElement("h1",{},"Heading 1"),
//     React.createElement("h2",{},"Heading 2"),
//     React.createElement("h3",{},"Heading 3"),
// ]);
// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//Using JSX

// const HeadingJsx =(
//     <div className="title">
//         <h1>HEadings1</h1>
//         <h2>HEadings1</h2>
//         <h3>HEadings1</h3>

//     </div>
// );
// const root1 = ReactDOM.createRoot(document.getElementById("root"));
// root1.render(HeadingJsx);

//using Functional Component

// const name ="Devashish";

// const Title = () =>{
//     return <h1 className="Headings">Hey!! My name is Devahsish and I m here</h1>;
// };

// const HeadingFunctional = ()=>{
//     return(
//         <div className="title">
//             <Title/>
//             <Title></Title>
//             <h1>{name}</h1>
//             <h1>Functioanl1</h1>
//             <h2>Functioanl2</h2>
//             <h3>Functioanl3</h3>
//         </div>
//     );
// };
// const rootFunctional = ReactDOM.createRoot(document.getElementById("root"));
// rootFunctional.render(<HeadingFunctional/>);

const BoxLogo = () =>(
    
        <div className="logo">
<img src="" alt="logo loading"></img>
        </div>
    )


const SearchBar = () =>(
    
        <div className="SearchBar">
<label className="searchbar"></label>
<input type="text" placeholder="Enter ur text"></input>
        </div>
    )


const UserIcon = () =>(
    
        <div className="UserIcon">
<img src="" alt="Icon Loading"></img>
        </div>
    )



const HeadingFunctional = ()=>(
    <div className="ccss">
        <BoxLogo/>
        <SearchBar/>
        <UserIcon/>
        
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingFunctional/>);
