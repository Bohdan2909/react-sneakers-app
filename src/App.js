import './App.scss';
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
// const arr = [
//     {name:'Мужские Кроссовки Nike Blazer Mid Suede', price: 3000, imgUrl:'/img/sneakers/1.jpg'},
//     {name:'Мужские Кроссовки Nike Blazer Mid Suede', price:3440, imgUrl:'/img/sneakers/2.jpg'},
//     {name:'Мужские Кроссовки Nike Air Max 270', price:4440, imgUrl:'/img/sneakers/3.jpg'},
//     {name:'Кроссовки Puma X Aka Boku Future Rider', price:5440, imgUrl:'/img/sneakers/4.jpg'}
// ]
function App() {
    const [items, setItems] = useState([]);
    const [cartOpen, setCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [favorites, setFavorites] = useState([])


    useEffect(() =>{
    // fetch('https://634020afe44b83bc73c9a554.mockapi.io/items')
    //     .then(res => res.json())
    //     .then(json => setItems(json))
        async function fetchData() {
            const favoritesResponse = await axios.get('https://634020afe44b83bc73c9a554.mockapi.io/favorites')
            const itemsResponse = await axios.get('https://634020afe44b83bc73c9a554.mockapi.io/items')
            const cartResponse = await axios.get('https://634020afe44b83bc73c9a554.mockapi.io/cart')
            setCartItems(cartResponse.data)
            setFavorites(favoritesResponse.data)
            setItems(itemsResponse.data)

        }
        fetchData();
    },[])


    const onCartOpen = () => {
        setCartOpen(!cartOpen)
    }
    const onAddCart = (item) => {
        if(cartItems.find(cart => cart.id === item.id)){
            axios.delete(`https://634020afe44b83bc73c9a554.mockapi.io/cart/${item.id}`);
            setCartItems((prev) => prev.filter(prevCart => prevCart.id !== item.id ))
        } else {
            axios.post('https://634020afe44b83bc73c9a554.mockapi.io/cart', item);

            setCartItems((prev) => [...prev, item])
        }
        try {

        }catch (error) {
            alert('Error')
        }

    }
    const onRemoveCart = (id) => {
        // axios.delete(`https://634020afe44b83bc73c9a554.mockapi.io/cart/${id}`)
        setCartItems((prev) => prev.filter(item => item.id !== id))
    }
    const onChangeInput = (e) => {

        setSearchValue(e.target.value)

    }
    const onAddToFavorite = async (item) => {
       try {
           if(favorites.find(favObj => favObj.id === item.id)){
               axios.delete(`https://634020afe44b83bc73c9a554.mockapi.io/favorites/${item.id}`)

           }else {
               const {data} = await axios.post('https://634020afe44b83bc73c9a554.mockapi.io/favorites', item);

               setFavorites((prev) => [...prev, data])
           }
       }
       catch (error){
           alert('Dont add cart')
       }

    }
  return (
    <div className="wrapper clear">
        {cartOpen ? <Drawer items={cartItems} onClose={onCartOpen} onRemoveCart={onRemoveCart}/> : null}
        <Header onCartOpen={onCartOpen}/>

             <Routes>
                 <Route path="/" element={ <Home
                     items={items}
                     searchValue={searchValue}
                     setSearchValue={setSearchValue}
                     onAddCart={onAddCart}
                     onAddToFavorite={onAddToFavorite}
                     onChangeInput={onChangeInput}
                     cartItems={cartItems}
                 />}/>
                 <Route  path="/favorites" element={<Favorites items={favorites} onAddToFavorite={onAddToFavorite}/>}/>
             </Routes>

    </div>
  );
}

export default App;
