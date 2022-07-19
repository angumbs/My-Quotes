import Header from "../components/Header"
import Footer from "../components/Footer"
import QuoteIntroList from '../components/quotes/QuoteIntroList'
import QuoteStats from '../components/quotes/QuoteStats';
import QuoteForm from '../components/quotes/QuoteForm';

function Home() {

  return (
    <>
    <div className="flex flex-col justify-between h-screen">
      <Header />
        <main className='container mx-auto px-3 py-5 pb-12'>
          <QuoteForm />
          <QuoteStats />
          <QuoteIntroList />     
        </main> 
      <Footer />
      </div>
    </>
  )
}

export default Home
