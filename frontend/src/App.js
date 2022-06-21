import React from 'react'
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Navigation } from "./components/Navigation";
import Histories from "./pages/histories";
import HistoryDetail from "./pages/historyDetail"; 
import Geologies from "./pages/geologies";
import GeologyDetail from "./pages/geologyDetail"; 
import Personalities from "./pages/personalities";
import PersonalityDetail from "./pages/personalityDetail"; 

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <BrowserRouter >
    <ApolloProvider client={client} >
      <Header title='Spolková republika Německo' motto='Historie, Osobnosti, Geografie' />
      <Navigation/>
      <main className='container bg-light'>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/histories" element={<Histories />}/>
          <Route path="/histories/:id" element={<HistoryDetail />}/>
          <Route path="/geologies" element={<Geologies />}/>
          <Route path="/geologies/:id" element={<GeologyDetail />}/>
          <Route path="/personalities" element={<Personalities />}/>
          <Route path="/personalities/:id" element={<PersonalityDetail />}/>
        </Routes>
      </main>
      <Footer />
    </ApolloProvider>
  </BrowserRouter>
  );
}
export default App;


