
let isFused = false; // 判斷是否進入融合狀態

        function handleImageClick(imageNumber) {
            const image1 = document.getElementById('image1');
            const image2 = document.getElementById('image2');
            const image3 = document.getElementById('image3');
            const text = document.getElementById('text1');

            if (!isFused) {
                // 點擊圖1或圖2進行融合
                image1.style.transform = 'translateX(625px)'; // 圖1向右移動
                image2.style.transform = 'translateX(-625px)'; // 圖2向左移動
                text.style.display = 'none'; // 隱藏文字

                // 等待動畫完成後進行切換
                setTimeout(() => {
                    image1.style.display = 'none'; // 隱藏圖1
                    image2.style.display = 'none'; // 隱藏圖2
                    image3.style.display = 'block'; // 顯示圖3
                    isFused = true; // 更新狀態
                }, 1000);
            } else if (imageNumber === 3) {
                // 點擊圖3恢復初始狀態
                image1.style.transform = 'translateX(0)'; // 還原圖1位置
                image2.style.transform = 'translateX(0)'; // 還原圖2位置
                image1.style.display = 'block'; // 顯示圖1
                image2.style.display = 'block'; // 顯示圖2
                image3.style.display = 'none'; // 隱藏圖3
                text1.style.display = 'block'; // 顯示文字
                isFused = false; // 重置狀態
            }
        }

let isVideoPlaying = false; // 判斷影片是否正在播放

        function handleClick() {
            const image = document.getElementById('image');
            const video = document.getElementById('video');
            const text = document.getElementById('text');

            if (!isVideoPlaying) {
                // 切換到影片和閃爍文字
                image.style.display = 'none'; // 隱藏圖片
                video.style.display = 'block'; // 顯示影片
                text.classList.add('blink'); // 開始閃爍
                video.play(); // 播放影片

                // 當影片播放完畢，恢復為圖片狀態
                video.onended = function () {
                    video.style.display = 'none'; // 隱藏影片
                    image.style.display = 'block'; // 顯示圖片
                    text.classList.remove('blink'); // 停止閃爍
                    isVideoPlaying = false; // 重置狀態
                    
                };

                isVideoPlaying = true; // 更新影片播放狀態
            } else {
                // 單擊時恢復文字
                text.textContent = "點擊圖像播放影片"; // 恢復文字
                text.classList.remove('blink'); // 停止閃爍
            }
        }

// 添加點擊事件處理
document.addEventListener('DOMContentLoaded', () => {
  const leftArea = document.getElementById('left-area');
  const rightArea = document.getElementById('right-area');
  const leftImg = document.getElementById('left-img');

  // 初始化狀態
  let isLeftVisible = true;

  // 左圖點擊事件
  leftImg.addEventListener('click', () => {
      if (isLeftVisible) {
          // 左圖消失，右空間顯示圖片
          leftArea.classList.remove('image-area');
          leftArea.classList.add('space-area');
          leftImg.classList.add('hidden');

          rightArea.classList.remove('space-area');
          rightArea.classList.add('image-area');

          // 動態生成右圖
          const rightImg = document.createElement('img');
          rightImg.src = "static/瞬間轉移.jpeg";
          rightImg.alt = "右圖";
          rightImg.id = "right-img";
          rightImg.classList.add('toggle-img');
          rightArea.appendChild(rightImg);

          isLeftVisible = false;

          // 綁定右圖點擊事件
          rightImg.addEventListener('click', () => {
              // 右圖消失，左空間顯示圖片
              rightArea.classList.add('space-area');
              rightArea.classList.remove('image-area');
              rightArea.innerHTML = ''; // 清空右區域內容

              leftArea.classList.add('image-area');
              leftArea.classList.remove('space-area');
              leftImg.classList.remove('hidden');

              isLeftVisible = true;
          });
      }
  });
});
const mainImage = document.getElementById('main-image');
const circle = document.getElementById('circle');
const imageContainer = document.getElementById('image-container');

let clickCount = 0;

// 設定圖片切換
const originalImage = "static/元氣彈.jpeg"; // 原本的圖片
const secondImage = "static/丟元氣彈.gif"; // 點擊10次後切換的圖片

// 點擊事件
imageContainer.addEventListener('click', () => {
    clickCount++;

    // 顯示圓形
    circle.style.display = 'block';
    const newSize = clickCount * 30; // 每次點擊讓圓形變大
    circle.style.width = `${newSize}px`;
    circle.style.height = `${newSize}px`;

    // 點擊10次後切換圖片
    if (clickCount === 10) {
        mainImage.src = secondImage;
        circle.style.display = 'none'; // 隱藏圓形
        clickCount = 0;

        // 4秒後恢復原本圖片
        setTimeout(() => {
            mainImage.src = originalImage;
        }, 4000);
    }
});

const toggleImage = document.getElementById('toggle-image');
const toggleText = document.getElementById('toggle-text');

// 初始狀態
let isFlipped = false;

// 點擊事件
toggleImage.addEventListener('click', () => {
    if (isFlipped) {
        // 回到原圖與黑色文字
        toggleImage.src = 'static/悟空.png';
        toggleText.style.color = 'black';
        toggleImage.style.transform = 'rotateY(0deg)';
    } else {
        // 變更為另一張圖片與紅色文字
        toggleImage.src = 'static/界王拳.png';
        toggleText.style.color = 'red';
        toggleImage.style.transform = 'rotateY(180deg)';
    }

    // 切換狀態
    isFlipped = !isFlipped;
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
            gokuMessageDiv.innerHTML = `<img src="static/chat1.jpg" alt="Goku" class="message-icon"><img src="static/龜派氣功.gif" alt="Laugh" class="message-gif">`;
          }
          else if (userText === "boom!") {
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
  

