// import "./App.css";

function InlineStyle() {
    const styles = {
        backgroundColor: 'lightblue',
        padding: '16px',
        borderRadius: '10px'
    };
  return (
    <div style={styles}>
      <h2 style={{ color: 'darkblue' }}>Inline styling example</h2>
    </div>
  );
}

export default InlineStyle;
