import {MyForm} from '@vg-poc/ui'

export function App() {
  return (
 <div style={{width:'250px',margin:'auto'}}> 
      <header style={styles.header}>
      <h1 style={styles.title}>This is a React App</h1>
    </header>
 <MyForm/>
 </div>
  );
}


const styles = {
  header: {
    backgroundColor: "#f8f9fa",
    padding: "16px 24px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  title: {
    margin: 0,
    fontSize: "24px",
    color: "#333",
  },
};
export default App;
