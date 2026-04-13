.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  background: white;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
}

.logo {
  width: 100px;
  max-width: 100%;
  display: block;
}

h1 {
  font-size: 22px;
  margin: 0;
  color: #1a1a1a;
}

.subtitle {
  font-size: 14px;
  color: #555;
  margin: 0;
}

.subtitle.success {
  color: #1a1a1a;
  font-weight: 500;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 260px;
}

input {
  height: 42px;
  border-radius: 8px;
  border: 1px solid #ddd;
  padding: 0 12px;
  font-size: 14px;
  box-sizing: border-box;
}

input:focus {
  outline: none;
  border-color: #000;
}

.btn {
  height: 45px;
  border: none;
  border-radius: 8px;
  background: #000;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
}

.btn:hover {
  background: #222;
}

.back {
  margin-top: 10px;
  background: none;
  border: none;
  color: #777;
  cursor: pointer;
  font-size: 14px;
}

.back:hover {
  color: #1a1a1a;
}

.error-message {
  margin: 0;
  text-align: left;
  font-size: 12px;
  color: #b42318;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
