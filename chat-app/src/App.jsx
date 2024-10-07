import Chat1Guy from './components/Chat1guy/chat1guy';
import './App.css';

const App = () => {
  return (
    <div className="app">
      {/* Hiển thị sidebar */}
      <Chat1Guy />
      {/* Nội dung chính */}
      <div className="main-content">
        {/* Nội dung chính của ứng dụng */}
      </div>
    </div>
  );
};

export default App;
