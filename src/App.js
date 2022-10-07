import './App.scss';
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
const arr = [
    {name:'Мужские Кроссовки Nike Blazer Mid Suede', price: 3000, imgUrl:'/img/sneakers/1.jpg'},
    {name:'Мужские Кроссовки Nike Blazer Mid Suede', price:3440, imgUrl:'/img/sneakers/2.jpg'},
    {name:'Мужские Кроссовки Nike Air Max 270', price:4440, imgUrl:'/img/sneakers/3.jpg'},
    {name:'Кроссовки Puma X Aka Boku Future Rider', price:5440, imgUrl:'/img/sneakers/4.jpg'}
]
function App() {
  return (
    <div className="wrapper clear">
        <Drawer/>
        <Header/>
        <div className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
                <h1>Всі кросовки</h1>
                <div className="search-block d-flex">
                    <img src="/img/sneakers/search.svg" alt="Search"/>
                    <input placeholder="Пошук..." type="text"/>
                </div>
            </div>
            <div className="d-flex justify-between">

                {
                    arr.map((item, id) => <Card
                                          key={id}
                                          name ={item.name}
                                          price ={item.price}
                                          img ={item.imgUrl}/>)
                }
            </div>
        </div>
    </div>
  );
}

export default App;
