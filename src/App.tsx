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
      <main className='container flex-column'>
        <Registration />
        <Cards />
        <Demo />
        <Features />
        <ToolsDescription />
        <Tools />
      </main>
    </Layout>
  );
}

export default App;
