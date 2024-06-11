import './App.css';

function Button(props){
  return(
    <button>{props.name}</button>
  )
}

function Component(props){
  return(
    <div className={props.class}>
    <h1>{props.head}</h1>
    <p>{props.body}</p>
    <button>{props.btn}</button>
    </div>
  )
}


function App() {
  return (
    <>
    <nav>
      <span>My Portfolio</span>
    <Button name="Home" />
    <Button name="About" />
    <Button name="Services" />
    <Button name="Contact" />
    </nav>

    <div id='hero'></div>

    <Component class="about" head="About Me" body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam explicabo, mollitia cupiditate doloribus delectus temporibus. Corporis, doloribus quibusdam. Aspernatur eveniet perspiciatis officia maiores consectetur velit voluptas minus esse reprehenderit cum deleniti dolores non provident enim sed ratione earum optio similique corrupti repellat voluptatibus, ut, fugit a. Deleniti et id corrupti necessitatibus maiores ab blanditiis fugit, asperiores dolor, omnis, aspernatur porro nemo enim totam vero nulla vitae. Rerum, hic? Quos, ea!" btn="More..."/>

    <Component class="services" head="Services" body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam explicabo, mollitia cupiditate doloribus delectus temporibus. Corporis, doloribus quibusdam. Aspernatur eveniet perspiciatis officia maiores consectetur velit voluptas minus esse reprehenderit cum deleniti dolores non provident enim sed ratione earum optio similique corrupti repellat voluptatibus, ut, fugit a. Deleniti et id corrupti necessitatibus maiores ab blanditiis fugit, asperiores dolor, omnis, aspernatur porro nemo enim totam vero nulla vitae. Rerum, hic? Quos, ea!" btn="More..."/>
    
    <footer>Copyright 2024 &copyright Public</footer>
    </>    
  );
}

export default App;
