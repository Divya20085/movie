import MovieCard from "./component/moviecard";
import MyNavbar from "./component/Navbar";

const App = () => {
  return (
    <div>
      <MyNavbar />

      <main className="p-3">
        <div className="row">
          <div className="col-4">
            <MovieCard title="Premalu - (2024)" image="https://www.filmibeat.com/img/popcorn/movie_posters/premalu-20231226093347-22407.jpg" desc="Premalu ( transl. Love Stories) is a 2024 Indian Malayalam -language romantic comedy film directed by Girish A. D. and produced by Bhavana Studios, in the company of Fahadh Faasil and Friends and Working Class Hero." />
          </div>
          <div className="col-4">
            <MovieCard title="Dada - (2023)" image="https://tse2.mm.bing.net/th?id=OIP.xKskknV1vH55Qi9a4hRJyAHaJQ&pid=Api&P=0&h=180" desc="Dada (transl. Father) is Indian Tamil-language coming-of-age romantic comedy drama film directed by Ganesh K.It stars Kavin and Aparna Das in the lead roles, while K. Bhagyaraj, Aishwariyaa Bhaskaran and VTV Ganesh play supporting roles." />
          </div>
          <div className="col-4">
            <MovieCard title="Love Today - (2022)" image="https://tse1.mm.bing.net/th?id=OIP.tgrp44Y9FyjtLIOZkeeBEAHaJX&pid=Api&P=0&h=180" desc="Love Today is a 2022 Indian Tamil-language romantic comedy film directed and produced by Pradeep Ranganathan. The film stars Pradeep,alongside Ivana. It is an adaptation of Pradeep's own short film App(a) Lock." />
          </div>
        </div>
      </main>

    </div>
  )
}

export default App
