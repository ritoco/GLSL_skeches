//gifAnimationライブラリを読み込む
//import gifAnimation.*;

// GifMakerクラスを呼ぶ
//GifMaker gifExport;



PShader shader;

void setup() {
  fullScreen(P2D);   
// size(300,300,P2D);
//  frameRate(30); // 30fpsでアニメーションする

  /*GIFアニメ出力の設定
  gifExport = new GifMaker(this, "export.gif"); // GifMakerオブジェクトを作る、第2引数にファイル名
  gifExport.setRepeat(0); // エンドレス再生
  gifExport.setQuality(10); // クオリティ(デフォルト10)
  gifExport.setDelay(15); // アニメーションの間隔を20ms(50fps)に
  */
}

void draw() {
 
  shader = loadShader("shader.frag");                        
  shader.set("resolution", float(width), float(height));
  shader.set("time", millis() / 900.0); 
  shader(shader);
  rect(0,0,width,height);         
  
    /*GIFアニメ出力用のコード
  // 30fps * 3、つまり丸5秒録画する
  if(frameCount <= 30*3.0){
    gifExport.addFrame(); // フレームを追加
  } else {
    gifExport.finish(); // 終了してファイル保存
  }
  */
}



//画像保存のコード（引用）　

// ファイル名の連番で利用
int count = 1;

void keyPressed() {

  // Pのキーが入力された時に保存
  if(key == 'p' || key == 'P') {

    // デスクトップのパスを取得
    String path  = System.getProperty("user.home") + "/Desktop/" + count + ".png";

    // 保存
    save(path);

    // 番号を加算
    count++;

    // ログ
    println("screen saved." + path); 
  }
}
