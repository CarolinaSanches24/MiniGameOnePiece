function mouseClicked(){
  
  if(mouseX>=x && mouseX<=(x+w)&& mouseY>=y && mouseY<=(y+h)){
     tela = 2
     }
  
  
  // Ação do botão Jogo 2
   if(mouseX>=x && mouseX<=(x+w)&& mouseY>=y+50 && mouseY<=(y+50+h)){
     tela = 3
     } 
   //   Ação do botão Voltar -> Volta para Menu
  if(tela!="menu"){
  if(mouseX>=x+50 && mouseX<=(x+w-50)&& mouseY>=y+230 && mouseY<=(y+230+h)){
     tela = 1
     }
    
   
  }
  if(tela==3){
  if(mouseX>=x+20 && mouseX<=(x+w-50)&& mouseY>=y+300 && mouseY<=(y+400+h)){
     tela = 1
     }
    
   
  }
}