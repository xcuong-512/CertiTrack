import { useState, useEffect } from 'react';
import axios from 'axios'; // <-- 1. Import axios
import './App.css';

function App() {
  // 2. Tạo một state để lưu tin nhắn từ API
  const [message, setMessage] = useState('Đang tải...');

  // 3. Dùng useEffect để gọi API khi component tải lần đầu
  useEffect(() => {
    // Gọi đến API của Laravel (đảm bảo nó đang chạy ở cổng 8000)
    axios.get('http://localhost:8000/api/test')
      .then(response => {
        // 4. Nếu thành công, cập nhật tin nhắn
        setMessage(response.data.message);
      })
      .catch(error => {
        // 5. Nếu thất bại, báo lỗi
        console.error('Lỗi kết nối API!', error);
        setMessage('Kết nối API thất bại! (Kiểm tra Console F12)');
      });
  }, []); // Mảng rỗng [] nghĩa là "chỉ chạy 1 lần"

  // 6. Hiển thị tin nhắn ra màn hình
  return (
    <div className="App">
      <h1>Tin nhắn từ Backend (Laravel):</h1>
      <p className="read-the-docs">
        {message}
      </p>
    </div>
  );
}

export default App;