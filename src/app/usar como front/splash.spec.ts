.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  text-align: center;
  gap: 12px;
  position: relative;
  overflow: hidden;
  animation: fadeIn 1.5s ease-in-out;
}

.logo {
  width: 350px;
  max-width: 80vw;
  margin-bottom: 20px;
  display: block;
  animation: logoFloat 1.5s ease-in-out;
}

h1 {
  font-size: 45px;
  margin: 0;
  color: #1a1a1a;
  line-height: 1.1;
}

h2 {
  font-size: 30px;
  letter-spacing: 4px;
  color: #777;
  margin: 4px 0 0;
  line-height: 1.1;
}

.footer {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 8px;
  color: #999;
  font-size: 12px;
  white-space: nowrap;
}

.footer img.small {
  width: 35px;
  height: auto;
  display: block;
}

/* ENTRADA */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* LOGO */
@keyframes logoFloat {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}