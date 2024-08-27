import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import CategoryPage from './pages/CategoryPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import AccountPage from './pages/AccountPage';
import Footer from './components/Footer';
import SearchPage from './pages/SearchPage'
import Chatbot from 'react-chatbotify'



function App() {
  
  const flow ={
    start: {
      message: "Hello, this is Tan Jin at Mediamarkt customer service I will help you with anything you need! May I now your name please?",
      path: "ask_age_group",
    },
    ask_age_group: {
      message: (params) => `Hey ${params.userInput}! How can I help you?`,
      path: () => "ask_shipping",
    },
    ask_shipping: {
      message: `Would you like us to send your package by express or standard shipping?`,
      options: ['Express', 'Standard'],
      chatDisabled: true,
      path: (params) => {
        if (params.userInput == "Express") {
          return "express_shipping"
        } else {
          return "standard_shipping";
        }
      },
    },
    express_shipping: {
      message: "The price for express shipping to Canary Islands would be 15$",
      path: "anything_else"
    },
    standard_shipping: {
      message: "The price for standard shipping to Canary Islands would be 10$, unless your purchase is above 120$",
      path: "anything_else"
    },
    anything_else: {
      message: "Can I help you in anything else?",
      path: params => {
        if(params.userInput == 'Yes'){
          return "more_help"
        }
        else{
          return "close_chat"
         } 
      }
      
    },
    more_help: {
      message: "Sure, Im glad to be able to help you. What can I do for you?",
      path: (params) => {
        if (isNaN(Number(params.userInput))) {
          params.injectMessage("Height needs to be a number!");
          return;
        }
        return "ask_weather";
      }
    },
    close_chat: {
      message: "Pleasure is mine, have a nice day.",
    },
    ask_image: {
      message: (params) => `${params.userInput}? Interesting. Could you share an image of that?`,
      file: (params) => console.log(params.files),
      path: "end"
    },
    end: {
      message: "Thank you for sharing! See you again!",
      path: "loop"
    },
    loop: {
      message: "You have reached the end of the conversation!",
      path: "loop"
    },
    incorrect_answer: {
      message: "Your answer is incorrect, try again!",
      transition: {duration: 0},
      path: (params) => params.prevPath
    },
  }


  return (
    <>
    <Navbar></Navbar>
    <Chatbot flow={flow}/>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/:category' element={<CategoryPage/>}/>
        <Route path='/:category/:id' element={<ProductDetailsPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/myAccount' element={<AccountPage/>}/>
        <Route path='/results/:searchTerm' element={<SearchPage/>}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App
