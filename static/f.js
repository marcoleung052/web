document.addEventListener("DOMContentLoaded", () => {
    const gifScreen = document.getElementById("gif-screen");
    const mainContent = document.getElementById("main-content");

    // 設定 GIF 動畫的持續時間 (假設 GIF 長度為 2 秒)
    const gifDuration = 2000; // 2 秒

    // GIF 播放結束後顯示主頁內容
    setTimeout(() => {
        gifScreen.style.display = "none"; // 隱藏 GIF 畫面
        mainContent.classList.remove("hidden"); // 顯示主頁
    }, gifDuration);
});

window.addEventListener('load', () => {
  setTimeout(() => {
    const audio = document.getElementById('background-audio');
    audio.play().catch((error) => {
      console.warn('自動播放失敗，可能是瀏覽器限制:', error);
    });
  }, 2000); // 延遲兩秒
});

document.addEventListener('DOMContentLoaded', () => {
    const chatButton = document.getElementById('chat-button');
    const chatBox = document.getElementById('chat-box');
    const chatButtonImg = document.getElementById('chat-button-img');
    const sendButton = document.getElementById('send-button');
    const chatContent = document.getElementById('chat-content');
    const userMessage = document.getElementById('user-message');
  
    let isChatOpen = false;
    let isDragging = false;
    let idleTimer = null;
    let idleStage = 1;
  
    // 切換按鈕與聊天框
    const toggleChat = () => {
      isChatOpen = !isChatOpen;
      chatButton.style.display = isChatOpen ? 'none' : 'flex';
      chatBox.style.display = isChatOpen ? 'flex' : 'none';
    };
  
    chatButton.addEventListener('dblclick', toggleChat);
    chatBox.addEventListener('dblclick', toggleChat);
  
     // 拖曳功能
  const makeDraggable = (element) => {
    let offsetX = 0;
    let offsetY = 0;

    element.addEventListener('mousedown', (e) => {
      isDragging = true;
      offsetX = e.clientX - element.getBoundingClientRect().left;
      offsetY = e.clientY - element.getBoundingClientRect().top;

      // 拖曳開始，切換為 chat2 並停止計時
      chatButtonImg.src = 'static/chat2.jpg';
      clearInterval(idleTimer); // 停止任何圖片切換
    });

    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
        element.style.left = `${e.clientX - offsetX}px`;
        element.style.top = `${e.clientY - offsetY}px`;
      }
    });

    document.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;

        // 拖曳結束，恢復為 chat1 並重新開始計時
        chatButtonImg.src = 'static/chat1.jpg';
        idleStage = 1; // 重置狀態
        resetIdleTimer();
      }
    });
  };

  makeDraggable(chatButton);
  makeDraggable(chatBox);

  // 定時更換圖片
  const changeIdleImage = () => {
    if (!isDragging) {
      if (idleStage === 1) {
        idleStage = 3; // 從 chat1 切換到 chat3
        chatButtonImg.src = 'static/chat3.jpg';
        resetIdleTimer(); // 再次計時
      } else if (idleStage === 3) {
        idleStage = 4; // 從 chat3 切換到 chat4
        chatButtonImg.src = 'static/chat4.jpg';
        clearInterval(idleTimer); // 停止計時，保持在 chat4
      }
    }
  };

  // 重置計時器
  const resetIdleTimer = () => {
    clearInterval(idleTimer); // 清除舊的計時器
    idleTimer = setInterval(changeIdleImage, 5000); // 每 5 秒執行一次圖片切換
  };

  resetIdleTimer();
  
    // 聊天功能
    const sendMessage = () => {
      const userText = userMessage.value.trim();
      if (userText) {
        const userMessageDiv = document.createElement('div');
        userMessageDiv.classList.add('message');
        userMessageDiv.innerHTML = `<img src="static/User.jpg" alt="User" class="message-icon">${userText}`;
        chatContent.appendChild(userMessageDiv);
    
        userMessage.value = '';
    
        // 根據用戶的輸入決定要顯示什麼內容
        setTimeout(() => {
          const gokuMessageDiv = document.createElement('div');
          gokuMessageDiv.classList.add('message', 'goku');
    
          // 檢查用戶輸入的特定內容
          if (userText === "back") {
            // 如果用戶輸入 "back"，顯示打架的 GIF 圖片
            gokuMessageDiv.innerHTML = `<img src="static/chat1.jpg" alt="Goku" class="message-icon"><img src="static/back.gif" alt="Fight" class="message-gif">`;
          }
          else if (userText === "blue") {
            gokuMessageDiv.innerHTML = `<img src="static/chat1.jpg" alt="Goku" class="message-icon"><img src="static/blue.gif" alt="Laugh" class="message-gif">`;
          }
          else if (userText === "foot") {
            gokuMessageDiv.innerHTML = `<img src="static/chat1.jpg" alt="Goku" class="message-icon"><img src="static/foot.gif" alt="Laugh" class="message-gif">`;
          }
          else if (userText === "jump") {
            gokuMessageDiv.innerHTML = `<img src="static/chat1.jpg" alt="Goku" class="message-icon"><img src="static/jump.gif.webp" alt="Laugh" class="message-gif">`;
          }
          else if (userText === "jumpfoot") {
            gokuMessageDiv.innerHTML = `<img src="static/chat1.jpg" alt="Goku" class="message-icon"><img src="static/jumpfoot.gif" alt="Laugh" class="message-gif">`;
          }
          else if (userText === "move") {
            gokuMessageDiv.innerHTML = `<img src="static/chat1.jpg" alt="Goku" class="message-icon"><img src="static/move.gif.webp" alt="Laugh" class="message-gif">`;
          }
          else if (userText === "run") {
            gokuMessageDiv.innerHTML = `<img src="static/chat1.jpg" alt="Goku" class="message-icon"><img src="static/run.gif" alt="Laugh" class="message-gif">`;
          }
          else if (userText === "sun") {
            gokuMessageDiv.innerHTML = `<img src="static/chat1.jpg" alt="Goku" class="message-icon"><img src="static/sun.gif.webp" alt="Laugh" class="message-gif">`;
          }
          else if (userText === "eb") {
            gokuMessageDiv.innerHTML = `<img src="static/chat1.jpg" alt="Goku" class="message-icon"><img src="static/元氣彈.gif" alt="Laugh" class="message-gif">`;
          }
          else if (userText === "air") {
            gokuMessageDiv.innerHTML = `<img src="static/chat1.jpg" alt="Goku" class="message-icon"><img src="static/運氣.gif" alt="Laugh" class="message-gif">`;
          }
          else if (userText === "boom") {
            gokuMessageDiv.innerHTML = `<img src="static/chat1.jpg" alt="Goku" class="message-icon"><img src="static/龜派氣功1.gif" alt="Laugh" class="message-gif">`;
          }
          else {
            // 否則顯示 "這是個好問題呢！"
            gokuMessageDiv.innerHTML = `<img src="static/chat1.jpg" alt="Goku" class="message-icon">這是個好問題呢！`;
          }
    
          chatContent.appendChild(gokuMessageDiv);
    
          chatContent.scrollTop = chatContent.scrollHeight;
        }, 1000);
      }
    };
    
    
    
    
  
    sendButton.addEventListener('click', sendMessage);
    userMessage.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  });

  $( function() {
    $( "#accord" ).accordion();
  } );
  

