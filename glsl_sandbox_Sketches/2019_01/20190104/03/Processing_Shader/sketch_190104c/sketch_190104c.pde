/* 02_フルスクリーンで実行する */

PShader shader;

void setup() {
  fullScreen(P2D);      
}

void draw() {
 
  shader = loadShader("shader.frag");                        
  shader.set("resolution", float(width), float(height));
  shader.set("time", millis() / 200.0); 
  shader(shader);
  rect(0,0,width,height);                                 
}



/*　画像保存のコード（引用）　*/

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
