const fs = require('fs');
const path = require('path');

// ダミー画像の生成
const generateDummyImage = (width, height) => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  // 背景色を設定
  ctx.fillStyle = '#f3f4f6';
  ctx.fillRect(0, 0, width, height);
  
  // テキストを追加
  ctx.fillStyle = '#9ca3af';
  ctx.font = '14px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('ダミー画像', width/2, height/2);
  
  return canvas.toDataURL();
};

// 画像を保存
const saveImage = (dataUrl, filepath) => {
  const base64Data = dataUrl.replace(/^data:image\/png;base64,/, '');
  fs.writeFileSync(filepath, base64Data, 'base64');
};

// グループ画像の生成
for (let i = 1; i <= 5; i++) {
  const imageData = generateDummyImage(400, 300);
  saveImage(imageData, path.join(__dirname, '../public/groups', `group${i}.jpg`));
}

// パートナー企業ロゴの生成
for (let i = 1; i <= 3; i++) {
  const imageData = generateDummyImage(200, 100);
  saveImage(imageData, path.join(__dirname, '../public/partners', `partner${i}.png`));
} 