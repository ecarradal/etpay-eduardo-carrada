import Layout from './components/layout';
import './App.css';
import Registration from './components/registration';
import Cards from './components/cards';
import Demo from './components/demo';
import Features from './components/features';
import Tools from './components/tools';
import ToolsDescription from './components/toolsDescription';

function App() {
  return (
    <Layout>
      <main className='container flex-column justify-center align-center'>
        <div className='container registration-container'>
          <Registration />
          <Cards />
        </div>
        <Demo />
        <Features />
        <div className='container tools-info'>
          <ToolsDescription />
          <Tools />
        </div>
      </main>
    </Layout>
  );
}

export default App;
